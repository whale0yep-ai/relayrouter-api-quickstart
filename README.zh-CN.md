<div lang="zh-CN" translate="no">

<p align="center">
  <strong><a lang="zh-CN" translate="no" href="./README.zh-CN.md">中文 (ZH)</a></strong>
  &nbsp;|&nbsp;
  <a lang="en" translate="no" href="./README.md">English (EN)</a>
  &nbsp;|&nbsp;
  <a lang="ru" translate="no" href="./README.ru.md">Русский (RU)</a>
  &nbsp;|&nbsp;
  <a lang="ko" translate="no" href="./README.ko.md">한국어 (KO)</a>
  &nbsp;|&nbsp;
  <a lang="ja" translate="no" href="./README.ja.md">日本語 (JA)</a>
  &nbsp;|&nbsp;
  <a lang="es" translate="no" href="./README.es.md">Español (ES)</a>
  &nbsp;|&nbsp;
  <a lang="de" translate="no" href="./README.de.md">Deutsch (DE)</a>
  &nbsp;|&nbsp;
  <a lang="id" translate="no" href="./README.id.md">Bahasa Indonesia (ID)</a>
</p>

<p align="center"><sub>当前语言：中文（ZH）。如果正文仍显示为其他语言，请关闭浏览器对 github.com 的自动翻译。</sub></p>

<h1 align="center">RelayRouter API 快速开始</h1>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="通过 relayrouter.app 注册" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="通过 relayrouter.ai 注册" height="48"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/API-兼容%20OpenAI-2563eb" alt="兼容 OpenAI API">
  <img src="https://img.shields.io/badge/Python-3.9%2B-3776ab" alt="Python 3.9+">
  <img src="https://img.shields.io/badge/JavaScript-Node.js-f7df1e" alt="Node.js">
  <img src="https://img.shields.io/badge/PowerShell-7%2B-5391fe" alt="PowerShell 7+">
</p>

> 💡 <strong>提示：</strong>支持第三方账号登录。进入注册页面后点击底部的 Sign in，在登录页面选择 GitHub、Google 或 Linux DO 图标，即可使用对应账号登录。

> ℹ️ <strong>说明：</strong>上方注册链接包含推荐码 `aff=xc9N`。注册可能会计入本仓库作者的推广记录，但不会改变你的服务价格。

## 为什么选择 RelayRouter？

RelayRouter 用一套兼容 OpenAI 的 API 连接多个模型服务商，让你少做重复接入，把更多时间留给产品。

| 能力 | 带来的好处 |
| --- | --- |
| 统一 API 格式 | 用熟悉的调用方式访问 GPT、Claude、Gemini、DeepSeek、Qwen 等已支持模型。 |
| 按量计费 | 按 RelayRouter 控制台记录的实际用量付费。 |
| 集中管理 | 在一个控制台管理 API 密钥、模型权限、用量与账单。 |
| 灵活连接地址 | 当不同客户端要求不同的 `BASE_URL` 格式时，可按顺序尝试文档中的地址。 |

## 5 分钟快速开始

### 1. 注册并创建 API 密钥

可选择以下任一注册页面：

- [relayrouter.app](https://relayrouter.app/register?aff=xc9N)
- [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)

注册后，在 RelayRouter 控制台创建 API 密钥。

### 2. 选择连接地址

不同客户端可能需要使用不同的 `BASE_URL`，建议依次尝试以下地址：

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

本仓库中的 SDK 示例默认使用 `https://api.relayrouter.app/v1`。如果客户端要求填写完整的聊天补全接口，而不是基础地址，请使用第三个地址。

### 3. 配置项目

```bash
cp .env.example .env
```

编辑 `.env`：

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
RELAYROUTER_MODEL=your_model_name
```

### 4. 发起请求

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

最小 Python 示例：

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["RELAYROUTER_API_KEY"],
    base_url=os.getenv("RELAYROUTER_BASE_URL", "https://api.relayrouter.app/v1"),
)

response = client.chat.completions.create(
    model=os.environ["RELAYROUTER_MODEL"],
    messages=[{"role": "user", "content": "你好，RelayRouter！"}],
)

print(response.choices[0].message.content)
```

## 可直接运行的示例

| 语言 | 文件 | 运行命令 |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## 文档与帮助

- [详细快速开始](./docs/quickstart.md)
- [常见问题](./docs/faq.md)
- [故障排查](./docs/troubleshooting.md)
- [安全政策](./SECURITY.md)

## 安全提示

不要把 API 密钥提交到 Git。请将密钥保存在 `.env` 或部署平台的密钥管理器中；仓库内的 `.gitignore` 已默认忽略 `.env`。

<p align="center"><strong>一个 API 密钥，连接更多模型，减少重复接入。</strong></p>

</div>
