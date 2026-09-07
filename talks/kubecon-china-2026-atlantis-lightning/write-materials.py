"""Generate rehearsal documents from the narration embedded in the deck."""
import json
from pathlib import Path

slides = json.loads(Path('narration.json').read_text())

def stamp(seconds):
    return f'{seconds // 60}:{seconds % 60:02}'

def spoken(slide):
    return ' '.join(filter(None, [slide['narration'], slide['transition']]))

planned = sum(s['seconds'] for s in slides)
total = sum(len(spoken(s).split()) for s in slides)
short_scripts = []
for slide in slides:
    short = slide['narration']
    for sentence in slide['emergency_skip']:
        assert short.count(sentence) == 1, sentence
        short = short.replace(sentence, '').replace('  ', ' ')
    short_scripts.append(' '.join(filter(None, [short.strip(), slide['transition']])))
short_words = sum(len(s.split()) for s in short_scripts)

script = ['# Full script', '', f'English · Rui Chen · September 8, 2026 · Target {stamp(planned)}; hard limit 5:00.', '', 'Speak the narration and transition only. Cues and timing metadata are not spoken.', '']
timing = ['# Timing', '', '| Slide | Target | Cumulative | Spoken words | Pace including pauses |', '| --- | ---: | --- | ---: | ---: |']
cues = ['# Speaker cues', '', f'**{stamp(planned)} target · 5:00 hard stop · No live demo or planned Q&A**', '']
outline = ['# Narrative outline', '', 'Atlantis runs Terraform/OpenTofu plans and applies from pull requests. Every slide reinforces this idea.', '']
elapsed = 0
for i, slide in enumerate(slides, 1):
    end = elapsed + slide['seconds']
    words = len(spoken(slide).split())
    script += [f"## Slide {i} — {slide['title']}", '', f'Target: {stamp(elapsed)}–{stamp(end)} · {slide["seconds"]} seconds · {words} spoken words.', '', f'Cue: {slide["cue"]}', '', slide['narration'], '']
    script += [f'Transition: {slide["transition"]}' if slide['transition'] else ('Transition (not spoken): Hold the closing slide.' if i == len(slides) else 'Transition (not spoken): Advance after the final sentence.'), '', 'Emergency cut: ' + (' '.join(slide['emergency_skip']) if slide['emergency_skip'] else 'None; retain this slide’s narration.'), '']
    timing += [f'| {i} | {slide["seconds"]}s | {stamp(elapsed)}–{stamp(end)} | {words} | {words * 60 / slide["seconds"]:.1f} wpm |']
    cues += [f'{i}. **{stamp(elapsed)} — {slide["title"]}** {slide["cue"]}', f'   Transition: “{slide["transition"]}”' if slide['transition'] else ('   Final line: “From the pull request.”' if i == len(slides) else '   Advance after the final sentence.'), '']
    outline += [f'## {i}. {slide["title"]}', '', slide['purpose'], '', f'Target: {stamp(elapsed)}–{stamp(end)}.', '']
    elapsed = end
script += ['## Emergency 4-minute version', '', 'Use the same ten slides. Skip exactly these sentences; do not speak faster. Keep the definition, full-plan review, configured approvals, dated survey evidence, and final line.', '']
for i, slide in enumerate(slides, 1):
    for sentence in slide['emergency_skip']:
        script += [f'- Slide {i}: Skip “{sentence}”']
script += ['', '### Short script for rehearsal', '']
for i, short in enumerate(short_scripts, 1):
    script += [f'**Slide {i}.** {short}', '']
script += [f'Total words including transitions: **{total}**.', f'Speaking alone at 130–145 wpm: **{stamp(round(total * 60 / 145))}–{stamp(round(total * 60 / 130))}**.', f'Planned duration with pauses: **{stamp(planned)}**. Safety margin: **{300 - planned} seconds**.', f'Emergency: **{short_words} words**, approximately **{stamp(round(short_words * 60 / 130 + 15))}** at 130 wpm with 15 seconds of pauses.', '']
timing += ['', f'**{total} spoken words · {stamp(planned)} planned · {300 - planned} seconds safety margin.**', '', 'Counts include transitions. Cues are not spoken; hyphenated terms count as one word. Release numbers are written as spoken words.', '', f'- 130 wpm: {total * 60 / 130:.1f}s narration + {planned - total * 60 / 130:.1f}s pauses = {stamp(planned)}.', f'- 145 wpm: {total * 60 / 145:.1f}s narration; pause rather than adding material.', f'- 120 wpm: {total * 60 / 120 + 12:.1f}s with 12s pauses, still within five minutes.', '', 'These are estimates, not a recording of Rui rehearsing. Use a stopwatch for the actual rehearsal.', '', '## Rehearsal checkpoints', '', '- By 0:20: definition and problem are complete.', '- By 1:10: the workflow is explained.', '- By 1:50: the PR example is complete.', f'- By {stamp(planned - slides[-1]["seconds"])}: switch to the closing slide.', f'- At {stamp(planned)}: stop speaking; leave the URL and QR visible.', '', 'If behind at 1:50, use the listed emergency cuts. If the host grants only four minutes, rehearse the complete emergency version in script.md.', '', f'Emergency total: {short_words} words; {stamp(round(short_words * 60 / 130 + 15))} at 130 wpm with 15s pauses.', '']
for name, lines in [('script.md', script), ('timing.md', timing), ('speaker-cues.md', cues), ('outline.md', outline)]:
    Path(name).write_text('\n'.join(lines))
print(f'{total} words; emergency {short_words}; target {stamp(planned)}')
