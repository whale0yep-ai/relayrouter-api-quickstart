const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'assets');
const masterPath = path.join(assets, 'relayrouter-hero-master-clean.png');

const WIDTH = 1942;
const HEIGHT = 809;
const TITLE_X = 135;
const TITLE_Y = 330;
const MAX_TITLE_WIDTH = 1020;

const variants = [
  {
    locale: 'zh-CN',
    output: 'relayrouter-hero-zh-CN.png',
    alt: 'RelayRouter API 快速开始',
    white: 'RelayRouter',
    blue: 'API 快速开始',
    font: "'Microsoft YaHei','Noto Sans CJK SC','Segoe UI',Arial,sans-serif",
  },
  {
    locale: 'ru',
    output: 'relayrouter-hero-ru.png',
    alt: 'Быстрый старт с RelayRouter API',
    white: 'Быстрый старт с',
    blue: 'RelayRouter API',
    font: "'Segoe UI',Arial,sans-serif",
  },
  {
    locale: 'ko',
    output: 'relayrouter-hero-ko.png',
    alt: 'RelayRouter API 빠른 시작',
    white: 'RelayRouter',
    blue: 'API 빠른 시작',
    font: "'Malgun Gothic','Noto Sans CJK KR','Segoe UI',sans-serif",
  },
  {
    locale: 'ja',
    output: 'relayrouter-hero-ja.png',
    alt: 'RelayRouter API クイックスタート',
    white: 'RelayRouter',
    blue: 'API クイックスタート',
    font: "'Yu Gothic','Meiryo','Noto Sans CJK JP','Segoe UI',sans-serif",
  },
  {
    locale: 'es',
    output: 'relayrouter-hero-es.png',
    alt: 'Inicio rápido de la API de RelayRouter',
    white: 'Inicio rápido de la',
    blue: 'API de RelayRouter',
    font: "'Segoe UI',Arial,sans-serif",
  },
  {
    locale: 'de',
    output: 'relayrouter-hero-de.png',
    alt: 'RelayRouter API – Schnellstart',
    white: 'RelayRouter',
    blue: 'API – Schnellstart',
    font: "'Segoe UI',Arial,sans-serif",
  },
  {
    locale: 'id',
    output: 'relayrouter-hero-id.png',
    alt: 'Panduan Cepat API RelayRouter',
    white: 'Panduan Cepat',
    blue: 'API RelayRouter',
    font: "'Segoe UI',Arial,sans-serif",
  },
];

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function titleSvg(item) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="150">
      <text x="8" y="104" font-family="${item.font}" font-size="88" font-weight="800" letter-spacing="-1.2" xml:space="preserve">
        <tspan fill="#f4f7ff">${escapeXml(item.white)}</tspan><tspan fill="#1768ff">&#160;${escapeXml(item.blue)}</tspan>
      </text>
    </svg>
  `);
}

async function renderTitle(item) {
  let title = sharp(titleSvg(item)).png().trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } });
  const metadata = await title.metadata();

  if (metadata.width > MAX_TITLE_WIDTH) {
    title = title.resize({ width: MAX_TITLE_WIDTH, fit: 'inside', withoutEnlargement: true });
  }

  return title.png().toBuffer();
}

async function main() {
  const master = await sharp(masterPath)
    .extract({ left: 0, top: 0, width: WIDTH, height: HEIGHT })
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(masterPath, master);

  for (const item of variants) {
    const title = await renderTitle(item);
    await sharp(master)
      .composite([{ input: title, left: TITLE_X, top: TITLE_Y }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(assets, item.output));
    process.stdout.write(`${item.locale}: ${item.output} — ${item.alt}\n`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
