# Full script

English · Rui Chen · September 8, 2026 · Target 4:35; hard limit 5:00.

Speak the narration and transition only. Cues and timing metadata are not spoken.

## Slide 1 — Atlantis

Target: 0:00–0:15 · 15 seconds · 22 spoken words.

Cue: Start with the definition.

Hi, I'm Rui, an Atlantis maintainer. Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests.

## Slide 2 — Code review needs the execution result.

Target: 0:15–0:35 · 20 seconds · 39 spoken words.

Cue: Point to the missing plan and result.

Many teams already automate infrastructure. But if your workflow ends with someone running a command from a laptop, the reviewer may see the code without seeing the plan or the result. Atlantis brings those parts into the same conversation.

## Slide 3 — Open a PR. See the plan.

Target: 0:35–1:10 · 35 seconds · 57 spoken words.

Cue: Trace the webhook and return arrow.

A developer opens a pull request. The Git host sends a webhook to Atlantis, a service your team hosts. Atlantis detects affected projects and runs a plan using Terraform or OpenTofu. The plan describes the proposed infrastructure changes. Atlantis posts the result back to the pull request, so reviewers can read the code and the plan together.

## Slide 4 — Review it. Request the apply.

Target: 1:10–1:40 · 30 seconds · 44 spoken words.

Cue: Review stays in Git; execution runs on Atlantis.

After review, an authorized engineer comments atlantis apply. Atlantis checks the requirements your platform team configured, then runs the apply and reports the result. Terraform or OpenTofu still talks to provider APIs and uses your state backend. Atlantis coordinates the workflow around those tools.

## Slide 5 — One change. One PR conversation.

Target: 1:40–2:30 · 50 seconds · 104 spoken words.

Cue: Walk the PR rows. A small plan still needs review.

Here is a simplified example: increase a database's capacity. Atlantis posts a plan: zero resources to add, one to change, zero to destroy. That one change still deserves attention. For a database, that could include downtime, connection limits, and the cost change. The reviewer reads the full plan and checks the operational impact, then approves the pull request. I comment atlantis apply, and the bot reports completion. In this workflow, we apply before merging. If the apply fails, we can fix the change in the same pull request and try again. That is the experience to remember: review infrastructure where you already review code.

## Slide 6 — Connect your platform tools.

Target: 2:30–2:55 · 25 seconds · 39 spoken words.

Cue: Git → execution → optional policy and cost context.

Atlantis connects your Git host to Terraform or OpenTofu. Terragrunt can run through custom workflows. Optional Conftest checks evaluate policy against the plan. Infracost can add cost estimates through a workflow integration. These give reviewers more context before execution.

## Slide 7 — Run Atlantis in your infrastructure.

Target: 2:55–3:15 · 20 seconds · 34 spoken words.

Cue: Hosting choices differ from managed infrastructure.

For deployment, choose Kubernetes with Helm, containers, or a server. The docs include AWS Fargate, Google Cloud, and Azure options. This is where Atlantis runs; Terraform and OpenTofu providers determine what infrastructure it manages.

## Slide 8 — What the Atlantis community uses

Target: 3:15–3:45 · 30 seconds · 56 spoken words.

Cue: One historical survey; point to the three findings.

The project's twenty twenty-four survey received three hundred fifty-four responses. GitHub led, with a sizeable GitLab group, followed by Bitbucket and others. Terraform dominated; about half also used Terragrunt, and OpenTofu was gaining ground. Kubernetes and AWS were common deployment environments. These are community responses, not market share. The full results are in the project's blog.

## Slide 9 — Toward Atlantis 1.0.0

Target: 3:45–4:05 · 20 seconds · 42 spoken words.

Cue: Draft direction, not a release announcement.

The team is also planning for one point zero. The draft proposal emphasizes stability, backwards compatibility, and clearer versioning for breaking changes. This is a planning discussion, not a released version or a promised date. The pull-request workflow remains the starting point.

## Slide 10 — Infrastructure is code.

Target: 4:05–4:35 · 30 seconds · 52 spoken words.

Cue: Point to the URL, then land the final four phrases.

Atlantis is a CNCF Sandbox project. Visit runatlantis dot io for the getting-started guide, or find the code and contribution guide on GitHub. Start with one repository and one infrastructure change. Bring your team's review rules into that workflow. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

## Emergency 4-minute version

Use the same ten slides. Skip exactly these sentences; do not speak faster. Keep the definition, full-plan review, configured approvals, dated survey evidence, and final line.

- Slide 5: Skip “If the apply fails, we can fix the change in the same pull request and try again.”
- Slide 10: Skip “Start with one repository and one infrastructure change.”
- Slide 10: Skip “Bring your team's review rules into that workflow.”

### Short script for rehearsal

**Slide 1.** Hi, I'm Rui, an Atlantis maintainer. Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests.

**Slide 2.** Many teams already automate infrastructure. But if your workflow ends with someone running a command from a laptop, the reviewer may see the code without seeing the plan or the result. Atlantis brings those parts into the same conversation.

**Slide 3.** A developer opens a pull request. The Git host sends a webhook to Atlantis, a service your team hosts. Atlantis detects affected projects and runs a plan using Terraform or OpenTofu. The plan describes the proposed infrastructure changes. Atlantis posts the result back to the pull request, so reviewers can read the code and the plan together.

**Slide 4.** After review, an authorized engineer comments atlantis apply. Atlantis checks the requirements your platform team configured, then runs the apply and reports the result. Terraform or OpenTofu still talks to provider APIs and uses your state backend. Atlantis coordinates the workflow around those tools.

**Slide 5.** Here is a simplified example: increase a database's capacity. Atlantis posts a plan: zero resources to add, one to change, zero to destroy. That one change still deserves attention. For a database, that could include downtime, connection limits, and the cost change. The reviewer reads the full plan and checks the operational impact, then approves the pull request. I comment atlantis apply, and the bot reports completion. In this workflow, we apply before merging. That is the experience to remember: review infrastructure where you already review code.

**Slide 6.** Atlantis connects your Git host to Terraform or OpenTofu. Terragrunt can run through custom workflows. Optional Conftest checks evaluate policy against the plan. Infracost can add cost estimates through a workflow integration. These give reviewers more context before execution.

**Slide 7.** For deployment, choose Kubernetes with Helm, containers, or a server. The docs include AWS Fargate, Google Cloud, and Azure options. This is where Atlantis runs; Terraform and OpenTofu providers determine what infrastructure it manages.

**Slide 8.** The project's twenty twenty-four survey received three hundred fifty-four responses. GitHub led, with a sizeable GitLab group, followed by Bitbucket and others. Terraform dominated; about half also used Terragrunt, and OpenTofu was gaining ground. Kubernetes and AWS were common deployment environments. These are community responses, not market share. The full results are in the project's blog.

**Slide 9.** The team is also planning for one point zero. The draft proposal emphasizes stability, backwards compatibility, and clearer versioning for breaking changes. This is a planning discussion, not a released version or a promised date. The pull-request workflow remains the starting point.

**Slide 10.** Atlantis is a CNCF Sandbox project. Visit runatlantis dot io for the getting-started guide, or find the code and contribution guide on GitHub. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

Total words including transitions: **489**.
Speaking alone at 130–145 wpm: **3:22–3:46**.
Planned duration with pauses: **4:35**. Safety margin: **25 seconds**.
Emergency: **456 words**, approximately **3:45** at 130 wpm with 15 seconds of pauses.
