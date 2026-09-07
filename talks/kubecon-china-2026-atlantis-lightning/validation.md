# Final validation — ten-slide introduction

Validated September 7, 2026. This supersedes the earlier five-slide QA.

- PPTX generation: passed; ten static, 16:9 slides with native editable diagrams and embedded assets.
- Package checks: passed; all ten embedded notes match narration.json and script.md; internal relationships resolve and external hyperlinks use HTTPS.
- Primary PPTX skill validator: passed against the original organizer template.
- Rendering: LibreOffice 7.3.7.2 opened the actual PPTX and exported a ten-page PDF, then all ten pages were rendered to PNG. PDF dimensions are approximately 960 × 540 points.
- Template: original master/layout/theme parts remain intact relative to the preceding template-based deck; original embedded conference media retained. Cover uses the skyline layout; remaining slides use the official white content layout.
- Fonts: PPTX uses Arial; LibreOffice substitutes Liberation Sans, embedded in the PDF. PowerPoint automation was denied by macOS, so native PowerPoint playback remains a laptop check.
- QR: source image and rendered closing slide both decode to https://www.runatlantis.io/.
- Timing: 489 spoken words, 4:35 planned, 25 seconds margin. Emergency script: 456 words, estimated 3:45 at 130 wpm including 15 seconds of pauses. Actual human delivery is not measured.

## Visual inspection and repairs

Every rendered page was inspected for overflow, overlap, contrast, broken assets, tiny text and template deviations. Final repairs separated Azure DevOps onto its own line and gave survey observations explicit lines and additional vertical space.

| Slide | Inspection |
| --- | --- |
| 1 | Accepted title, speaker and official skyline remain clear; project logo is undistorted. |
| 2 | Common laptop workflow is legible; the question and execution gap are distinct. |
| 3 | Plan path uses native shapes and clear arrows; labels remain readable. |
| 4 | Apply path separates approval, execution and infrastructure APIs. |
| 5 | Reconstructed PR has large plan/apply text and a visible illustrative caption. |
| 6 | Three integration groups fit; Terragrunt is a custom workflow, Conftest/Infracost optional integrations. |
| 7 | Deployment models and cloud examples are readable; hosting is distinct from managed infrastructure. |
| 8 | Standalone survey has a large 354 count, explicit 2024 date, qualitative findings and official blog link. |
| 9 | Three concise planning themes; draft discussion is explicitly not a released version. |
| 10 | Closing statement, fallback URLs and QR are clear, with sufficient footer space. |

No remaining visible content overlap, clipping or missing assets. Small slide numbers and template branding are nonessential metadata. Room-distance readability and projector appearance require the normal physical AV check.

## Organizer details still unresolved

- Acceptance of ten slides against earlier 3–5-slide guidance. Ten slides follow Rui’s revised instruction.
- Public schedule’s Chinese-language label versus this English deck/script.
- Final upload route: organizer messages referenced different submission routes.

No organizer upload or contact was performed. All modifications are scoped to this talk directory.
