# Atlantis — KubeCon China 2026 Project Lightning Talk

Five-minute project talk by Rui Chen, Atlantis Maintainer. September 8, 2026, 11:35–11:40 China Standard Time, Shanghai International Convention Center, 5F room 5B + C.

**Preparation in progress:** the five-slide content draft is ready. The final deck must use the organizer-provided `China_-_Branded_PowerPoint.pptx`; that attachment is pending. Current slides are an interim design, not the requested final conference-template deliverable. The interim PDF and five PNG previews have been rendered and inspected. Final template application remains pending. This is a content checkpoint; the organizer-template version is still pending.

## Rehearsal

Target **4:35**, hard limit **5:00**, 25-second margin. Script: 554 spoken words including transitions. Exact emergency cuts yield 448 words, approximately 3:42 at 130 words/minute including pauses. No demo, animation or planned Q&A.

- [Full script](script.md)
- [Timing](timing.md)
- [Speaker cues](speaker-cues.md)
- [Outline](outline.md)
- [Sources and conference constraints](sources.md)

## Current artifacts

- [Editable PowerPoint](slides.pptx) with exact narration, timing, word counts and emergency cuts in notes
- [Offline PDF](slides.pdf)
- [Slide previews](slides-preview/)
- [Presentation source](slides.mjs) and [narration source](narration.json)
- [Stage checklist](stage-checklist.md)

## Build

Requirements: Node.js and Python 3. Dependencies are scoped to this directory and pinned in package-lock.json.

```sh
npm ci --ignore-scripts
python3 write-materials.py
npm run build
```

`slides.mjs` is the editable presentation source; `narration.json` is the single source for spoken text and timing. Rebuild rehearsal documents after changing narration. All critical visuals are local.

## Rendering

PowerPoint for Mac export is provided by `render.applescript`, but macOS blocked Apple-event automation in this preparation environment. An isolated LibreOffice 7.3.7.2 renderer successfully exported the interim deck. The prepared renderer can be restarted with `docker start atlantis-slide-renderer-v2`. With it running, use:

```sh
ATLANTIS_RENDER_CONTAINER=atlantis-slide-renderer-v2 npm run render
npm run validate
swift check-qr.swift assets/qr.png slides-preview/05.png
```

The container mounts the repository at `/talk`. A local LibreOffice installation is also supported by render.sh. PDF rendering substitutes and embeds Liberation Sans for Arial. Previews are 1921 × 1080 pixels. These are interim artifacts until the official template is applied.

## Assets and dependency notes

Official Atlantis SVG assets come from CNCF artwork; see [provenance](sources.md#artwork-provenance). The QR points directly to the official homepage. Arial is used for portable editable text; the PDF will be the font-stable safety copy.

PptxGenJS 4.0.1 generates editable native shapes, text and notes; qrcode 1.5.4 generates the local QR. npm audit reports high-severity image-size parser advisories inherited through PptxGenJS; the build uses only the retained official SVGs and locally generated PNG, never arbitrary uploaded images or affected ICNS/JXL/HEIF formats. No compatible patched image-size version was available when checked; no unrelated dependencies were changed.
