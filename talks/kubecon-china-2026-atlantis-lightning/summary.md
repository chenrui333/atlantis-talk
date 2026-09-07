# Narrative and design lock

Locked September 7, 2026 before the skill-guided implementation/QA pass.

## Audience and outcome

Rui Chen's five-minute project spotlight addresses platform engineers, SREs and cloud-native developers, including people new to Atlantis. English; five slides; 4:10 planned delivery. The user-selected custom narrative is definition/problem → workflow → PR example → ecosystem/survey evidence → close. No agenda, live demo, adoption chart or competitor matrix. Slide 4 adds dated first-party survey evidence.

One remembered idea: Atlantis is an open-source service that runs Terraform/OpenTofu plans and applies from pull requests.

## Five-slide contract

| Slide | One message | Evidence references | Visual |
| --- | --- | --- | --- |
| 1 | Atlantis connects infrastructure execution to code review. | C01, C02, C03, C11, E01 | Exact accepted title, official skyline, Atlantis icon |
| 2 | The PR is the shared workflow; Atlantis executes the tools. | C01, C04, C05, C06, C11, C12 | Native editable nodes, numbered arrows, review/apply loop |
| 3 | Engineers review and apply one change in one PR conversation. | C05, C06, C07 | Native text/shape PR reconstruction; counts explicitly illustrative |
| 4 | Atlantis fits a broad IaC ecosystem used by survey respondents. | S01–S04; P01–P03 | Native ecosystem diagram beside a clearly dated 2024 survey panel |
| 5 | Plan, review and apply from the PR; try the project. | C01, C16, C17 | Large closing words, direct homepage QR and GitHub link |

Claim IDs resolve in [sources.md](sources.md). Slide 3 PR counts are illustrative. Slide 4 reports 354 survey responses; its remaining findings use the project’s qualitative wording. Any future quantitative adoption claim must add exact source values and methodology there before it enters the deck; never read values approximately from chart images.

## Design authority

The supplied [official PPTX](assets/conference-template.pptx) is authoritative. Retain its original masters, layouts, theme and embedded marks. Template layout 2 supplies the skyline cover; layout 5 supplies the white content canvas and official footer. Uniform scale from 10 × 5.625 to 13⅓ × 7.5 inches preserves aspect ratio and artwork geometry. No skill palette replaces it.

Content uses Arial, chosen for reliable PowerPoint availability and metrically compatible PDF rendering. Titles 36–60pt; primary body 22–29pt; architecture secondary labels 19–20pt; explanatory PR caption 18pt. Section metadata and page numbers are smaller and nonessential. Dark teal text `083E4F`, secondary text `405965`, turquoise accent `086679`, white `FFFFFF`, panel `EAF1F3`. Content accents complement Atlantis artwork and remain subordinate to conference branding.

Common left margin 0.62 inches; content ends above the official footer. Use whitespace, flat panels, consistent 2pt arrows and large native labels. The motif is plan → review → apply. No animation or content-bearing raster diagram. All five notes derive from narration.json and are mirrored by script.md.

## Complementary skills

- `anthropics/skills:pptx`: template/package inspection, namespace preservation, schema/relationship validation against the original, final image QA.
- `wshobson/agents:pptx-deck-context`: this narrative/design lock and stable factual references.
- `wshobson/agents:pptx-visual-assets`: asset provenance, bboxes/alt text and editable diagram labels.
- `refoundai/lenny-skills:giving-presentations`: single remembered idea, takeaway titles, persona critique and compressed/expanded rehearsal. Installed at historical revision `0123453c617e1114d3097380feffb09761ce824a`; current upstream replaced it during reorganization.

Installed locally under the workspace's .agents/skills directory. The repository records provenance in skills-lock.json; downloaded third-party skill payloads are not redistributed. Optional document-pptx was unnecessary: the primary PPTX validator identified the package repairs.
