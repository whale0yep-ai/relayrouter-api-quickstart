<p align="center">
  <a href="./README.zh-CN.md">中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README.ru.md">Русский</a> |
  <a href="./README.ko.md">한국어</a> |
  <a href="./README.ja.md">日本語</a> |
  <a href="./README.es.md">Español</a> |
  <a href="./README.de.md">Deutsch</a> |
  <strong>Bahasa Indonesia</strong>
</p>

<p align="center"><img src="./assets/relayrouter-hero.png" alt="Panduan cepat API RelayRouter" width="100%"></p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Daftar melalui relayrouter.app" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Daftar melalui relayrouter.ai" height="48"></a>
</p>

> [!TIP]
> **Login dengan akun pihak ketiga didukung.** Pada halaman pendaftaran, pilih **Sign in** di bagian bawah, lalu pilih ikon **GitHub**, **Google**, atau **Linux DO** pada halaman login.

> [!NOTE]
> Tautan pendaftaran di atas memuat kode referal `aff=xc9N`. Pendaftaran dapat tercatat untuk pemilik repositori, tetapi tidak mengubah harga layanan Anda.

## Mengapa RelayRouter?

RelayRouter menyediakan satu API yang kompatibel dengan OpenAI untuk berbagai penyedia model, sehingga pekerjaan integrasi berulang menjadi lebih sedikit.

| Kemampuan | Manfaat |
| --- | --- |
| Satu format API | Gunakan GPT, Claude, Gemini, DeepSeek, Qwen, dan model lain yang didukung melalui antarmuka yang familier. |
| Bayar sesuai penggunaan | Bayar berdasarkan penggunaan yang tercatat di konsol RelayRouter. |
| Pengelolaan terpusat | Kelola API key, akses model, penggunaan, dan tagihan di satu tempat. |
| Akses regional | Pilih situs pendaftaran dan alamat API yang sesuai dengan lokasi Anda. |

## Mulai dalam 5 menit

### 1. Daftar dan buat API key

| Wilayah | Pendaftaran | API Base URL umum |
| --- | --- | --- |
| Tiongkok Daratan | [relayrouter.app](https://relayrouter.app/register?aff=xc9N) | `https://api.relayrouter.app/v1` |
| Global | [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N) | `https://api.relayrouter.ai/v1` |

Setelah mendaftar, buat API key di konsol RelayRouter. Jika alamat yang ditampilkan di konsol berbeda, gunakan nilai dari konsol.

### 2. Konfigurasikan proyek

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.ai/v1
RELAYROUTER_MODEL=your_model_name
```

Untuk endpoint Tiongkok Daratan, gunakan `https://api.relayrouter.app/v1`.

### 3. Jalankan permintaan

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## Contoh siap pakai

| Bahasa | File | Perintah |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## Dokumentasi dan keamanan

- [Panduan cepat lengkap](./docs/quickstart.md)
- [Tanya jawab](./docs/faq.md)
- [Pemecahan masalah](./docs/troubleshooting.md)
- [Kebijakan keamanan](./SECURITY.md)

Jangan pernah memasukkan API key ke Git. Simpan di `.env` atau pengelola rahasia platform deployment Anda.

<p align="center"><strong>Satu API key. Lebih banyak model. Lebih sedikit integrasi.</strong></p>
