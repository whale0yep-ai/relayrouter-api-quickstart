# 快速开始

[返回首页](../README.md) · [常见问题](faq.md) · [排错指南](troubleshooting.md)

## 1. 注册、确认费用并创建密钥

1. [注册 RelayRouter](https://api.relayrouter.ai/register?aff=xc9N) 并登录。该链接包含推荐参数；也可选择 [普通注册入口](https://api.relayrouter.ai/register)。
2. 查看 [模型与价格](https://api.relayrouter.ai/pricing)，复制当前可用的模型 API 标识。
3. 检查余额和可用额度。若需要充值，先确认计费、支付和到账规则，再按需充值。本文不承诺免费额度、最低充值额或退款条件。
4. 在控制台创建 API Key，勿将密钥公开。

遇到账号或支付问题，使用 [平台支持入口](https://api.relayrouter.ai/customersupport)。

## 2. 获取示例

安装 Git 后执行；也可在仓库首页选择 **Code → Download ZIP**，解压后在项目目录打开终端。

```text
git clone https://github.com/whale0yep-ai/relayrouter-api-quickstart.git
cd relayrouter-api-quickstart
```

以下命令均从项目根目录执行。**只选择一种语言即可。**

推荐环境为 Python 3.11+、Node.js 22+ 或 PowerShell 7+。这些是本说明的目标环境，不代表所有版本均完成了真实 API 验证；本次文档更新未进行付费请求验证。

## 3. Python

先复制根目录的环境模板：

Windows PowerShell：

```powershell
Copy-Item .env.example .env
```

macOS / Linux：

```bash
cp .env.example .env
```

用本地编辑器打开 `.env`，替换两个占位符：

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.ai/v1
RELAYROUTER_MODEL=your_model_name
```

不要提交 `.env`。已设置的进程环境变量优先于该文件；若更换密钥或模型后仍使用旧值，检查当前终端的环境配置。

Windows PowerShell，无须激活虚拟环境：

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe examples\python\chat.py
```

macOS / Linux：

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python examples/python/chat.py
```

## 4. JavaScript

准备 Node.js 22+，按上节复制并填写根目录 `.env`，然后执行：

```text
node --env-file=.env examples/javascript/chat.mjs
```

该示例使用 Node.js 内置请求能力，无须安装 npm 依赖。命令中的 `--env-file` 不能省略，除非你已在当前终端设置三个进程环境变量。进程环境变量优先于 `.env`。

## 5. PowerShell

准备 PowerShell 7+。该示例**不会读取 `.env`**，请在同一终端设置变量后运行：

```powershell
$env:RELAYROUTER_API_KEY = "your_api_key_here"
$env:RELAYROUTER_BASE_URL = "https://api.relayrouter.ai/v1"
$env:RELAYROUTER_MODEL = "your_model_name"
.\examples\powershell\request.ps1
```

先替换占位符再执行。密钥可能留在终端历史中，不要录屏或分享包含密钥的命令；请按使用环境的安全规范管理历史与凭证。环境变量仅对当前进程和其子进程生效。

## 6. 判断是否成功

终端应输出一段非空的自然语言回复，具体内容每次可能不同。脚本使用 60 秒请求超时；Python 示例关闭 SDK 自动重试，避免首次接入时不易理解的重复尝试。

输出报错、`undefined` 或空内容均不应视为成功。参见 [排错指南](troubleshooting.md)。本仓库只演示非流式文本聊天，不代表其他功能也已验证。

## 7. 继续使用

成功后在控制台核对用量与余额，再将配置集成到自己的服务端项目。按需充值并留意当前模型价格；不要在浏览器前端暴露 API Key。

还没有账号？[注册并开始使用](https://api.relayrouter.ai/register?aff=xc9N)。
