const fs = require('fs');
const path = require('path');
const { chromium } = require('C:/Users/EDY/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const repo = path.resolve(__dirname, '..');
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const qrData = `data:image/png;base64,${fs.readFileSync(path.join(repo, 'assets', 'customer-service-qr.png')).toString('base64')}`;
const languages = [
  ['README.md', 'en'],
  ['README.zh-CN.md', 'zh-CN'],
  ['README.ru.md', 'ru'],
  ['README.ko.md', 'ko'],
  ['README.ja.md', 'ja'],
  ['README.es.md', 'es'],
  ['README.de.md', 'de'],
  ['README.id.md', 'id'],
];

const ui = {
  en: { console: 'Console', recommended: 'Recommended', apiKey: 'API Key', selectCreated: 'Select the API Key just created', prompt: 'Introduce yourself in one sentence.', send: 'Send ➤', supportTitle: 'Support and community group', supportLead: 'Scan the QR code to add support. We will invite you to the community group.', supportCaption: 'If you have any questions later, ask them directly in the group.', contactHint: '“Contact support” jumps to the QR code at the bottom of the page', usageDetail: 'Member usage details', usageHelp: 'Review consumption by member', transferDetail: 'Balance allocation records', transferHelp: 'Verify recipient, amount, and time', owner: 'Owner', me: 'Me' },
  'zh-CN': { console: '控制台', recommended: '推荐', apiKey: 'API Key', selectCreated: '选择刚创建的 API Key', prompt: '请用一句话介绍你自己。', send: '发送 ➤', supportTitle: '客服与交流群', supportLead: '扫描二维码添加客服，我们会邀请你加入交流群。', supportCaption: '后续遇到任何问题，都可以直接在群里提问。', contactHint: '“联系客服”点击后跳转到页面底部', usageDetail: '成员调用明细', usageHelp: '按成员核对使用情况', transferDetail: '余额分配记录', transferHelp: '核对转出对象、金额与时间', owner: '业主', me: '我' },
  ru: { console: 'Консоль', recommended: 'Рекомендуется', apiKey: 'API Key', selectCreated: 'Выберите только что созданный API-ключ', prompt: 'Представьтесь одним предложением.', send: 'Отправить ➤', supportTitle: 'Поддержка и сообщество', supportLead: 'Отсканируйте QR-код, чтобы добавить поддержку. Вас пригласят в группу.', supportCaption: 'Позже любые вопросы можно задавать прямо в группе.', contactHint: 'Ссылка «Обратитесь в поддержку» ведёт к QR-коду внизу страницы', usageDetail: 'Использование участников', usageHelp: 'Проверка расхода по участникам', transferDetail: 'Распределение баланса', transferHelp: 'Получатель, сумма и время', owner: 'Владелец', me: 'Я' },
  ko: { console: '콘솔', recommended: '권장', apiKey: 'API Key', selectCreated: '방금 만든 API Key 선택', prompt: '한 문장으로 자신을 소개해 주세요.', send: '보내기 ➤', supportTitle: '고객지원 및 커뮤니티', supportLead: 'QR 코드를 스캔해 고객지원을 추가하면 커뮤니티 그룹에 초대해 드립니다.', supportCaption: '이후 궁금한 점은 그룹에서 바로 질문할 수 있습니다.', contactHint: '“고객지원 문의”를 누르면 페이지 하단 QR 코드로 이동합니다', usageDetail: '멤버 사용 내역', usageHelp: '멤버별 사용량 확인', transferDetail: '잔액 배분 기록', transferHelp: '대상, 금액, 시간 확인', owner: '소유자', me: '나' },
  ja: { console: 'コンソール', recommended: '推奨', apiKey: 'API Key', selectCreated: '作成した API Key を選択', prompt: '一文で自己紹介してください。', send: '送信 ➤', supportTitle: 'サポートとコミュニティ', supportLead: 'QR コードからサポートを追加すると、交流グループへ招待します。', supportCaption: '今後の質問はグループで直接ご相談いただけます。', contactHint: '「サポートに連絡」を押すとページ下部の QR コードへ移動します', usageDetail: 'メンバー利用明細', usageHelp: 'メンバー別の利用量を確認', transferDetail: '残高配分履歴', transferHelp: '送付先・金額・日時を確認', owner: '所有者', me: '自分' },
  es: { console: 'Consola', recommended: 'Recomendado', apiKey: 'API Key', selectCreated: 'Selecciona la API Key recién creada', prompt: 'Preséntate en una frase.', send: 'Enviar ➤', supportTitle: 'Soporte y grupo de comunidad', supportLead: 'Escanea el QR para añadir soporte; te invitaremos al grupo de la comunidad.', supportCaption: 'Si tienes preguntas más adelante, hazlas directamente en el grupo.', contactHint: '“Contacta con soporte” lleva al QR al final de la página', usageDetail: 'Consumo por miembro', usageHelp: 'Revisa el uso de cada miembro', transferDetail: 'Registros de saldo', transferHelp: 'Comprueba destinatario, importe y hora', owner: 'Propietario', me: 'Yo' },
  de: { console: 'Konsole', recommended: 'Empfohlen', apiKey: 'API Key', selectCreated: 'Gerade erstellten API-Schlüssel wählen', prompt: 'Stelle dich in einem Satz vor.', send: 'Senden ➤', supportTitle: 'Support und Community-Gruppe', supportLead: 'Scanne den QR-Code, um den Support hinzuzufügen. Wir laden dich in die Gruppe ein.', supportCaption: 'Spätere Fragen kannst du direkt in der Gruppe stellen.', contactHint: '„Support kontaktieren“ führt zum QR-Code am Seitenende', usageDetail: 'Nutzung nach Mitglied', usageHelp: 'Verbrauch je Mitglied prüfen', transferDetail: 'Guthabenverteilung', transferHelp: 'Empfänger, Betrag und Zeitpunkt prüfen', owner: 'Inhaber', me: 'Ich' },
  id: { console: 'Konsol', recommended: 'Disarankan', apiKey: 'API Key', selectCreated: 'Pilih API key yang baru dibuat', prompt: 'Perkenalkan diri Anda dalam satu kalimat.', send: 'Kirim ➤', supportTitle: 'Dukungan dan grup komunitas', supportLead: 'Pindai QR untuk menambahkan dukungan; kami akan mengundang Anda ke grup.', supportCaption: 'Jika ada pertanyaan nanti, tanyakan langsung di grup.', contactHint: '“Hubungi dukungan” menuju QR di bagian bawah halaman', usageDetail: 'Rincian penggunaan anggota', usageHelp: 'Periksa penggunaan per anggota', transferDetail: 'Catatan alokasi saldo', transferHelp: 'Periksa penerima, jumlah, dan waktu', owner: 'Pemilik', me: 'Saya' },
};

function escapeHtml(value = '') {
  return value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function stripMd(value = '') {
  return value
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/^\[!\w+\]\s*/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function rich(value = '') {
  return escapeHtml(value)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '<strong class="link">$1</strong>');
}

function getSection(md, startAnchor, endAnchor) {
  const start = md.indexOf(`<a id="${startAnchor}"></a>`);
  const end = md.indexOf(`<a id="${endAnchor}"></a>`, start + 1);
  if (start < 0 || end < 0) throw new Error(`Missing section ${startAnchor}`);
  return md.slice(start, end);
}

function parseDetails(text) {
  const summary = stripMd((text.match(/<summary><strong>(.*?)<\/strong><\/summary>/s) || [,''])[1]);
  const steps = [];
  const re = /####\s+\d+\.\s+([^\r\n]+)\r?\n\r?\n([\s\S]*?)(?=\r?\n####\s+\d+\.|\r?\n<\/details>)/g;
  let match;
  while ((match = re.exec(text))) {
    const body = match[2].trim();
    const blocks = body.split(/\r?\n\r?\n/).filter(Boolean);
    steps.push({ title: stripMd(match[1]), body, description: blocks.length ? blocks[0] : '' });
  }
  return { summary, steps, text };
}

function inlineCodes(value) {
  return [...value.matchAll(/`([^`]+)`/g)].map(m => stripMd(m[1]));
}

function bolds(value) {
  return [...value.matchAll(/\*\*([^*]+)\*\*/g)].map(m => stripMd(m[1]));
}

function callout(value, kind) {
  const re = new RegExp(`> \\[!${kind}\\]\\r?\\n((?:>.*(?:\\r?\\n|$))+)`);
  const m = value.match(re);
  return m ? stripMd(m[1]) : '';
}

function parseTable(value) {
  const lines = value.split(/\r?\n/).filter(line => /^\|.*\|\s*$/.test(line.trim()));
  return lines
    .map(line => line.trim().slice(1, -1).split('|').map(cell => stripMd(cell.trim())))
    .filter(row => !row.every(cell => /^:?-{3,}:?$/.test(cell)));
}

function pathMarkup(tokens, lastPrimary = false) {
  return `<div class="path">${tokens.map((token, i) => `${i ? '<span class="arr">→</span>' : ''}<span class="chip ${lastPrimary && i === tokens.length - 1 ? 'primary' : ''}">${escapeHtml(token)}</span>`).join('')}</div>`;
}

function stepMarkup(number, title, body) {
  return `<section class="step"><span class="num">${number}</span><div class="step-body"><h3>${escapeHtml(title)}</h3>${body}</div></section>`;
}

function renderApi(data, lang) {
  const t = ui[lang];
  const s = data.steps;
  const modeTable = parseTable(s[1].body);
  const modeHeads = modeTable[0] || ['', ''];
  const modeRows = modeTable.slice(1);
  const warning = callout(s[2].body, 'WARNING');
  const tokenLine = s[2].body.split(/\r?\n/).find(line => line.includes('sk-')) || '';
  const copyLabel = ((tokenLine.match(/\*\*([^*]+)\*\*\s*$/) || [,''])[1]) || '';
  const tip = callout(s[4].body, 'TIP');
  const firstPathLine = s[0].body.split(/\r?\n/).find(line => line.includes('→')) || '';
  const firstTokens = [...inlineCodes(firstPathLine), ...(bolds(firstPathLine).slice(-1))];
  const modelPathLine = s[3].body.split(/\r?\n/).find(line => line.includes('→')) || '';
  const modelTokens = inlineCodes(modelPathLine);
  return `
    ${stepMarkup(1, s[0].title, `<p>${rich(s[0].description)}</p>${pathMarkup(firstTokens, true)}`)}
    ${stepMarkup(2, s[1].title, `<div class="modes">
      <div class="mode recommended"><div class="mode-title"><span>${escapeHtml(modeHeads[0])}</span><span class="badge">${escapeHtml(t.recommended)}</span></div><ul>${modeRows.map(row => `<li>${escapeHtml(row[0] || '')}</li>`).join('')}</ul></div>
      <div class="mode"><div class="mode-title"><span>${escapeHtml(modeHeads[1])}</span></div><ul>${modeRows.map(row => `<li>${escapeHtml(row[1] || '')}</li>`).join('')}</ul></div>
    </div>`)}
    ${stepMarkup(3, s[2].title, `<p>${rich(s[2].description)}</p><div class="notice warning"><strong>⚠</strong><span>${escapeHtml(warning)}</span></div><div class="token"><strong>${escapeHtml(t.apiKey)}</strong><code>sk-••••••••••••••••••••••••••••</code><span class="dark-button">${escapeHtml(copyLabel)}</span></div>`)}
    ${stepMarkup(4, s[3].title, `<p>${rich(s[3].description)}</p>${pathMarkup(modelTokens)}`)}
    ${stepMarkup(5, s[4].title, `<p>${rich(s[4].description)}</p><div class="settings"><div class="field-row"><span class="field-label">${escapeHtml(bolds(s[4].description).slice(-1)[0] || s[4].title)}</span><span class="field hot">${escapeHtml(t.selectCreated)}⌄</span></div><div class="send-row"><span class="input">${escapeHtml(t.prompt)}</span><span class="blue-button">${escapeHtml(t.send)}</span></div><div class="success">✓ ${escapeHtml(tip)}</div></div>`)}
  `;
}

function renderRedeem(data, lang) {
  const t = ui[lang];
  const s = data.steps;
  const funds = bolds(s[0].description)[0] || s[0].title;
  const redeem = bolds(s[1].description)[0] || s[1].title;
  const invoice = callout(data.text, 'IMPORTANT');
  return `
    ${stepMarkup(1, s[0].title, `<p>${rich(s[0].description)}</p>${pathMarkup([t.console, funds])}`)}
    ${stepMarkup(2, s[1].title, `<p>${rich(s[1].description)}</p>${pathMarkup([funds, redeem])}`)}
    ${stepMarkup(3, s[2].title, `<p>${rich(s[2].description)}</p><div class="code-box">XXXX-XXXX-XXXX-XXXX</div>`)}
    ${stepMarkup(4, s[3].title, `<p>${rich(s[3].description)}</p>`)}
    <div class="notice invoice"><span class="notice-icon">!</span><span>${escapeHtml(invoice)}</span></div>
    <div class="contact-hint">${escapeHtml(t.contactHint)}<span>↓</span></div>
    <div class="divider"></div>
    <section class="support"><h3>${escapeHtml(t.supportTitle)}</h3><p>${escapeHtml(t.supportLead)}</p><img class="qr" src="${qrData}" alt="QR"><small>${escapeHtml(t.supportCaption)}</small></section>
  `;
}

function renderOrganization(data, lang) {
  const t = ui[lang];
  const s = data.steps;
  const orgPathLine = s[0].body.split(/\r?\n/).find(line => line.includes('→')) || '';
  const orgTokens = inlineCodes(orgPathLine);
  const inviteLine = s[1].body.split(/\r?\n/).find(line => line.includes('member@example.com')) || '';
  const inviteButton = bolds(inviteLine).slice(-1)[0] || s[1].title;
  const table = parseTable(s[2].body);
  const transferLine = s[2].body.split(/\r?\n/).find(line => line.includes('　')) || '';
  const transferFields = inlineCodes(transferLine);
  const transferButton = bolds(transferLine).slice(-1)[0] || s[2].title;
  const records = bolds(s[3].description);
  const caution = callout(data.text, 'CAUTION');
  const header = table[0] || ['', '', '', ''];
  const rows = table.slice(1);
  return `
    ${stepMarkup(1, s[0].title, `<p>${rich(s[0].description)}</p>${pathMarkup(orgTokens)}`)}
    ${stepMarkup(2, s[1].title, `<p>${rich(s[1].description)}</p><div class="invite"><strong>${escapeHtml((s[1].description.match(/(?:E-Mail|correo|email|почт|메일|メール|邮箱)/i) || ['Email'])[0])}</strong><span class="input">member@example.com</span><span class="blue-button">${escapeHtml(inviteButton)}</span></div>`)}
    ${stepMarkup(3, s[2].title, `<p>${rich(s[2].description)}</p><div class="members"><div class="tabs"><span class="tab active">${escapeHtml(orgTokens[2] || data.summary)}</span><span class="tab">${escapeHtml(records[0] || '')}</span><span class="tab">${escapeHtml(records[1] || '')}</span></div><div class="member-row head">${header.map(c => `<strong>${escapeHtml(c)}</strong>`).join('')}</div>${rows.map((row, index) => `<div class="member-row">${row.map((cell, ci) => `<span class="${ci === 3 && index === 0 ? 'action' : ''}">${escapeHtml(cell)}${ci === 1 && index === 1 ? ` <em>${escapeHtml(t.owner)}</em><i>${escapeHtml(t.me)}</i>` : ''}</span>`).join('')}</div>`).join('')}</div><div class="transfer"><label><small>${escapeHtml((transferFields[0] || '').split(':')[0])}</small><span>${escapeHtml((transferFields[0] || '').replace(/^[^:：]+[:：]\s*/, ''))}</span></label><label><small>${escapeHtml((transferFields[1] || '').split(':')[0])}</small><span>${escapeHtml((transferFields[1] || '').replace(/^[^:：]+[:：]\s*/, ''))}</span></label><span class="blue-button">${escapeHtml(transferButton)}</span></div>`)}
    ${stepMarkup(4, s[3].title, `<p>${rich(s[3].description)}</p><div class="record-cards"><div class="record"><strong>▣ ${escapeHtml(records[0] || '')}</strong><b>${escapeHtml(t.usageDetail)}</b><small>${escapeHtml(t.usageHelp)}</small></div><div class="record"><strong>⇄ ${escapeHtml(records[1] || '')}</strong><b>${escapeHtml(t.transferDetail)}</b><small>${escapeHtml(t.transferHelp)}</small></div></div>`)}
    <div class="notice warning"><strong>⚠</strong><span>${escapeHtml(caution)}</span></div>
  `;
}

function documentHtml(content, lang) {
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
    *{box-sizing:border-box}html,body{margin:0;background:#fff;color:#1f2328;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans CJK SC","Microsoft YaHei",Arial,sans-serif}.tutorial{width:1100px;background:#fff;padding:22px 30px 28px}.step{display:grid;grid-template-columns:38px 1fr;gap:14px;margin:16px 0 20px}.num{width:31px;height:31px;border-radius:50%;display:grid;place-items:center;background:#0969da;color:white;font-weight:800;font-size:15px}.step h3{font-size:18px;margin:2px 0 7px}.step p{font-size:15px;line-height:1.65;color:#424a53;margin:0}.link{color:#0969da}.path{display:flex;align-items:center;gap:8px;margin-top:11px;flex-wrap:wrap}.chip{padding:7px 12px;border-radius:7px;background:#ddf4ff;border:1px solid #b6e3ff;color:#0969da;font-size:14px;font-weight:650}.chip.primary,.blue-button{color:#fff;background:#1f6feb;border-color:#1f6feb}.arr{color:#8c959f}.modes{display:grid;grid-template-columns:1fr 1fr;gap:12px}.mode{border:1px solid #d0d7de;border-radius:8px;padding:14px 16px}.mode.recommended{border-color:#54a3ff;background:#f4f9ff}.mode-title{display:flex;justify-content:space-between;gap:10px;font-weight:750}.badge{font-size:12px;background:#ddecff;color:#0969da;padding:3px 7px;border-radius:999px}.mode ul{padding-left:20px;margin:9px 0 0;color:#424a53;font-size:14px;line-height:1.65}.notice{border-radius:7px;padding:12px 14px;display:grid;grid-template-columns:24px 1fr;gap:9px;font-size:14px;line-height:1.55}.warning{background:#fff8c5;border-left:4px solid #bf8700;margin-top:12px}.invoice{margin:22px 0 12px;border:1px solid #d4a72c;border-left:5px solid #bf8700;background:#fff8c5;align-items:start;font-size:15px}.notice-icon{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;background:#bf8700;color:#fff;font-weight:900}.token{margin-top:9px;display:flex;align-items:center;gap:10px;border:1px solid #d0d7de;background:#f6f8fa;border-radius:7px;padding:10px 12px}.token code{flex:1;font-family:Consolas,monospace;color:#0550ae}.dark-button{padding:7px 11px;background:#24292f;color:#fff;border-radius:6px;font-weight:700;font-size:13px}.settings{margin-top:11px;border:1px solid #d0d7de;border-radius:8px;padding:12px 14px}.field-row{display:grid;grid-template-columns:155px 1fr;gap:10px;align-items:center}.field-label{color:#57606a}.field{border:1px solid #d0d7de;border-radius:6px;padding:8px 10px}.field.hot{border:2px solid #ff7b72;background:#fff5f4;color:#cf222e;font-weight:700}.send-row{display:flex;gap:8px;margin-top:10px}.input{flex:1;border:1px solid #d0d7de;background:#fff;border-radius:6px;padding:9px 11px;color:#8c959f}.blue-button{display:inline-flex;align-items:center;justify-content:center;padding:9px 14px;border-radius:6px;font-weight:750;white-space:nowrap}.success{margin-top:10px;background:#dafbe1;border:1px solid #82e596;color:#116329;padding:10px 13px;border-radius:7px;font-weight:700;font-size:14px}.code-box{margin-top:10px;border:1px solid #d0d7de;background:#f6f8fa;border-radius:7px;padding:11px 13px;font:15px Consolas,monospace;color:#0550ae}.contact-hint{text-align:center;color:#57606a;font-size:13px;margin:14px 0 8px}.contact-hint span{display:block;color:#0969da;font-size:25px}.divider{height:1px;background:#d8dee4;margin-bottom:20px}.support{text-align:center}.support h3{font-size:19px;margin:0 0 5px}.support p{color:#57606a;font-size:14px;margin:0 0 14px}.support small{display:block;color:#6e7781;margin-top:9px}.qr{width:260px;height:260px;object-fit:contain;border:1px solid #d0d7de;border-radius:12px}.invite{display:flex;align-items:center;gap:10px;margin-top:11px;border:1px solid #d0d7de;background:#f6f8fa;border-radius:8px;padding:13px 14px}.members{margin-top:11px;border:1px solid #d0d7de;border-radius:8px;overflow:hidden}.tabs{display:flex;background:#f6f8fa;border-bottom:1px solid #d0d7de}.tab{padding:10px 16px;color:#57606a;font-weight:650;font-size:14px}.tab.active{background:#fff;color:#0969da;border-bottom:2px solid #0969da}.member-row{display:grid;grid-template-columns:1fr 1.35fr .75fr .7fr;gap:10px;align-items:center;padding:10px 14px;border-bottom:1px solid #d8dee4;font-size:13px}.member-row:last-child{border-bottom:0}.member-row.head{background:#fbfcfd}.member-row .action{color:#0969da;font-weight:750}.member-row em,.member-row i{font-size:10px;font-style:normal;border-radius:999px;padding:3px 6px;margin-left:4px}.member-row em{background:#ffebe9;color:#cf222e}.member-row i{background:#dafbe1;color:#116329}.transfer{display:grid;grid-template-columns:1fr 1fr auto;gap:10px;align-items:end;margin-top:10px;border:1px solid #d0d7de;background:#f6f8fa;border-radius:8px;padding:12px 14px}.transfer label small{display:block;color:#57606a;margin-bottom:5px}.transfer label span{display:block;border:1px solid #d0d7de;background:#fff;border-radius:6px;padding:9px 10px}.record-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:11px}.record{border:1px solid #d0d7de;border-radius:8px;padding:14px;display:flex;flex-direction:column;gap:5px}.record b{font-size:22px;color:#0969da}.record small{color:#6e7781}
  </style></head><body><main class="tutorial">${content}</main></body></html>`;
}

async function main() {
  const browser = await chromium.launch({ executablePath: edge, headless: true });
  const context = await browser.newContext({ viewport: { width: 1180, height: 1600 }, deviceScaleFactor: 1.5 });
  const page = await context.newPage();
  const manifest = { generatedAt: new Date().toISOString(), generator: 'tools/render-tutorial-images.js', source: 'localized README tutorial copy', privacy: 'All organization IDs and balances use masked placeholders.', outputs: [] };

  for (const [file, lang] of languages) {
    const md = fs.readFileSync(path.join(repo, file), 'utf8');
    const source = {
      api: parseDetails(getSection(md, 'first-api-call', 'redeem-code')),
      redeem: parseDetails(getSection(md, 'redeem-code', 'organization-management')),
      organization: parseDetails(getSection(md, 'organization-management', 'client-integration')),
    };
    const renderers = { api: renderApi, redeem: renderRedeem, organization: renderOrganization };
    const names = { api: 'api-key.png', redeem: 'redeem.png', organization: 'organization.png' };
    const outDir = path.join(repo, 'assets', 'tutorials', lang);
    fs.mkdirSync(outDir, { recursive: true });

    for (const type of Object.keys(renderers)) {
      await page.setContent(documentHtml(renderers[type](source[type], lang), lang), { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const output = path.join(outDir, names[type]);
      await page.locator('.tutorial').screenshot({ path: output });
      const dimensions = await page.locator('.tutorial').evaluate(el => ({ width: el.offsetWidth, height: el.offsetHeight }));
      manifest.outputs.push({ language: lang, type, file: path.relative(repo, output).replace(/\\/g, '/'), cssSize: dimensions, pixelScale: 1.5 });
    }
  }

  await browser.close();
  fs.writeFileSync(path.join(repo, 'assets', 'tutorials', 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
