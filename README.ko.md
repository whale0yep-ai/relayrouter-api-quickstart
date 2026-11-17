<div lang="ko" translate="no">

<p align="center">
  <a lang="zh-CN" translate="no" href="./README.zh-CN.md">中文 (ZH)</a>
  &nbsp;|&nbsp;
  <a lang="en" translate="no" href="./README.md">English (EN)</a>
  &nbsp;|&nbsp;
  <a lang="ru" translate="no" href="./README.ru.md">Русский (RU)</a>
  &nbsp;|&nbsp;
  <strong><a lang="ko" translate="no" href="./README.ko.md">한국어 (KO)</a></strong>
  &nbsp;|&nbsp;
  <a lang="ja" translate="no" href="./README.ja.md">日本語 (JA)</a>
  &nbsp;|&nbsp;
  <a lang="es" translate="no" href="./README.es.md">Español (ES)</a>
  &nbsp;|&nbsp;
  <a lang="de" translate="no" href="./README.de.md">Deutsch (DE)</a>
  &nbsp;|&nbsp;
  <a lang="id" translate="no" href="./README.id.md">Bahasa Indonesia (ID)</a>
</p>

<p align="center"><sub>현재 언어: 한국어(KO). 본문이 다른 언어로 보이면 github.com 자동 번역을 꺼 주세요.</sub></p>

<p align="center">
  <img src="./assets/relayrouter-hero-ko.png" alt="RelayRouter API 빠른 시작" width="100%">
</p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="relayrouter.app에서 가입" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="relayrouter.ai에서 가입" height="48"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/API-OpenAI%20compatible-2563eb" alt="OpenAI 호환 API">
  <img src="https://img.shields.io/badge/Python-3.9%2B-3776ab" alt="Python 3.9+">
  <img src="https://img.shields.io/badge/JavaScript-Node.js-f7df1e" alt="Node.js">
  <img src="https://img.shields.io/badge/PowerShell-7%2B-5391fe" alt="PowerShell 7+">
</p>

> 💡 <strong>도움말:</strong> 타사 계정 로그인을 지원합니다. 가입 페이지 하단의 Sign in을 누른 뒤 로그인 페이지에서 GitHub, Google 또는 Linux DO 아이콘을 선택하세요.

> [!IMPORTANT]
> **공지 빠른 확인**
>
> RelayRouter 콘솔에 로그인한 뒤 오른쪽 위의 종 아이콘을 누르면 모델 출시, 가격 변경, 일시 장애, 모델 종료 및 이벤트 소식을 확인할 수 있습니다.
>
> [RelayRouter에서 공지 보기 →](https://relayrouter.app/register?aff=xc9N)

## RelayRouter를 선택하는 이유

RelayRouter는 여러 모델 공급자를 하나의 OpenAI 호환 API로 연결해 반복적인 연동 작업을 줄여 줍니다.

| 기능 | 이점 |
| --- | --- |
| 하나의 API 형식 | 익숙한 방식으로 GPT, Claude, Gemini, DeepSeek, Qwen 등 지원 모델을 호출합니다. |
| 사용량 기반 요금 | RelayRouter 콘솔에 기록된 실제 사용량을 기준으로 결제합니다. |
| 통합 관리 | API 키, 모델 접근, 사용량, 결제를 한곳에서 관리합니다. |
| 조직 통합 관리 | 조직을 만들고 구성원을 초대하며 잔액을 배분하고 구성원 사용량과 이체 기록을 확인합니다. |
| 유연한 연결 주소 | 클라이언트가 다른 `BASE_URL` 형식을 요구하면 안내된 주소를 순서대로 시도할 수 있습니다. |

## 무엇을 하시겠습니까?

목표를 선택해 해당 튜토리얼로 바로 이동하세요. 문서 전체를 처음부터 읽을 필요가 없습니다.

| 목표 | 목표 |
| --- | --- |
| **[첫 API 호출 실행 →](#first-api-call)**<br><sub>약 5분 · API 키 → BASE_URL → 첫 요청</sub> | **[코드 교환 및 잔액 확인 →](#redeem-code)**<br><sub>약 2분 · 크레딧 교환 후 계정 잔액 확인</sub> |
| **[팀 또는 조직 관리 →](#organization-management)**<br><sub>약 8분 · 생성 → 초대 → 배분 → 사용량 확인</sub> | **[클라이언트 연결 →](#client-integration)**<br><sub>ChatGPT, Claude, Cherry Studio, Gemini, DeepSeek Harness</sub> |

## 기본 튜토리얼

<a id="first-api-call"></a>
<details open>
<summary><strong>🔑 API 키 생성 및 첫 요청</strong></summary>

1. [relayrouter.app](https://relayrouter.app/register?aff=xc9N) 또는 [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)에서 가입합니다.
2. RelayRouter 콘솔의 **API 토큰**으로 이동해 새 키를 만들고 복사합니다.
3. 로컬 환경 변수 파일을 만듭니다.

   ```bash
   cp .env.example .env
   ```

4. `.env`를 입력합니다.

   ```dotenv
   RELAYROUTER_API_KEY=your_api_key_here
   RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
   RELAYROUTER_MODEL=your_model_name
   ```

5. 포함된 Python 예제를 실행합니다.

   ```bash
   python -m pip install -r requirements.txt
   python examples/python/chat.py
   ```

</details>

<a id="redeem-code"></a>
<details>
<summary><strong>🎁 코드 교환 및 잔액 확인</strong></summary>

1. RelayRouter 콘솔에 로그인합니다.
2. 계정 또는 자금 영역에서 교환 코드 메뉴를 엽니다.
3. 계정 정보를 확인한 뒤 코드를 입력하고 제출합니다.
4. **자금 계정**으로 돌아가 잔액 또는 거래 기록이 갱신되었는지 확인합니다.

</details>

<a id="organization-management"></a>
<details>
<summary><strong>👥 조직 구성원 및 사용량 관리</strong></summary>

1. 콘솔의 **내 조직**에서 조직을 만들거나 참여합니다.
2. **구성원 초대**를 눌러 대상 계정에 초대를 보냅니다.
3. 조직 구성원 목록에서 구성원에게 잔액을 배분하거나 이체합니다.
4. **사용량** 및 **이체 기록** 탭에서 소비량과 잔액 이동을 확인합니다.

> 신뢰할 수 있는 계정에만 조직 권한과 잔액을 제공하세요.

</details>

<a id="model-playground"></a>
<details>
<summary><strong>🧪 연동 전 모델 체험</strong></summary>

1. RelayRouter 콘솔에서 모델 마켓 또는 체험 화면을 엽니다.
2. 지원 모델을 선택해 짧은 테스트 프롬프트를 전송합니다.
3. 응답과 사용량을 확인한 뒤 정확한 모델 식별자를 `RELAYROUTER_MODEL`에 입력합니다.

</details>

<a id="client-integration"></a>
## 클라이언트 연동 튜토리얼

클라이언트에 따라 기본 URL 또는 전체 chat-completions 주소를 요구할 수 있습니다. 먼저 `https://api.relayrouter.app/v1`을 사용하고 형식이 다르면 [빠른 참조](#quick-reference)를 확인하세요.

<details>
<summary><strong>◉ ChatGPT 바로가기</strong></summary>

바로가기의 공급자 설정에서 사용자 지정 또는 OpenAI 호환 공급자를 선택하고 RelayRouter API 키와 주소를 입력한 뒤 지원 모델을 선택합니다.

</details>

<details>
<summary><strong>✳ Claude 바로가기</strong></summary>

바로가기의 공급자 설정에서 사용자 지정 또는 OpenAI 호환 공급자를 선택하고 RelayRouter API 키와 주소를 입력한 뒤 지원 모델을 선택합니다.

</details>

<details open>
<summary><strong>🔴 Cherry Studio</strong></summary>

**API 엔드포인트:** `https://api.relayrouter.app/v1`

1. Cherry Studio에 사용자 지정 OpenAI 호환 공급자를 추가합니다.
2. `BASE_URL`과 RelayRouter API 키를 입력합니다.
3. 지원 모델을 추가하고 설정을 저장한 뒤 테스트 메시지를 보냅니다.

</details>

<details>
<summary><strong>✦ Gemini</strong></summary>

RelayRouter로 Gemini 모델을 사용하려면 사용자 지정 OpenAI 호환 공급자에 RelayRouter 주소와 키를 입력하고 지원되는 Gemini 모델 식별자를 선택합니다.

</details>

<details>
<summary><strong>🐋 DeepSeek Harness</strong></summary>

Harness 공급자를 OpenAI 호환 엔드포인트로 설정하고 RelayRouter `BASE_URL`과 API 키를 입력한 뒤 지원 DeepSeek 모델로 연결을 테스트합니다.

</details>

<a id="quick-reference"></a>
## 빠른 참조

클라이언트마다 필요한 `BASE_URL` 형식이 다를 수 있습니다. 다음 주소를 순서대로 시도하세요.

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

이 저장소의 SDK 예제는 기본적으로 `https://api.relayrouter.app/v1`을 사용합니다. 클라이언트가 기본 주소가 아니라 전체 채팅 완성 주소를 요구하면 세 번째 주소를 사용하세요.

## 실행 가능한 예제

| 언어 | 파일 | 실행 명령 |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## 문서 및 보안

- [상세 빠른 시작](./docs/quickstart.md)
- [자주 묻는 질문](./docs/faq.md)
- [문제 해결](./docs/troubleshooting.md)
- [보안 정책](./SECURITY.md)

API 키를 Git에 커밋하지 마세요. `.env` 또는 배포 플랫폼의 비밀 관리자에 보관하세요.

<p align="center"><strong>하나의 API 키로 더 많은 모델을 더 간단하게.</strong></p>

</div>
