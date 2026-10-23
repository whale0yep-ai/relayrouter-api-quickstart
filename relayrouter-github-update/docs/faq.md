# 常见问题

[返回首页](../README.md) · [快速开始](quickstart.md) · [排错指南](troubleshooting.md)

## 在哪里注册？

[注册 RelayRouter](https://api.relayrouter.ai/register?aff=xc9N)。链接包含推荐参数 `aff=xc9N`；也可使用 [普通注册入口](https://api.relayrouter.ai/register)。

## 注册后一定可以免费调用吗？

不要假设注册赠送额度。先登录检查余额、额度和当前规则；调用可能产生费用，具体以所选模型和平台计费页面为准。

## 在哪里看价格、充值和用量？

模型及价格入口：[模型与价格](https://api.relayrouter.ai/pricing)。登录后在控制台查看账户余额、充值入口与用量记录。充值前确认支付方式、到账及退款规则；遇到不清楚的条件先联系 [平台支持](https://api.relayrouter.ai/customersupport)，不要依赖旧文章中的金额或优惠。

## 在哪里创建 API Key、查模型名称？

在控制台的 API Key 或令牌管理页面创建密钥。从当前模型列表复制 API 标识，不能直接使用 `your_model_name`，也不要默认显示名称与 API 标识相同。

## 为什么填写 `.env` 后仍提示未配置？

Python 会加载根目录 `.env`；JavaScript 必须使用带 `--env-file=.env` 的命令；PowerShell 示例只读取当前终端的 `$env:` 变量。Python 和 JavaScript 中，已经设置的进程环境变量优先于 `.env`。请按 [快速开始](quickstart.md) 选择对应方法。

## 是完整的 OpenAI 替代实现吗？

不能由这个示例仓库作此推断。示例仅覆盖 `/v1/chat/completions` 的非流式文本请求；其他接口、参数和功能须按平台及具体模型确认。

## 可以把示例放到网页里直接运行吗？

不要将 API Key 放入公开前端代码。示例用于本地终端或服务端；网页应用应通过你自己的服务端管理密钥和请求权限。

## 问题应该发在哪里？

账号、支付、充值、模型权限与服务故障请联系 [平台支持](https://api.relayrouter.ai/customersupport)。示例或文档问题可提交 [GitHub Issue](https://github.com/whale0yep-ai/relayrouter-api-quickstart/issues)，只附带脱敏信息，不要上传 `.env`、完整密钥或付款凭证。
