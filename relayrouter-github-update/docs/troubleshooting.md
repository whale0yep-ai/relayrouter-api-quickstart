# 排错指南

[返回首页](../README.md) · [快速开始](quickstart.md) · [常见问题](faq.md)

## 先检查本地配置

- 是否从项目根目录执行了对应语言的完整命令？
- Key 和模型是否仍是占位符？
- Base URL 应为 `https://api.relayrouter.ai/v1`，不要重复添加 `/chat/completions`。
- JavaScript 使用 `.env` 时是否带上 `--env-file=.env`？PowerShell 是否在同一终端设置变量？
- 已有进程环境变量是否覆盖了 `.env` 中刚修改的值？

PowerShell 中仅检查是否设置，不输出完整密钥：

```powershell
[bool]$env:RELAYROUTER_API_KEY
[bool]$env:RELAYROUTER_MODEL
```

这个检查只针对进程环境变量，不能判断 Python 或 Node.js 是否会从 `.env` 成功加载配置。

## 401 / 403：鉴权或权限失败

核对密钥是否有效、所属账号及模型访问权限，并确认配置已加载。不要把密钥发给别人验证。若密钥已泄露，先撤销，再创建新密钥。

## 404 / model_not_found

先区分请求地址错误与模型不可用。核对 Base URL，再到 [当前模型列表](https://api.relayrouter.ai/pricing) 复制模型 API 标识并检查权限。不能仅凭 404 就断定是模型问题。

## 429：请求受限

结合实际响应的 `error.code` 和 `error.message` 判断原因，检查额度、限流与服务提示。不要立即循环重试；等待后再尝试，或联系平台支持确认。余额不足的实际状态码以平台响应为准。

## 超时 / 网络错误 / 5xx

检查网络、代理、Base URL 和平台公告。示例设置了 60 秒请求超时。超时不一定代表服务端没有处理请求，重试前可先核对控制台请求与用量记录。

## 请求格式错误 / 没有文本回复

示例要求 `model` 为有效标识，`messages` 为消息数组，并接收非流式文本响应。若返回结构不同、内容为空或功能不受支持，先确认所选模型是否适合此示例；不要把空输出当作成功。

## 安全地求助

示例或文档问题可在 GitHub Issue 中提供：

- 操作系统、运行时版本、示例文件名称。
- 执行命令，但移除密钥和其他凭证。
- HTTP 状态、脱敏后的错误信息。
- 发生时间及请求 ID（响应中如有）。

公开前检查内容，删除 API Key、Authorization 头、密码、验证码、私人提示词与支付信息。不要上传 `.env`。

账号和支付问题请使用 [平台支持入口](https://api.relayrouter.ai/customersupport)，不要在公开 Issue 中提供订单或付款凭证。
