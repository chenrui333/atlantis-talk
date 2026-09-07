"""Preserve organizer namespaces, masters and artwork; retain editable content.

The organizer's 10-inch canvas is uniformly scaled to the generated 13⅓-inch
canvas. The source template is never modified. Only reachable parts are kept.
"""
import json
import sys
import posixpath
import zipfile
from defusedxml.minidom import parseString

deck_path = sys.argv[1] if len(sys.argv) > 1 else 'slides.pptx'
notes_path = sys.argv[2] if len(sys.argv) > 2 else 'narration.json'

P = 'http://schemas.openxmlformats.org/presentationml/2006/main'
R = 'http://schemas.openxmlformats.org/package/2006/relationships'
CT = 'http://schemas.openxmlformats.org/package/2006/content-types'

def elements(root, ns, local):
    return list(root.getElementsByTagNameNS(ns, local))

def encode(doc):
    return doc.toxml(encoding='utf-8')

def target_of(owner, target):
    return posixpath.normpath(posixpath.join(posixpath.dirname(owner), target)).lstrip('/')

def rels_for(part):
    return posixpath.join(posixpath.dirname(part), '_rels', posixpath.basename(part) + '.rels')

with zipfile.ZipFile(deck_path) as z:
    output = {n: z.read(n) for n in z.namelist() if not n.endswith('/')}
with zipfile.ZipFile('assets/conference-template.pptx') as z:
    template = {n: z.read(n) for n in z.namelist() if not n.endswith('/')}

selected = [n for n in template if any(n.startswith('ppt/' + p + '/')
            for p in ['slideMasters', 'slideLayouts', 'theme', 'media'])]
mapping = {n: posixpath.join(posixpath.dirname(n), 'conference_' + posixpath.basename(n)) for n in selected}
source_size = elements(parseString(template['ppt/presentation.xml']), P, 'sldSz')[0]
target_size = elements(parseString(output['ppt/presentation.xml']), P, 'sldSz')[0]
scale = int(target_size.getAttribute('cx')) / int(source_size.getAttribute('cx'))
assert abs(scale - int(target_size.getAttribute('cy')) / int(source_size.getAttribute('cy'))) < .00001

for old, new in mapping.items():
    data = template[old]
    if old.endswith('.rels'):
        doc = parseString(data)
        owner = old.replace('/_rels/', '/')[:-5]
        for rel in elements(doc, R, 'Relationship'):
            if rel.getAttribute('TargetMode') != 'External':
                target = target_of(owner, rel.getAttribute('Target'))
                assert target in mapping, (old, target)
                rel.setAttribute('Target', posixpath.relpath(mapping[target], posixpath.dirname(mapping[owner])))
        data = encode(doc)
    elif old.endswith('.xml') and ('slideLayouts/' in old or 'slideMasters/' in old):
        doc = parseString(data)
        dims = {'x','y','cx','cy','lIns','rIns','tIns','bIns','marL','marR','indent','defTabSz'}
        for element in doc.getElementsByTagName('*'):
            local = element.localName
            for attr, value in list(element.attributes.items()):
                should_scale = attr in dims or (attr == 'w' and local == 'ln') or (attr == 'sz' and local in {'rPr','defRPr','endParaRPr'}) or (attr == 'val' and local in {'spcPts','buSzPts'})
                if should_scale:
                    element.setAttribute(attr, str(round(int(value) * scale)))
        data = encode(doc)
    output[new] = data

content_types = parseString(output['[Content_Types].xml'])
known = {c.getAttribute('PartName') or c.getAttribute('Extension') for c in content_types.documentElement.childNodes if c.nodeType == c.ELEMENT_NODE}
for entry in parseString(template['[Content_Types].xml']).documentElement.childNodes:
    if entry.nodeType != entry.ELEMENT_NODE:
        continue
    item = content_types.importNode(entry, deep=True)
    name = item.getAttribute('PartName')
    if name:
        if name.lstrip('/') not in mapping:
            continue
        item.setAttribute('PartName', '/' + mapping[name.lstrip('/')])
    key = item.getAttribute('PartName') or item.getAttribute('Extension')
    if key not in known:
        content_types.documentElement.appendChild(item)
        known.add(key)

rels = parseString(output['ppt/_rels/presentation.xml.rels'])
for rel in elements(rels, R, 'Relationship'):
    if rel.getAttribute('Type').endswith('/slideMaster'):
        rel.setAttribute('Target', 'slideMasters/conference_slideMaster1.xml')
output['ppt/_rels/presentation.xml.rels'] = encode(rels)

for i, layout in enumerate([2] + [5] * (len(json.load(open(notes_path))) - 1), 1):
    part = f'ppt/slides/slide{i}.xml'
    doc = parseString(output[part])
    common = elements(doc, P, 'cSld')[0]
    for bg in elements(common, P, 'bg'):
        common.removeChild(bg)
    output[part] = encode(doc)
    part = f'ppt/slides/_rels/slide{i}.xml.rels'
    doc = parseString(output[part])
    for rel in elements(doc, R, 'Relationship'):
        if rel.getAttribute('Type').endswith('/slideLayout'):
            rel.setAttribute('Target', f'../slideLayouts/conference_slideLayout{layout}.xml')
    output[part] = encode(doc)

# Traverse the finalized package graph from the root. This removes the old
# generated master/layout (duplicate IDs) and any unreferenced template themes.
reachable = {'[Content_Types].xml'}
def visit(part):
    if part in reachable:
        return
    assert part in output, part
    reachable.add(part)
    relpart = rels_for(part) if part else '_rels/.rels'
    if relpart in output:
        reachable.add(relpart)
        for rel in elements(parseString(output[relpart]), R, 'Relationship'):
            if rel.getAttribute('TargetMode') != 'External':
                visit(target_of(part, rel.getAttribute('Target')))
reachable.add('_rels/.rels')
for rel in elements(parseString(output['_rels/.rels']), R, 'Relationship'):
    if rel.getAttribute('TargetMode') != 'External':
        visit(target_of('', rel.getAttribute('Target')))
for entry in elements(content_types, CT, 'Override'):
    if entry.getAttribute('PartName').lstrip('/') not in reachable:
        entry.parentNode.removeChild(entry)
output['[Content_Types].xml'] = encode(content_types)
with zipfile.ZipFile(deck_path, 'w', zipfile.ZIP_DEFLATED) as z:
    for name in sorted(reachable):
        z.writestr(name, output[name])
print('Applied official masters; preserved namespaces; removed unreachable parts.')
