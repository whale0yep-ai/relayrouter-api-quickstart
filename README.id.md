<div lang="id" translate="no">

<p align="center">
  <a lang="zh-CN" translate="no" href="./README.zh-CN.md">中文 (ZH)</a>
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
  <strong><a lang="id" translate="no" href="./README.id.md">Bahasa Indonesia (ID)</a></strong>
</p>

<p align="center"><sub>Bahasa saat ini: Bahasa Indonesia (ID). Jika teks muncul dalam bahasa lain, nonaktifkan terjemahan otomatis untuk github.com.</sub></p>

<h1 align="center">Panduan Cepat API RelayRouter</h1>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Daftar di relayrouter.app" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Daftar di relayrouter.ai" height="48"></a>
</p>

> 💡 <strong>Kiat:</strong> Login dengan akun pihak ketiga didukung. Pada halaman pendaftaran, pilih Sign in di bagian bawah, lalu pilih ikon GitHub, Google, atau Linux DO pada halaman login.

> ℹ️ <strong>Catatan:</strong> Tautan pendaftaran memuat kode referal `aff=xc9N`. Pendaftaran dapat tercatat untuk pemilik repositori, tetapi tidak mengubah harga layanan Anda.

## Mengapa RelayRouter?

RelayRouter menyediakan satu API yang kompatibel dengan OpenAI untuk berbagai penyedia model, sehingga pekerjaan integrasi berulang menjadi lebih sedikit.

| Kemampuan | Manfaat |
| --- | --- |
| Satu format API | Gunakan GPT, Claude, Gemini, DeepSeek, Qwen, dan model lain yang didukung melalui antarmuka yang familier. |
| Bayar sesuai penggunaan | Bayar berdasarkan penggunaan yang tercatat di konsol RelayRouter. |
| Pengelolaan terpusat | Kelola API key, akses model, penggunaan, dan tagihan di satu tempat. |
| Alamat koneksi fleksibel | Jika klien mengharapkan format `BASE_URL` lain, coba alamat yang tersedia secara berurutan. |

## Mulai dalam 5 menit

### 1. Daftar dan buat API key

Pilih salah satu halaman pendaftaran berikut:

- [relayrouter.app](https://relayrouter.app/register?aff=xc9N)
- [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)

Setelah mendaftar, buat API key di konsol RelayRouter.

### 2. Pilih alamat koneksi

Setiap klien dapat memerlukan format `BASE_URL` yang berbeda. Coba alamat berikut secara berurutan:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

Contoh SDK dalam repositori ini menggunakan `https://api.relayrouter.app/v1` secara default. Jika klien meminta alamat lengkap metode chat, gunakan pilihan ketiga.

### 3. Konfigurasikan proyek

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
RELAYROUTER_MODEL=your_model_name
```

### 4. Jalankan permintaan

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## Contoh siap pakai

| Bahasa | File | Perintah menjalankan |
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

</div>
