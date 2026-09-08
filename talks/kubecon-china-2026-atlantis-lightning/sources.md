# Sources and factual decisions

Verified September 7, 2026. Current slide numbering is for the ten-slide introduction. Historical 2024 survey evidence is distinct from current capabilities and the draft 1.0 proposal. Quantities are not inferred from chart images.

## Current claim manifest

| ID | Slides | Claim and boundary | Primary source |
| --- | --- | --- | --- |
| C01 | 1–5, 10 | Self-hosted PR automation runs Terraform/OpenTofu; Atlantis coordinates execution and reports results. | [Using Atlantis](https://www.runatlantis.io/docs/using-atlantis) |
| C02 | 1 | Rui Chen is listed as an Atlantis maintainer. | [Maintainers](https://github.com/runatlantis/atlantis/blob/fb235157074a25b8fb4bdbf6f43f9eb4f528f6bb/MAINTAINERS.md) |
| C03 | Background | Laptop handoffs can separate execution from review; not a claim about all teams. | [Local applies](https://www.runatlantis.io/blog/2018/terraform-and-the-dangers-of-applying-locally.html) |
| C04 | 5 | Autoplanning detects affected projects subject to configuration. | [Autoplanning](https://www.runatlantis.io/docs/autoplanning) |
| C05 | 2–4 | Requirements such as approval are configured; not universal defaults. | [Command requirements](https://www.runatlantis.io/docs/command-requirements) |
| C06 | 2–3 | Terraform/OpenTofu owns provider/state operations. Apply-before-merge is the illustrated workflow. The PR and plan counts are editorial examples. | [Using Atlantis](https://www.runatlantis.io/docs/using-atlantis), [Security](https://www.runatlantis.io/docs/security) |
| P01 | 5 | GitHub, GitLab, Gitea/compatible forks such as Forgejo, Bitbucket Cloud/Server, Azure DevOps. No feature-parity guarantee. | [Git hosts](https://www.runatlantis.io/docs/requirements#git-host) |
| P02 | 5 | Select terraform or opentofu as the project distribution. | [Distributions](https://www.runatlantis.io/docs/repo-level-atlantis-yaml#terraform-distributions) |
| P03 | 5 | Terragrunt uses custom commands and requires its binary; it is not an Atlantis provider or target. | [Terragrunt workflows](https://www.runatlantis.io/docs/custom-workflows#terragrunt) |
| P04 | 6 | Optional server-side Conftest policy evaluation of plans; gating and policy approvals require configuration. | [Conftest policy checks](https://www.runatlantis.io/docs/policy-checking) |
| P05 | 6 | Infracost can add cost estimates through workflow integration. It is not bundled by default or a native plugin system. Its docs also recommend standalone VCS apps for some setups. No image-version recommendation here. | [Infracost's Atlantis integration](https://www.infracost.io/docs/integrations/atlantis/) |
| P06 | 7 | Official Helm chart and Docker image; server/binary deployment. Docs cover Fargate, GKE/GCE, Azure AKS/ACI. Some referenced Terraform modules are community-maintained. Hosting Atlantis does not determine which provider targets its tooling can manage. | [Deployment](https://www.runatlantis.io/docs/deployment) |
| C16 | 10 | CNCF Sandbox; Apache 2.0 license. | [CNCF](https://www.cncf.io/projects/atlantis/), [License](https://github.com/runatlantis/atlantis/blob/fb235157074a25b8fb4bdbf6f43f9eb4f528f6bb/LICENSE) |
| C17 | 10 | Official guide and contribution path. | [Guide](https://www.runatlantis.io/guide), [GitHub](https://github.com/runatlantis/atlantis) |

## 2024 survey evidence — slide 8

[Official Atlantis User Survey Results](https://www.runatlantis.io/blog/2024/april-2024-survey-results). Survey opened in April 2024 for two months. It reports **354 responses**, not unique organizations, installations or market share. Visible label: Atlantis User Survey · 2024 · n=354.

| ID | Source section | Qualitative observation |
| --- | --- | --- |
| S01 | Introduction | 354 responses. |
| S02 | VCS question | GitHub leads; sizeable GitLab group; Bitbucket and others follow. |
| S03 | IaC tools question | Terraform dominant; about half additionally use Terragrunt; OpenTofu gaining ground. No exact percentage inferred. |
| S04 | Deployment question | Kubernetes and/or AWS common; categories need not be mutually exclusive. |
| S05 | Missing features question | Drift detection and infrastructure improvements led normalized free-text requests. Background only. |

## 1.0.0 planning — slide 9

- **R01:** [Draft announcement PR #5296](https://github.com/runatlantis/atlantis/pull/5296) is open, draft and unmerged as checked September 7. It proposes stability, backwards compatibility and clearer semantic versioning. The draft's release-announcement phrasing is NOT evidence that 1.0 shipped. Slide labels this planning, not released; no date promised.
- **R02:** [Release tracking issue #2496](https://github.com/runatlantis/atlantis/issues/2496) remains open. Its older checklist includes completed API/streaming work; we do not present that as all future work.
- **R03:** [The Path to Atlantis 1.0 discussion #1749](https://github.com/runatlantis/atlantis/discussions/1749) originated in 2021. Historical API-platform vision, not a new 2026 roadmap commitment.
- **R04:** [v0.40.0 release](https://github.com/runatlantis/atlantis/releases/tag/v0.40.0) says the core team is preparing for stable 1.0.0. Latest non-prerelease remains [v0.47.1](https://github.com/runatlantis/atlantis/releases/tag/v0.47.1), published August 20, 2026, rechecked via releases/latest.

## Operator background, not timed narration

Planning can execute code; repository trust and permissions remain essential. [Security](https://www.runatlantis.io/docs/security). v0.47.1 patches workspace command injection during planning: [GHSA-rjh2-4xgw-p2hj](https://github.com/runatlantis/atlantis/security/advisories/GHSA-rjh2-4xgw-p2hj). [Drift/API endpoints](https://www.runatlantis.io/docs/api-endpoints) remain alpha and do not by themselves imply periodic scheduling. These facts do not turn the introduction into a release-notes talk.

## E01 — Conference verification

[Official 2026 schedule](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/) lists the exact accepted title: **Project Lightning Talk: Atlantis: Terraform Pull Request Automation for Cloud Native Teams**, Rui Chen, **September 8, 11:35–11:40, 5B + C**. Times are China Standard Time (UTC+8). Atlantis is the fifth project talk after opening remarks; Karmada precedes it and OpenKruise follows it.

The schedule labels this session **Chinese**. The requested deliverables remain English. Rui needs to reconcile that language label with the organizers; no schedule edit or organizer message has been made.

[Official event homepage](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/) and [LF announcement](https://www.linuxfoundation.org/press/kubecon-cloudnativecon-openinfra-summit-and-pytorch-conference-unite-in-china-to-scale-ai) include September 7 co-located activities. The main conference is September 8–9; title slide shows the talk date, September 8. Venue: Shanghai International Convention Center.

The apparent 2026 speaker-guide URL returned archived 2023 content, including a 2023 template and September 22 deadline. The generic LF China speaker-guide path redirected to another event. These are **not valid 2026 requirements**. Old rules requiring both English and Chinese PDFs, Sched uploads, or an optional template were not applied to this deck.

The organizer correspondence below establishes the template, 16:9 format, laptop/HDMI requirements and initial upload deadline. Remaining conference questions: the schedule's Chinese language label and the final project-talk submission route. There is no live demo, video or animation in this deck.

## A01 — Artwork provenance

Official Atlantis assets are from [CNCF artwork](https://github.com/cncf/artwork/tree/04ac5bd4fe2186a14526e241b1229d633b6e7872/projects/atlantis): `icon/color/atlantis-icon-color.svg` and `horizontal/white/atlantis-horizontal-white.svg`. Copied without redrawing or distortion. Their original SVGs are retained in assets. Palette accents derive from the official icon's turquoise colors. Brand marks remain their owners' property; use identifies the project being discussed. QR encodes the official homepage directly, without tracking.


## E02 / A02 — Organizer correspondence supersedes old web guidance

The June 15, 2026 “Next Steps for Breakout” message supplied `China_-_Branded_PowerPoint.pptx`. Rui provided that file on September 7. The original is retained as `assets/conference-template.pptx` (SHA-256 `8a7217a5868df30337d04a43c66ff939488ba8f0f85eede486a4b39a111cbb0a`). Its ten sample slides contain official 2026 branding and blank content placeholders. The deck uses its skyline layout 2 and white layout 5. Masters, layouts, theme and media are imported; no event mark is invented or redrawn. The template's 10-inch canvas is uniformly scaled to the presentation canvas, preserving 16:9. The supplied template has no additional narration or slide instructions in its notes.

That message confirms 16:9 slides, the speaker's own laptop and HDMI adapter, presentation in Light Mode, and a September 2 PDF upload deadline through Sessionize for attendee access. The later “Final Project Lightning Talk Details” message specifies **3–5 slides**, a five-minute talk, arrival 15 minutes early, and speaker check-in at the back of room 5BC followed by reserved stage-right seating. An earlier draft was consolidated to five slides; Rui’s latest direction retains ten and distributes the material more clearly. The later message supplies a project-presentation upload route managed by the CNCF team, while referring to Sched; the public 2026 schedule uses Sessionize. The correct final submission route should be confirmed using the organizer's latest message. Private correspondence, registration details and private upload links are not copied into this repository.


## Revised slide-count direction

Rui subsequently requested ten slides to reduce per-slide density and broaden the introduction. That supersedes the earlier five-slide authoring constraint in this workspace; it does not alter the organizer's 3–5-slide guidance. Organizer acceptance of ten slides is unresolved. Template and five-minute duration remain intact.

## Visual asset manifest

Official icon: assets/atlantis-icon.svg, CNCF source above; title bbox 7.5,1.71,1.25,1.25 inches, alt text embedded. Original conference masters/layouts/artwork remain native and uniformly scaled. New diagrams are native text/shapes; no vendor-logo collage. QR generated locally, slide 10 bbox 9.12,2.44,3.3,3.3; four-module quiet zone; direct homepage URL. Survey is editable text with a hyperlink to the source blog, not a raster chart. Retained atlantis-wordmark.svg is unused.

## Structural-pass verification — September 7, 2026

Reopened current official requirements, distribution config, custom workflows, Conftest, deployment, survey and Infracost documentation. GitHub API confirms Apache-2.0 and PR #5296 still open/draft/unmerged. CNCF still lists Atlantis at Sandbox maturity. No release number is displayed in the revised deck.

- **C18, slides 4–5:** Platform outcomes are a synthesis of the documented workflow, [provider credentials](https://www.runatlantis.io/docs/provider-credentials), [security model](https://www.runatlantis.io/docs/security), configured command requirements and [locking](https://www.runatlantis.io/docs/locking). Centralization does not remove permissions or repository-trust risks. Generic CI comparison describes packaging, not an exclusive capability.
- **E03, slide 10:** The official China schedule lists Atlantis at **Project Pavilion, T-10, Tuesday September 8, 10:30–14:30, Grand Ballroom I**. [Schedule](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/) and [project table directory](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/features-add-ons/project-engagement/#project-table-directory). This is an onsite discovery opportunity specific to China 2026, not a North America/Europe activity. It overlaps the lightning talk; no claim that Rui staffs it continuously.

The prior binary artifacts are retained byte-for-byte as slides-expanded.pptx and slides-expanded.pdf from commit 457484e. Their narration and source are retained separately; the archived source only adjusts filenames so regeneration cannot overwrite the primary deck. Current source references above map to the revised ten-slide narrative.

## Information architecture verification — September 7, 2026

- **P07, slide 6 / non-spoken notes:** [Custom workflows](https://www.runatlantis.io/docs/custom-workflows) support custom run commands/external tooling. [Pre-workflow hooks](https://www.runatlantis.io/docs/pre-workflow-hooks) and [post-workflow hooks](https://www.runatlantis.io/docs/post-workflow-hooks) run surrounding scripts configured server-side. Hooks do not automatically publish their stdout as PR comments. Pre-hook failure is non-blocking by default unless configured otherwise. These mechanisms are explained in reference notes, not listed on screen.
- **R01 refinement, slide 9:** Read the complete draft patch in [PR #5296](https://github.com/runatlantis/atlantis/pull/5296/files). Its intent is stability and backwards compatibility, with breaking changes accompanied by a major-version increment. It explicitly does not anticipate a feature leap compared with ordinary 0.x releases. “A clearer compatibility contract” is an editorial synthesis of that intent, not a quotation or released guarantee. API recheck confirms draft/open/unmerged.
- **S01–S04 refinement, slide 8:** Inspected the [published Markdown](https://github.com/runatlantis/atlantis/blob/main/runatlantis.io/blog/2024/april-2024-survey-results.md) and its [asset directory](https://github.com/runatlantis/atlantis/tree/main/runatlantis.io/blog/2024/april-2024-survey-results). Only six WebP charts accompany the prose; no raw numeric dataset or linked table is supplied. The count 354 and prose “about half” remain the only quantitative evidence used. No percentage was inferred from image geometry. “Multiple stacks. One PR workflow.” synthesizes the diversity described in the introduction; it is not market share.
- Requirements, distributions, locking, policy checks, Infracost integration, deployment, CNCF status, license API and China pavilion schedule were rechecked. Existing boundaries remain unchanged. Visible Git examples are representative; the full supported host list is in the embedded reference notes. Atlantis remains Sandbox, Apache-2.0. Pavilion remains Tuesday 10:30–14:30, T-10; narration now says Tuesday rather than Tuesday morning.

References C01/C05/C06, C18, P01–P07, S01–S05, R01 and E03 are attached to non-spoken reference notes in narration.json. Those notes are mirrored in script.md and embedded in the generated PPTX.

## Community discovery (verified September 7, 2026)

- **E04 — Slide 10:** The official [community agenda and notes](https://docs.google.com/document/d/1EzseHmT4Zarj-_7MO8ud5mHByIJGIHS7JdoNNK9ZckU/edit) states that general meetings occur every two weeks on Wednesday at 4pm UTC. It links the LFX meetings page for joining/calendar access. The official [v0.37.0 release announcement](https://github.com/runatlantis/atlantis/releases/tag/v0.37.0) independently identifies this document and schedule. The closing slide links the document, without exposing the long URL. Meeting dates should be checked via its calendar; this is a recurring schedule, not a promise of a meeting during conference week.
