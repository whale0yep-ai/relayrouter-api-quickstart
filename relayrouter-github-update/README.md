<p align="center">
  <img src="assets/relayrouter-logo.png" alt="RelayRouter" width="280">
</p>

<h1 align="center">RelayRouter API Quickstart</h1>

<p align="center">通过 OpenAI 兼容的 API 接入可用 AI 模型。这里提供 Python、JavaScript 和 PowerShell 的基础调用示例与接入说明。</p>

<p align="center">
  <a href="https://api.relayrouter.ai/register?aff=xc9N"><strong>注册并开始使用 →</strong></a>
  &nbsp;·&nbsp;
  <a href="docs/quickstart.md">查看接入教程</a>
  &nbsp;·&nbsp;
  <a href="https://api.relayrouter.ai/pricing">模型与价格</a>
</p>

> 注册链接包含推荐参数 `aff=xc9N`。如不希望使用带推荐参数的链接，可访问 [普通注册入口](https://api.relayrouter.ai/register)。模型、价格、支付和服务规则以平台当前页面为准。

## 这个仓库能帮你做什么？

- 了解注册、选择模型、配置密钥到首次请求的接入流程。
- 选择 Python、JavaScript 或 PowerShell，参考一份最小文本聊天示例。
- 根据常见错误检查配置，减少首次接入时的摸索。

这是接入文档和示例仓库，不包含 RelayRouter 服务端源码。示例面向本地终端或服务端，不要把 API Key 放进公开网页、浏览器代码或移动端安装包。

## 从注册到第一次使用

1. **[创建 RelayRouter 账号](https://api.relayrouter.ai/register?aff=xc9N)**，按页面提示完成注册并登录。
2. **查看 [模型与价格](https://api.relayrouter.ai/pricing)**，确认目标模型、API 标识及计费方式。
3. **检查账户余额和额度**。若调用需要可用余额，先阅读充值页的支付、到账与适用规则，再按需充值；不要假设注册即赠送额度。
4. **在控制台创建 API Key**，只保存在本地环境，不要发到 Issue 或截图中。
5. **按 [快速开始](docs/quickstart.md) 运行一种语言的示例**，收到回复后再集成到自己的项目。

充值与支付请在平台内完成。规则不清楚时，请先通过 [平台支持入口](https://api.relayrouter.ai/customersupport) 确认，不要向他人提供密码、验证码或完整 API Key。

## API 地址

```text
https://api.relayrouter.ai/v1
```

客户端以此作为 Base URL；示例调用 `/chat/completions`。模型标识请从平台当前列表复制，不要直接使用文档里的占位符。

## 选择你的示例

| 语言 | 示例 | 配置方式 |
| --- | --- | --- |
| Python | [chat.py](examples/python/chat.py) | 根目录 `.env`，也可使用进程环境变量 |
| JavaScript | [chat.mjs](examples/javascript/chat.mjs) | 使用 `node --env-file=.env`，也可使用进程环境变量 |
| PowerShell | [request.ps1](examples/powershell/request.ps1) | 同一终端设置 `$env:` 变量；不会自动加载 `.env` |

**只需选择一种语言，不必安装全部环境。** 下载、安装和完整执行命令见 [快速开始](docs/quickstart.md)。仅复制 `.env` 不会让所有程序自动读取配置。

## 示例范围与预期结果

当前示例仅演示非流式文本聊天：`POST /v1/chat/completions`。流式输出、工具调用、图片输入及其他 API 不在本仓库示例范围内；是否支持须结合平台与具体模型确认。

成功运行后，终端应输出一段非空的模型回复，具体文字不固定。仓库不承诺固定延迟、最低价格或所有模型永久可用。

## 文档与帮助

- [快速开始](docs/quickstart.md)：获取代码、配置和首次请求。
- [常见问题](docs/faq.md)：模型、费用、充值与用量。
- [排错指南](docs/troubleshooting.md)：配置、网络与 API 错误。
- [平台支持](https://api.relayrouter.ai/customersupport)：账号、支付及服务问题。
- [GitHub Issues](https://github.com/whale0yep-ai/relayrouter-api-quickstart/issues)：本仓库的示例和文档问题，请先脱敏。
- [安全说明](SECURITY.md)：密钥保护与泄露处理。

## 准备开始？

**[注册 RelayRouter](https://api.relayrouter.ai/register?aff=xc9N)** → 查看模型与价格 → 确认额度并按需充值 → 按教程发出第一次请求。
