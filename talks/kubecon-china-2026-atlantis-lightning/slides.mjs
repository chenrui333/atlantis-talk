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
 const words=`${n.narration} ${n.transition}`.trim().split(/\s+/).length;
 s.addNotes(`Target: ${clock(start)}–${clock(start+n.seconds)} (${n.seconds} seconds)\nSpoken words: ${words}\nCue: ${n.cue}\n\n${n.narration}\n\nTransition: ${n.transition || 'Hold the closing slide.'}\n\nEmergency cuts:\n${n.emergency_skip.join('\n')}`);
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
// 2 — Native vector nodes and explicit directional loop.
{
const s=base(2,'The mental model','The pull request becomes the workflow.');
node(s,'Git pull request','Developer opens a change',.7,2.56,4.0,1.3);
node(s,'Atlantis','Runs Terraform / OpenTofu',8.0,2.56,4.6,1.3);
line(s,4.83,2.9,3.0,0,C.blue,true);text(s,'1  Webhook → plan',4.92,2.4,2.95,.4,20,C.blue,{align:'center'});
line(s,7.82,3.56,-3.0,0,C.blue,true);text(s,'2  Plan in PR',4.95,3.73,2.9,.4,20,C.blue,{align:'center'});
box(s,.7,4.45,6.55,1.18);text(s,'3  Review → approve\nComment: atlantis apply',.92,4.63,6.13,.72,25,C.text,{bold:true});
line(s,7.39,5.04,1.0,0,C.blue,false);line(s,8.4,5.04,0,-.95,C.blue,true);
line(s,10.35,3.99,0,1.24,C.blue,true);text(s,'4  Apply',10.57,4.55,1.9,.42,22,C.blue);
node(s,'Cloud infrastructure','Provider APIs',8.0,5.39,4.6,1.16);
text(s,'Self-hosted service. Review stays in Git.',.7,6.0,6.5,.42,23,C.muted);addNotes(s,2);
}
// 3 — A deliberate reconstruction, not a screenshot.
{
const s=base(3,'Engineer experience','One change. One PR conversation.');
box(s,.72,2.35,11.9,4.0);text(s,'infra: resize production database',1.02,2.6,10.9,.42,27,C.text,{bold:true});
line(s,1.02,3.25,11.25);
const rows=[['Atlantis','Plan: 0 to add, 1 to change, 0 to destroy',C.blue],['Reviewer','Approved',C.text],['Rui','atlantis apply',C.blue],['Atlantis','Apply complete.',C.text]];
rows.forEach((r,i)=>{let y=3.52+i*.65;text(s,r[0],1.04,y,1.65,.4,21,C.muted);text(s,r[1],3.0,y,9.2,.4,25,r[2],{bold:i===0||i===2});});
text(s,'Illustrative PR · approval requirement configured · apply before merge',1.02,6.02,11.3,.30,18,C.muted);addNotes(s,3);
}
// 4 — Current integrations and separately dated first-party survey evidence.
{
const s=base(4,'Ecosystem + community','Atlantis in the IaC ecosystem');
text(s,'CURRENT INTEGRATIONS',.7,2.14,7.0,.3,17,C.blue,{bold:true});
box(s,.7,2.42,7.05,1.00);
text(s,'Git providers',.9,2.51,6.65,.32,23,C.text,{bold:true});
text(s,'GitHub · GitLab · Gitea / Forgejo\nBitbucket Cloud / Server · Azure DevOps',.9,2.90,6.65,.44,18,C.muted);
line(s,4.22,3.46,0,.25,C.blue,true);
box(s,.7,3.78,7.05,.72);
text(s,'Atlantis',.9,3.94,2.1,.36,27,C.text,{bold:true});
text(s,'Plan → review → apply',3.09,3.97,4.4,.32,23,C.blue,{bold:true});
line(s,4.22,4.55,0,.25,C.blue,true);
box(s,.7,4.86,7.05,.99);
text(s,'IaC execution: Terraform / OpenTofu',.9,4.99,6.65,.37,24,C.text,{bold:true});
text(s,'Optional: Terragrunt via custom workflows',.9,5.49,6.65,.29,19,C.muted);
line(s,4.22,5.89,0,.24,C.blue,true);
text(s,'Infrastructure · via provider APIs',.9,6.19,6.65,.36,24,C.text,{bold:true,align:'center'});
box(s,8.12,2.13,4.5,4.56);
text(s,'Atlantis User Survey · 2024 · n=354',8.3,2.25,4.14,.3,17,C.blue,{bold:true});
text(s,'354',8.3,2.69,4.1,.65,54,C.text,{bold:true});
text(s,'survey responses',8.3,3.36,4.1,.32,23,C.muted);
text(s,'GIT',8.3,3.80,4.1,.25,18,C.blue,{bold:true});
text(s,'GitHub leads · GitLab sizeable\nBitbucket + others',8.3,4.10,4.1,.55,19,C.text);
text(s,'IaC',8.3,4.73,4.1,.25,18,C.blue,{bold:true});
text(s,'Terraform dominant\nAbout half also use Terragrunt\nOpenTofu gaining ground',8.3,5.06,4.1,.78,19,C.text);
text(s,'RUNTIME',8.3,5.94,4.1,.25,18,C.blue,{bold:true});
text(s,'Kubernetes / AWS common',8.3,6.25,4.1,.26,19,C.text);
addNotes(s,4);
}
// 5 — QR is generated locally with a four-module quiet zone.
{
const s=base(5,'Open source · CNCF Sandbox · Apache 2.0');
text(s,'Infrastructure is code.',M,1.05,12,1.0,44,C.text,{bold:true});
text(s,'Plan it.\nReview it.\nApply it.',M,2.38,8.1,2.75,51,C.blue,{bold:true,breakLine:false});
text(s,'From the pull request.',M,5.32,8.3,.65,33,C.text,{bold:true});
await QRCode.toFile('assets/qr.png','https://www.runatlantis.io/',{width:900,margin:4,errorCorrectionLevel:'M',color:{dark:'#000000',light:'#FFFFFF'}});
s.addImage({path:'assets/qr.png',altText:'QR code for https://www.runatlantis.io/',x:9.12,y:2.44,w:3.3,h:3.3,hyperlink:{url:'https://www.runatlantis.io/'}});
text(s,'runatlantis.io',8.88,5.94,3.78,.43,27,C.blue,{align:'center',bold:true,hyperlink:{url:'https://www.runatlantis.io/'}});
text(s,'github.com/runatlantis/atlantis',M,6.08,8.5,.38,22,C.muted,{hyperlink:{url:'https://github.com/runatlantis/atlantis'}});addNotes(s,5);
}
await deck.writeFile({fileName:'slides.pptx'});
execFileSync('uv',['run','--with','defusedxml==0.7.1','python','apply-template.py'],{stdio:'inherit'});
console.log(`Generated ${notes.length} slides.`);
