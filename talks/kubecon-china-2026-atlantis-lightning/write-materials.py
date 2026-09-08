"""Chinese rehearsal material; English slides. Count Han characters separately."""
import json,re
from pathlib import Path
slides=json.loads(Path('narration.json').read_text())
# Approximate spoken syllables for technical terms, not English word counts.
syllables={'rui':1,'atlantis':4,'terraform':3,'opentofu':4,'git':1,'webhook':2,'apply':2,'api':3,'ci':2,'github':2,'gitlab':2,'gitea':3,'forgejo':3,'gitee':2,'provider':3,'helm':1,'kubernetes':4,'terragrunt':3,'conftest':2,'infracost':3,'grand':1,'ballroom':2,'one':1,'t':1,'chart':1}
def counts(t):
    han=len(re.findall(r'[\u3400-\u9fff]',t))
    terms=re.findall(r'[A-Za-z]+',t)
    assert all(w.lower() in syllables for w in terms)
    return han,len(terms),han+sum(syllables[w.lower()] for w in terms)
def stamp(s):return f'{s//60}:{s%60:02}'
planned=sum(n['seconds'] for n in slides)
script=['# 中文演讲稿 / Chinese speaker notes','','English slides · 中文讲述 · Rui Chen · 2026-09-08',f'目标 {stamp(planned)}；硬上限 5:00。只朗读正文，提示与技术参考不朗读。','']
timing=['# 中文讲述计时','','| 页 | 时间 | 累计 | 汉字 | 英文词项 | 估算发音单位 |','| --- | ---: | --- | ---: | ---: | ---: |']
cues=['# 上台提示卡','',f'{stamp(planned)} 目标；5:00 停止。无现场演示。','']
outline=['# Live narrative','','Ten English slides with Chinese narration. The ten-slide reference deck is separate.','']
elapsed=0;shorts=[]
for i,n in enumerate(slides,1):
    end=elapsed+n['seconds'];t=n['narration']+n['transition'];han,terms,units=counts(t)
    script += [f'## {i} — {n["title"]}','',f'目标：{stamp(elapsed)}–{stamp(end)}（{n["seconds"]} 秒）',f'提示：{n["cue"]}','',n['narration'],'','转场：'+(n['transition'] or ('保持结尾页。' if i==len(slides) else '说完正文后换页。')),'','超时可删：'+(' '.join(n['emergency_skip']) or '无；保留这页核心内容。'),'','技术参考（不朗读）：'+n['reference_notes'],'']
    timing.append(f'| {i} | {n["seconds"]}s | {stamp(elapsed)}–{stamp(end)} | {han} | {terms} | {units} |')
    cues += [f'{i}. **{stamp(elapsed)} — {n["title"]}** {n["cue"]}','']
    outline += [f'## {i}. {n["title"]}','',n['purpose'],'',f'Target: {stamp(elapsed)}–{stamp(end)}.','']
    short=t
    for cut in n['emergency_skip']:
        assert short.count(cut)==1
        short=short.replace(cut,'')
    shorts.append(short);elapsed=end
full=''.join(n['narration']+n['transition'] for n in slides);han,terms,units=counts(full);short_units=counts(''.join(shorts))[2]
script += ['## 紧急四分钟版','','同样十页，只删以下句子，不加快语速。','']
for i,n in enumerate(slides,1):
    for cut in n['emergency_skip']:script.append(f'- 第 {i} 页：删去「{cut}」')
script += ['','### 四分钟版全文','']
for i,t in enumerate(shorts,1):script += [f'**第 {i} 页** {t}','']
script += [f'全文：{han} 个汉字，{terms} 个英文词项。约 {units} 个发音单位。',f'计划：{stamp(planned)}，安全余量 {300-planned} 秒。中文稿不使用英文空格分词或英文 wpm 估时。','']
timing += ['',f'**{han} 个汉字 + {terms} 个英文词项；约 {units} 个发音单位；{stamp(planned)} 计划；{300-planned} 秒余量。**','','估时方法：汉字按一个发音单位；英文术语按 write-materials.py 中公开的近似音节表加权。专有名词读法有差异，此模型不是实测。',f'- 每分钟 240 个单位：正文约 {round(units/4)} 秒，计划内约 {round(planned-units/4)} 秒用于停顿、指图与换页。',f'- 较慢的每分钟 220 个单位：正文约 {round(units*60/220)} 秒，加 15 秒停顿约 {stamp(round(units*60/220+15))}。',f'- 紧急版：{short_units} 个单位，每分钟 220 个单位加 15 秒停顿，约 {stamp(round(short_units*60/220+15))}。','','用秒表朗读校准。第 9 页后在 4:25 进入结尾；落后就删标记句子，不展开完整兼容列表。','']
for filename,lines in [('script.md',script),('timing.md',timing),('speaker-cues.md',cues),('outline.md',outline)]:Path(filename).write_text('\n'.join(lines))
print(f'{han} Han characters, {terms} English tokens, {units} weighted units; {stamp(planned)} planned; emergency {short_units} units')
