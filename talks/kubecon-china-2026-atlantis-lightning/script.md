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

Cue: Trace the loop once; distinguish orchestration from provider/state execution.

Many teams already automate infrastructure. Atlantis brings planning, review, execution, and results into one workflow. A developer opens a pull request. The Git host sends a webhook; Atlantis runs Terraform or OpenTofu and posts the plan back. The team reviews the code and plan together. An authorized engineer requests atlantis apply. Atlantis checks configured requirements, executes the change, and reports the result in the pull request. The infrastructure tooling still uses your providers and state backend.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

Reference notes (not spoken): C01/C05/C06: Atlantis orchestrates VCS interaction, affected-project workflows, command requirements and reporting. Terraform/OpenTofu handles provider APIs and remote state/backend operations. The diagram combines plan and apply result arrows; they are separate events.

## Slide 3 — One change. One PR conversation.

Target: 1:10–1:50 · 40 seconds · 62 spoken words.

Cue: Explain the engineer experience; do not repeat the architecture.

Here is one database capacity change. The summary says zero to add, one to change, zero to destroy. Small does not mean safe: the reviewer reads the full plan and considers operational impact. The plan becomes review context attached to the code change. If execution fails, the team can correct the change in the same pull request. This example applies before merging.

Transition (not spoken): Advance after the final sentence.

Emergency cut: If execution fails, the team can correct the change in the same pull request.

## Slide 4 — Shared review. Controlled execution.

Target: 1:50–2:15 · 25 seconds · 38 spoken words.

Cue: Three outcomes; centralized execution is not a security guarantee.

Platform teams get visibility, control, and collaboration. Plans and results sit beside code. Credentials and execution are centralized; configured requirements and locking coordinate changes. Developers propose; platform rules govern execution. Centralization still needs careful permissions and trusted repositories.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

Reference notes (not spoken): C18: Provider credentials are supplied to the Atlantis execution environment; this does not assert that all developer credentials disappear. Repo/server configuration controls requirements. Atlantis locks a directory/workspace across PRs; this is separate from Terraform state locking. Plan execution also needs trusted repositories and restricted permissions.

## Slide 5 — Connect Git to your infrastructure tools.

Target: 2:15–2:40 · 25 seconds · 36 spoken words.

Cue: Point to the flow; do not read the host list.

Atlantis connects your Git provider to IaC execution. You can build pieces in generic CI; Atlantis packages projects, plans, applies, locking, and VCS interaction into one service. Custom workflows extend execution, including tools such as Terragrunt.

Transition (not spoken): Advance after the final sentence.

Emergency cut: Custom workflows extend execution, including tools such as Terragrunt.

Reference notes (not spoken): P01–P03/C04/C18: Current hosts: GitHub, GitLab, Bitbucket Cloud and Server, Azure DevOps, Gitea and compatible forks such as Forgejo. Examples on screen are not exhaustive. Terraform and OpenTofu are selectable distributions. Terragrunt requires its binary and custom workflow commands; it is not a peer provider. Project discovery/planning, apply coordination, locking and VCS comments are purpose-built behaviors, not capabilities exclusive to Atlantis.

## Slide 6 — Extend the pull-request review.

Target: 2:40–3:00 · 20 seconds · 32 spoken words.

Cue: Policy and cost are separate, optional review inputs.

Platform teams compose tooling through custom workflows. Policy and cost are examples: Conftest checks the plan; Infracost adds cost context. These are configured extensions, not checks that every Atlantis installation automatically runs.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

Reference notes (not spoken): P04/P05/P07: Examples, not an exhaustive ecosystem: Conftest policy evaluation and Infracost cost estimation. Custom workflow run steps invoke external tools. Server-side pre/post workflow hooks support surrounding scripts; unlike workflow output, hooks do not automatically post their output as PR comments. Pre-hook errors do not block workflows by default; fail-on-pre-workflow-hook-error changes that behavior. Infracost integration requires configured tooling/hooks or workflow steps; it is not enabled by installing Atlantis. Custom validation or notification scripts are possible mechanisms, not bundled products.

## Slide 7 — Run Atlantis in your infrastructure.

Target: 3:00–3:20 · 20 seconds · 34 spoken words.

Cue: Hosting choice does not determine provider support.

Atlantis is self-hosted: use Helm, a container, or a server binary. Kubernetes is optional. Running Atlantis on Kubernetes does not limit it to managing Kubernetes; Terraform and OpenTofu providers determine the infrastructure being managed.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

Reference notes (not spoken): P06: Official Helm chart, official container image and Go binary deployment. Hosting is distinct from Terraform/OpenTofu provider targets. No cloud-provider compatibility list is implied.

## Slide 8 — Multiple stacks. One PR workflow.

Target: 3:20–3:50 · 30 seconds · 43 spoken words.

Cue: Say the year; point to the official survey blog.

The project's twenty twenty-four survey received three hundred fifty-four responses. GitHub led, with sizeable GitLab usage. Terraform dominated; about half also used Terragrunt, and OpenTofu was gaining ground. Kubernetes and AWS were common deployment environments. These are historical community responses, not market share.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

Reference notes (not spoken): S01–S05: Official 2024 survey: 354 responses, not organizations or market share. GitHub most common; sizeable GitLab, then Bitbucket/others. Terraform dominant; about half additionally use Terragrunt; OpenTofu gaining ground. Kubernetes and/or AWS common. Published Markdown links WebP chart images, with no raw numeric table or downloadable dataset; no chart estimates used. Visible examples summarize breadth; complete qualitative findings remain here.

## Slide 9 — Toward Atlantis 1.0.0

Target: 3:50–4:05 · 15 seconds · 29 spoken words.

Cue: Keep project direction brief and explicitly provisional.

The draft one point zero proposal clarifies the compatibility contract: breaking changes would require major versions. It signals stability and backwards compatibility. This is planning, not a release announcement.

Transition (not spoken): Advance after the final sentence.

Emergency cut: None; retain this slide’s narration.

Reference notes (not spoken): R01: Draft PR #5296 says 1.0 is not expected to differ from a usual 0.x feature release; it signals stability/backwards compatibility. Proposed semantics: bug fixes patch, features minor, backwards-incompatible changes major. Server settings, repo config, API and core execution behavior are examples of compatibility boundaries. Draft and unmerged; no release date promised.

## Slide 10 — Infrastructure is code.

Target: 4:05–4:30 · 25 seconds · 42 spoken words.

Cue: Point to discovery links, then hold the final slide.

Learn more at runatlantis dot io, explore the code on GitHub, and join the CNCF community. Find Atlantis at Project Pavilion, table T-ten, in Grand Ballroom One on Tuesday. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

Transition (not spoken): Hold the closing slide.

Emergency cut: None; retain this slide’s narration.

Reference notes (not spoken): E03: Project Pavilion T-10, Tuesday September 8, 10:30–14:30, Grand Ballroom I. The slot extends into afternoon. This does not promise Rui is continuously present during the whole pavilion slot.

## Emergency 4-minute version

Use the same ten slides. Skip exactly these sentences; do not speak faster. Keep the definition, full-plan review, configured approvals, dated survey evidence, and final line.

- Slide 3: Skip “If execution fails, the team can correct the change in the same pull request.”
- Slide 5: Skip “Custom workflows extend execution, including tools such as Terragrunt.”

### Short script for rehearsal

**Slide 1.** Hi, I'm Rui, an Atlantis maintainer. Atlantis is an open-source service that runs Terraform and OpenTofu plans and applies from pull requests. The idea is simple: code review should include the infrastructure execution result.

**Slide 2.** Many teams already automate infrastructure. Atlantis brings planning, review, execution, and results into one workflow. A developer opens a pull request. The Git host sends a webhook; Atlantis runs Terraform or OpenTofu and posts the plan back. The team reviews the code and plan together. An authorized engineer requests atlantis apply. Atlantis checks configured requirements, executes the change, and reports the result in the pull request. The infrastructure tooling still uses your providers and state backend.

**Slide 3.** Here is one database capacity change. The summary says zero to add, one to change, zero to destroy. Small does not mean safe: the reviewer reads the full plan and considers operational impact. The plan becomes review context attached to the code change. This example applies before merging.

**Slide 4.** Platform teams get visibility, control, and collaboration. Plans and results sit beside code. Credentials and execution are centralized; configured requirements and locking coordinate changes. Developers propose; platform rules govern execution. Centralization still needs careful permissions and trusted repositories.

**Slide 5.** Atlantis connects your Git provider to IaC execution. You can build pieces in generic CI; Atlantis packages projects, plans, applies, locking, and VCS interaction into one service.

**Slide 6.** Platform teams compose tooling through custom workflows. Policy and cost are examples: Conftest checks the plan; Infracost adds cost context. These are configured extensions, not checks that every Atlantis installation automatically runs.

**Slide 7.** Atlantis is self-hosted: use Helm, a container, or a server binary. Kubernetes is optional. Running Atlantis on Kubernetes does not limit it to managing Kubernetes; Terraform and OpenTofu providers determine the infrastructure being managed.

**Slide 8.** The project's twenty twenty-four survey received three hundred fifty-four responses. GitHub led, with sizeable GitLab usage. Terraform dominated; about half also used Terragrunt, and OpenTofu was gaining ground. Kubernetes and AWS were common deployment environments. These are historical community responses, not market share.

**Slide 9.** The draft one point zero proposal clarifies the compatibility contract: breaking changes would require major versions. It signals stability and backwards compatibility. This is planning, not a release announcement.

**Slide 10.** Learn more at runatlantis dot io, explore the code on GitHub, and join the CNCF community. Find Atlantis at Project Pavilion, table T-ten, in Grand Ballroom One on Tuesday. Infrastructure is code. Plan it. Review it. Apply it. From the pull request.

Total words including transitions: **426**.
Speaking alone at 130–145 wpm: **2:56–3:17**.
Planned duration with pauses: **4:30**. Safety margin: **30 seconds**.
Emergency: **403 words**, approximately **3:21** at 130 wpm with 15 seconds of pauses.
