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

<h1 align="center">RelayRouter API 빠른 시작</h1>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="relayrouter.app에서 가입" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="relayrouter.ai에서 가입" height="48"></a>
</p>

> [!TIP]
> 타사 계정 로그인을 지원합니다. 가입 페이지 하단의 Sign in을 누른 뒤 로그인 페이지에서 GitHub, Google 또는 Linux DO 아이콘을 선택하세요.

> [!NOTE]
> 위 가입 링크에는 추천 코드 `aff=xc9N`이 포함됩니다. 가입 실적이 저장소 소유자에게 반영될 수 있지만 서비스 가격은 변하지 않습니다.

## RelayRouter를 선택하는 이유

RelayRouter는 여러 모델 공급자를 하나의 OpenAI 호환 API로 연결해 반복적인 연동 작업을 줄여 줍니다.

| 기능 | 이점 |
| --- | --- |
| 하나의 API 형식 | 익숙한 방식으로 GPT, Claude, Gemini, DeepSeek, Qwen 등 지원 모델을 호출합니다. |
| 사용량 기반 요금 | RelayRouter 콘솔에 기록된 실제 사용량을 기준으로 결제합니다. |
| 통합 관리 | API 키, 모델 접근, 사용량, 결제를 한곳에서 관리합니다. |
| 유연한 연결 주소 | 클라이언트가 다른 `BASE_URL` 형식을 요구하면 안내된 주소를 순서대로 시도할 수 있습니다. |

## 5분 빠른 시작

### 1. 가입 및 API 키 생성

다음 가입 페이지 중 하나를 선택하세요.

- [relayrouter.app](https://relayrouter.app/register?aff=xc9N)
- [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)

가입 후 RelayRouter 콘솔에서 API 키를 만드세요.

### 2. 연결 주소 선택

클라이언트마다 필요한 `BASE_URL` 형식이 다를 수 있습니다. 다음 주소를 순서대로 시도하세요.

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

이 저장소의 SDK 예제는 기본적으로 `https://api.relayrouter.app/v1`을 사용합니다. 클라이언트가 기본 주소가 아니라 전체 채팅 완성 주소를 요구하면 세 번째 주소를 사용하세요.

### 3. 프로젝트 설정

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
RELAYROUTER_MODEL=your_model_name
```

### 4. 요청 실행

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

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
