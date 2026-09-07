# Final validation — ten-slide introduction

Validated September 7, 2026. This supersedes earlier five-slide and initial ten-slide QA.

- PPTX generation: passed; ten static, 16:9 slides with native editable diagrams and embedded assets.
- Package checks: passed; all ten embedded notes match narration.json and script.md; internal relationships resolve and external hyperlinks use HTTPS.
- Primary PPTX skill validator: passed against the original organizer template.
- Rendering: LibreOffice 7.3.7.2 opened the actual PPTX and exported a ten-page PDF, then all ten pages were rendered to PNG. PDF dimensions are approximately 960 × 540 points.
- Template: original master/layout/theme parts remain intact relative to the preceding template-based deck; original embedded conference media retained. Cover uses the skyline layout; remaining slides use the official white content layout.
- Fonts: PPTX uses Arial; LibreOffice substitutes Liberation Sans, embedded in the PDF. PowerPoint automation was denied by macOS, so native PowerPoint playback remains a laptop check.
- QR: source image and rendered closing slide both decode to https://www.runatlantis.io/.
- Timing: 433 spoken words, 4:30 planned, 30 seconds margin. Emergency script: 397 words, estimated 3:18 at 130 wpm including 15 seconds of pauses. Actual human delivery is not measured.

## Visual inspection and repairs

Every rendered page was inspected for overflow, overlap, contrast, broken assets, tiny text and template deviations. Final repairs simplified the workflow return-arrow label and moved the new pavilion discovery line clear of the official footer. The survey retains its previously repaired explicit line breaks.

| Slide | Inspection |
| --- | --- |
| 1 | Accepted title, speaker and official skyline remain clear; project logo is undistorted. |
| 2 | Complete native workflow loop; review, configured requirements and result return are legible. |
| 3 | Large illustrative PR conversation; no duplicate architecture narration. |
| 4 | Three readable platform outcomes with aligned rows. |
| 5 | Native Git → Atlantis → execution flow; optional Terragrunt correctly labeled. |
| 6 | Conftest and Infracost supply optional review context; connectors do not cross labels. |
| 7 | Hosting choices remain clear; cloud-vendor taxonomy removed. |
| 8 | Survey retains 354, explicit 2024 date and qualitative findings, with no inferred percentages. |
| 9 | Provisional 1.0 themes remain readable; narration shortened to 15 seconds. |
| 10 | QR, URLs and verified China pavilion table appear above the original branding. |

No remaining visible content overlap, clipping or missing assets. Small slide numbers and template branding are nonessential metadata. Room-distance readability and projector appearance require the normal physical AV check.

## Organizer details still unresolved

- Acceptance of ten slides against earlier 3–5-slide guidance. Ten slides follow Rui’s revised instruction.
- Public schedule’s Chinese-language label versus this English deck/script.
- Final upload route: organizer messages referenced different submission routes.

No organizer upload or contact was performed. All modifications are scoped to this talk directory.

## Preservation and scope

Expanded PPTX and PDF match the preceding committed versions byte-for-byte. Expanded source and narration are retained with separate output filenames. The importer accepts explicit deck/notes paths so regenerating the reference version cannot overwrite the primary deck. Master/layout/theme parts match the preceding official-template deck; layout IDs are unique. Core diagrams contain native PowerPoint shapes and text, with no raster picture substitution. The importer retains only reachable package parts, and template-baselined schema validation passes.

The complete current source manifest covers the workflow, platform outcomes, Git/IaC compatibility, optional integrations, deployment, historical survey, provisional 1.0 direction and onsite discovery. Original conference template and artwork were not modified. All edits are scoped to the talk directory.

Reference regeneration was also executed: every slide and notes XML part matched the original archive, and the primary PPTX was unchanged. The original archive bytes were restored after this check.
