import { readFile, writeFile } from "node:fs/promises";

const START_MARKER = "<!-- relayrouter-announcements:start -->";
const END_MARKER = "<!-- relayrouter-announcements:end -->";
const DEFAULT_ENDPOINT =
  "https://relayrouter.app/api/announcements?page=1&page_size=10";
const ANNOUNCEMENTS_URL =
  process.env.RELAYROUTER_ANNOUNCEMENTS_URL || DEFAULT_ENDPOINT;
const MAX_ITEMS = Math.max(
  1,
  Math.min(10, Number.parseInt(process.env.MAX_ANNOUNCEMENTS || "5", 10) || 5),
);
const VIEW_ALL_URL = "https://relayrouter.app/register?aff=xc9N";

const pages = [
  {
    file: "README.md",
    locale: "en",
    heading: "Announcement updates · Auto-synced",
    intro: "The latest {count} RelayRouter announcements:",
    viewAll: "Open RelayRouter to view all announcements",
    fallback:
      "A translation was unavailable from the source, so that item is shown in English.",
  },
  {
    file: "README.zh-CN.md",
    locale: "zh",
    heading: "公告速知 · 自动同步",
    intro: "RelayRouter 最新 {count} 条公告：",
    viewAll: "进入 RelayRouter 查看全部公告",
    fallback: "源站未提供对应翻译，相关公告暂以英文显示。",
  },
  {
    file: "README.ru.md",
    locale: "ru",
    heading: "Последние объявления · Автосинхронизация",
    intro: "Последние объявления RelayRouter ({count}):",
    viewAll: "Открыть RelayRouter и посмотреть все объявления",
    fallback:
      "Перевод отсутствует в источнике, поэтому соответствующее объявление показано на английском языке.",
  },
  {
    file: "README.ko.md",
    locale: "ko",
    heading: "최신 공지 · 자동 동기화",
    intro: "RelayRouter 최신 공지 {count}개:",
    viewAll: "RelayRouter에서 모든 공지 보기",
    fallback: "원본에 번역이 없어 해당 공지는 영어로 표시됩니다.",
  },
  {
    file: "README.ja.md",
    locale: "ja",
    heading: "最新のお知らせ · 自動同期",
    intro: "RelayRouter の最新のお知らせ {count} 件：",
    viewAll: "RelayRouter ですべてのお知らせを見る",
    fallback: "配信元に翻訳がないため、該当項目は英語で表示されます。",
  },
  {
    file: "README.es.md",
    locale: "es",
    heading: "Últimos avisos · Sincronización automática",
    intro: "Los {count} avisos más recientes de RelayRouter:",
    viewAll: "Abrir RelayRouter y ver todos los avisos",
    fallback:
      "La fuente no incluye una traducción, por lo que ese aviso se muestra en inglés.",
  },
  {
    file: "README.de.md",
    locale: "de",
    heading: "Neueste Ankündigungen · Automatisch synchronisiert",
    intro: "Die neuesten {count} RelayRouter-Ankündigungen:",
    viewAll: "RelayRouter öffnen und alle Ankündigungen ansehen",
    fallback:
      "In der Quelle fehlt eine Übersetzung; der betreffende Eintrag wird auf Englisch angezeigt.",
  },
  {
    file: "README.id.md",
    locale: "id",
    heading: "Pengumuman terbaru · Sinkronisasi otomatis",
    intro: "{count} pengumuman RelayRouter terbaru:",
    viewAll: "Buka RelayRouter dan lihat semua pengumuman",
    fallback:
      "Sumber belum menyediakan terjemahan Bahasa Indonesia; pengumuman ditampilkan dalam bahasa Inggris.",
  },
];

function cleanContent(value) {
  return String(value || "")
    .replace(/\r?\n+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/`/g, "\\`")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
}

function shorten(value, limit = 260) {
  const characters = Array.from(value);
  return characters.length > limit
    ? `${characters.slice(0, limit - 1).join("")}…`
    : value;
}

function formatBeijingTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const part = (type) => parts.find((entry) => entry.type === type)?.value || "";

  return `${part("year")}-${part("month")}-${part("day")} ${part("hour")}:${part("minute")} (UTC+8)`;
}

function contentFor(item, locale) {
  const localized = cleanContent(item.translations?.[locale]?.content);
  if (localized) {
    return { content: localized, usedFallback: false };
  }

  const english = cleanContent(item.translations?.en?.content);
  if (english) {
    return { content: english, usedFallback: locale !== "en" };
  }

  return {
    content: cleanContent(item.content),
    usedFallback: locale !== "zh",
  };
}

function renderBlock(page, items) {
  let usedFallback = false;
  const itemLines = items.map((item) => {
    const localized = contentFor(item, page.locale);
    usedFallback ||= localized.usedFallback;
    const date = formatBeijingTime(item.publishDate);
    return `> - \`${date}\` — ${shorten(localized.content)}`;
  });

  const lines = [
    START_MARKER,
    "> [!IMPORTANT]",
    `> **${page.heading}**`,
    ">",
    `> ${page.intro.replace("{count}", String(items.length))}`,
    ">",
    ...itemLines,
  ];

  if (usedFallback) {
    lines.push(">", `> _${page.fallback}_`);
  }

  lines.push(
    ">",
    `> [${page.viewAll} →](${VIEW_ALL_URL})`,
    END_MARKER,
  );

  return lines.join("\n");
}

function replaceBlock(source, block, file) {
  const start = source.indexOf(START_MARKER);
  const end = source.indexOf(END_MARKER);

  if (start === -1 || end === -1 || end < start) {
    throw new Error(`Announcement markers are missing or invalid in ${file}`);
  }

  return `${source.slice(0, start)}${block}${source.slice(end + END_MARKER.length)}`;
}

async function loadAnnouncements() {
  const response = await fetch(ANNOUNCEMENTS_URL, {
    headers: {
      Accept: "application/json",
      "User-Agent": "relayrouter-api-quickstart-announcement-sync",
    },
    signal: AbortSignal.timeout(20_000),
  });

  if (!response.ok) {
    throw new Error(`Announcement API returned HTTP ${response.status}`);
  }

  const payload = await response.json();
  const items = payload?.data?.items;
  if (payload?.success !== true || payload?.data?.enabled !== true) {
    throw new Error("Announcement API is disabled or returned an unsuccessful response");
  }
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Announcement API returned no items; existing README content was preserved");
  }

  return [...items]
    .filter((item) => item && item.publishDate && item.content)
    .sort((left, right) => new Date(right.publishDate) - new Date(left.publishDate))
    .slice(0, MAX_ITEMS);
}

async function main() {
  const items = await loadAnnouncements();
  let changed = 0;

  for (const page of pages) {
    const source = await readFile(page.file, "utf8");
    const updated = replaceBlock(source, renderBlock(page, items), page.file);
    if (updated !== source) {
      await writeFile(page.file, updated, "utf8");
      changed += 1;
      console.log(`Updated ${page.file}`);
    } else {
      console.log(`No change in ${page.file}`);
    }
  }

  console.log(`Announcement sync complete; ${changed} file(s) changed.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exitCode = 1;
});
