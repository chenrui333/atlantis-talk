# Rehearsal and final presentation critique

The one remembered sentence: **Atlantis runs Terraform/OpenTofu plans and applies from pull requests.** Every slide supports it. The exact script and emergency cuts are in script.md; notes are embedded in the PPTX. This is a delivery preparation aid, not evidence that Rui has already rehearsed.

## Practice sequence

1. Without slides, explain the talk in 30 seconds: infrastructure code lives in Git; Atlantis runs the plan, returns it to the PR, checks configured requirements, applies on request and reports back. End with “Plan it. Review it. Apply it. From the pull request.”
2. Expand to a three-minute explanation using the five slide takeaways. Avoid memorizing every word; keep the transitions and closing reliable.
3. Run the full deck aloud with a stopwatch. Checkpoints: 0:35 workflow, 1:40 PR example, 2:40 team value, 3:40 closing, stop at 4:10. Record and listen once for rushed clauses and unexplained terms.
4. Run the exact emergency version once: 423 words, about 3:30 at 130 words/minute including pauses. Do not improvise feature cuts on stage.

Pause after the plan summary on slide 3. Let the room see “1 to change” before explaining operational impact. On slide 4, distinguish current integrations on the left from the 2024 survey on the right. Do not read every Git host or turn the sample into a market-share claim. On slide 5, point to the URL before the final phrase; hold the slide and stop speaking after “pull request.”

If the full spoken rehearsal exceeds 4:40, use the emergency version. The modeled slower case is 482 words at 120 words/minute plus 12 seconds of pauses = 4:13. It fits, but is not the recommended target.

## Final critique using the presentation skill

| Perspective | Concern tested | Decision |
| --- | --- | --- |
| First-time attendee | Can I say what Atlantis actually does? | The opening defines it before context. Slide 2 labels the execution service and the return of results to Git. The PR example changes from abstract diagram to concrete conversation without a live demo. |
| Platform engineer | Why choose this over generic CI? | Slides 2–3 show the purpose-built PR workflow. Slide 4 now shows broad integration choices; no competitive matrix or universal security claim. |
| Atlantis maintainer | Does approval imply safety; is drift a scheduler? | Configured requirements are explicit. Security/API detail remains in sources.md; the survey panel is explicitly dated. Plan counts are a teaching example. |
| Conference speaker | Does slide 4 contain too much? | Replaced the 85-second benefits section with 107 words / 60 seconds of ecosystem and survey context. The diagram nests Terragrunt in execution; the survey has three compact findings. An optional sentence is marked for recovery. No sixth slide. |
| AV technician | Does branding collide with content; will the deck travel? | Original template master remains authoritative; diagram objects and notes are native. PDF is the offline safety copy. Final full-resolution image checks are recorded in validation.md. |

No interactive exercise or audience question is inserted: the five-minute slot and user's constraints supersede the skill's longer-talk engagement suggestions. The diagram → PR conversation is the visual change in pace. The skill's narrative principles are applied without changing the official template's palette or adding generic deck themes.
