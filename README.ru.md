<div lang="ru" translate="no">

<p align="center">
  <a lang="zh-CN" translate="no" href="./README.zh-CN.md">中文 (ZH)</a>
  &nbsp;|&nbsp;
  <a lang="en" translate="no" href="./README.md">English (EN)</a>
  &nbsp;|&nbsp;
  <strong><a lang="ru" translate="no" href="./README.ru.md">Русский (RU)</a></strong>
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

<p align="center"><sub>Текущий язык: Русский (RU). Если текст отображается на другом языке, отключите автоматический перевод для github.com.</sub></p>

<h1 align="center">Быстрый старт с RelayRouter API</h1>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Регистрация на relayrouter.app" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Регистрация на relayrouter.ai" height="48"></a>
</p>

> [!TIP]
> Поддерживается вход через сторонние сервисы. На странице регистрации нажмите Sign in внизу, затем выберите значок GitHub, Google или Linux DO.

> [!NOTE]
> Ссылки регистрации содержат реферальный код `aff=xc9N`. Регистрация может быть засчитана владельцу репозитория, но цена сервиса для вас не изменится.

## Почему RelayRouter?

RelayRouter предоставляет единый API, совместимый с OpenAI, для работы с несколькими поставщиками моделей и сокращает повторяющуюся работу по интеграции.

| Возможность | Преимущество |
| --- | --- |
| Единый формат API | GPT, Claude, Gemini, DeepSeek, Qwen и другие поддерживаемые модели через знакомый интерфейс. |
| Оплата по использованию | Оплата фактического использования, записанного в консоли RelayRouter. |
| Централизованное управление | Ключи, модели, расход и оплата в одном месте. |
| Гибкие адреса подключения | Если клиент ожидает другой формат `BASE_URL`, адреса можно проверить по порядку. |

## Быстрый старт за 5 минут

### 1. Регистрация и создание API-ключа

Выберите любую страницу регистрации:

- [relayrouter.app](https://relayrouter.app/register?aff=xc9N)
- [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)

После регистрации создайте API-ключ в консоли RelayRouter.

### 2. Выбор адреса подключения

Разным клиентам может требоваться разный формат `BASE_URL`. Попробуйте адреса по порядку:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

Примеры SDK в этом репозитории по умолчанию используют `https://api.relayrouter.app/v1`. Если клиент запрашивает полный адрес метода чата, используйте третий вариант.

### 3. Настройка проекта

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
RELAYROUTER_MODEL=your_model_name
```

### 4. Запуск запроса

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## Готовые примеры

| Язык | Файл | Команда запуска |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## Документация и безопасность

- [Подробный быстрый старт](./docs/quickstart.md)
- [Частые вопросы](./docs/faq.md)
- [Устранение неполадок](./docs/troubleshooting.md)
- [Политика безопасности](./SECURITY.md)

Никогда не добавляйте API-ключ в Git. Храните его в `.env` или в менеджере секретов платформы.

<p align="center"><strong>Один API-ключ. Больше моделей. Меньше интеграций.</strong></p>

</div>
