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

<p align="center">
  <img src="./assets/relayrouter-hero-ja.png" alt="RelayRouter API クイックスタート" width="100%">
</p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="relayrouter.app で登録" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="relayrouter.ai で登録" height="48"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/API-OpenAI%20compatible-2563eb" alt="OpenAI 互換 API">
  <img src="https://img.shields.io/badge/Python-3.9%2B-3776ab" alt="Python 3.9+">
  <img src="https://img.shields.io/badge/JavaScript-Node.js-f7df1e" alt="Node.js">
  <img src="https://img.shields.io/badge/PowerShell-7%2B-5391fe" alt="PowerShell 7+">
</p>

> 💡 <strong>ヒント：</strong>外部アカウントでログインできます。登録ページ下部の Sign in を選び、ログインページで GitHub、Google、または Linux DO のアイコンを選択してください。

<!-- relayrouter-announcements:start -->
> [!IMPORTANT]
> **最新のお知らせ · 自動同期**
>
> RelayRouter の最新のお知らせ 5 件：
>
> - `2026-11-16 21:24 (UTC+8)` — モデルのアップロード：hy4-flash
> - `2026-11-15 10:46 (UTC+8)` — 通知：gpt-6-luna codexリソースが不足しているため、一時的にこのモデルのcodexリソースグループを下架しました
> - `2026-11-13 22:12 (UTC+8)` — モデルのアップロード：gemini-4-hydrogen
> - `2026-11-12 18:11 (UTC+8)` — 通知：deepseek-1グループリソースのメンテナンス中、一時的にオフライン、復旧等の通知
> - `2026-11-12 17:29 (UTC+8)` — 通知：jevシリーズモデルはメンテナンス中で、一時的にオフラインです。復旧などの通知； Qwen/Qwen3-Reranker-0.6B、BAAI/bge-reranker-v2-m3、Pro/BAAI/bge-reranker-v2-m3、netease-youdao/bce-reranker-base_v1は北京時間2026/11/12 23:59:59にオフラインになります
>
> [RelayRouter ですべてのお知らせを見る →](https://relayrouter.app/register?aff=xc9N)
<!-- relayrouter-announcements:end -->

## RelayRouter を選ぶ理由

RelayRouter は複数のモデルプロバイダーを単一の OpenAI 互換 API で利用できるようにし、重複する連携作業を減らします。

| 機能 | メリット |
| --- | --- |
| 統一 API 形式 | GPT、Claude、Gemini、DeepSeek、Qwen などの対応モデルを同じ形式で呼び出せます。 |
| 従量課金 | RelayRouter コンソールに記録された実際の利用量に基づく料金です。 |
| 一元管理 | API キー、モデル、利用量、請求を一か所で管理します。 |
| 組織の一元管理 | 組織の作成、メンバー招待、残高配分、メンバー利用量と振替履歴の確認ができます。 |
| 柔軟な接続先 | クライアントが別の `BASE_URL` 形式を求める場合、案内されたアドレスを順番に試せます。 |

## 何を行いたいですか？

目的を選ぶと、該当する手順へ直接移動できます。ページ全体を最初から読む必要はありません。

| 目的 | 目的 |
| --- | --- |
| **[最初の API 呼び出し →](#first-api-call)**<br><sub>約 5 分 · API キー → BASE_URL → 最初のリクエスト</sub> | **[コード交換と残高確認 →](#redeem-code)**<br><sub>約 2 分 · クレジットを交換して残高を確認</sub> |
| **[チーム・組織管理 →](#organization-management)**<br><sub>約 8 分 · 作成 → 招待 → 配分 → 利用量確認</sub> | **[クライアント接続 →](#client-integration)**<br><sub>ChatGPT、Claude、Cherry Studio、Gemini、DeepSeek Harness</sub> |

## 基本チュートリアル

<a id="first-api-call"></a>
<details open>
<summary><strong>🔑 API キーの作成と最初のリクエスト</strong></summary>

1. [relayrouter.app](https://relayrouter.app/register?aff=xc9N) または [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N) で登録します。
2. RelayRouter コンソールの **API トークン**を開き、新しいキーを作成してコピーします。
3. ローカル環境変数ファイルを作成します。

   ```bash
   cp .env.example .env
   ```

4. `.env` を編集します。

   ```dotenv
   RELAYROUTER_API_KEY=your_api_key_here
   RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
   RELAYROUTER_MODEL=your_model_name
   ```

5. 付属の Python サンプルを実行します。

   ```bash
   python -m pip install -r requirements.txt
   python examples/python/chat.py
   ```

</details>

<a id="redeem-code"></a>
<details>
<summary><strong>🎁 コード交換と残高確認</strong></summary>

1. RelayRouter コンソールにログインします。
2. アカウントまたは資金関連の画面からコード交換画面を開きます。
3. アカウント情報を確認してコードを入力し、送信します。
4. 資金口座に戻り、残高または取引履歴が更新されたことを確認します。

</details>

<a id="organization-management"></a>
<details>
<summary><strong>👥 組織メンバーと利用量の管理</strong></summary>

1. コンソールの **マイ組織**を開き、組織を作成または参加します。
2. **メンバーを招待**を選択し、対象アカウントへ招待を送ります。
3. メンバー一覧から残高を配分または振り替えます。
4. **利用量**と**振替履歴**で消費量と残高移動を確認します。

> 信頼できるアカウントにのみ組織権限と残高を付与してください。

</details>

<a id="client-integration"></a>
## クライアント接続チュートリアル

クライアントによってベース URL または完全な chat-completions アドレスが必要です。まず `https://api.relayrouter.app/v1` を使用し、形式が異なる場合は[クイックリファレンス](#quick-reference)を確認してください。

<details>
<summary><strong>ChatGPT ショートカット</strong></summary>

ショートカットのプロバイダー設定でカスタムまたは OpenAI 互換を選び、RelayRouter の API キーと接続先を入力して対応モデルを選択します。

</details>

<details>
<summary><strong>Claude ショートカット</strong></summary>

ショートカットのプロバイダー設定でカスタムまたは OpenAI 互換を選び、RelayRouter の API キーと接続先を入力して対応モデルを選択します。

</details>

<details open>
<summary><strong>Cherry Studio</strong></summary>

**API エンドポイント：** `https://api.relayrouter.app/v1`

1. Cherry Studio にカスタム OpenAI 互換プロバイダーを追加します。
2. `BASE_URL` と RelayRouter API キーを入力します。
3. 対応モデルを追加し、設定を保存してテストメッセージを送ります。

</details>

<details>
<summary><strong>Gemini</strong></summary>

RelayRouter 経由で Gemini モデルを使うには、カスタム OpenAI 互換プロバイダーに RelayRouter の接続先とキーを設定し、対応する Gemini モデル識別子を選択します。

</details>

<details>
<summary><strong>DeepSeek Harness</strong></summary>

Harness のプロバイダーを OpenAI 互換に設定し、RelayRouter の `BASE_URL` と API キーを入力して、対応する DeepSeek モデルで接続テストを行います。

</details>

<a id="quick-reference"></a>
## クイックリファレンス

クライアントによって必要な `BASE_URL` 形式が異なる場合があります。次の順に試してください。

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

このリポジトリの SDK サンプルは、既定で `https://api.relayrouter.app/v1` を使用します。クライアントがベース URL ではなくチャット補完の完全なアドレスを要求する場合は、3 番目を使用してください。

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

## サポートグループに参加

下の QR コードを読み取ってサポート担当を追加してください。ユーザーグループへご招待します。今後、利用方法、設定、連携に関する質問はグループ内で直接お問い合わせいただけます。

<p align="center">
  <img src="./assets/customer-service-qr.jpg" alt="WeCom サポートの QR コード" width="400">
</p>

</div>
