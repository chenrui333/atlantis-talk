# Draft critique and revision record

## Opening candidates

1. Problem: “Your Terraform is in Git, but someone still has to run the change.” Immediate pain, but delays the project definition.
2. Definition: “Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests.” Selected: a newcomer knows what the project does immediately.
3. Question: “Which plan was reviewed, and who applied it?” Engaging, but needs more context and invites an unnecessary audience pause.

## First draft critique

- First-time attendee: The definition is immediate, but a diagram alone may make it unclear who executes Terraform. Retain “Runs Terraform / OpenTofu” inside the Atlantis node and narrate the state-backend boundary.
- Platform engineer: Generic CI can do this. Keep the brief explanation of packaged PR interaction, planning, applying and locking; do not add a comparison slide.
- Atlantis maintainer: Approval requirements must be described as configured, not default. Drift APIs are alpha. Apply-before-merge is the illustrated workflow. Locks coordinate project/workspace changes, not all external state changes. These boundaries are explicit in narration and sources.
- AV technician: The organizer's final lightning guidance calls for 3–5 slides. Consolidate the seven-slide draft to five. The organizer's supplied template must replace the interim design. Final font, overlap and projection review awaits the template and rendered output.

## Content revision

Five slides preserve the complete narrative by combining problem plus architecture, and platform benefits plus current development. That revision used 555 words and a 4:35 target; the subsequent polish below supersedes its wording. The emergency version makes exact sentence cuts. The small infrastructure node was expanded to keep its subtitle inside the panel.

## Outstanding visual review

The five interim slides were rendered with LibreOffice 7.3.7.2 and inspected in a contact sheet. The diagram was additionally inspected at full resolution after revision. Fixed the broken line within the apply command and exposed the previously obscured downward arrowhead. Rendered again; the PDF has five 16:9 pages, embedded Liberation Sans fonts and a successfully decoded closing-slide QR. Structural checks confirm five slides with synchronized notes and no external image dependencies.

Repeat all rendering and visual checks after applying the official template. Current artifacts are an interim draft, not the completed deliverable.

## Narration polish while the template is pending

Rebalanced the five slides to 0:35 / 1:05 / 1:00 / 1:25 / 0:30. The opening now combines the immediate definition with the laptop handoff problem. The diagram gets its own uninterrupted explanation. The PR narration uses Rui's first-person voice and distinguishes a real review approval from a casual comment. The database example asks reviewers to consider downtime, connection limits and cost.

Removed the sentence about not needing a live terminal; it described the presentation rather than Atlantis. Kept generic-CI positioning brief. Hosting is explained alongside architecture, reducing the burden on the benefits slide. API and security updates remain a short closing segment of that slide.

Full script: 554 words. Emergency: 448 words. Narration, exact emergency cuts, purposes and timing now share one source. Presenter notes include cumulative time and word count as well as narration. The emergency version is printed in full for rehearsal, not just listed as edits.


## Final organizer-template version

Applied the supplied official 2026 template, preserving its skyline cover and selecting its white content layouts. This resolves the prior template dependency. Full-resolution visual inspection of all five final pages found no remaining clipping or footer collisions after moving the benefits callouts and closing URL upward. The PR caption is now 18pt. The final QR was decoded from the exported closing slide.

The first-time attendee gets the definition and problem in 35 seconds; the platform engineer gets the purpose-built CI distinction; the maintainer's approval, alpha-API and planning-trust caveats remain; the AV check confirms five 16:9 static pages with embedded fonts in the PDF. See validation.md for exact evidence and limits. Earlier draft observations above are historical and are superseded by this completed template revision.

## Skill-guided final review

Applied the four requested presentation skills. Locked narrative/design in summary.md, added stable C01–C17 claim references and an asset register in sources.md, preserved XML namespaces and removed unreachable package parts after the primary PPTX skill found two structural issues. Its template-baselined validator now passes. All five slides were re-rendered and inspected. Rehearsal.md records the final presentation critique and delivery practice; validation.md records the explicit per-slide QA.

## Final ecosystem + survey revision

Supersedes the previous slide 4 benefits/release layout. Retained five slides and the official template. Added a native current-integrations diagram beside the official 2024 survey's 354 responses and three qualitative findings. Source discipline separates historical observations from 2026 capabilities and avoids invented chart percentages. Terragrunt is nested in execution as an optional custom workflow.

First-time attendee: the main workflow remains on slides 2–3. Platform engineer: grouped Git hosts and selectable execution tools demonstrate ecosystem breadth. Maintainer: historical survey findings are not a current feature matrix or market-share estimate; Terragrunt is not a provider. AV technician: no extra logos, 19pt survey findings, clear footer space after a spacing repair. Speaker: slide 4 is now 107 words / 60 seconds; total 482 words / 4:10. Optional sentence cut is mirrored in script.md and notes.

## Final ten-slide introduction — supersedes five-slide revisions

Followed Rui’s revised ten-slide direction while retaining the five-minute limit and official template. Split plan and apply, separated ecosystem integrations, deployment and survey evidence, and added a short clearly labeled 1.0 planning discussion.

First-time attendee: definition arrives immediately and the workflow is explained before integrations. Platform engineer: Git hosts, execution tools, optional Conftest/Infracost and deployment choices answer concrete adoption questions. Maintainer: 2024 survey observations are separated from current capabilities; draft 1.0 proposals are not announced as released; hosting is separate from Terraform provider support. AV technician: all ten static pages rendered; explicit survey line breaks repaired crowding and Azure DevOps no longer wraps awkwardly. Speaker: 489 words and a 4:35 target preserve pauses; no faster delivery is required. The main remaining tradeoff is ten slide changes in five minutes, so rehearse transitions against timing.md.

## Distributed ten-slide revision — current

Preserved the preceding ten-slide artifacts before editing. Merged old workflow-gap/plan/apply slides into one hero. Moved the PR example forward. Used the recovered space for distinct platform outcomes and optional policy/cost context. Core Git/IaC compatibility is now an editable flow. Removed the cloud-vendor list and shortened database and roadmap narration. Verified the China-specific Atlantis pavilion table and added it to the close. Final critique and repairs are in rehearsal.md; timing is 433 words / 4:30. This supersedes prior structural/timing observations.
