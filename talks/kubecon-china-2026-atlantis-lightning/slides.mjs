import pptxgen from 'pptxgenjs';
import QRCode from 'qrcode';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const deck = new pptxgen();
deck.layout='LAYOUT_WIDE'; deck.author='Rui Chen'; deck.subject='Five-minute CNCF Project Lightning Talk';
deck.title='Project Lightning Talk: Atlantis: Terraform Pull Request Automation for Cloud Native Teams';
deck.company='Atlantis'; deck.lang='en-US';
deck.theme={headFontFace:'Arial',bodyFontFace:'Arial',lang:'en-US'};
const C={bg:'FFFFFF',panel:'EAF1F3',line:'A6BAC1',text:'083E4F',muted:'405965',blue:'086679',amber:'926413'};
const W=13.333333,H=7.5, M=.62; const notes=JSON.parse(fs.readFileSync('narration.json','utf8'));
const shape=deck.ShapeType;
function text(s,t,x,y,w,h,size=24,color=C.text,more={}) {s.addText(t,{x,y,w,h,fontFace:'Arial',fontSize:size,color,margin:0,breakLine:false,vertAnchor:'mid',...more});}
function box(s,x,y,w,h,fill=C.panel,line=fill){s.addShape(shape.rect,{x,y,w,h,fill:{color:fill},line:{color:line,width:1}});}
function line(s,x,y,w,h=0,color=C.line,arrow=false){s.addShape(shape.line,{x,y,w,h,line:{color,width:2,beginArrowType:'none',endArrowType:arrow?'triangle':'none'}});}
function pill(s,t,x,y,w,color=C.blue){box(s,x,y,w,.48,C.panel);text(s,t,x+.13,y,w-.26,.48,18,color,{bold:true});}
function node(s,t,sub,x,y,w=3.1,h=1.22){box(s,x,y,w,h);text(s,t,x+.22,y+.15,w-.44,.43,27,C.text,{bold:true});if(sub)text(s,sub,x+.22,y+.68,w-.44,.36,19,C.muted);}
function dot(s,x,y,r=.13,color=C.blue){s.addShape(shape.ellipse,{x:x-r,y:y-r,w:r*2,h:r*2,fill:{color},line:{color}});}
function label(s,title,sub,x,y,w=3.2,align='left'){
 text(s,title,x,y,w,.5,28,C.text,{bold:true,align});
 if(sub)text(s,sub,x,y+.65,w,.8,22,C.muted,{align});
}
function logo(s,x,y,w){s.addImage({path:'assets/atlantis-icon.svg',altText:'Official Atlantis project logo',x,y,w,h:w});}
function base(i,label,title){
 const s=deck.addSlide();
 if(i!==1){
  text(s,label.toUpperCase(),M,.34,11,.35,16,C.blue,{charSpacing:2,bold:true});
  if(title)text(s,title,M,1.02,12.1,1.16,36,C.text,{bold:true});
  text(s,String(i).padStart(2,'0'),12.23,7.12,.48,.26,12,C.muted,{align:'right'});
 }
 return s;
}
function addNotes(s,i){
 const n=notes[i-1];
 const start=notes.slice(0,i-1).reduce((sum,n)=>sum+n.seconds,0);
 const clock=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,'0')}`;
 const chars=(n.narration+n.transition).match(/[\u3400-\u9fff]/g)?.length || 0;
 s.addNotes(`Target: ${clock(start)}–${clock(start+n.seconds)} (${n.seconds} seconds)\nChinese characters: ${chars}; see timing.md for English terms\n提示: ${n.cue}\n\n${n.narration}\n\nTransition: ${n.transition || (i===notes.length?'Hold the closing slide.':'Advance after the final sentence.')}\n\nEmergency cuts:\n${n.emergency_skip.join('\n') || 'None; retain this slide’s narration.'}\n\nReference notes (not spoken):\n${n.reference_notes || 'See sources.md for factual references.'}`);
}
// 1 — Accepted title is retained verbatim (line breaks only).
{
const s=base(1,'Project Lightning Talk:');
text(s,'PROJECT LIGHTNING TALK:',M,1.52,9,.36,18,'FFFFFF',{bold:true,charSpacing:1});
text(s,'Atlantis:',M,2.03,8.7,.97,60,'FFFFFF',{bold:true});
logo(s,7.5,1.71,1.25);
text(s,'Terraform Pull Request Automation\nfor Cloud Native Teams',M,3.17,9.0,1.12,31,'FFFFFF',{bold:true});
text(s,[{text:'Rui Chen  ·  Atlantis Maintainer  ·  '},{text:'@chenrui333',options:{hyperlink:{url:'https://github.com/chenrui333'},underline:false}}],M,4.59,10.5,.42,24,'FFFFFF');
text(s,'Shanghai, China  ·  September 8, 2026',M,5.11,9,.33,18,'FFFFFF');
addNotes(s,1);
}

// 2 — One loop: Atlantis coordinates; the IaC tool owns execution.
{
const s=base(2,'Plan → Review → Apply',notes[1].title);
node(s,'Pull request','Code + plan review',.8,2.65,3.65,1.35);
node(s,'Atlantis','PR orchestration',8.3,2.65,4.15,1.35);
line(s,4.65,3.05,3.45,0,C.blue,true);
text(s,'Webhook · apply request',4.55,2.5,3.65,.45,21,C.blue,{align:'center'});
line(s,8.1,3.9,-3.45,0,C.blue,true);
text(s,'Plan + apply results',4.55,3.35,3.65,.45,21,C.blue,{align:'center'});
text(s,'Configured requirements',8.3,4.18,4.15,.4,22,C.blue,{align:'center'});
line(s,10.38,4.78,0,.38,C.blue,true);
text(s,'Terraform / OpenTofu',8.2,5.25,4.35,.5,26,C.text,{bold:true,align:'center'});
text(s,'Providers · state · infrastructure',8.08,5.9,4.6,.4,21,C.muted,{align:'center'});
line(s,1.0,4.35,0,1.48,C.line);
text(s,'Results stay with\nthe pull request.',1.3,4.78,6.2,1.05,31,C.blue,{bold:true});
addNotes(s,2);
}
// 3 — Native conversation timeline, not a screenshot.
{
const s=base(3,'Engineer experience',notes[2].title);
text(s,'infra: resize production database',.88,2.35,11.8,.5,28,C.text,{bold:true});
line(s,1.08,3.2,0,2.33,C.line);
const rows=[['Atlantis','Plan: 0 to add, 1 to change, 0 to destroy'],['Reviewer','Approved'],['Rui','atlantis apply'],['Atlantis','Apply complete.']];
rows.forEach((r,i)=>{const y=3.02+i*.77;dot(s,1.08,y+.22,.11);text(s,r[0],1.48,y,1.8,.45,22,C.muted);if(i===0||i===2)box(s,3.35,y-.08,8.95,.58);text(s,r[1],3.55,y,8.6,.45,25,C.text,{bold:i===0||i===2});});
text(s,'Illustrative PR · approval requirement configured · apply before merge',.88,6.18,11.7,.35,18,C.muted);addNotes(s,3);
}
// 4 — Connected operating model: proposal, governed execution, visibility.
{
const s=base(4,'Platform teams',notes[3].title);
const rows=[['Collaborative','Developers propose'],['Controlled','Platform rules govern execution'],['Visible','Plan + result beside the code']];
rows.forEach((r,i)=>{const y=2.65+i*1.16;dot(s,1.08,y+.3,.12);if(i<2)line(s,1.08,y+.5,0,.71,C.blue,true);text(s,r[0],1.55,y,3.55,.55,29,C.blue,{bold:true});text(s,r[1],5.35,y,7.0,.6,28,C.text);});
addNotes(s,4);
}
// 5 — Separate Git integration from infrastructure-provider execution.
{
const s=base(5,'Core integrations',notes[4].title);
label(s,'Git providers','GitHub · GitLab',.8,3.08,3.2,'center');
node(s,'Atlantis','PR orchestration',5.05,2.98,3.25,1.4);
label(s,'IaC execution','Terraform / OpenTofu',9.3,3.08,3.25,'center');
line(s,4.05,3.7,.78,0,C.blue,true);line(s,8.52,3.7,.56,0,C.blue,true);
text(s,'Public or self-hosted',.8,5.35,3.5,.65,23,C.blue,{bold:true});
line(s,10.9,4.65,0,.4,C.blue,true);
text(s,'Cloud providers',5.0,5.2,7.5,.45,24,C.blue,{bold:true,align:'right'});
text(s,'e.g. Alibaba Cloud · Tencent Cloud',5.0,5.87,7.5,.5,26,C.text,{align:'right'});
addNotes(s,5);
}
// 6 — Platform tooling enriches the review, with two examples.
{
const s=base(6,'Workflow extensions',notes[5].title);
label(s,'Plan','Review input',.8,3.35,2.65,'center');
label(s,'Policy','e.g. Conftest',4.95,2.45,3.15,'center');
label(s,'Cost','e.g. Infracost',4.95,4.35,3.15,'center');
label(s,'Review','Added context',9.65,3.35,2.85,'center');
line(s,3.55,3.92,.65,0,C.blue);line(s,4.2,2.85,0,1.9,C.blue);line(s,4.2,2.85,.48,0,C.blue,true);line(s,4.2,4.75,.48,0,C.blue,true);
line(s,8.3,2.85,.6,0,C.blue);line(s,8.3,4.75,.6,0,C.blue);line(s,8.9,2.85,0,1.9,C.blue);line(s,8.9,3.92,.5,0,C.blue,true);
text(s,'Custom workflows compose your own tooling.',.8,6.1,11.8,.45,27,C.blue,{bold:true,align:'center'});addNotes(s,6);
}
// 7 — The hosting choice branches from one self-hosted service.
{
const s=base(7,'Deployment models');
text(s,'Atlantis is self-hosted.\nKubernetes is optional.',M,1.02,12.1,1.4,36,C.text,{bold:true});
text(s,'Atlantis service',4.58,2.75,4.15,.5,28,C.blue,{bold:true,align:'center'});
line(s,6.66,3.45,0,.5,C.blue);line(s,2.64,3.95,8.04,0,C.blue);
const choices=[['Kubernetes','Official Helm chart'],['Container','Official image'],['Server / VM','Atlantis binary']];
choices.forEach((r,i)=>{const x=.74+i*4.02;line(s,x+1.9,3.95,0,.48,C.blue,true);label(s,r[0],r[1],x,4.75,3.8,'center');});
addNotes(s,7);
}
// 8 — Historical evidence, without unsupported chart percentages.
{
const s=base(8,'Atlantis User Survey · 2024 · n=354',notes[7].title);
text(s,'354',.8,2.9,3.6,1.4,90,C.blue,{bold:true});
text(s,'survey responses',.8,4.45,3.7,.5,27,C.muted);
line(s,4.62,2.75,0,3.0,C.line);
const findings=[['GIT','GitHub leads · GitLab sizeable'],['IaC','Terraform dominant\nAbout half also use Terragrunt']];
findings.forEach((r,i)=>{const y=2.8+i*1.52;text(s,r[0],5.08,y,7.4,.35,22,C.blue,{bold:true});text(s,r[1],5.08,y+.48,7.15,.95,27,C.text);});
text(s,'Official results: runatlantis.io/blog',.8,6.2,11.6,.4,21,C.muted,{hyperlink:{url:'https://www.runatlantis.io/blog/2024/april-2024-survey-results'}});addNotes(s,8);
}
// 9 — A visual version boundary, not a roadmap catalog.
{
const s=base(9,'Project direction',notes[8].title);
text(s,'A clearer compatibility contract',.8,2.55,11.7,.75,36,C.text,{bold:true});
text(s,'Breaking changes',.8,3.95,5.0,.65,31,C.blue,{bold:true});
line(s,5.65,4.3,1.35,0,C.blue,true);
text(s,'Major version',7.4,3.95,5.05,.65,31,C.blue,{bold:true});
text(s,'Planning discussion · not released',.8,5.4,11.7,.5,26,C.text,{bold:true});
text(s,'Draft proposal #5296 · release tracking #2496',.8,6.15,11.7,.4,21,C.muted,{hyperlink:{url:'https://github.com/runatlantis/atlantis/pull/5296'}});addNotes(s,9);
}
// 10 — One QR, with concise linked discovery information.
{
const s=base(10,'Open source · CNCF Sandbox · Apache 2.0');
text(s,'Infrastructure is code.',M,1.05,12,1.0,44,C.text,{bold:true});
text(s,'Plan it.\nReview it.\nApply it.',M,2.42,5.7,2.75,49,C.blue,{bold:true});
text(s,'From the pull request.',M,5.56,5.8,.65,30,C.text,{bold:true});
line(s,6.15,2.45,0,3.88,C.line);
const community='https://docs.google.com/document/d/1EzseHmT4Zarj-_7MO8ud5mHByIJGIHS7JdoNNK9ZckU/edit';
text(s,'GET STARTED',6.5,2.45,3.2,.3,18,C.blue,{bold:true});
text(s,'runatlantis.io/docs',6.5,2.88,3.6,.4,23,C.text,{hyperlink:{url:'https://www.runatlantis.io/docs'}});
text(s,'SOURCE',6.5,3.52,3.2,.3,18,C.blue,{bold:true});
text(s,'github.com/\nrunatlantis/atlantis',6.5,3.9,3.65,.8,22,C.text,{hyperlink:{url:'https://github.com/runatlantis/atlantis'}});
await QRCode.toFile('assets/qr.png','https://www.runatlantis.io/',{width:900,margin:4,errorCorrectionLevel:'M',color:{dark:'#000000',light:'#FFFFFF'}});
s.addImage({path:'assets/qr.png',altText:'QR code for https://www.runatlantis.io/',x:10.23,y:2.38,w:2.38,h:2.38,hyperlink:{url:'https://www.runatlantis.io/'}});
text(s,'COMMUNITY',6.5,4.93,6.0,.3,18,C.blue,{bold:true});
text(s,'Biweekly · Wed 16:00 UTC',6.5,5.3,6.0,.35,22,C.text);
text(s,'Agenda / notes + add to calendar',6.5,5.73,6.1,.35,21,C.blue,{hyperlink:{url:community}});
text(s,'Project Pavilion · T-10 · Tue 10:30–14:30 · Grand Ballroom I',M,6.36,11.8,.3,19,C.muted,{hyperlink:{url:'https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/features-add-ons/project-engagement/#project-table-directory'}});addNotes(s,10);
}
await deck.writeFile({fileName:'slides.pptx'});
execFileSync('uv',['run','--with','defusedxml==0.7.1','python','apply-template.py'],{stdio:'inherit'});
console.log(`Generated ${notes.length} slides.`);
