# Full script

English · Rui Chen · September 8, 2026 · Target 4:30; hard limit 5:00.

Speak the narration and transition only. Cues and timing metadata are not spoken.

## Slide 1 — Atlantis

Target: 0:00–0:20 · 20 seconds · 34 spoken words.

Cue: Define Atlantis before introducing the workflow.

Hi, I'm Rui, an Atlantis maintainer. Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests. The idea is simple: code review should include the infrastructure execution result.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

## Slide 2 — The pull request becomes the workflow.

Target: 0:20–1:10 · 50 seconds · 76 spoken words.

Cue: Trace the numbered loop once; pause at review.

Many teams already automate infrastructure. Atlantis brings planning, review, execution, and results into one workflow. A developer opens a pull request. The Git host sends a webhook; Atlantis runs Terraform or OpenTofu and posts the plan back. The team reviews the code and plan together. An authorized engineer requests atlantis apply. Atlantis checks configured requirements, executes the change, and reports the result in the pull request. The infrastructure tooling still uses your providers and state backend.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

## Slide 3 — One change. One PR conversation.

Target: 1:10–1:50 · 40 seconds · 61 spoken words.

Cue: Explain the engineer experience; do not repeat the architecture.

Here is one database capacity change. The summary says zero to add, one to change, zero to destroy. Small does not mean safe: the reviewer reads the full plan and considers operational impact. Approval and the apply request stay in the conversation. If execution fails, the team can correct the change in the same pull request. This example applies before merging.

Transition (not spoken): Advance after the final sentence.

Emergency cut: If execution fails, the team can correct the change in the same pull request.

## Slide 4 — Shared review. Controlled execution.

Target: 1:50–2:15 · 25 seconds · 46 spoken words.

Cue: Three outcomes; centralized execution is not a security guarantee.

For a platform team, the benefit is visibility, control, and collaboration. Plans and results sit beside the code review. Execution and credentials live in a managed service, with requirements your team configures. Developers propose changes through Git. The service still needs careful permissions and trusted repositories.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

## Slide 5 — Connect Git to your infrastructure tools.

Target: 2:15–2:40 · 25 seconds · 39 spoken words.

Cue: Point to the flow; do not read the host list.

Atlantis fits several Git hosts and supports both Terraform and OpenTofu. Terragrunt can run through custom workflows. You could build this in generic CI; Atlantis packages the infrastructure-specific PR interaction, project planning, applying, and locking into a purpose-built service.

Transition (not spoken): Advance after the final sentence.

Emergency cut: You could build this in generic CI; Atlantis packages the infrastructure-specific PR interaction, project planning, applying, and locking into a purpose-built service.

## Slide 6 — Give reviewers policy and cost context.

Target: 2:40–3:00 · 20 seconds · 31 spoken words.

Cue: Policy and cost are separate, optional review inputs.

Optional integrations add context. Conftest evaluates policy against the plan. Infracost can add cost estimates through workflow integration. Your platform team configures these checks; installing Atlantis does not automatically enable them.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

## Slide 7 — Run Atlantis in your infrastructure.

Target: 3:00–3:20 · 20 seconds · 34 spoken words.

Cue: Hosting choice does not determine provider support.

Deploy Atlantis on Kubernetes with the official Helm chart, as a container, or as a server binary. Kubernetes is optional. Where Atlantis runs is separate from the infrastructure your Terraform or OpenTofu providers manage.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

## Slide 8 — What the Atlantis community uses

Target: 3:20–3:50 · 30 seconds · 43 spoken words.

Cue: Say the year; point to the official survey blog.

The project's twenty twenty-four survey received three hundred fifty-four responses. GitHub led, with sizeable GitLab usage. Terraform dominated; about half also used Terragrunt, and OpenTofu was gaining ground. Kubernetes and AWS were common deployment environments. These are historical community responses, not market share.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

## Slide 9 — Toward Atlantis 1.0.0

Target: 3:50–4:05 · 15 seconds · 26 spoken words.

Cue: Keep project direction brief and explicitly provisional.

The draft one point zero proposal emphasizes stability, backwards compatibility, and clearer versioning. It is a planning discussion, not a release announcement or a promised date.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

## Slide 10 — Infrastructure is code.

Target: 4:05–4:30 · 25 seconds · 43 spoken words.

Cue: Point to discovery links, then hold the final slide.

Learn more at runatlantis dot io, explore the code on GitHub, and join the CNCF community. Find Atlantis at Project Pavilion, table T-ten, in Grand Ballroom One on Tuesday morning. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

Transition (not spoken): Hold the closing slide.

Emergency cut: None; retain this slide’s narration.

## Emergency 4-minute version

Use the same ten slides. Skip exactly these sentences; do not speak faster. Keep the definition, full-plan review, configured approvals, dated survey evidence, and final line.

- Slide 3: Skip “If execution fails, the team can correct the change in the same pull request.”
- Slide 5: Skip “You could build this in generic CI; Atlantis packages the infrastructure-specific PR interaction, project planning, applying, and locking into a purpose-built service.”

### Short script for rehearsal

**Slide 1.** Hi, I'm Rui, an Atlantis maintainer. Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests. The idea is simple: code review should include the infrastructure execution result.

**Slide 2.** Many teams already automate infrastructure. Atlantis brings planning, review, execution, and results into one workflow. A developer opens a pull request. The Git host sends a webhook; Atlantis runs Terraform or OpenTofu and posts the plan back. The team reviews the code and plan together. An authorized engineer requests atlantis apply. Atlantis checks configured requirements, executes the change, and reports the result in the pull request. The infrastructure tooling still uses your providers and state backend.

**Slide 3.** Here is one database capacity change. The summary says zero to add, one to change, zero to destroy. Small does not mean safe: the reviewer reads the full plan and considers operational impact. Approval and the apply request stay in the conversation. This example applies before merging.

**Slide 4.** For a platform team, the benefit is visibility, control, and collaboration. Plans and results sit beside the code review. Execution and credentials live in a managed service, with requirements your team configures. Developers propose changes through Git. The service still needs careful permissions and trusted repositories.

**Slide 5.** Atlantis fits several Git hosts and supports both Terraform and OpenTofu. Terragrunt can run through custom workflows.

**Slide 6.** Optional integrations add context. Conftest evaluates policy against the plan. Infracost can add cost estimates through workflow integration. Your platform team configures these checks; installing Atlantis does not automatically enable them.

**Slide 7.** Deploy Atlantis on Kubernetes with the official Helm chart, as a container, or as a server binary. Kubernetes is optional. Where Atlantis runs is separate from the infrastructure your Terraform or OpenTofu providers manage.

**Slide 8.** The project's twenty twenty-four survey received three hundred fifty-four responses. GitHub led, with sizeable GitLab usage. Terraform dominated; about half also used Terragrunt, and OpenTofu was gaining ground. Kubernetes and AWS were common deployment environments. These are historical community responses, not market share.

**Slide 9.** The draft one point zero proposal emphasizes stability, backwards compatibility, and clearer versioning. It is a planning discussion, not a release announcement or a promised date.

**Slide 10.** Learn more at runatlantis dot io, explore the code on GitHub, and join the CNCF community. Find Atlantis at Project Pavilion, table T-ten, in Grand Ballroom One on Tuesday morning. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

Total words including transitions: **433**.
Speaking alone at 130–145 wpm: **2:59–3:20**.
Planned duration with pauses: **4:30**. Safety margin: **30 seconds**.
Emergency: **397 words**, approximately **3:18** at 130 wpm with 15 seconds of pauses.
