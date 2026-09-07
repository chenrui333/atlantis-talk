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
 s.addNotes(`Target: ${clock(start)}–${clock(start+n.seconds)} (${n.seconds} seconds)\nSpoken words: ${words}\nCue: ${n.cue}\n\n${n.narration}\n\nTransition: ${n.transition || (i===notes.length?'Hold the closing slide.':'Advance after the final sentence.')}\n\nEmergency cuts:\n${n.emergency_skip.join('\n')}`);
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

// 2 — Make the original opening problem visible.
{
const s=base(2,'The workflow gap',notes[1].title);
node(s,'Pull request','Code is reviewed',.8,2.8,4.6,1.5);
line(s,5.7,3.55,1.8,0,C.blue,true);
node(s,'Laptop','Someone runs the change',7.85,2.8,4.6,1.5);
text(s,'Which plan?     Who applied it?     What happened?',.8,5.2,11.7,.8,30,C.blue,{bold:true});addNotes(s,2);
}
// 3 — Plan half of the native control loop.
{
const s=base(3,'Plan',notes[2].title);
node(s,'Git pull request','Developer opens a change',.8,2.8,4.5,1.6);
node(s,'Atlantis','Runs Terraform / OpenTofu',8.0,2.8,4.5,1.6);
line(s,5.5,3.15,2.3,0,C.blue,true);text(s,'Webhook',5.4,2.6,2.45,.4,23,C.blue,{align:'center'});
line(s,7.8,4.0,-2.3,0,C.blue,true);text(s,'Plan result',5.4,4.25,2.45,.4,23,C.blue,{align:'center'});
text(s,'Review the code and the plan together.',.8,5.5,11.7,.65,34,C.text,{bold:true});addNotes(s,3);
}
// 4 — Apply half of the native control loop.
{
const s=base(4,'Review → apply',notes[3].title);
node(s,'Pull request','Review + configured approval',.8,2.6,5.4,1.4);
text(s,'atlantis apply',.8,4.45,5.4,.6,34,C.blue,{bold:true});
line(s,6.4,3.3,1.3,0,C.blue,true);
node(s,'Atlantis','Checks requirements; executes',7.9,2.6,4.6,1.4);
line(s,10.2,4.2,0,.6,C.blue,true);
node(s,'Infrastructure','Via provider APIs',7.9,5.0,4.6,1.25);
text(s,'Execution result returns to the PR.',.8,5.7,6.6,.5,27,C.muted);addNotes(s,4);
}
// 3 — A deliberate reconstruction, not a screenshot.
{
const s=base(5,'Engineer experience','One change. One PR conversation.');
box(s,.72,2.35,11.9,4.0);text(s,'infra: resize production database',1.02,2.6,10.9,.42,27,C.text,{bold:true});
line(s,1.02,3.25,11.25);
const rows=[['Atlantis','Plan: 0 to add, 1 to change, 0 to destroy',C.blue],['Reviewer','Approved',C.text],['Rui','atlantis apply',C.blue],['Atlantis','Apply complete.',C.text]];
rows.forEach((r,i)=>{let y=3.52+i*.65;text(s,r[0],1.04,y,1.65,.4,21,C.muted);text(s,r[1],3.0,y,9.2,.4,25,r[2],{bold:i===0||i===2});});
text(s,'Illustrative PR · approval requirement configured · apply before merge',1.02,6.02,11.3,.30,18,C.muted);addNotes(s,5);
}

// 6 — Capability groups, not a plugin or provider catalog.
{
const s=base(6,'Ecosystem integrations',notes[5].title);
const cards=[['Git hosts','GitHub · GitLab\nGitea / Forgejo\nBitbucket\nAzure DevOps'],['IaC execution','Terraform / OpenTofu\n\nTerragrunt via\ncustom workflows'],['Review context','Conftest → policy\nInfracost → costs\n\nOptional integrations']];
cards.forEach((r,i)=>{const x=.7+i*4.06;box(s,x,2.65,3.82,3.25);text(s,r[0],x+.22,2.95,3.38,.5,29,C.text,{bold:true});text(s,r[1],x+.22,3.8,3.38,1.75,22,C.muted);});
text(s,'Shared PR workflow · configurable execution',.7,6.18,11.9,.45,25,C.blue,{bold:true});addNotes(s,6);
}
// 7 — Deployment choices are separate from Terraform/OpenTofu providers.
{
const s=base(7,'Deployment models',notes[6].title);
const cards=[['Kubernetes','Official Helm chart'],['Containers','Official Docker image'],['Server / VM','Run the Atlantis binary']];
cards.forEach((r,i)=>{const x=.7+i*4.06;box(s,x,2.8,3.82,1.85);text(s,r[0],x+.22,3.10,3.38,.5,29,C.text,{bold:true});text(s,r[1],x+.22,3.85,3.38,.4,22,C.muted);});
text(s,'Cloud examples in the docs',.7,5.1,11.8,.4,22,C.muted);
text(s,'AWS Fargate · Google Cloud · Azure',.7,5.7,11.8,.6,32,C.blue,{bold:true});addNotes(s,7);
}
// 8 — Survey evidence stands alone, with the official blog as its source.
{
const s=base(8,'Atlantis User Survey · 2024 · n=354',notes[7].title);
text(s,'354',.8,2.8,3.6,1.3,86,C.blue,{bold:true});
text(s,'survey responses',.8,4.3,3.7,.5,27,C.muted);
const findings=[['GIT','GitHub leads · GitLab sizeable\nBitbucket + others'],['IaC','Terraform dominant\nAbout half also use Terragrunt\nOpenTofu gaining ground'],['DEPLOYMENT','Kubernetes / AWS common']];
findings.forEach((r,i)=>{const y=[2.45,3.7,5.35][i];text(s,r[0],4.9,y,7.4,.3,19,C.blue,{bold:true});text(s,r[1].replaceAll('\\n','\n'),4.9,y+.36,7.45,i===1?1.2:.76,24,C.text);});
text(s,'Official results: runatlantis.io/blog',.8,6.2,11.6,.4,21,C.muted,{hyperlink:{url:'https://www.runatlantis.io/blog/2024/april-2024-survey-results'}});addNotes(s,8);
}
// 9 — Explicitly distinguish the draft 1.0 proposal from a release.
{
const s=base(9,'Project direction',notes[8].title);
text(s,'Planning discussion · not released',.8,2.3,11.7,.5,27,C.blue,{bold:true});
const labels=['Stability','Backwards\ncompatibility','Clearer\nversioning'];
labels.forEach((t,i)=>{const x=.8+i*4.0;box(s,x,3.3,3.75,2.1);text(s,t.replaceAll('\\n','\n'),x+.22,3.6,3.31,1.5,30,C.text,{bold:true});});
text(s,'Draft proposal #5296 · release tracking #2496',.8,6.1,11.7,.45,21,C.muted,{hyperlink:{url:'https://github.com/runatlantis/atlantis/pull/5296'}});addNotes(s,9);
}
// 5 — QR is generated locally with a four-module quiet zone.
{
const s=base(10,'Open source · CNCF Sandbox · Apache 2.0');
text(s,'Infrastructure is code.',M,1.05,12,1.0,44,C.text,{bold:true});
text(s,'Plan it.\nReview it.\nApply it.',M,2.38,8.1,2.75,51,C.blue,{bold:true,breakLine:false});
text(s,'From the pull request.',M,5.32,8.3,.65,33,C.text,{bold:true});
await QRCode.toFile('assets/qr.png','https://www.runatlantis.io/',{width:900,margin:4,errorCorrectionLevel:'M',color:{dark:'#000000',light:'#FFFFFF'}});
s.addImage({path:'assets/qr.png',altText:'QR code for https://www.runatlantis.io/',x:9.12,y:2.44,w:3.3,h:3.3,hyperlink:{url:'https://www.runatlantis.io/'}});
text(s,'runatlantis.io',8.88,5.94,3.78,.43,27,C.blue,{align:'center',bold:true,hyperlink:{url:'https://www.runatlantis.io/'}});
text(s,'github.com/runatlantis/atlantis',M,6.08,8.5,.38,22,C.muted,{hyperlink:{url:'https://github.com/runatlantis/atlantis'}});addNotes(s,10);
}
await deck.writeFile({fileName:'slides.pptx'});
execFileSync('uv',['run','--with','defusedxml==0.7.1','python','apply-template.py'],{stdio:'inherit'});
console.log(`Generated ${notes.length} slides.`);
