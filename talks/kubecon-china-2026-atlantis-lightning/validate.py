"""Check presentation packaging and note synchronization; visual review is separate."""
import json,re,zipfile,xml.etree.ElementTree as ET
from pathlib import Path
narration=json.loads(Path('narration.json').read_text())
ns={'p':'http://schemas.openxmlformats.org/presentationml/2006/main','a':'http://schemas.openxmlformats.org/drawingml/2006/main'}
with zipfile.ZipFile('slides.pptx') as z:
 slides=sorted((n for n in z.namelist() if re.fullmatch(r'ppt/slides/slide\d+\.xml',n)),key=lambda n:int(re.search(r'(\d+)\.xml',n).group(1)))
 assert len(slides)==len(narration)==5
 size=ET.fromstring(z.read('ppt/presentation.xml')).find('p:sldSz',ns)
 assert abs(int(size.get('cx'))/int(size.get('cy'))-16/9)<.0001
 for i,n in enumerate(narration,1):
  note=ET.fromstring(z.read(f'ppt/notesSlides/notesSlide{i}.xml'))
  words=' '.join(t.text or '' for t in note.findall('.//a:t',ns))
  assert n['narration'] in words,f'narration mismatch on slide {i}'
  assert n['transition'] in words
 for name in z.namelist():
  if name.endswith('.rels'):
   for rel in ET.fromstring(z.read(name)):
    if rel.get('TargetMode')=='External':
     assert rel.get('Type').endswith('/hyperlink')
     assert rel.get('Target').startswith('https://'),rel.attrib
 assert any(n.startswith('ppt/media/') for n in z.namelist())
 print('PASS: 5 slides, 16:9, embedded media, matching notes, HTTPS-only external hyperlinks.')
print(f"Spoken words: {sum(len((n['narration']+' '+n['transition']).split()) for n in narration)}")
print('PDF, visual overflow, font substitution and QR decoding require separate rendering checks.')
