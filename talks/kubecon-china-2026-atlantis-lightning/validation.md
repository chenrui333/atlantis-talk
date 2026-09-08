# Final v2 validation — English slides, Chinese narration

Validated September 7, 2026. Rui selected the ten-slide v2 after evaluating the five-slide v3. This report supersedes prior live-deck selections.

- Ten static 16:9 slides; source slides.mjs, editable slides.pptx, final slidesv2.pdf.
- All ten slide notes match narration.json and script.md, including Chinese narration and non-spoken references. Package validation passed.
- Template-baselined PPTX skill validation passed. All 24 master/layout/theme package parts match the official-template v2 baseline.
- LibreOffice opened the PPTX and exported ten PDF pages. English slide fonts are embedded Liberation Sans, substituted for Arial.
- Rendered all ten PNGs. Eight unchanged PNGs match the previously individually inspected v2 renders byte-for-byte; changed slides 5 and 10 were inspected individually. The complete contact sheet was inspected again as a sequence.
- Slide 5 separates public/self-hosted Git integration from IaC execution and cloud-provider examples. Slide 10 adds Grand Ballroom I to the existing pavilion line. Neither has visible clipping, overlap or a footer collision. The remaining eight slide faces are unchanged.
- Native editable text/shapes retained; no diagram screenshots, animations or live demo.
- One QR only. Source and rendered closing QR decode to https://www.runatlantis.io/.
- PPTX hyperlinks returned HTTP 200; PDF link annotations retain the survey, draft proposal, docs, source, community document and pavilion directory links.
- Chinese narration: 771 Han characters, 41 English terms, approximately 884 pronunciation units. Planned 4:55 including pauses; shorter natural delivery is fine. Timing is modeled, not a measured recording. Emergency cuts and complete short script are provided.
- Current technical claims retain source IDs. China-relevant provider distinctions are CN01–CN03. PR #5296 rechecked: open, draft, unmerged; no upcoming release date claimed.
- Original v2 is preserved as slides-reference-10.pptx/pdf/mjs plus English notes/script. The separate five-slide v3 remains slidesv3.pdf/pptx/mjs with narration-v3.json and script-v3.md. Earlier expanded artifacts are untouched.

## Limits

Native PowerPoint automation remains denied by macOS; LibreOffice opening/export is tested. Native presenter-mode Chinese glyph rendering, physical projection and Rui’s actual speaking time still need the normal laptop rehearsal. No organizer upload occurred. The supplied 3–5-slide guidance remains a constraint; ten slides follow Rui’s explicit later selection, not verified organizer approval. The five-slide v3 is available as an alternative.

Cover follow-up: added @chenrui333 beside the speaker identity and linked the GitHub profile. Regenerated PPTX/PDF/previews; inspected the title slide; no wrapping or skyline collision. Package and template-baselined validation passed, and the new link survives PDF export. Other slide visuals and Chinese narration are unchanged.
