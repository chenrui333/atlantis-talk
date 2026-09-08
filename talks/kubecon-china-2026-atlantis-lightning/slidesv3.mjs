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
const W=13.333333,H=7.5, M=.62; const notes=JSON.parse(fs.readFileSync('narration-v3.json','utf8'));
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
 s.addNotes(`目标时间: ${clock(start)}–${clock(start+n.seconds)} (${n.seconds} seconds)\nChinese characters: ${chars} (English terms counted separately in timing.md)\n提示: ${n.cue}\n\n${n.narration}\n\n转场: ${n.transition || (i===notes.length?'Hold the closing slide.':'Advance after the final sentence.')}\n\n超时可删:\n${n.emergency_skip.join('\n') || 'None; retain this slide’s narration.'}\n\n技术参考（不朗读）:\n${n.reference_notes || 'See sources.md for factual references.'}`);
}
// 1 — Accepted title is retained verbatim (line breaks only).
{
const s=base(1,'Project Lightning Talk:');
text(s,'PROJECT LIGHTNING TALK:',M,1.52,9,.36,18,'FFFFFF',{bold:true,charSpacing:1});
text(s,'Atlantis:',M,2.03,8.7,.97,60,'FFFFFF',{bold:true});
logo(s,7.5,1.71,1.25);
text(s,'Terraform Pull Request Automation\nfor Cloud Native Teams',M,3.17,9.0,1.12,31,'FFFFFF',{bold:true});
text(s,'Rui Chen  ·  Atlantis Maintainer',M,4.59,9,.42,24,'FFFFFF');
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
// 4 — Integration layers and dated adoption evidence, with two cloud examples.
{
const s=base(4,'Ecosystem + community evidence',notes[3].title);
node(s,'Git providers','Public or self-hosted',.8,2.55,3.0,1.35);
node(s,'Atlantis','PR orchestration',4.55,2.55,3.0,1.35);
line(s,3.95,3.2,.42,0,C.blue,true);
line(s,6.05,4.05,0,.4,C.blue,true);
text(s,'Terraform / OpenTofu',.95,4.58,6.5,.5,29,C.text,{bold:true});
text(s,'Cloud providers',.95,5.18,6.5,.4,23,C.blue,{bold:true});
text(s,'e.g. Alibaba Cloud · Tencent Cloud',.95,5.72,6.5,.4,23,C.muted);
line(s,8.05,2.5,0,3.86,C.line);
text(s,'354',8.45,2.42,4.0,1.0,68,C.blue,{bold:true});
text(s,'survey responses · 2024',8.45,3.48,4.0,.4,22,C.muted);
text(s,'GitHub leads\nGitLab sizeable',8.45,4.18,4.0,.9,25,C.text);
text(s,'About half also\nuse Terragrunt',8.45,5.37,4.0,.9,25,C.text);
text(s,'Atlantis User Survey · 2024 · n=354',.8,6.26,11.7,.25,18,C.muted,{hyperlink:{url:'https://www.runatlantis.io/blog/2024/april-2024-survey-results'}});
addNotes(s,4);
}
// 5 — One QR, with concise linked discovery information.
{
const s=base(5,'Open source · CNCF Sandbox · Apache 2.0');
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
text(s,'Project Pavilion · T-10 · Tue 10:30–14:30 · Grand Ballroom I',M,6.36,11.8,.3,19,C.muted,{hyperlink:{url:'https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/features-add-ons/project-engagement/#project-table-directory'}});addNotes(s,5);
}
await deck.writeFile({fileName:'slidesv3.pptx'});
execFileSync('uv',['run','--with','defusedxml==0.7.1','python','apply-template.py','slidesv3.pptx','narration-v3.json'],{stdio:'inherit'});
console.log(`Generated ${notes.length} slides.`);
