# Full script

English · Rui Chen · September 8, 2026 · Target 4:35; hard limit 5:00.

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

## Slide 4 — A shared workflow. A platform you control.

Target: 2:40–4:05 · 85 seconds · 179 spoken words.

Cue: Visible → controlled → collaborative. Last 25 seconds: current project signals.

First, visibility: the plan and execution results sit beside the code review. Second, control: the platform team configures credentials, approval requirements, and optional policy checks. Atlantis project locks help coordinate competing pull requests. Third, collaboration: developers can propose changes through a familiar workflow, without each person needing a privileged workstation. You could build this in generic CI. Atlantis packages the PR interaction, planning, applying, and locking into a purpose-built service. The core workflow needs no separate Atlantis SaaS control plane. Your Git host, state backend, and cloud services remain part of the system. This still runs powerful code: even planning can execute code. Trusted repositories, restricted permissions, and a maintained deployment remain essential. The project continues to evolve for Terraform and OpenTofu users. Recent work includes alpha APIs for drift workflows; version zero point forty-seven added richer drift plan output. The latest release, zero point forty-seven point one, fixes a command-injection vulnerability. These are useful updates for existing operators. For a new team, the starting point is still the pull request.

Transition: And that is the idea to take away.

## Slide 5 — Infrastructure is code.

Target: 4:05–4:35 · 30 seconds · 52 spoken words.

Cue: Point to the URL, then land the final four phrases.

Atlantis is a CNCF Sandbox project. Visit runatlantis dot io for the getting-started guide, or find the code and contribution guide on GitHub. Start with one repository and one infrastructure change. Bring your team's review rules into that workflow. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

## Emergency 4-minute version

Use the same five slides. Skip exactly these sentences; do not speak faster. Keep the definition, full-plan review, configured approvals, security boundary, and final line.

- Slide 2: Skip “Terraform or OpenTofu still talks to provider APIs and uses your state backend.”
- Slide 2: Skip “Atlantis coordinates the workflow around those tools.”
- Slide 3: Skip “The code, the proposed changes, the review, and the execution result stay together.”
- Slide 4: Skip “You could build this in generic CI.”
- Slide 4: Skip “Atlantis packages the PR interaction, planning, applying, and locking into a purpose-built service.”
- Slide 4: Skip “Your Git host, state backend, and cloud services remain part of the system.”
- Slide 4: Skip “Recent work includes alpha APIs for drift workflows; version zero point forty-seven added richer drift plan output.”
- Slide 4: Skip “These are useful updates for existing operators.”
- Slide 5: Skip “Start with one repository and one infrastructure change.”
- Slide 5: Skip “Bring your team's review rules into that workflow.”

### Short script for rehearsal

**Slide 1.** Hi, I'm Rui, an Atlantis maintainer. Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests. Many teams already automate infrastructure. But if your workflow still ends with someone running a command from a laptop, the reviewer may see the code without seeing the plan or the result. Atlantis brings those parts of the change into the same conversation. Here is how that works.

**Slide 2.** A developer opens a pull request. The Git host sends a webhook to Atlantis, a service your team hosts. Atlantis detects affected projects and runs a plan using Terraform or OpenTofu. The plan describes the proposed infrastructure changes. Atlantis posts the result back to the pull request, so reviewers can read the code and the plan together. After review, an authorized engineer comments atlantis apply. Atlantis checks the requirements your platform team configured, then runs the apply and reports the result. You can host Atlantis on Kubernetes with the official Helm chart, or run it on a server. Kubernetes is optional. For the engineer, that looks like this.

**Slide 3.** Here is a simplified example: increase a database's capacity. Atlantis posts a plan: zero resources to add, one to change, zero to destroy. That one change still deserves attention. For a database, that could include downtime, connection limits, and the cost change. The reviewer reads the full plan and checks the operational impact, then approves the pull request. I comment atlantis apply, and the bot reports completion. In this workflow, we apply before merging. If the apply fails, we can fix the change in the same pull request and try again. That is the experience to remember: review infrastructure where you already review code. Why choose a service built around that workflow?

**Slide 4.** First, visibility: the plan and execution results sit beside the code review. Second, control: the platform team configures credentials, approval requirements, and optional policy checks. Atlantis project locks help coordinate competing pull requests. Third, collaboration: developers can propose changes through a familiar workflow, without each person needing a privileged workstation. The core workflow needs no separate Atlantis SaaS control plane. This still runs powerful code: even planning can execute code. Trusted repositories, restricted permissions, and a maintained deployment remain essential. The project continues to evolve for Terraform and OpenTofu users. The latest release, zero point forty-seven point one, fixes a command-injection vulnerability. For a new team, the starting point is still the pull request. And that is the idea to take away.

**Slide 5.** Atlantis is a CNCF Sandbox project. Visit runatlantis dot io for the getting-started guide, or find the code and contribution guide on GitHub. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

Total words including transitions: **554**.
Speaking alone at 130–145 wpm: **3:49–4:16**.
Planned duration with pauses: **4:35**. Safety margin: **25 seconds**.
Emergency: **448 words**, approximately **3:42** at 130 wpm with 15 seconds of pauses.
