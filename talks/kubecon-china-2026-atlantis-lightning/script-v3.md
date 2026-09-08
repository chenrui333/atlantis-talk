# 中文演讲稿 / Chinese speaker notes

English slides · 中文讲述 · Rui Chen · 2026-09-08
目标 4:55；硬上限 5:00。只朗读正文，提示与技术参考不朗读。

## 1 — Atlantis

目标：0:00–0:25（25 秒）
提示：先定义项目；不要展开个人介绍。

大家好，我是 Rui，Atlantis 的维护者。Atlantis 是一个开源服务，让团队在拉取请求里完成 Terraform 和 OpenTofu 的计划与执行。今天只记住一句话：基础设施变更，也应该在代码评审里完成。

转场：说完正文后换页。

超时可删：无；保留这页核心内容。

技术参考（不朗读）：C01: Atlantis definition; C02: maintainer identity.

## 2 — The pull request becomes the workflow.

目标：0:25–1:35（70 秒）
提示：沿图走一遍；在评审和执行条件处停顿。

很多团队已经把基础设施代码放进 Git，也有自动化流水线。但代码评审、执行计划和实际操作，有时仍然分散在不同地方。Atlantis 把这些步骤连在一起。开发者提交拉取请求，Git 平台通过 webhook 通知 Atlantis。它调用 Terraform 或 OpenTofu 生成计划，再把结果贴回请求。大家一起评审代码和计划，有权限的人发出 atlantis apply。Atlantis 检查配置好的执行条件，再执行变更、回传结果。这里要分清职责：Atlantis 负责组织流程，底层工具负责调用云 API 和管理状态。你也可以用通用 CI 自己搭；Atlantis 把项目识别、计划、执行和锁定这些专用流程打包好了。

转场：说完正文后换页。

超时可删：你也可以用通用 CI 自己搭；Atlantis 把项目识别、计划、执行和锁定这些专用流程打包好了。

技术参考（不朗读）：C01/C05/C06: Atlantis orchestrates VCS interaction, affected-project workflows, command requirements and reporting. Terraform/OpenTofu handles provider APIs and remote state/backend operations. The diagram combines plan and apply result arrows; they are separate events.

## 3 — One change. One PR conversation.

目标：1:35–2:30（55 秒）
提示：读懂一项变更；不要复述架构。

看一个数据库扩容的例子。机器人说：不新增、不销毁，只修改一个资源。但变更小，不代表风险小。评审者还要看完整计划，确认是否重建实例、是否影响服务。批准之后，工程师直接在评论里请求执行，结果也留在同一段对话中。执行失败，就在原请求里修正。这个例子是在合并之前执行。对平台团队来说，价值是计划和结果可见，执行与凭据集中管理，开发者可以提议变更，平台规则控制如何执行。锁定机制帮助协调并发变更，但集中执行仍然需要可信仓库和合理权限。

转场：说完正文后换页。

超时可删：执行失败，就在原请求里修正。

技术参考（不朗读）：C18: Provider credentials are supplied to the Atlantis execution environment; this does not assert that all developer credentials disappear. Repo/server configuration controls requirements. Atlantis locks a directory/workspace across PRs; this is separate from Terraform state locking. Plan execution also needs trusted repositories and restricted permissions.

## 4 — Atlantis in the IaC ecosystem

目标：2:30–4:15（105 秒）
提示：先分清 Git 接入与云 Provider；再指出调查年份和样本量。

它也不是只服务于 GitHub 的机器人。比如企业自建的 GitLab，以及 Gitea 和兼容的 Forgejo，都在官方支持范围内。Gitee 没有列在官方支持清单里，不能因为同样使用 Git，就默认接口兼容。云厂商是另一层：通过对应的 Provider，可以管理阿里云、腾讯云等基础设施。这不是 Atlantis 自带两套云接口，而是由 Terraform 或 OpenTofu 调用相应工具；具体版本、资源支持和凭据仍要按 Provider 文档配置。Atlantis 本身可以用 Helm、容器或二进制部署，运行在 Kubernetes 上，并不意味着只能管理 Kubernetes。团队也能用自定义工作流接入 Terragrunt，或用 Conftest 做策略检查、Infracost 提供成本信息；这些都需要配置。右边是项目二〇二四年的调查，收到三百五十四份回复：GitHub 最多，GitLab 也有相当一部分；Terraform 占主导，约一半还使用 Terragrunt。这是历史社区反馈，不是市场份额。工具组合可以不同，拉取请求里的协作方式可以一致。

转场：说完正文后换页。

超时可删：Gitee 没有列在官方支持清单里，不能因为同样使用 Git，就默认接口兼容。 团队也能用自定义工作流接入 Terragrunt，或用 Conftest 做策略检查、Infracost 提供成本信息；这些都需要配置。

技术参考（不朗读）：P01–P07, S01–S05, CN01–CN03 in sources.md. Git provider support and cloud resource providers are separate interfaces. Alibaba Cloud/Tencent Cloud are provider examples, not an Atlantis-maintained compatibility promise. Gitee is not listed in official requirements; no absolute claim about every external plugin/fork is made. The 1.0 draft proposal remains reference-only in the ten-slide deck.

## 5 — Infrastructure is code.

目标：4:15–4:55（40 秒）
提示：指向参与链接和展台信息；说完后保持这一页。

欢迎从文档开始，也欢迎来贡献代码、文档，或者分享你们在中国团队里的使用经验。社区每两周有一次会议，议程和日历链接都在这里。周二十点半到下午两点半，Atlantis 在 Grand Ballroom One 的 T 十展台，欢迎来交流。基础设施就是代码。先计划，再评审，再执行。都在拉取请求里完成。

转场：保持结尾页。

超时可删：社区每两周有一次会议，议程和日历链接都在这里。

技术参考（不朗读）：E03: Project Pavilion T-10, Tuesday September 8, 10:30–14:30, Grand Ballroom I. The slot extends into afternoon. This does not promise Rui is continuously present during the whole pavilion slot. Community meetings: every two weeks on Wednesday at 16:00 UTC. Official agenda/notes and calendar access: https://docs.google.com/document/d/1EzseHmT4Zarj-_7MO8ud5mHByIJGIHS7JdoNNK9ZckU/edit (verified against the public document and official v0.37.0 release announcement).

## 紧急四分钟版

同样五页，只删以下句子，不加快语速。

- 第 2 页：删去「你也可以用通用 CI 自己搭；Atlantis 把项目识别、计划、执行和锁定这些专用流程打包好了。」
- 第 3 页：删去「执行失败，就在原请求里修正。」
- 第 4 页：删去「Gitee 没有列在官方支持清单里，不能因为同样使用 Git，就默认接口兼容。」
- 第 4 页：删去「团队也能用自定义工作流接入 Terragrunt，或用 Conftest 做策略检查、Infracost 提供成本信息；这些都需要配置。」
- 第 5 页：删去「社区每两周有一次会议，议程和日历链接都在这里。」

### 四分钟版全文

**第 1 页** 大家好，我是 Rui，Atlantis 的维护者。Atlantis 是一个开源服务，让团队在拉取请求里完成 Terraform 和 OpenTofu 的计划与执行。今天只记住一句话：基础设施变更，也应该在代码评审里完成。

**第 2 页** 很多团队已经把基础设施代码放进 Git，也有自动化流水线。但代码评审、执行计划和实际操作，有时仍然分散在不同地方。Atlantis 把这些步骤连在一起。开发者提交拉取请求，Git 平台通过 webhook 通知 Atlantis。它调用 Terraform 或 OpenTofu 生成计划，再把结果贴回请求。大家一起评审代码和计划，有权限的人发出 atlantis apply。Atlantis 检查配置好的执行条件，再执行变更、回传结果。这里要分清职责：Atlantis 负责组织流程，底层工具负责调用云 API 和管理状态。

**第 3 页** 看一个数据库扩容的例子。机器人说：不新增、不销毁，只修改一个资源。但变更小，不代表风险小。评审者还要看完整计划，确认是否重建实例、是否影响服务。批准之后，工程师直接在评论里请求执行，结果也留在同一段对话中。这个例子是在合并之前执行。对平台团队来说，价值是计划和结果可见，执行与凭据集中管理，开发者可以提议变更，平台规则控制如何执行。锁定机制帮助协调并发变更，但集中执行仍然需要可信仓库和合理权限。

**第 4 页** 它也不是只服务于 GitHub 的机器人。比如企业自建的 GitLab，以及 Gitea 和兼容的 Forgejo，都在官方支持范围内。云厂商是另一层：通过对应的 Provider，可以管理阿里云、腾讯云等基础设施。这不是 Atlantis 自带两套云接口，而是由 Terraform 或 OpenTofu 调用相应工具；具体版本、资源支持和凭据仍要按 Provider 文档配置。Atlantis 本身可以用 Helm、容器或二进制部署，运行在 Kubernetes 上，并不意味着只能管理 Kubernetes。右边是项目二〇二四年的调查，收到三百五十四份回复：GitHub 最多，GitLab 也有相当一部分；Terraform 占主导，约一半还使用 Terragrunt。这是历史社区反馈，不是市场份额。工具组合可以不同，拉取请求里的协作方式可以一致。

**第 5 页** 欢迎从文档开始，也欢迎来贡献代码、文档，或者分享你们在中国团队里的使用经验。周二十点半到下午两点半，Atlantis 在 Grand Ballroom One 的 T 十展台，欢迎来交流。基础设施就是代码。先计划，再评审，再执行。都在拉取请求里完成。

全文：794 个汉字，46 个英文词项。约 922 个发音单位。
计划：4:55，安全余量 5 秒。中文稿不使用英文空格分词或英文 wpm 估时。
