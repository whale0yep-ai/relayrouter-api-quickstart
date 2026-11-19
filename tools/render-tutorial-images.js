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

const clientUi = {
  en: { choose: 'Choose the app you use', one: 'Configure one matching tab — not all eight', download: 'Official download', install: 'Download', selected: 'App you use', matching: 'Matching tab', add: 'Add provider', provider: 'Provider name', website: 'Website', apiKey: 'API Key', request: 'Request address (Claude example)', models: 'Get model list', save: 'Save', enable: 'Enable', master: 'CC Switch is on', both: 'Turn on both', selectedApp: 'Selected application', quit: 'Fully quit', reopenCc: 'Reopen CC Switch', reopenApp: 'Reopen the app', test: 'Send a test message', modelServices: 'Model Services', customProvider: 'Custom model provider', openai: 'OpenAI API address', anthropic: 'Anthropic API address', selectModel: 'Select a model', more: 'More', settings: 'Settings', providerId: 'Provider ID', displayName: 'Display name', apiAddress: 'API address', protocol: 'API protocol', fetchAvailable: 'Fetch available models', successCc: 'The selected application responds through RelayRouter. Setup is complete.', successCherry: 'Models are visible and a test message succeeds. Cherry Studio is ready.', successHarness: 'A RelayRouter model can be selected and used. DeepSeek Harness is ready.', privacy: 'Do not expose a complete API key in screenshots, chat, or GitHub.' },
  'zh-CN': { choose: '选择你实际使用的一个应用', one: '只配置对应标签，不需要配置八项', download: 'CC Switch 官方下载', install: '下载安装', selected: '你正在使用的应用', matching: '打开对应标签', add: '添加提供商', provider: '提供商名称', website: '官网链接', apiKey: 'API Key', request: '请求地址（Claude 示例）', models: '获取模型列表', save: '保存', enable: '启用', master: 'CC Switch 已开启', both: '两个都要打开', selectedApp: '正在使用的应用', quit: '完全退出', reopenCc: '重新打开 CC Switch', reopenApp: '重新打开所用应用', test: '发送测试消息', modelServices: '模型服务', customProvider: '自定义模型服务提供商', openai: 'OpenAI API 地址', anthropic: 'Anthropic API 地址', selectModel: '选择模型', more: '更多', settings: '设置', providerId: 'Provider ID', displayName: '显示名称', apiAddress: 'API 地址', protocol: 'API 协议', fetchAvailable: '获取可用模型', successCc: '所选应用能够通过 RelayRouter 正常响应，即表示配置完成。', successCherry: '能看到模型并成功发送消息，即表示 Cherry Studio 配置完成。', successHarness: '能选择 RelayRouter 模型并成功发送消息，即表示 DeepSeek Harness 配置完成。', privacy: '不要在截图、聊天或 GitHub 中公开完整 API Key。' },
  de: { choose: 'Verwendete Anwendung auswählen', one: 'Nur den passenden Tab konfigurieren — nicht alle acht', download: 'Offizieller Download', install: 'Herunterladen', selected: 'Verwendete Anwendung', matching: 'Passender Tab', add: 'Anbieter hinzufügen', provider: 'Anbietername', website: 'Website', apiKey: 'API-Schlüssel', request: 'Anfrageadresse (Claude-Beispiel)', models: 'Modellliste abrufen', save: 'Speichern', enable: 'Aktivieren', master: 'CC Switch ist eingeschaltet', both: 'Beides einschalten', selectedApp: 'Ausgewählte Anwendung', quit: 'Vollständig beenden', reopenCc: 'CC Switch neu öffnen', reopenApp: 'Anwendung neu öffnen', test: 'Testnachricht senden', modelServices: 'Modelldienste', customProvider: 'Benutzerdefinierter Anbieter', openai: 'OpenAI-API-Adresse', anthropic: 'Anthropic-API-Adresse', selectModel: 'Modell auswählen', more: 'Mehr', settings: 'Einstellungen', providerId: 'Provider ID', displayName: 'Anzeigename', apiAddress: 'API-Adresse', protocol: 'API-Protokoll', fetchAvailable: 'Verfügbare Modelle abrufen', successCc: 'Die ausgewählte Anwendung antwortet über RelayRouter. Die Einrichtung ist abgeschlossen.', successCherry: 'Modelle sind sichtbar und die Testnachricht funktioniert. Cherry Studio ist eingerichtet.', successHarness: 'Ein RelayRouter-Modell kann ausgewählt und verwendet werden. DeepSeek Harness ist eingerichtet.', privacy: 'Vollständige API-Schlüssel nicht in Screenshots, Chats oder GitHub veröffentlichen.' },
  es: { choose: 'Elige la aplicación que usas', one: 'Configura solo su pestaña, no las ocho', download: 'Descarga oficial', install: 'Descargar', selected: 'Aplicación utilizada', matching: 'Pestaña correspondiente', add: 'Añadir proveedor', provider: 'Nombre del proveedor', website: 'Sitio web', apiKey: 'Clave API', request: 'Dirección de solicitud (ejemplo de Claude)', models: 'Obtener lista de modelos', save: 'Guardar', enable: 'Activar', master: 'CC Switch está activado', both: 'Activa ambos', selectedApp: 'Aplicación seleccionada', quit: 'Cerrar por completo', reopenCc: 'Volver a abrir CC Switch', reopenApp: 'Volver a abrir la aplicación', test: 'Enviar mensaje de prueba', modelServices: 'Servicios de modelos', customProvider: 'Proveedor personalizado', openai: 'Dirección API de OpenAI', anthropic: 'Dirección API de Anthropic', selectModel: 'Seleccionar modelo', more: 'Más', settings: 'Ajustes', providerId: 'Provider ID', displayName: 'Nombre visible', apiAddress: 'Dirección API', protocol: 'Protocolo API', fetchAvailable: 'Obtener modelos disponibles', successCc: 'La aplicación seleccionada responde mediante RelayRouter. La configuración está completa.', successCherry: 'Los modelos aparecen y el mensaje de prueba funciona. Cherry Studio está listo.', successHarness: 'Se puede seleccionar y usar un modelo de RelayRouter. DeepSeek Harness está listo.', privacy: 'No publiques una clave API completa en capturas, chats ni GitHub.' },
  id: { choose: 'Pilih aplikasi yang Anda gunakan', one: 'Konfigurasi satu tab yang sesuai, bukan semuanya', download: 'Unduhan resmi', install: 'Unduh', selected: 'Aplikasi yang digunakan', matching: 'Tab yang sesuai', add: 'Tambah penyedia', provider: 'Nama penyedia', website: 'Situs web', apiKey: 'API key', request: 'Alamat permintaan (contoh Claude)', models: 'Ambil daftar model', save: 'Simpan', enable: 'Aktifkan', master: 'CC Switch aktif', both: 'Aktifkan keduanya', selectedApp: 'Aplikasi terpilih', quit: 'Keluar sepenuhnya', reopenCc: 'Buka kembali CC Switch', reopenApp: 'Buka kembali aplikasi', test: 'Kirim pesan uji', modelServices: 'Layanan Model', customProvider: 'Penyedia model kustom', openai: 'Alamat API OpenAI', anthropic: 'Alamat API Anthropic', selectModel: 'Pilih model', more: 'Lainnya', settings: 'Pengaturan', providerId: 'Provider ID', displayName: 'Nama tampilan', apiAddress: 'Alamat API', protocol: 'Protokol API', fetchAvailable: 'Ambil model tersedia', successCc: 'Aplikasi terpilih merespons melalui RelayRouter. Konfigurasi selesai.', successCherry: 'Model terlihat dan pesan uji berhasil. Cherry Studio siap digunakan.', successHarness: 'Model RelayRouter dapat dipilih dan digunakan. DeepSeek Harness siap.', privacy: 'Jangan tampilkan API key lengkap dalam tangkapan layar, chat, atau GitHub.' },
  ja: { choose: '実際に使うアプリを選択', one: '対応タブだけを設定し、8 項目すべては不要', download: 'CC Switch 公式ダウンロード', install: 'ダウンロード', selected: '使用中のアプリ', matching: '対応タブ', add: 'プロバイダーを追加', provider: 'プロバイダー名', website: '公式サイト', apiKey: 'API キー', request: 'リクエスト先（Claude の例）', models: 'モデル一覧を取得', save: '保存', enable: '有効化', master: 'CC Switch はオン', both: '両方をオン', selectedApp: '選択したアプリ', quit: '完全終了', reopenCc: 'CC Switch を再度開く', reopenApp: 'アプリを再度開く', test: 'テストメッセージを送信', modelServices: 'モデルサービス', customProvider: 'カスタムモデルプロバイダー', openai: 'OpenAI API アドレス', anthropic: 'Anthropic API アドレス', selectModel: 'モデルを選択', more: 'その他', settings: '設定', providerId: 'Provider ID', displayName: '表示名', apiAddress: 'API アドレス', protocol: 'API プロトコル', fetchAvailable: '利用可能なモデルを取得', successCc: '選択したアプリが RelayRouter 経由で応答すれば設定完了です。', successCherry: 'モデルが表示され、テスト送信に成功すれば Cherry Studio の設定完了です。', successHarness: 'RelayRouter モデルを選択して送信できれば DeepSeek Harness の設定完了です。', privacy: '完全な API キーをスクリーンショット、チャット、GitHub に公開しないでください。' },
  ko: { choose: '실제로 사용하는 앱 선택', one: '해당 탭 하나만 설정하고 여덟 개 모두는 불필요', download: 'CC Switch 공식 다운로드', install: '다운로드', selected: '사용 중인 앱', matching: '해당 탭', add: '공급자 추가', provider: '공급자 이름', website: '공식 사이트', apiKey: 'API 키', request: '요청 주소(Claude 예시)', models: '모델 목록 가져오기', save: '저장', enable: '활성화', master: 'CC Switch 켜짐', both: '둘 다 켜기', selectedApp: '선택한 앱', quit: '완전 종료', reopenCc: 'CC Switch 다시 열기', reopenApp: '앱 다시 열기', test: '테스트 메시지 보내기', modelServices: '모델 서비스', customProvider: '사용자 지정 모델 공급자', openai: 'OpenAI API 주소', anthropic: 'Anthropic API 주소', selectModel: '모델 선택', more: '더보기', settings: '설정', providerId: 'Provider ID', displayName: '표시 이름', apiAddress: 'API 주소', protocol: 'API 프로토콜', fetchAvailable: '사용 가능한 모델 가져오기', successCc: '선택한 앱이 RelayRouter를 통해 응답하면 설정이 완료된 것입니다.', successCherry: '모델이 보이고 테스트 메시지가 성공하면 Cherry Studio 설정이 완료된 것입니다.', successHarness: 'RelayRouter 모델을 선택해 사용할 수 있으면 DeepSeek Harness 설정이 완료된 것입니다.', privacy: '전체 API 키를 스크린샷, 채팅 또는 GitHub에 공개하지 마세요.' },
  ru: { choose: 'Выберите используемое приложение', one: 'Настройте одну нужную вкладку, а не все восемь', download: 'Официальная загрузка', install: 'Скачать', selected: 'Используемое приложение', matching: 'Нужная вкладка', add: 'Добавить поставщика', provider: 'Имя поставщика', website: 'Сайт', apiKey: 'API-ключ', request: 'Адрес запроса (пример Claude)', models: 'Получить список моделей', save: 'Сохранить', enable: 'Включить', master: 'CC Switch включён', both: 'Включите оба', selectedApp: 'Выбранное приложение', quit: 'Полностью закрыть', reopenCc: 'Снова открыть CC Switch', reopenApp: 'Снова открыть приложение', test: 'Отправить тестовое сообщение', modelServices: 'Сервисы моделей', customProvider: 'Пользовательский поставщик', openai: 'Адрес API OpenAI', anthropic: 'Адрес API Anthropic', selectModel: 'Выбрать модель', more: 'Ещё', settings: 'Настройки', providerId: 'Provider ID', displayName: 'Отображаемое имя', apiAddress: 'Адрес API', protocol: 'Протокол API', fetchAvailable: 'Получить доступные модели', successCc: 'Выбранное приложение отвечает через RelayRouter. Настройка завершена.', successCherry: 'Модели отображаются и тестовое сообщение отправлено. Cherry Studio настроен.', successHarness: 'Модель RelayRouter можно выбрать и использовать. DeepSeek Harness настроен.', privacy: 'Не публикуйте полный API-ключ в снимках экрана, чатах или GitHub.' },
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

function parseAllDetails(text) {
  return [...text.matchAll(/<details(?:\s+open)?>([\s\S]*?)<\/details>/g)].map(match => parseDetails(match[0]));
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

function clientStep(number, step, body) {
  return `<section class="client-step"><span class="client-num">${number}</span><div><h2>${escapeHtml(step.title)}</h2><p>${rich(step.description)}</p>${body}</div></section>`;
}

function clientHero(title, subtitle, mark, badges = []) {
  return `<header class="client-hero"><div class="client-brand"><span class="client-mark">${escapeHtml(mark)}</span><div><h1>${title}</h1><p>${escapeHtml(subtitle)}</p></div></div><div class="client-badges">${badges.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div></header>`;
}

function renderCcSwitch(data, lang) {
  const t = clientUi[lang];
  const s = data.steps;
  const apps = ['Claude', 'OpenAI', 'Gemini', 'Grok', 'OpenCode', 'OpenClaw', 'Hermes', 'Pi'];
  return `
    ${clientHero('CC Switch <em>× RelayRouter</em>', t.one, 'CC', [t.choose, t.one])}
    <div class="scope"><strong>${escapeHtml(t.choose)}</strong><div class="app-grid">${apps.map((app, index) => `<span><b>${['C','O','G','GX','OC','OW','H','Pi'][index]}</b>${app}</span>`).join('')}</div></div>
    ${clientStep(1, s[0], `<div class="wide-card"><strong>${escapeHtml(t.download)}</strong><small>ccswitch.io · GitHub Releases</small><span class="primary-button">${escapeHtml(t.install)}</span></div>`)}
    ${clientStep(2, s[1], `<div class="flow"><span><strong>${escapeHtml(t.selected)}</strong><small>Claude / OpenAI / …</small></span><i>→</i><span><strong>${escapeHtml(t.matching)}</strong><small>${escapeHtml(t.choose)}</small></span><i>→</i><span><strong>＋ ${escapeHtml(t.add)}</strong><small>RelayRouter</small></span></div>`)}
    ${clientStep(3, s[2], `<div class="form-grid"><label><small>${escapeHtml(t.provider)}</small><span>RelayRouter</span></label><label><small>${escapeHtml(t.website)}</small><span>https://www.relayrouter.ai/</span></label><label class="full"><small>${escapeHtml(t.apiKey)}</small><span>sk-••••••••••••••••••••••••••••</span></label><label class="full hot"><small>${escapeHtml(t.request)}</small><span>https://api.relayrouter.app</span></label></div>`)}
    ${clientStep(4, s[3], `<div class="two-cards"><div><small>① RelayRouter</small><strong>${escapeHtml(t.enable)}</strong></div><i>→<small>${escapeHtml(t.both)}</small></i><div><small>② CC Switch</small><strong>${escapeHtml(t.master)} <span class="switch"></span></strong></div></div>`)}
    ${clientStep(5, s[4], `<div class="two-cards quit"><div><small>${escapeHtml(t.selectedApp)}</small><strong>${escapeHtml(t.quit)}</strong></div><div><small>CC Switch</small><strong>${escapeHtml(t.quit)}</strong></div></div>`)}
    ${clientStep(6, s[5], `<div class="flow restart"><span><strong>${escapeHtml(t.reopenCc)}</strong></span><i>→</i><span><strong>${escapeHtml(t.reopenApp)}</strong></span><i>→</i><span><strong>${escapeHtml(t.test)}</strong></span></div>`)}
    <div class="client-success">✓ ${escapeHtml(t.successCc)}</div><div class="client-privacy">${escapeHtml(t.privacy)}</div>`;
}

function renderCherry(data, lang) {
  const t = clientUi[lang];
  const s = data.steps;
  return `
    ${clientHero('Cherry Studio <em>× RelayRouter</em>', s[2].title, 'CS', ['OpenAI', 'Anthropic'])}
    ${clientStep(1, s[0], `<div class="path"><span class="chip">Cherry Studio</span><span class="arr">→</span><span class="chip primary">⚙ ${escapeHtml(t.settings)}</span></div>`)}
    ${clientStep(2, s[1], `<div class="wide-card provider-card"><span class="round-icon">R</span><span><strong>RelayRouter</strong><small>${escapeHtml(t.customProvider)}</small></span><span class="primary-button">＋ ${escapeHtml(t.add)}</span></div>`)}
    ${clientStep(3, s[2], `<div class="form-grid"><label><small>${escapeHtml(t.provider)}</small><span>RelayRouter</span></label><label><small>${escapeHtml(t.apiKey)}</small><span>sk-••••••••••••••••••••••••</span></label><label class="hot"><small>${escapeHtml(t.openai)}</small><span>https://api.relayrouter.ai/v1</span></label><label class="hot"><small>${escapeHtml(t.anthropic)}</small><span>https://api.relayrouter.ai</span></label></div>`)}
    ${clientStep(4, s[3], `<div class="wide-card"><strong>${escapeHtml(t.models)}</strong><small>RelayRouter</small><span class="primary-button">⟳ ${escapeHtml(t.models)}</span></div>`)}
    ${clientStep(5, s[4], `<div class="model-box"><div><span class="round-icon">R</span><strong>RelayRouter · ${escapeHtml(t.selectModel)}</strong></div><div class="model-row"><span>Claude Sonnet</span><span>GPT</span><span>Gemini</span></div></div>`)}
    <div class="client-success">✓ ${escapeHtml(t.successCherry)}</div><div class="client-privacy">${escapeHtml(t.privacy)}</div>`;
}

function renderHarness(data, lang) {
  const t = clientUi[lang];
  const s = data.steps;
  return `
    ${clientHero('DeepSeek Harness <em>× RelayRouter</em>', s[2].title, 'DH', [t.customProvider, 'OpenAI Chat Completions'])}
    ${clientStep(1, s[0], `<div class="path"><span class="chip">DeepSeek Harness</span><span class="arr">→</span><span class="chip primary">••• ${escapeHtml(t.more)}</span><span class="arr">→</span><span class="chip">${escapeHtml(t.settings)}</span></div>`)}
    ${clientStep(2, s[1], `<div class="wide-card provider-card"><span class="round-icon">R</span><span><strong>RelayRouter</strong><small>${escapeHtml(t.customProvider)}</small></span><span class="primary-button">＋ ${escapeHtml(t.add)}</span></div>`)}
    ${clientStep(3, s[2], `<div class="form-grid"><label><small>${escapeHtml(t.providerId)}</small><span>relayrouter</span></label><label><small>${escapeHtml(t.displayName)}</small><span>RelayRouter</span></label><label class="hot"><small>${escapeHtml(t.apiAddress)}</small><span>https://api.relayrouter.app/v1</span></label><label><small>${escapeHtml(t.protocol)}</small><span>OpenAI Chat Completions</span></label><label class="full"><small>${escapeHtml(t.apiKey)}</small><span>sk-••••••••••••••••••••••••••••</span></label></div>`)}
    ${clientStep(4, s[3], `<div class="model-box"><div><strong>${escapeHtml(t.fetchAvailable)}</strong><span class="primary-button">⟳ ${escapeHtml(t.fetchAvailable)}</span></div><div class="model-row"><span>mimo-v2.6-pro</span><span>glm-5.3-flash</span><span>qwen3.8-max</span></div><div class="save-line"><span>${escapeHtml(t.save)}</span></div></div>`)}
    ${clientStep(5, s[4], `<div class="model-box"><div><span class="round-icon">R</span><strong>relayrouter · ${escapeHtml(t.selectModel)}</strong></div><div class="model-row"><span>mimo-v2.6-pro</span><span>glm-5.3-flash</span><span>qwen3.8-max</span></div></div>`)}
    <div class="client-success">✓ ${escapeHtml(t.successHarness)}</div><div class="client-privacy">${escapeHtml(t.privacy)}</div>`;
}

function clientDocumentHtml(content, lang, theme) {
  const themes = {
    cc: { primary: '#e59156', dark: '#bd6428', soft: '#fff5ee', line: '#f1c9ad', secondary: '#6ea9a6', secondarySoft: '#eef8f7', secondaryLine: '#bad9d7' },
    cherry: { primary: '#ff5f64', dark: '#d93e45', soft: '#fff1f1', line: '#ffc5c7', secondary: '#ff5f64', secondarySoft: '#fff5f5', secondaryLine: '#ffc5c7' },
    harness: { primary: '#343941', dark: '#252a31', soft: '#f3f4f6', line: '#d7dbe0', secondary: '#343941', secondarySoft: '#f6f7f8', secondaryLine: '#d7dbe0' },
  };
  const c = themes[theme];
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
    :root{--primary:${c.primary};--dark:${c.dark};--soft:${c.soft};--line:${c.line};--secondary:${c.secondary};--secondary-soft:${c.secondarySoft};--secondary-line:${c.secondaryLine}}*{box-sizing:border-box}html,body{margin:0;background:#fff;color:#252a31;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans CJK SC","Microsoft YaHei",Arial,sans-serif}.client-tutorial{width:1100px;background:#fff;padding:26px 32px 30px}.client-hero{display:flex;justify-content:space-between;align-items:center;gap:20px;padding-bottom:20px;border-bottom:1px solid #d8dee4}.client-brand{display:flex;align-items:center;gap:14px}.client-mark{width:52px;height:52px;border-radius:14px;background:var(--primary);color:#fff;display:grid;place-items:center;font-size:18px;font-weight:900;box-shadow:0 7px 18px color-mix(in srgb,var(--primary) 25%,transparent)}.client-hero h1{margin:0;font-size:27px;color:var(--dark)}.client-hero h1 em{font-style:normal;color:var(--secondary)}.client-hero p{margin:6px 0 0;color:#66707a}.client-badges{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.client-badges span{padding:7px 10px;border:1px solid var(--secondary-line);background:var(--secondary-soft);color:var(--dark);border-radius:999px;font-size:12px;font-weight:750}.scope{margin:17px 0 20px;border:1px solid var(--secondary-line);background:var(--secondary-soft);border-radius:9px;padding:12px 14px}.scope>strong{display:block;color:var(--dark);margin-bottom:10px}.app-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.app-grid span{display:flex;align-items:center;gap:8px;border:1px solid var(--secondary-line);background:#fff;border-radius:8px;padding:8px 9px;font-weight:700}.app-grid b{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;background:var(--secondary);color:#fff;font-size:10px}.client-step{display:grid;grid-template-columns:38px 1fr;gap:14px;margin:18px 0 22px}.client-num{width:31px;height:31px;border-radius:50%;display:grid;place-items:center;background:var(--primary);color:#fff;font-weight:850;box-shadow:0 4px 10px color-mix(in srgb,var(--primary) 28%,transparent)}.client-step h2{font-size:18px;color:var(--dark);margin:2px 0 7px}.client-step p{font-size:14px;line-height:1.6;color:#46505a;margin:0}.wide-card{margin-top:10px;border:1px solid #d0d7de;background:#f6f8fa;border-radius:8px;padding:12px 14px;display:flex;align-items:center;gap:11px}.wide-card>strong{color:var(--dark)}.wide-card>small{color:#6e7781}.wide-card .primary-button{margin-left:auto}.primary-button{padding:8px 12px;border-radius:6px;background:var(--primary);color:#fff;font-weight:750;font-size:13px}.flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:8px;align-items:center;margin-top:10px;border:1px solid var(--secondary-line);background:var(--secondary-soft);border-radius:9px;padding:12px}.flow>span{border:1px solid var(--secondary-line);background:#fff;border-radius:7px;padding:10px;text-align:center}.flow strong{display:block;color:var(--dark);font-size:13px}.flow small{display:block;color:#6e7781;margin-top:3px;font-size:11px}.flow i{font-style:normal;color:var(--primary);font-weight:900}.form-grid{display:grid;grid-template-columns:1fr 1fr;margin-top:10px;border:1px solid #d0d7de;border-radius:8px;overflow:hidden}.form-grid label{padding:10px 12px;border-right:1px solid #d0d7de;border-bottom:1px solid #d0d7de}.form-grid label:nth-child(2n){border-right:0}.form-grid label.full{grid-column:1/-1;border-right:0}.form-grid label.hot{background:var(--soft)}.form-grid small{display:block;color:var(--dark);font-weight:750;margin-bottom:5px}.form-grid label>span{display:block;border:1px solid #d0d7de;background:#fff;border-radius:6px;padding:8px 10px;font:13px Consolas,monospace;color:#3d444d}.form-grid label.hot>span{border-color:var(--primary);color:var(--dark);font-weight:700}.two-cards{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:center;margin-top:10px}.two-cards>div{border:1px solid var(--secondary-line);background:var(--secondary-soft);border-radius:8px;padding:13px}.two-cards>div small{display:block;color:#6e7781;margin-bottom:5px}.two-cards>div strong{display:flex;align-items:center;justify-content:space-between;color:var(--dark)}.two-cards>i{font-style:normal;color:var(--primary);font-weight:900;text-align:center}.two-cards>i small{display:block;color:#6e7781;font-size:10px}.two-cards.quit{grid-template-columns:1fr 1fr}.switch{display:inline-block;width:40px;height:22px;border-radius:999px;background:#20b780;position:relative}.switch:after{content:'';position:absolute;width:16px;height:16px;right:3px;top:3px;border-radius:50%;background:#fff}.restart span{min-height:45px;display:grid;place-items:center}.round-icon{width:34px;height:34px;border-radius:9px;background:var(--primary);color:#fff;display:grid;place-items:center;font-weight:900}.provider-card>span:nth-child(2){display:flex;flex-direction:column}.provider-card>span:nth-child(2) small{margin-top:3px}.path{display:flex;align-items:center;gap:8px;margin-top:10px;flex-wrap:wrap}.chip{padding:7px 11px;border-radius:7px;background:var(--soft);border:1px solid var(--line);color:var(--dark);font-size:13px;font-weight:700}.chip.primary{color:#fff;background:var(--primary);border-color:var(--primary)}.arr{color:#8c959f}.model-box{margin-top:10px;border:1px solid #d0d7de;background:#f6f8fa;border-radius:8px;padding:12px}.model-box>div:first-child{display:flex;align-items:center;gap:9px}.model-box .primary-button{margin-left:auto}.model-row{display:grid!important;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}.model-row span{border:1px solid #d0d7de;background:#fff;border-radius:6px;padding:8px 10px;font-size:12px}.save-line{display:flex;justify-content:flex-end;margin-top:9px}.save-line span{background:var(--primary);color:#fff;border-radius:6px;padding:7px 12px;font-weight:700}.client-success{margin-top:21px;border:1px solid #82e596;background:#dafbe1;color:#116329;border-radius:8px;padding:11px 14px;font-weight:750}.client-privacy{text-align:right;color:#6e7781;font-size:11px;margin-top:9px}
  </style></head><body><main class="client-tutorial">${content}</main></body></html>`;
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
    const clientDetails = parseAllDetails(getSection(md, 'client-integration', 'quick-reference'));
    const clients = {
      cc: clientDetails.find(item => item.summary.startsWith('CC Switch')),
      cherry: clientDetails.find(item => item.summary === 'Cherry Studio'),
      harness: clientDetails.find(item => item.summary === 'DeepSeek Harness'),
    };
    for (const [name, item] of Object.entries(clients)) {
      if (!item) throw new Error(`Missing ${name} client tutorial in ${file}`);
    }
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

    const clientRenderers = { cc: renderCcSwitch, cherry: renderCherry, harness: renderHarness };
    const clientNames = { cc: 'cc-switch.png', cherry: 'cherry-studio.png', harness: 'deepseek-harness.png' };
    for (const type of Object.keys(clientRenderers)) {
      await page.setContent(clientDocumentHtml(clientRenderers[type](clients[type], lang), lang, type), { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const output = path.join(outDir, clientNames[type]);
      await page.locator('.client-tutorial').screenshot({ path: output });
      const dimensions = await page.locator('.client-tutorial').evaluate(el => ({ width: el.offsetWidth, height: el.offsetHeight }));
      manifest.outputs.push({ language: lang, type, file: path.relative(repo, output).replace(/\\/g, '/'), cssSize: dimensions, pixelScale: 1.5 });
    }
  }

  await browser.close();
  fs.writeFileSync(path.join(repo, 'assets', 'tutorials', 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
