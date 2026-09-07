"""Check presentation packaging and note synchronization; visual review is separate."""
import json,re,zipfile,posixpath,xml.etree.ElementTree as ET
from pathlib import Path
narration=json.loads(Path('narration.json').read_text())
script=Path('script.md').read_text()
ns={'p':'http://schemas.openxmlformats.org/presentationml/2006/main','a':'http://schemas.openxmlformats.org/drawingml/2006/main'}
with zipfile.ZipFile('slides.pptx') as z:
 slides=sorted((n for n in z.namelist() if re.fullmatch(r'ppt/slides/slide\d+\.xml',n)),key=lambda n:int(re.search(r'(\d+)\.xml',n).group(1)))
 assert len(slides)==len(narration)==10
 size=ET.fromstring(z.read('ppt/presentation.xml')).find('p:sldSz',ns)
 assert abs(int(size.get('cx'))/int(size.get('cy'))-16/9)<.0001
 for i,n in enumerate(narration,1):
  note=ET.fromstring(z.read(f'ppt/notesSlides/notesSlide{i}.xml'))
  words=' '.join(t.text or '' for t in note.findall('.//a:t',ns))
  assert n['narration'] in words,f'narration mismatch on slide {i}'
  assert n['transition'] in words
  assert n['narration'] in script and n['transition'] in script, f'script mismatch on slide {i}'
 for name in z.namelist():
  if name.endswith('.rels'):
   for rel in ET.fromstring(z.read(name)):
    if rel.get('TargetMode')=='External':
     assert rel.get('Type').endswith('/hyperlink')
     assert rel.get('Target').startswith('https://'),rel.attrib
 assert 'ppt/slideMasters/conference_slideMaster1.xml' in z.namelist()
 for i, layout in enumerate([2]+[5]*9,1):
  rels=ET.fromstring(z.read(f'ppt/slides/_rels/slide{i}.xml.rels'))
  assert any(r.get('Target') == f'../slideLayouts/conference_slideLayout{layout}.xml' for r in rels)
 for name in z.namelist():
  if name.endswith('.rels'):
   owner=name.replace('/_rels/','/')[:-5] if name!='_rels/.rels' else ''
   for rel in ET.fromstring(z.read(name)):
    if rel.get('TargetMode')!='External':
     target=posixpath.normpath(posixpath.join(posixpath.dirname(owner),rel.get('Target')))
     assert target in z.namelist(), (name,target)
 for part in slides:
  slide_text=' '.join(t.text or '' for t in ET.fromstring(z.read(part)).findall('.//a:t',ns))
  assert not re.search(r'\bxxx\b|lorem|ipsum|\bTODO\b|\[insert',slide_text,re.I),part
 assert any(n.startswith('ppt/media/') for n in z.namelist())
 print('PASS: 10 slides, 16:9, official template layouts, embedded media, matching notes, HTTPS-only external hyperlinks.')
print(f"Spoken words: {sum(len((n['narration']+' '+n['transition']).split()) for n in narration)}")
print('PDF, visual overflow, font substitution and QR decoding require separate rendering checks.')
