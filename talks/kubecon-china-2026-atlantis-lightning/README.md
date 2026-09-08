# Atlantis — KubeCon China 2026 Lightning Talk

Rui Chen · September 8, 2026 · Shanghai. Ten English slides with Chinese narration, using the official 16:9 event template. Target: 4:55 within a five-minute slot; actual rehearsal may run shorter.

## Present

- [slidesv2.pdf](slidesv2.pdf) — polished ten-slide PDF, embedded fonts
- [slides.pptx](slides.pptx) — editable deck with embedded Chinese speaker notes
- [script.md](script.md) — full Chinese narration, cues and emergency four-minute version
- [timing.md](timing.md), [speaker-cues.md](speaker-cues.md)
- [Previews](slides-preview/) and [contact sheet](contact-sheet.png)
- [Sources](sources.md), [validation](validation.md), [rehearsal](rehearsal.md)

Project Pavilion: **T-10 · Tuesday 10:30–14:30 · Grand Ballroom I**. The closing slide includes project documentation, source, the official community agenda/calendar link and one homepage QR.

## Build and render

Run from this directory with Node.js, npm, Python 3, uv, LibreOffice and Poppler:

```sh
npm ci --ignore-scripts
python3 write-materials.py
npm run build
npm run render
npm run validate
bash contact-sheet.sh
swift check-qr.swift assets/qr.png slides-preview/10.png
```

The contact sheet uses ImageMagick; QR validation uses macOS Vision. The existing optional renderer is reused with `docker start atlantis-slide-renderer-v2` followed by `ATLANTIS_RENDER_CONTAINER=atlantis-slide-renderer-v2 npm run render`. It mounts the repository at `/talk`.

[slides.mjs](slides.mjs) is the editable source. [narration.json](narration.json) owns the Chinese notes and timing. The importer retains the original [conference template](assets/conference-template.pptx), its masters, layouts and artwork. Arial is used for visible English text; LibreOffice embeds its Liberation Sans substitute in the PDF. Chinese notes are Unicode text and require a normal CJK-capable presenter environment; they are not printed on the slide PDF.

The current PDF is slidesv2.pdf. The original v2 bytes are preserved as slides-reference-10.pdf. The five-slide alternative remains slidesv3.pdf, with slidesv3.pptx, slidesv3.mjs, narration-v3.json and script-v3.md. No live demo, animation, web-loaded asset or extra QR is required.

## Preserved reference versions

The preceding polished ten-slide deck is preserved as [slides-reference-10.pptx](slides-reference-10.pptx), [PDF](slides-reference-10.pdf), [source](slides-reference-10.mjs), [English script](script-reference-10.md) and narration-reference-10.json. To regenerate, run `node slides-reference-10.mjs`. The earlier slides-expanded files remain unchanged. These are preserved reference versions. Rui selected the ten-slide v2 for this iteration.

## Validation limits

All ten slide images were inspected. PPTX structure, template preservation, notes, PDF fonts, hyperlinks and QR decoding were checked. Native PowerPoint automation remains blocked by macOS; LibreOffice opening/export was tested. Actual speaking time and the venue projector require a normal rehearsal/AV check. Organizer upload route remains unconfirmed; no upload was performed.

The workflow continues to use the installed pptx, pptx-deck-context, pptx-visual-assets and giving-presentations skills. PptxGenJS 4.0.1, qrcode 1.5.4 and importer defusedxml 0.7.1 remain pinned; no new build dependency was introduced.

The supplied organizer guidance says three to five slides. This ten-slide version follows Rui’s later explicit choice; the five-slide v3 remains available if that limit is enforced. No organizer approval or submission is claimed.
