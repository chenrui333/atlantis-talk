# Full script

English · Rui Chen · September 8, 2026 · Target 4:10; hard limit 5:00.

Speak the narration and transition only. Cues and timing metadata are not spoken.

## Slide 1 — Atlantis

Target: 0:00–0:35 · 35 seconds · 70 spoken words.

Cue: Define Atlantis, then expose the laptop handoff.

Hi, I'm Rui, an Atlantis maintainer. Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests. Many teams already automate infrastructure. But if your workflow still ends with someone running a command from a laptop, the reviewer may see the code without seeing the plan or the result. Atlantis brings those parts of the change into the same conversation.

Transition: Here is how that works.

## Slide 2 — The pull request becomes the workflow.

Target: 0:35–1:40 · 65 seconds · 128 spoken words.

Cue: Trace 1 → 2 → 3 → 4. Atlantis executes; Git holds the review.

A developer opens a pull request. The Git host sends a webhook to Atlantis, a service your team hosts. Atlantis detects affected projects and runs a plan using Terraform or OpenTofu. The plan describes the proposed infrastructure changes. Atlantis posts the result back to the pull request, so reviewers can read the code and the plan together. After review, an authorized engineer comments atlantis apply. Atlantis checks the requirements your platform team configured, then runs the apply and reports the result. Terraform or OpenTofu still talks to provider APIs and uses your state backend. Atlantis coordinates the workflow around those tools. You can host Atlantis on Kubernetes with the official Helm chart, or run it on a server. Kubernetes is optional.

Transition: For the engineer, that looks like this.

## Slide 3 — One change. One PR conversation.

Target: 1:40–2:40 · 60 seconds · 125 spoken words.

Cue: Read the plan summary. Approval is a review action, not an LGTM comment.

Here is a simplified example: increase a database's capacity. Atlantis posts a plan: zero resources to add, one to change, zero to destroy. That one change still deserves attention. For a database, that could include downtime, connection limits, and the cost change. The reviewer reads the full plan and checks the operational impact, then approves the pull request. I comment atlantis apply, and the bot reports completion. In this workflow, we apply before merging. If the apply fails, we can fix the change in the same pull request and try again. The code, the proposed changes, the review, and the execution result stay together. That is the experience to remember: review infrastructure where you already review code.

Transition: Why choose a service built around that workflow?

## Slide 4 — Atlantis in the IaC ecosystem

Target: 2:40–3:40 · 60 seconds · 107 spoken words.

Cue: Left: current integrations. Right: 2024 survey, not market share.

Atlantis fits a broader infrastructure stack. Today, it connects to several Git hosts, runs Terraform or OpenTofu, and supports Terragrunt through custom workflows. The project's 2024 survey received three hundred fifty-four responses. GitHub led, with a sizeable GitLab group, followed by Bitbucket and others. Terraform dominated; about half also used Terragrunt, and OpenTofu was gaining ground. Kubernetes and AWS were common deployment environments. These are survey responses, not a measure of market share. Atlantis gives those tools a shared pull-request workflow. Terragrunt is an optional workflow integration, not an infrastructure target.

Transition: Whatever combination you run underneath, the idea stays the same: infrastructure changes belong in code review.

## Slide 5 — Infrastructure is code.

Target: 3:40–4:10 · 30 seconds · 52 spoken words.

Cue: Point to the URL, then land the final four phrases.

Atlantis is a CNCF Sandbox project. Visit runatlantis dot io for the getting-started guide, or find the code and contribution guide on GitHub. Start with one repository and one infrastructure change. Bring your team's review rules into that workflow. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

## Emergency 4-minute version

Use the same five slides. Skip exactly these sentences; do not speak faster. Keep the definition, full-plan review, configured approvals, dated survey evidence, and final line.

- Slide 2: Skip “Terraform or OpenTofu still talks to provider APIs and uses your state backend.”
- Slide 2: Skip “Atlantis coordinates the workflow around those tools.”
- Slide 3: Skip “The code, the proposed changes, the review, and the execution result stay together.”
- Slide 4: Skip “Terragrunt is an optional workflow integration, not an infrastructure target.”
- Slide 5: Skip “Start with one repository and one infrastructure change.”
- Slide 5: Skip “Bring your team's review rules into that workflow.”

### Short script for rehearsal

**Slide 1.** Hi, I'm Rui, an Atlantis maintainer. Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests. Many teams already automate infrastructure. But if your workflow still ends with someone running a command from a laptop, the reviewer may see the code without seeing the plan or the result. Atlantis brings those parts of the change into the same conversation. Here is how that works.

**Slide 2.** A developer opens a pull request. The Git host sends a webhook to Atlantis, a service your team hosts. Atlantis detects affected projects and runs a plan using Terraform or OpenTofu. The plan describes the proposed infrastructure changes. Atlantis posts the result back to the pull request, so reviewers can read the code and the plan together. After review, an authorized engineer comments atlantis apply. Atlantis checks the requirements your platform team configured, then runs the apply and reports the result. You can host Atlantis on Kubernetes with the official Helm chart, or run it on a server. Kubernetes is optional. For the engineer, that looks like this.

**Slide 3.** Here is a simplified example: increase a database's capacity. Atlantis posts a plan: zero resources to add, one to change, zero to destroy. That one change still deserves attention. For a database, that could include downtime, connection limits, and the cost change. The reviewer reads the full plan and checks the operational impact, then approves the pull request. I comment atlantis apply, and the bot reports completion. In this workflow, we apply before merging. If the apply fails, we can fix the change in the same pull request and try again. That is the experience to remember: review infrastructure where you already review code. Why choose a service built around that workflow?

**Slide 4.** Atlantis fits a broader infrastructure stack. Today, it connects to several Git hosts, runs Terraform or OpenTofu, and supports Terragrunt through custom workflows. The project's 2024 survey received three hundred fifty-four responses. GitHub led, with a sizeable GitLab group, followed by Bitbucket and others. Terraform dominated; about half also used Terragrunt, and OpenTofu was gaining ground. Kubernetes and AWS were common deployment environments. These are survey responses, not a measure of market share. Atlantis gives those tools a shared pull-request workflow. Whatever combination you run underneath, the idea stays the same: infrastructure changes belong in code review.

**Slide 5.** Atlantis is a CNCF Sandbox project. Visit runatlantis dot io for the getting-started guide, or find the code and contribution guide on GitHub. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

Total words including transitions: **482**.
Speaking alone at 130–145 wpm: **3:19–3:42**.
Planned duration with pauses: **4:10**. Safety margin: **50 seconds**.
Emergency: **423 words**, approximately **3:30** at 130 wpm with 15 seconds of pauses.
