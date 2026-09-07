# Rehearsal and final presentation critique

The one remembered sentence: **Atlantis runs Terraform/OpenTofu plans and applies from pull requests.** Every slide supports it. The exact script and emergency cuts are in script.md; notes are embedded in the PPTX. This is a delivery preparation aid, not evidence that Rui has already rehearsed.

## Practice sequence

1. Without slides, explain the talk in 30 seconds: infrastructure code lives in Git; Atlantis runs the plan, returns it to the PR, checks configured requirements, applies on request and reports back. End with “Plan it. Review it. Apply it. From the pull request.”
2. Expand to a three-minute explanation using the five slide takeaways. Avoid memorizing every word; keep the transitions and closing reliable.
3. Run the full deck aloud with a stopwatch. Checkpoints: 0:35 workflow, 1:40 PR example, 2:40 team value, 4:05 closing, stop at 4:35. Record and listen once for rushed clauses and unexplained terms.
4. Run the exact emergency version once: 448 words, about 3:42 at 130 words/minute including pauses. Do not improvise feature cuts on stage.

Pause after the plan summary on slide 3. Let the room see “1 to change” before explaining operational impact. On slide 4, move verbally through visible → controlled → collaborative. Do not expand the drift/security sentence into release history. On slide 5, point to the URL before the final phrase; hold the slide and stop speaking after “pull request.”

If the full spoken rehearsal exceeds 4:40, use the emergency version. The modeled slower case is 554 words at 120 words/minute plus 12 seconds of pauses = 4:49. It fits, but is not the recommended target.

## Final critique using the presentation skill

| Perspective | Concern tested | Decision |
| --- | --- | --- |
| First-time attendee | Can I say what Atlantis actually does? | The opening defines it before context. Slide 2 labels the execution service and the return of results to Git. The PR example changes from abstract diagram to concrete conversation without a live demo. |
| Platform engineer | Why choose this over generic CI? | The script acknowledges CI and explains the packaged PR interaction and project locking. No competitive matrix or universal security claim. |
| Atlantis maintainer | Does approval imply safety; is drift a scheduler? | Configured requirements are explicit. The script warns that planning runs powerful code; APIs remain alpha. Plan counts are a teaching example. |
| Conference speaker | Does slide 4 contain too much? | It is the densest spoken section at 179 words / 85 seconds. Keep three visible benefits dominant; current-project remarks remain brief. The emergency script removes the optional detail. No sixth slide. |
| AV technician | Does branding collide with content; will the deck travel? | Original template master remains authoritative; diagram objects and notes are native. PDF is the offline safety copy. Final full-resolution image checks are recorded in validation.md. |

No interactive exercise or audience question is inserted: the five-minute slot and user's constraints supersede the skill's longer-talk engagement suggestions. The diagram → PR conversation is the visual change in pace. The skill's narrative principles are applied without changing the official template's palette or adding generic deck themes.
