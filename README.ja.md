<div lang="ja" translate="no">

<p align="center">
  <a lang="zh-CN" translate="no" href="./README.zh-CN.md">中文 (ZH)</a>
  &nbsp;|&nbsp;
  <a lang="en" translate="no" href="./README.md">English (EN)</a>
  &nbsp;|&nbsp;
  <a lang="ru" translate="no" href="./README.ru.md">Русский (RU)</a>
  &nbsp;|&nbsp;
  <a lang="ko" translate="no" href="./README.ko.md">한국어 (KO)</a>
  &nbsp;|&nbsp;
  <strong><a lang="ja" translate="no" href="./README.ja.md">日本語 (JA)</a></strong>
  &nbsp;|&nbsp;
  <a lang="es" translate="no" href="./README.es.md">Español (ES)</a>
  &nbsp;|&nbsp;
  <a lang="de" translate="no" href="./README.de.md">Deutsch (DE)</a>
  &nbsp;|&nbsp;
  <a lang="id" translate="no" href="./README.id.md">Bahasa Indonesia (ID)</a>
</p>

<p align="center"><sub>現在の言語：日本語（JA）。本文が別の言語で表示される場合は、github.com の自動翻訳を無効にしてください。</sub></p>

<h1 align="center">RelayRouter API クイックスタート</h1>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="relayrouter.app で登録" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="relayrouter.ai で登録" height="48"></a>
</p>

> 💡 <strong>ヒント：</strong>外部アカウントでログインできます。登録ページ下部の Sign in を選び、ログインページで GitHub、Google、または Linux DO のアイコンを選択してください。

> ℹ️ <strong>注記：</strong>上の登録リンクには紹介コード `aff=xc9N` が含まれています。登録がリポジトリ所有者の実績に反映される場合がありますが、サービス料金は変わりません。

## RelayRouter を選ぶ理由

RelayRouter は複数のモデルプロバイダーを単一の OpenAI 互換 API で利用できるようにし、重複する連携作業を減らします。

| 機能 | メリット |
| --- | --- |
| 統一 API 形式 | GPT、Claude、Gemini、DeepSeek、Qwen などの対応モデルを同じ形式で呼び出せます。 |
| 従量課金 | RelayRouter コンソールに記録された実際の利用量に基づく料金です。 |
| 一元管理 | API キー、モデル、利用量、請求を一か所で管理します。 |
| 柔軟な接続先 | クライアントが別の `BASE_URL` 形式を求める場合、案内されたアドレスを順番に試せます。 |

## 5 分で始める

### 1. 登録して API キーを作成

次の登録ページからいずれかを選択してください。

- [relayrouter.app](https://relayrouter.app/register?aff=xc9N)
- [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)

登録後、RelayRouter コンソールで API キーを作成します。

### 2. 接続アドレスを選択

クライアントによって必要な `BASE_URL` 形式が異なる場合があります。次の順に試してください。

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

このリポジトリの SDK サンプルは、既定で `https://api.relayrouter.app/v1` を使用します。クライアントがベース URL ではなくチャット補完の完全なアドレスを要求する場合は、3 番目を使用してください。

### 3. プロジェクトを設定

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
RELAYROUTER_MODEL=your_model_name
```

### 4. リクエストを実行

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## 実行可能なサンプル

| 言語 | ファイル | 実行コマンド |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## ドキュメントとセキュリティ

- [詳細クイックスタート](./docs/quickstart.md)
- [よくある質問](./docs/faq.md)
- [トラブルシューティング](./docs/troubleshooting.md)
- [セキュリティポリシー](./SECURITY.md)

API キーを Git にコミットしないでください。`.env` またはデプロイ先のシークレット管理に保存してください。

<p align="center"><strong>1 つの API キーで、より多くのモデルを、より少ない連携作業で。</strong></p>

</div>
