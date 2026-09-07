# Atlantis — KubeCon China 2026 Project Lightning Talk

Five-minute project talk by Rui Chen, Atlantis Maintainer. **September 8, 2026, 11:35–11:40 China Standard Time**, Shanghai International Convention Center, 5F room 5B + C.

The ten-slide deck uses the organizer's official 2026 PowerPoint template: its Shanghai skyline cover and white content layouts. All slides have been rendered, visually inspected and polished. The deck is ready for rehearsal and presentation; organizer submission has not been performed.

## Present and rehearse

- [PowerPoint](slides.pptx): editable text and diagrams; full presenter notes
- [PDF safety copy](slides.pdf): embedded fonts, offline visuals and clickable project links
- [Slide previews](slides-preview/): one PNG per slide
- [Full script and emergency version](script.md)
- [Timing](timing.md), [speaker cues](speaker-cues.md), [stage checklist](stage-checklist.md)
- [Narrative outline](outline.md), [design lock](summary.md), [sources](sources.md), [validation](validation.md)
- [Rehearsal practice and final critique](rehearsal.md)

**4:35 target · 5:00 hard limit · 25-second margin.** The full script has 489 spoken words including transitions. The exact emergency cuts produce 456 words, approximately 3:45 at 130 words/minute including pauses. No live demo, animation or planned Q&A. Timing is modeled; rehearse aloud with a stopwatch.

## Regenerate

Requirements: Node.js, npm, Python 3 and uv. The namespace-preserving template importer uses defusedxml 0.7.1 in an isolated uv environment. Run from this directory:

```sh
npm ci --ignore-scripts
python3 write-materials.py
npm run build
npm run validate
```

[slides.mjs](slides.mjs) generates native text, vector diagrams, embedded artwork and notes. [apply-template.py](apply-template.py) imports the official masters, layouts, theme and branding, scaling the template canvas uniformly to the deck's 16:9 canvas. The original template is retained at [assets/conference-template.pptx](assets/conference-template.pptx).

[narration.json](narration.json) is the single source for narration, timing, cues and emergency cuts. Run write-materials.py after editing it. The build embeds these notes automatically.

## Render PDF and previews

With LibreOffice and Poppler (`pdftoppm`, `pdfinfo`) installed:

```sh
npm run render
```

PowerPoint for Mac export is also supported by render.applescript when Apple-event automation is permitted. In this preparation environment macOS denied that permission, so the deck was opened and exported with LibreOffice 7.3.7.2 in an isolated container. The prepared local renderer can be reused:

```sh
docker start atlantis-slide-renderer-v2
ATLANTIS_RENDER_CONTAINER=atlantis-slide-renderer-v2 npm run render
```

That container mounts the repository at `/talk`. It is optional; it is not needed to present the delivered PPTX or PDF. PNG previews are 1921 × 1080. The PDF embeds Liberation Sans, the renderer's metrically compatible Arial substitute; editable PPTX text specifies Arial. No font download is needed during presentation.

On macOS, test the generated QR and its final slide with:

```sh
swift check-qr.swift assets/qr.png slides-preview/10.png
```

## Provenance and limitations

Official Atlantis SVGs come from CNCF artwork. The conference template was supplied by the organizers and provided by Rui; its original branding is preserved. See [sources](sources.md#a01--artwork-provenance). Text and diagrams remain editable; original conference artwork is embedded in its supplied form.

PptxGenJS 4.0.1 and qrcode 1.5.4 are pinned. npm audit reports image-size parser advisories inherited through PptxGenJS. This fixed-asset build uses retained official SVGs and locally generated PNG, not the affected ICNS/JXL/HEIF formats. Do not treat the generator as an arbitrary-image upload service.

The unresolved conference details are acceptance of ten slides against the earlier 3–5-slide guidance, the schedule's Chinese language label (this deck and script are English), and the final organizer upload route. See stage-checklist.md. Present from the supplied files after the normal laptop/projector check.

## Skill-guided QA

The four requested skills were installed locally with skills.sh. Provenance and hashes are recorded in the root skills-lock.json; downloaded skill payloads stay untracked. giving-presentations uses its last original revision because current upstream reorganized that skill. They supplement the official template; none supplies a replacement theme.

From the repository root, after restoring the workspace skills:

```sh
npx skills experimental_install
uv run --with defusedxml==0.7.1 --with lxml==6.0.2 python .agents/skills/pptx/scripts/office/validate.py talks/kubecon-china-2026-atlantis-lightning/slides.pptx --original talks/kubecon-china-2026-atlantis-lightning/assets/conference-template.pptx
```

The primary PPTX skill's validator checks against the original template. Then render every slide using the commands above and inspect the full-size PNGs. See validation.md for the final result and specific slide checks.

The ten-slide introduction follows Rui’s revised direction. It exceeds the organizer’s earlier 3–5-slide guidance; this departure still needs organizer acceptance. The official template and five-minute time limit remain unchanged.
