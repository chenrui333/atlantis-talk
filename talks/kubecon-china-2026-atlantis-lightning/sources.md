# Sources and factual decisions

Verified September 7, 2026. Only official Atlantis, CNCF, GitHub project metadata and Linux Foundation sources support the talk. No vanity statistics are used. The PR is a reconstruction, not a screenshot of a real change.

## Claim ledger

| Slides / narration | Claim and boundary | Primary evidence |
| --- | --- | --- |
| 1, 2, 5 | Atlantis is an open-source, self-hosted application receiving VCS webhooks and reporting plan/apply results on PRs. It orchestrates the tools; it does not replace them. | [Project README](https://github.com/runatlantis/atlantis/blob/fb235157074a25b8fb4bdbf6f43f9eb4f528f6bb/README.md), [Using Atlantis](https://www.runatlantis.io/docs/using-atlantis) |
| 1 | Rui Chen is an Atlantis Maintainer, verified in the project's maintainer table. No employer branding. | [MAINTAINERS.md](https://github.com/runatlantis/atlantis/blob/fb235157074a25b8fb4bdbf6f43f9eb4f528f6bb/MAINTAINERS.md) |
| 1 | Laptop execution can separate operational results from code review. This is a common possible starting point, not a claim that all teams work this way. | [Official project discussion of local applies](https://www.runatlantis.io/blog/2018/terraform-and-the-dangers-of-applying-locally.html) and editorial scenario |
| 2 | New PRs and commits can trigger project detection and autoplanning; configurable, not an assertion every repo is detected perfectly. | [Autoplanning](https://www.runatlantis.io/docs/autoplanning) |
| 2, 3, 4 | Apply requirements such as approval are configured. Approval is not a universal default. The demo explicitly assumes it is configured. | [Command requirements](https://www.runatlantis.io/docs/command-requirements) |
| 2, 3 | Default managed workflow plans and applies; the illustrated workflow applies before merging. Infrastructure/state remain managed by Terraform/OpenTofu and its backend. | [Using Atlantis](https://www.runatlantis.io/docs/using-atlantis), [Locking](https://www.runatlantis.io/docs/locking) |
| 3 | Plan counts are illustrative and are not evidence that the change is safe. Real plan review is still necessary. | Editorial example, consistent with [Security](https://www.runatlantis.io/docs/security) |
| 4 | Project/directory-and-workspace locks coordinate competing PRs; this is distinct from Terraform backend state locking, and does not lock an entire repository or all external actors. | [Locking](https://www.runatlantis.io/docs/locking) |
| 4 | Configurable Conftest policy checks, requirements, central provider credentials and custom workflows. Policy approvals and PR approvals are separate. | [Policy checking](https://www.runatlantis.io/docs/policy-checking), [Custom workflows](https://www.runatlantis.io/docs/custom-workflows), [Provider credentials](https://www.runatlantis.io/docs/provider-credentials) |
| 4 | Planning can execute malicious code; apply approvals alone are insufficient. Restrict repository trust, privileges and custom workflow configuration. | [Security](https://www.runatlantis.io/docs/security) |
| 4 | Both Terraform and OpenTofu supported; distribution selection is configurable. | [Repository configuration](https://www.runatlantis.io/docs/repo-level-atlantis-yaml), [Terraform versions](https://www.runatlantis.io/docs/terraform-versions) |
| 4 | Kubernetes deployment uses the official Helm chart; Kubernetes is optional. No separate Atlantis SaaS control plane required for core workflow. VCS, provider APIs and backend may themselves be hosted services. | [Deployment](https://www.runatlantis.io/docs/deployment), [Official chart](https://github.com/runatlantis/helm-charts/tree/main/charts/atlantis) |
| 4 | 0.47.0 exposes plan output on drift detection API; APIs are alpha and extend beyond PR workflows. This is not a built-in periodic drift scheduler claim. | [v0.47.0 release](https://github.com/runatlantis/atlantis/releases/tag/v0.47.0), [API endpoints](https://www.runatlantis.io/docs/api-endpoints), [PR 6709](https://github.com/runatlantis/atlantis/pull/6709) |
| 4 | Latest non-prerelease is v0.47.1, published August 20, 2026; checked with GitHub releases/latest API. | [v0.47.1 release](https://github.com/runatlantis/atlantis/releases/tag/v0.47.1) |
| 4 | v0.47.1 fixes PR-controlled workspace command injection during planning. Advisory affected range >=0.4.0 through 0.47.0; patched 0.47.1. No claim the patch removes the trusted-code threat model. | [GHSA-rjh2-4xgw-p2hj](https://github.com/runatlantis/atlantis/security/advisories/GHSA-rjh2-4xgw-p2hj), [PR 6792](https://github.com/runatlantis/atlantis/pull/6792) |
| 5 | CNCF Sandbox; accepted June 18, 2024. Apache License 2.0. | [CNCF project page](https://www.cncf.io/projects/atlantis/), [LICENSE](https://github.com/runatlantis/atlantis/blob/fb235157074a25b8fb4bdbf6f43f9eb4f528f6bb/LICENSE) |
| 5 | Homepage, getting-started guide and contribution guide are the next steps. | [Homepage](https://www.runatlantis.io/), [Guide](https://www.runatlantis.io/guide), [Contributing](https://github.com/runatlantis/atlantis/blob/main/CONTRIBUTING.md) |

## Researched and intentionally omitted

- GitHub, GitLab, Bitbucket Cloud/Server, Gitea, Azure DevOps are listed in [Requirements](https://www.runatlantis.io/docs/requirements). No feature-parity claim; the host matrix would distract from the workflow.
- `depends_on`, execution ordering, parallel plan/apply and automatic discovery are documented in [repository configuration](https://www.runatlantis.io/docs/repo-level-atlantis-yaml). No YAML on stage.
- [Terraform Cloud/Enterprise interoperability](https://www.runatlantis.io/docs/terraform-cloud) is supported subject to backend/workspace configuration. Omitted from the lightning narrative.
- Drift detection/remediation APIs require external callers and configuration; API schemas are alpha. No automatic continuous-reconciliation promise.
- No 1.0 release or roadmap-date claim. Current release activity is a better supported signal.
- Existing official docs contain screenshots and the repository contains historical blog material. Neither improves readability over a large reconstructed PR.

## Conference verification

[Official 2026 schedule](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/) lists the exact accepted title: **Project Lightning Talk: Atlantis: Terraform Pull Request Automation for Cloud Native Teams**, Rui Chen, **September 8, 11:35–11:40, 5B + C**. Times are China Standard Time (UTC+8). Atlantis is the fifth project talk after opening remarks; Karmada precedes it and OpenKruise follows it.

The schedule labels this session **Chinese**. The requested deliverables remain English. Rui needs to reconcile that language label with the organizers; no schedule edit or organizer message has been made.

[Official event homepage](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/) and [LF announcement](https://www.linuxfoundation.org/press/kubecon-cloudnativecon-openinfra-summit-and-pytorch-conference-unite-in-china-to-scale-ai) include September 7 co-located activities. The main conference is September 8–9; title slide shows the talk date, September 8. Venue: Shanghai International Convention Center.

The apparent 2026 speaker-guide URL returned archived 2023 content, including a 2023 template and September 22 deadline. The generic LF China speaker-guide path redirected to another event. These are **not valid 2026 requirements**. Old rules requiring both English and Chinese PDFs, Sched uploads, or an optional template were not applied to this deck.

The organizer correspondence below establishes the template, 16:9 format, laptop/HDMI requirements and initial upload deadline. Remaining conference questions: the schedule's Chinese language label, the final project-talk submission route, and any template-specific restrictions that become visible when the file arrives. There is no live demo, video or animation in this deck.

## Artwork provenance

Official Atlantis assets are from [CNCF artwork](https://github.com/cncf/artwork/tree/04ac5bd4fe2186a14526e241b1229d633b6e7872/projects/atlantis): `icon/color/atlantis-icon-color.svg` and `horizontal/white/atlantis-horizontal-white.svg`. Copied without redrawing or distortion. Their original SVGs are retained in assets. Palette accents derive from the official icon's turquoise colors. Brand marks remain their owners' property; use identifies the project being discussed. QR encodes the official homepage directly, without tracking.


## Organizer correspondence supersedes old web guidance

The June 15, 2026 “Next Steps for Breakout” message supplies the official `China_-_Branded_PowerPoint.pptx` attachment. Its attachment metadata is verified; the Gmail connector cannot retrieve its application/octet-stream MIME type. The file itself is pending from Rui and must be inspected before use. This is the selected template, not the 2023 public template.

That message confirms 16:9 slides, the speaker's own laptop and HDMI adapter, presentation in Light Mode, and a September 2 PDF upload deadline through Sessionize for attendee access. The later “Final Project Lightning Talk Details” message specifies **3–5 slides**, a five-minute talk, arrival 15 minutes early, and speaker check-in at the back of room 5BC followed by reserved stage-right seating. The content draft has therefore been consolidated to five slides. The later message supplies a project-presentation upload route managed by the CNCF team, while referring to Sched; the public 2026 schedule uses Sessionize. The correct final submission route should be confirmed using the organizer's latest message. Private correspondence, registration details and private upload links are not copied into this repository.
