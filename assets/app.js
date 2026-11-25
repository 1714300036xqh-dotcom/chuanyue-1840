/* ================= 数据 ================= */
const SCENES = [
  {
    id: 's1', chapter: '第一幕', year: '1839', name: '虎门销烟', place: '广东 · 虎门',
    date: '道光十九年 · 六月', pin: 'humen', img: 'assets/img/s01_humen.jpg', amb: 'sea',
    lines: [
      { t: '道光十九年六月，广东虎门海滩。海风里有咸味，也有别的味道——甜的、腻的，闻久了让人发昏。', meta: '虎门 · 海滩' },
      { t: '你被征来做工。眼前是两口巨大的方池，木箱从船上卸下，一箱一箱堆成小山。箱子里是黑褐色的鸦片球。', meta: '两万箱鸦片，从伶仃洋运来' },
      { t: '钦差大臣林则徐站在远处的山坡上。他身后是一面黄龙旗，脚下是两万箱鸦片。', meta: '林则徐 · 钦差大臣' },
      { t: '他说这句话的时候，声音不高，海风却像把它送到了每个人耳朵里。', who: '林则徐', role: '钦差大臣 · 湖广总督', say: '若鸦片一日未绝，本大臣一日不回，誓与此事相始终。', meta: '道光十九年 · 虎门' },
      { t: '工头喊你：该往池里倒东西了。', meta: '销烟池边 · 你的任务' }
    ],
    task: {
      type: 'single',
      q: '工人把鸦片球倒进销烟池，接下来该做什么？',
      opts: [
        { v: '点火焚烧，一把火烧干净', ok: false },
        { v: '灌入海水，再撒上生石灰', ok: true },
        { v: '整箱直接倒进大海', ok: false },
        { v: '挖坑深埋，让它烂在土里', ok: false }
      ],
      ok: '生石灰遇水放出大量热，池水沸腾，鸦片被煮化。退潮时开闸，残渣随潮水冲入大海——不留一点可以再提炼的残膏。<b>整个过程持续了 23 天</b>，销毁鸦片 19,187 箱又 2,119 袋，约 <b>237 万斤</b>。',
      bad: '再想想：火烧只能烧掉表面，残膏渗进土里，过后还能挖出来熬炼。有没有一种办法，能把它彻底“化”掉？'
    },
    cards: [
      { k: '知识卡 · 方法', t: '销烟，为什么不用火烧？', b: '火烧只能烧掉表面，残膏渗进泥土，过后仍能挖出来熬炼；浓烟还会让围观的人吸入。海水浸泡加上生石灰，是把鸦片彻底“化”掉——<b>生石灰遇水放热</b>，池水沸腾，鸦片被煮化，退潮时残渣冲入大海。' },
      { k: '知识卡 · 考点', t: '虎门销烟：1839.6.3—6.25', b: '这是中国近代史上第一次大规模的禁毒行动，向世界表明了中国人民禁烟的决心。它也成了英国发动侵略战争的借口——<b>1840 年，鸦片战争爆发</b>。' }
    ]
  },
  {
    id: 's2', chapter: '第二幕', year: '1840—1842', name: '炮台与条约', place: '广东虎门 → 南京江面',
    date: '道光二十年 — 二十二年', pin: 'nanjing', img: 'assets/img/s02_fort.jpg', amb: 'battle',
    lines: [
      { t: '1840 年 6 月，英国舰队抵达珠江口。你站在炮台上看着海面——那些船没有桨，烟囱里冒着黑烟，比你的炮台跑得快。', meta: '珠江口 · 英国舰队 40 余艘' },
      { t: '1841 年 2 月，虎门威远炮台。守将关天培把佩刀放在炮身上。他说，人在炮台在。', meta: '虎门之战' },
      { t: '炮台陷落。关天培战死。你被调往长江口。', meta: '1841 · 虎门失守' },
      { t: '1842 年 8 月，南京下关江面，英国军舰“康华丽号”。你被叫进舱内伺候笔墨。', meta: '南京 · 下关江面' },
      { t: '桌对面的人把条约推过来，手指按在第一条上。', who: '英国全权代表', role: '璞鼎查', say: '割让香港岛，赔款两千一百万银元，开放五处通商口岸——签字。', meta: '1842.8.29 · 康华丽号' },
      { t: '钦差大臣的手在抖。你看见他在条约上落下笔，红色的印泥按下去，像一块伤口。', meta: '《南京条约》签订' }
    ],
    task: {
      type: 'pin',
      q: '在下面这张地图上，点出《南京条约》里被割让给英国的地方。',
      hint: '提示：它在珠江口的东侧，是一个岛。',
      vb: '598 466 200 120',
      spots: [
        { k: 'hongkong', label: '香港岛', ok: true },
        { k: 'xiamen', label: '厦门', ok: false },
        { k: 'penghu', label: '澎湖列岛', ok: false },
        { k: 'taiwanS', label: '台湾岛', ok: false }
      ],
      ok: '1842 年 8 月 29 日，《南京条约》签订：割<b>香港岛</b>给英国；赔款 <b>2100 万银元</b>；开放<b>广州、厦门、福州、宁波、上海</b>五处为通商口岸；英商进出口货物应缴纳的税款，中国须同英国商定——这就是“协定关税”，关税自主权从此不再完整。',
      bad: '再看一眼：条约里割的是珠江口东侧的一个岛，不是台湾，也不是澎湖。'
    },
    cards: [
      { k: '知识卡 · 条款', t: '《南京条约》四款', b: '割<b>香港岛</b>；赔款 <b>2100 万银元</b>；开放广州、厦门、福州、宁波、上海<b>五口通商</b>；<b>协定关税</b>。1843 年又签订《虎门条约》，英国取得领事裁判权、片面最惠国待遇。' },
      { k: '知识卡 · 影响', t: '中国近代史的开端', b: '鸦片战争后，中国开始沦为<b>半殖民地半封建社会</b>，鸦片战争成为中国近代史的开端。虎门之战中，关天培壮烈殉国；1841 年 5 月，广州三元里人民自发抗英，是近代中国人民反侵略斗争的先声。' }
    ]
  },
  {
    id: 's3', chapter: '第三幕', year: '1856—1860', name: '火烧圆明园', place: '北京 · 圆明园',
    date: '咸丰十年 · 十月', pin: 'beijing', img: 'assets/img/s04_yuanmingyuan.jpg', amb: 'fire',
    lines: [
      { t: '1856 年，英法联军以“亚罗号事件”“马神甫事件”为借口，再一次把炮口对准中国。这一次，他们要的是“修约”——更多的口岸、更多的特权、鸦片贸易合法化。', meta: '第二次鸦片战争爆发' },
      { t: '1860 年 10 月，你被派进圆明园搬运器物。这座经营了一百五十年的皇家园林，湖光、廊桥、西洋楼，你从没见过那么多好东西。', meta: '圆明园 · 1860.10' },
      { t: '夜里，园子的方向红了半边天。', meta: '10 月 6 日 · 英法联军闯入' },
      { t: '你站在西洋楼的残柱之间。火从大殿的檐下窜出来，热浪逼得人后退。三天三夜，一座园子只剩下石头。', meta: '10 月 18 日 · 纵火' },
      { t: '同年，《北京条约》签订。九龙司被割走，天津开为商埠，鸦片贸易合法化。北边，沙俄趁火打劫，割走了 150 多万平方千米的土地。', meta: '1860.10 · 《北京条约》' }
    ],
    task: {
      type: 'order',
      q: '把第二次鸦片战争期间的四个事件，按发生的先后顺序点一遍。',
      hint: '点第一下是最早发生的，依次往后。',
      items: [
        { v: '亚罗号事件', order: 1 },
        { v: '《天津条约》签订', order: 2 },
        { v: '火烧圆明园', order: 3 },
        { v: '《北京条约》签订', order: 4 }
      ],
      ok: '1856 年亚罗号事件 → 1858 年《天津条约》 → 1860 年 10 月火烧圆明园 → 同年《北京条约》。这场战争被称为鸦片战争的<b>“继续和扩大”</b>：目的相同（打开中国市场），规模更大，侵略更深——从沿海深入内地，从商品输出走向鸦片贸易合法化。',
      bad: '顺序不对。想一想：先是借口，再是条约，最后才是火烧圆明园和《北京条约》。'
    },
    cards: [
      { k: '知识卡 · 条款', t: '第二次鸦片战争', b: '1856—1860 年，英法联军发动。1858 年《天津条约》、1860 年《北京条约》：割<b>九龙司地方一区</b>；增开天津等十处通商口岸；外国公使进驻北京；<b>鸦片贸易合法化</b>。中国的半殖民地化程度进一步加深。' },
      { k: '知识卡 · 趁火打劫', t: '沙俄割走 150 多万平方千米', b: '《瑷珲条约》割外兴安岭以南、黑龙江以北 60 多万平方千米；《北京条约》割乌苏里江以东 40 多万平方千米；《勘分西北界约记》等割西北 44 万多平方千米。<b>沙俄是近代侵占中国领土最多的国家。</b>' }
    ]
  },
  {
    id: 's4', chapter: '第四幕', year: '1851—1864', name: '天京的裂开', place: '广西金田 → 天京',
    date: '咸丰元年 — 同治三年', pin: 'jintian', img: 'assets/img/s06_tianjing.jpg', amb: 'drum',
    lines: [
      { t: '1851 年 1 月，广西桂平金田村。你走在队伍里，脚下是泥，前面是一面红旗。', meta: '金田起义 · 1851.1.11' },
      { t: '带头的人叫洪秀全。他说：天下多男人，尽是兄弟之辈；天下多女子，尽是姊妹之群。', who: '洪秀全', role: '太平天国天王', say: '天下多男人，尽是兄弟之辈；天下多女子，尽是姊妹之群。', meta: '拜上帝会 · 金田' },
      { t: '两年后，队伍进了南京，改名天京。你分到了一块地，也分到了一顶红头巾。', meta: '1853 · 定都天京' },
      { t: '1856 年秋天，天王府外突然起火。不是清军打进来，是他们自己人杀起来了。', meta: '1856 · 天京事变' },
      { t: '东王杨秀清、北王韦昌辉、翼王石达开——“天朝”从里面裂开。1864 年，天京陷落。', meta: '1864 · 天京陷落' }
    ],
    task: {
      type: 'order',
      q: '把太平天国的五个节点，按时间顺序点一遍。',
      hint: '从起义开始，到都城陷落结束。',
      items: [
        { v: '金田起义', order: 1 },
        { v: '定都天京', order: 2 },
        { v: '北伐与西征', order: 3 },
        { v: '天京事变', order: 4 },
        { v: '天京陷落', order: 5 }
      ],
      ok: '太平天国坚持了 <b>14 年</b>，转战 18 省，沉重打击了清朝统治和外国侵略势力。但它最终失败，原因写在它自己身上：<b>农民阶级的局限性</b>——没有科学理论，靠宗教动员，刚打下天京就开始争权。',
      bad: '顺序不对。提示：起义 → 建都 → 军事全盛 → 内乱 → 覆灭。'
    },
    cards: [
      { k: '知识卡 · 文献', t: '两个文件，两种空想', b: '《天朝田亩制度》（1853）：绝对平均分配土地，“有田同耕，有饭同食”，是空想，无法实施；《资政新篇》（1859，洪仁玕）：中国最早提出发展资本主义的方案，也未能实施。' },
      { k: '知识卡 · 结论', t: '为什么失败', b: '主观：农民阶级的局限性——缺乏科学理论指导，内部争权（天京事变），脱离实际的政策。客观：<b>中外反动势力联合镇压</b>——清政府借师助剿，洋枪队参与作战。' }
    ]
  },
  {
    id: 's5', chapter: '第五幕', year: '1861—1894', name: '自强与求富', place: '上海 · 江南制造总局',
    date: '同治四年', pin: 'shanghai', img: 'assets/img/s08_jiangnan.jpg', amb: 'factory',
    lines: [
      { t: '1865 年，上海虹口。你被招进一个新厂子——江南机器制造总局。', meta: '江南机器制造总局 · 1865' },
      { t: '这里不铸农具。造枪炮、造弹药、修轮船。墙上的横梁比你这辈子见过的房梁都粗。', meta: '中国最大的军事工业' },
      { t: '管事的人说：师夷长技以自强。', meta: '洋务运动 · 自强' },
      { t: '可他也常叹气。造炮要铁，炼铁要煤，买煤要钱——钱从哪儿来？', meta: '洋务派的难题' },
      { t: '1872 年，轮船招商局在上海成立。这一次，他们说要“求富”。', who: '李鸿章', role: '直隶总督 · 洋务派', say: '我办了一辈子的事，练兵也，海军也，都是纸糊的老虎，何尝能实在放手办理？', meta: '1872 · 轮船招商局' }
    ],
    task: {
      type: 'single',
      q: '下面哪一家企业，属于洋务运动“求富”阶段办的民用工业？',
      hint: '',
      opts: [
        { v: '江南制造总局', ok: false },
        { v: '福州船政局', ok: false },
        { v: '轮船招商局', ok: true },
        { v: '安庆内军械所', ok: false }
      ],
      ok: '“自强”阶段办<b>军事工业</b>：安庆内军械所（1861，曾国藩）、江南制造总局（1865，李鸿章）、福州船政局（1866，左宗棠）。<br>“求富”阶段办<b>民用工业</b>：轮船招商局（1872）、开平煤矿（1878）、汉阳铁厂（1890，张之洞）、湖北织布局。<br>前者造枪炮，后者求利润——因为洋务派发现：没有钱，枪炮也造不下去。',
      bad: '再想想：造枪炮的是“自强”，办航运、开矿、织布的是“求富”。'
    },
    cards: [
      { k: '知识卡 · 分类', t: '自强 → 求富', b: '<b>军事工业</b>：安庆内军械所、江南制造总局、福州船政局；<b>民用工业</b>：轮船招商局、开平煤矿、汉阳铁厂、湖北织布局。此外还办了新式学堂（京师同文馆）、派遣留学生、建立新式海军（北洋、南洋、福建三支水师）。' },
      { k: '知识卡 · 评价', t: '近代化的开端，也是一次失败', b: '洋务运动没有使中国富强，但它引进了西方先进技术，客观上促进了中国民族资本主义的产生，是<b>中国近代化的开端</b>。只学技术、不改制度，是它失败的根本原因——甲午一战，北洋舰队全军覆没，宣告洋务运动破产。' }
    ]
  },
  {
    id: 's6', chapter: '第六幕', year: '1894—1895', name: '黄海 · 马关', place: '黄海大东沟 → 日本马关',
    date: '光绪二十年 — 二十一年', pin: 'huanghai', img: 'assets/img/s07_haizhan.jpg', amb: 'battle',
    lines: [
      { t: '1894 年 9 月 17 日，黄海大东沟。你站在定远舰的炮位旁，炮身还烫手。', meta: '黄海海战 · 1894.9.17' },
      { t: '上午十点，日本舰队出现在海平线上。十二点，炮声把耳朵震得只剩鸣响。', meta: '北洋舰队 vs 日本联合舰队' },
      { t: '“致远”舰弹药耗尽，管带邓世昌下令全速撞向“吉野”。', who: '邓世昌', role: '致远舰管带', say: '吾辈从军卫国，早置生死于度外，今日之事，有死而已！', meta: '致远舰 · 冲锋' },
      { t: '下午三点半，致远沉没。邓世昌拒绝救援，与舰同沉。全舰 200 余人，生还者寥寥。', meta: '致远舰沉没' },
      { t: '1895 年 4 月，马关春帆楼。李鸿章在《马关条约》上签下名字。', meta: '马关 · 春帆楼' },
      { t: '赔款两亿两白银，割让台湾——这个数字，是清政府三年的财政收入。', meta: '《马关条约》 · 1895.4.17' }
    ],
    task: {
      type: 'single',
      q: '《马关条约》里，最能说明列强侵华方式发生变化的是哪一条？',
      hint: '',
      opts: [
        { v: '割让台湾全岛及所有附属各岛屿、澎湖列岛', ok: false },
        { v: '赔偿日本兵费白银二亿两', ok: false },
        { v: '允许日本在通商口岸开设工厂', ok: true },
        { v: '增开沙市、重庆、苏州、杭州为商埠', ok: false }
      ],
      ok: '开设工厂意味着<b>资本输出</b>——列强不再只是把商品卖进来，而是直接把资本投到中国，用中国的原料和劳动力赚钱。这是从“商品输出”到“资本输出”的转变，也是列强瓜分中国的前奏。',
      bad: '再想想：割地、赔款、开口岸，前两次战争都有。这一次真正“新”的东西是什么？'
    },
    cards: [
      { k: '知识卡 · 条款', t: '《马关条约》四款', b: '割<b>辽东半岛、台湾全岛及所有附属各岛屿、澎湖列岛</b>；赔款 <b>2 亿两白银</b>；开放沙市、重庆、苏州、杭州；<b>允许日本在通商口岸开设工厂</b>。影响：大大加深了中国的半殖民地化程度。' },
      { k: '知识卡 · 余波', t: '反割台与瓜分狂潮', b: '台湾军民在徐骧、刘永福带领下抵抗五个月，打死打伤日军数千人。俄德法“三国干涉还辽”，中国付 3000 万两“赎辽费”。列强随即强租租借地、划分势力范围，<b>掀起瓜分中国的狂潮</b>。' }
    ]
  }
];

const PATHS = [
  { t: '变法维新 · 康有为、梁启超', b: '1895 年，公车上书；1898 年，戊戌变法。光绪帝下诏变法，103 天后，慈禧发动政变，谭嗣同等“戊戌六君子”血溅菜市口，康梁流亡海外。<br><b>它失败了，却第一次把“变制度”摆上了台面。</b>' },
  { t: '革命推翻 · 孙中山', b: '1894 年，兴中会在檀香山成立；1911 年，武昌起义；1912 年，中华民国成立，清帝退位。<br><b>它推翻了两千多年的君主专制，却没有改变中国半殖民地半封建的社会性质。</b>' },
  { t: '实业救国 · 张謇', b: '状元张謇辞官回乡，办大生纱厂。一战期间，中国民族工业迎来“短暂的春天”；战后，列强卷土重来，纱厂萧条。<br><b>实业救不了国——因为关税、铁路、金融，都不在自己手里。</b>' },
  { t: '继续洋务 · 李鸿章', b: '1895 年，北洋舰队全军覆没，洋务运动宣告破产。李鸿章在马关挨了一枪，换来赔款少了一千万两。<br><b>只学技术、不改制度的路，走到了尽头。</b>' }
];

const CMP = [
  ['割地', '香港岛', '辽东半岛（后赎回）、台湾全岛及所有附属各岛屿、澎湖列岛'],
  ['赔款', '2100 万银元', '2 亿两白银（相当于清政府三年财政收入）'],
  ['通商', '广州、厦门、福州、宁波、上海（东南沿海）', '沙市、重庆、苏州、杭州（深入内地）'],
  ['经济特权', '协定关税，关税自主权受损', '允许日本在通商口岸开设工厂，资本输出'],
  ['影响', '中国开始沦为半殖民地半封建社会', '大大加深半殖民地化程度，掀起瓜分狂潮']
];

/* ================= 工具 ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const wait = ms => new Promise(r => setTimeout(r, ms));

/* ================= 音效 ================= */
const Snd = {
  ctx: null, master: null, cur: null, on: false,
  init() {
    if (this.ctx) return;
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    this.ctx = new C();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.0;
    this.master.connect(this.ctx.destination);
    if (this.on) this.master.gain.linearRampToValueAtTime(0.22, this.ctx.currentTime + 1.2);
  },
  noiseBuf(dur = 3) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * dur), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.2; }
    return buf;
  },
  amb(name) {
    if (!this.ctx) return;
    this.stopAmb();
    if (!this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const g = ctx.createGain(); g.gain.value = 0; g.connect(this.master);
    const nodes = [];
    const addNoise = (freq, q, vol) => {
      const src = ctx.createBufferSource(); src.buffer = this.noiseBuf(4); src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq;
      const gg = ctx.createGain(); gg.gain.value = vol;
      src.connect(f); f.connect(gg); gg.connect(g); src.start(); nodes.push(src);
      return gg;
    };
    if (name === 'sea' || name === 'battle') {
      const gg = addNoise(name === 'battle' ? 900 : 620, 1, 0.5);
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09;
      const lg = ctx.createGain(); lg.gain.value = 0.16; lfo.connect(lg); lg.connect(gg.gain); lfo.start(); nodes.push(lfo);
    }
    if (name === 'fire') {
      addNoise(1400, 1, 0.45);
      const it = ctx.createOscillator(); it.frequency.value = 0.7;
      const ig = ctx.createGain(); ig.gain.value = 0.12; it.connect(ig); ig.connect(g); it.start(); nodes.push(it);
    }
    if (name === 'factory') {
      addNoise(380, 1, 0.4);
      const hum = ctx.createOscillator(); hum.type = 'sawtooth'; hum.frequency.value = 55;
      const hg = ctx.createGain(); hg.gain.value = 0.035; hum.connect(hg); hg.connect(g); hum.start(); nodes.push(hum);
    }
    if (name === 'drum') {
      addNoise(300, 1, 0.28);
      const dr = ctx.createOscillator(); dr.frequency.value = 48;
      const dg = ctx.createGain(); dg.gain.value = 0.05; dr.connect(dg); dg.connect(g); dr.start(); nodes.push(dr);
    }
    g.gain.linearRampToValueAtTime(name === 'room' ? 0.10 : 0.42, t + 1.4);
    this.cur = { g, nodes };
  },
  stopAmb() {
    if (!this.cur || !this.ctx) return;
    const { g, nodes } = this.cur, t = this.ctx.currentTime;
    try { g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(Math.max(g.gain.value, 0.0001), t); g.gain.linearRampToValueAtTime(0, t + 0.6); } catch (e) { }
    nodes.forEach(n => { try { n.stop(t + 0.7); } catch (e) { } });
    this.cur = null;
  },
  boom() {
    if (!this.ctx || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf(1);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(1200, t); f.frequency.exponentialRampToValueAtTime(90, t + 0.5);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.001, t); g.gain.exponentialRampToValueAtTime(0.55, t + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + 0.75);
    src.connect(f); f.connect(g); g.connect(this.master); src.start(t); src.stop(t + 0.9);
  },
  clang() {
    if (!this.ctx || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    [880, 1320, 1760].forEach((fq, i) => {
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = fq;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.001, t); g.gain.exponentialRampToValueAtTime(0.12 / (i + 1), t + 0.01); g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.55);
    });
  },
  toggle() {
    this.on = !this.on;
    if (!this.ctx) this.init();
    if (this.master) this.master.gain.value = this.on ? 0.22 : 0.0;
    if (!this.on) this.stopAmb();
    return this.on;
  }
};

/* ================= 状态 ================= */
const state = {
  idx: 0, line: 0, typing: false, phase: 'idle', done: new Set(), cards: [], visited: new Set(), bgFlip: false, sound: false
};
const DEBUG_VIS = new URLSearchParams(location.search).get('cover') === '0';
if (DEBUG_VIS) document.body.classList.add('debug');

function save() {
  try {
    localStorage.setItem('vrhist_v1', JSON.stringify({ done: [...state.done], cards: state.cards }));
  } catch (e) { }
}
function load() {
  try {
    const d = JSON.parse(localStorage.getItem('vrhist_v1') || '{}');
    if (Array.isArray(d.done)) state.done = new Set(d.done);
    if (Array.isArray(d.cards)) state.cards = d.cards;
  } catch (e) { }
}

/* ================= 地图 ================= */
function buildMap() {
  const m = window.CHINA_MAP;
  if (!m) return;
  const svg = $('#chinaMap');
  const W = m.main.w, H = m.main.h;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = m.main.provinces.map((p, i) =>
    `<path class="prov${/台湾|海南|香港/.test(p.n) ? ' sea' : ''}" d="${p.d}" style="animation-delay:${i * 26}ms"/>`
  ).join('');

  const inset = $('#mapInset');
  inset.innerHTML = `<div class="inset-frame"></div><svg viewBox="0 0 ${m.inset.w} ${m.inset.h}">
    ${m.inset.paths.map(p => p.n === 'jd'
      ? `<path d="${p.d}" fill="none" stroke="rgba(160,180,200,.9)" stroke-width="2.2" stroke-dasharray="5 3"/>`
      : `<path d="${p.d}" fill="rgba(28,34,44,.9)" stroke="rgba(150,168,190,.4)" stroke-width="0.6"/>`).join('')}
  </svg>`;

  const pinLayer = $('#pinLayer');
  const LPOS = ['r', 'l', 't', 'l', 'r', 'r'];
  pinLayer.innerHTML = SCENES.map((s, i) => {
    const pt = m.places[s.pin] || [500, 300];
    return `<div class="pin" data-i="${i}" style="left:${(pt[0] / W * 100).toFixed(2)}%;top:${(pt[1] / H * 100).toFixed(2)}%">
      <span class="halo"></span><span class="halo d2"></span><span class="halo d3"></span>
      <span class="idx">0${i + 1}</span>
      <span class="label lp-${LPOS[i]}">${s.name}<small>${s.year} · ${s.place.split(' ')[0]}</small></span>
    </div>`;
  }).join('');
  $$('.pin').forEach(p => p.addEventListener('click', e => { e.stopPropagation(); enterScene(+p.dataset.i); }));

  const list = $('#chapterList');
  list.innerHTML = SCENES.map((s, i) => `<button class="ch-item" data-i="${i}">
      <span class="no">0${i + 1}</span>
      <span class="txt"><span class="t">${s.name}</span><span class="s">${s.year} · ${s.place}</span></span>
      <span class="go">▸</span>
    </button>`).join('');
  $$('.ch-item').forEach(b => b.addEventListener('click', () => enterScene(+b.dataset.i)));

  const tl = $('#tlTrack');
  const marks = [
    { y: '1839', n: '虎门销烟', at: 3 }, { y: '1842', n: '南京条约', at: 18 },
    { y: '1851', n: '金田起义', at: 32 }, { y: '1860', n: '火烧圆明园', at: 45 },
    { y: '1865', n: '江南制造总局', at: 62 }, { y: '1894', n: '黄海海战', at: 78 },
    { y: '1895', n: '马关条约', at: 88 }, { y: '1901', n: '辛丑条约', at: 100 }
  ];
  tl.innerHTML = `<div class="tl-axis"></div>` + marks.map((k, i) =>
    `<div class="tl-node" style="left:${k.at}%" data-i="${i}"><div class="d">${k.y}</div><div class="p"></div><div class="n">${k.n}</div></div>`
  ).join('');

  resizeMap();
}
function resizeMap() {
  const box = $('.map-svg-box'), wrap = $('.map-wrap');
  if (!box || !wrap) return;
  const m = window.CHINA_MAP;
  const ratio = m ? m.main.w / m.main.h : 1000 / 582;
  const availW = wrap.clientWidth - 40, availH = wrap.clientHeight - 30;
  let h = availH, w = h * ratio;
  if (w > availW) { w = availW; h = w / ratio; }
  box.style.width = Math.max(200, w) + 'px';
  box.style.height = Math.max(140, h) + 'px';
}

/* ================= 屏幕 ================= */
function showScreen(id) {
  $$('.screen').forEach(s => s.classList.toggle('on', s.id === id));
  if (DEBUG_VIS) {
    $$('.screen').forEach(s => {
      s.style.transition = 'none';
      s.style.opacity = s.classList.contains('on') ? '1' : '0';
    });
  }
  if (id === 'mapScreen') { resizeMap(); updateMapStatus(); }
  if (id === 'finale') { updateReport(); setTimeout(() => revealRows(), 1200); }
}

function updateMapStatus() {
  $('#mapCardCount').textContent = `${state.cards.length} / 12`;
  $('#mapDoneText').textContent = `已亲历 ${state.done.size} / 6 幕`;
  $$('.ch-item').forEach(b => b.classList.toggle('done', state.done.has(+b.dataset.i)));
  $$('.pin').forEach(p => p.classList.toggle('done', state.done.has(+p.dataset.i)));
  const next = SCENES.findIndex((s, i) => !state.done.has(i));
  $$('.tl-node').forEach((n, i) => n.classList.toggle('active', i === Math.max(0, next)));
}

/* ================= 场景 ================= */
function curtain(year, name, cb) {
  const c = $('#curtain');
  $('#curtainYear').textContent = year;
  $('#curtainName').textContent = name;
  c.classList.add('on');
  setTimeout(() => { cb && cb(); }, 560);
  setTimeout(() => c.classList.remove('on'), 1320);
}

function enterScene(i) {
  curtain(SCENES[i].year, SCENES[i].name, () => {
    state.idx = i; state.line = 0; state.phase = 'lines';
    state.visited.add(i);
    renderSceneBase();
    showScreen('stage');
    setBG(SCENES[i].img);
    Snd.amb(SCENES[i].amb);
    setTimeout(typeLine, 420);
  });
}

function renderSceneBase() {
  const s = SCENES[state.idx];
  $('#hudChapter').textContent = s.chapter;
  $('#hudPlace').textContent = s.place;
  $('#sceneYear').textContent = s.year;
  $('#sceneName').textContent = s.name;
  $('#scenePlace').textContent = s.place;
  $('#footLeft').textContent = `${s.chapter} / 共六幕`;
  $('#personaCard').classList.remove('on');
  $('#cardsTray').innerHTML = '';
  $('.cards-tray').style.display = s.cards.length ? 'flex' : 'none';
  $('#hudCaps').innerHTML = s.cards.map((c, i) => `<span class="capdot" data-c="${i}"></span>`).join('');
  const ci = state.idx;
  const got = state.cards.filter(c => c[0] === ci).length;
  $$('#hudCaps .capdot').forEach((d, i) => d.classList.toggle('ok', i < got));
  s.cards.forEach((c, i) => {
    if (i < got) {
      const el = document.createElement('button');
      el.className = 'tray-card on';
      el.innerHTML = `<div class="k">${c.k}</div><div class="t">${c.t}</div>`;
      el.onclick = () => openCard(ci, i);
      $('#cardsTray').appendChild(el);
    }
  });
  $('#progressBar').style.width = '0%';
}

function setBG(src) {
  const a = $('#bgA'), b = $('#bgB');
  const showEl = state.bgFlip ? b : a;
  const hideEl = state.bgFlip ? a : b;
  if (!showEl.src.endsWith(src)) { showEl.src = src; }
  showEl.classList.add('show');
  hideEl.classList.remove('show');
  if (DEBUG_VIS) {
    showEl.style.transition = 'none';
    hideEl.style.transition = 'none';
    showEl.style.opacity = '1';
    hideEl.style.opacity = '0';
  }
  state.bgFlip = !state.bgFlip;
}

let typeTimer = null, fullText = '';
function typeLine() {
  const s = SCENES[state.idx];
  const line = s.lines[state.line];
  if (!line) return;
  state.phase = 'lines';
  const persona = $('#personaCard');
  if (line.who) {
    $('#personaWho').textContent = line.who;
    $('#personaRole').textContent = line.role || '';
    $('#personaSay').textContent = '“' + (line.say || '') + '”';
    persona.classList.add('on');
  } else {
    persona.classList.remove('on');
  }
  $('#subMeta').textContent = line.meta || '';
  $('#continueHint').style.display = 'none';
  const txt = line.who ? '“' + line.say + '”' : line.t;
  fullText = txt;
  const el = $('#subText');
  el.innerHTML = '';
  state.typing = true;
  let i = 0;
  clearInterval(typeTimer);
  typeTimer = setInterval(() => {
    i++;
    el.textContent = fullText.slice(0, i);
    if (i >= fullText.length) {
      clearInterval(typeTimer);
      state.typing = false;
      el.innerHTML = fullText + '<span class="cursor"></span>';
      const isLast = state.line >= s.lines.length - 1;
      $('#continueHint').style.display = 'flex';
      $('#continueHint').querySelector('span').textContent = isLast ? '接受任务' : '点击继续';
      if (state.idx === 1 || state.idx === 5) {
        if (Math.random() < 0.7) Snd.boom();
      }
    }
  }, 24);
  $('#progressBar').style.width = `${(state.line / Math.max(1, s.lines.length)) * 100}%`;
}

function finishTyping() {
  clearInterval(typeTimer);
  $('#subText').innerHTML = fullText + '<span class="cursor"></span>';
  state.typing = false;
  const s = SCENES[state.idx];
  const isLast = state.line >= s.lines.length - 1;
  $('#continueHint').style.display = 'flex';
  $('#continueHint').querySelector('span').textContent = isLast ? '接受任务' : '点击继续';
}

function advance() {
  if (state.phase !== 'lines') return;
  if (state.typing) { finishTyping(); return; }
  const s = SCENES[state.idx];
  if (state.line < s.lines.length - 1) {
    state.line++;
    typeLine();
  } else {
    state.phase = 'task';
    $('#continueHint').style.display = 'none';
    openTask();
  }
}

/* ================= 任务 ================= */
function openTask() {
  const s = SCENES[state.idx], t = s.task;
  const wrap = $('#taskWrap'), card = $('#taskCard');
  let body = '';
  if (t.type === 'single') {
    body = `<div class="opt-list">` + t.opts.map((o, i) =>
      `<button class="opt" data-i="${i}" data-ok="${o.ok}"><span class="k">${'ABCD'[i]}</span><span class="v">${o.v}</span><span class="mark">✓</span></button>`
    ).join('') + `</div>`;
  } else if (t.type === 'order') {
    const shuffled = shuffle([...t.items]);
    body = `<div class="opt-list" id="orderList">` + shuffled.map((o, i) =>
      `<button class="opt ord" data-order="${o.order}"><span class="k num">○</span><span class="v">${o.v}</span></button>`
    ).join('') + `</div><div class="order-tip" id="orderTip">按顺序点击，已选 0 / ${t.items.length}</div>`;
  } else if (t.type === 'pin') {
    const [vx, vy, vw, vh] = t.vb.split(' ').map(Number);
    const provs = window.CHINA_MAP.main.provinces.map(p => `<path d="${p.d}" fill="rgba(32,39,50,.95)" stroke="rgba(158,176,198,.55)" stroke-width="0.7"/>`).join('');
    const marks = t.spots.map(sp => {
      const pt = window.CHINA_MAP.places[sp.k];
      return `<g class="spotg" data-ok="${sp.ok}">
        <circle cx="${pt[0]}" cy="${pt[1]}" r="9" fill="transparent"/>
        <circle cx="${pt[0]}" cy="${pt[1]}" r="3.4" fill="#b23a2f" stroke="#e2c68c" stroke-width="0.55"/>
        <text x="${pt[0] + 6.2}" y="${pt[1] + 1.5}" font-size="5.4" fill="#e6dcc6">${sp.label}</text>
      </g>`;
    }).join('');
    body = `<div class="mini-map"><svg viewBox="${t.vb}" preserveAspectRatio="xMidYMid meet">
      <rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" fill="#080a0e"/>
      ${provs}${marks}
    </svg></div><div class="pin-hint">${t.hint || ''}</div>`;
  }
  card.innerHTML = `<div class="task-kicker">你的任务 · MISSION</div>
    <div class="task-q">${t.q}</div>
    ${body}
    <div class="feedback" id="fb"><div class="head" id="fbHead"></div><div class="body" id="fbBody"></div></div>
    <div class="task-actions"><button class="btn-next" id="btnTaskNext" style="display:none">继续 ▸</button></div>`;
  wrap.classList.add('on');
  bindTask(t);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function bindTask(t) {
  if (t.type === 'single') {
    $$('.opt', $('#taskCard')).forEach(b => {
      b.onclick = () => {
        if ($('#fb').classList.contains('on')) return;
        const ok = b.dataset.ok === 'true';
        b.classList.add(ok ? 'right' : 'wrong');
        b.querySelector('.mark').textContent = ok ? '✓' : '✕';
        if (ok) { Snd.clang(); } else { Snd.boom(); }
        showFeedback(ok, t, ok);
      };
    });
  }
  if (t.type === 'order') {
    let chosen = [];
    $$('.ord', $('#taskCard')).forEach(b => {
      b.onclick = () => {
        if ($('#fb').classList.contains('on')) return;
        if (b.classList.contains('picked')) return;
        b.classList.add('picked');
        chosen.push(+b.dataset.order);
        b.querySelector('.k').textContent = chosen.length;
        $('#orderTip').textContent = `按顺序点击，已选 ${chosen.length} / ${t.items.length}`;
        if (chosen.length === t.items.length) {
          const right = chosen.every((v, i) => v === i + 1);
          if (right) Snd.clang(); else Snd.boom();
          showFeedback(right, t, right);
        }
      };
    });
  }
  if (t.type === 'pin') {
    $$('.spotg', $('#taskCard')).forEach(b => {
      b.onclick = () => {
        if ($('#fb').classList.contains('on')) return;
        const ok = b.dataset.ok === 'true';
        b.classList.add('hit');
        if (ok) Snd.clang(); else Snd.boom();
        showFeedback(ok, t, ok);
      };
    });
  }
}

function showFeedback(ok, t, solved) {
  const fb = $('#fb');
  fb.classList.add('on');
  $('#fbHead').textContent = ok ? '判断正确 · 收录知识卡' : '再想一想';
  $('#fbBody').innerHTML = ok ? t.ok : t.bad;
  $('#btnTaskNext').style.display = 'inline-block';
  $('#btnTaskNext').textContent = ok ? '继续 ▸' : '重新作答';
  $('#btnTaskNext').onclick = () => {
    if (!ok) {
      $('#taskWrap').classList.remove('on');
      state.phase = 'lines';
      setTimeout(() => { state.phase = 'task'; openTask(); }, 300);
      return;
    }
    $('#taskWrap').classList.remove('on');
    completeScene();
  };
}

/* ================= 知识卡 ================= */
function openCard(sceneIdx, cardIdx) {
  const c = SCENES[sceneIdx].cards[cardIdx];
  const modal = $('#cardModal');
  $('#cardPaper').innerHTML = `<div class="stamp">已收录</div>
    <div class="ck">${c.k}</div>
    <div class="ct">${c.t}</div>
    <div class="cb">${c.b}</div>
    <button class="close" id="btnCardClose">收起卡片 ✕</button>`;
  modal.classList.add('on');
  $('#btnCardClose').onclick = () => modal.classList.remove('on');
  modal.onclick = e => { if (e.target === modal) modal.classList.remove('on'); };
}

async function completeScene() {
  const s = SCENES[state.idx];
  state.done.add(state.idx);
  for (let i = 0; i < s.cards.length; i++) {
    const id = [state.idx, i];
    if (!state.cards.some(c => c[0] === id[0] && c[1] === id[1])) {
      state.cards.push(id);
      const c = s.cards[i];
      const el = document.createElement('button');
      el.className = 'tray-card';
      el.innerHTML = `<div class="k">${c.k}</div><div class="t">${c.t}</div>`;
      el.onclick = () => openCard(state.idx, i);
      $('#cardsTray').appendChild(el);
      requestAnimationFrame(() => el.classList.add('on'));
      if (i === 0) {
        await wait(200);
        openCard(state.idx, i);
        await wait(900);
      }
    }
    const dot = $$('#hudCaps .capdot')[i];
    if (dot) dot.classList.add('ok');
  }
  save();
  $('#progressBar').style.width = '100%';
  toast(`本幕完成 · 已收录 ${s.cards.length} 张知识卡`);
  await wait(1400);
  Snd.stopAmb();
  toMap();
}

function toast(txt) {
  const el = $('#toast'); el.textContent = txt; el.classList.add('on');
  setTimeout(() => el.classList.remove('on'), 2200);
}

function toMap() {
  Snd.stopAmb();
  curtain('CHRONICLE', '回到地图', () => {
    showScreen('mapScreen');
    updateMapStatus();
  });
}

/* ================= 结课 ================= */
function buildFinale() {
  const body = $('#cmpBody');
  body.innerHTML = CMP.map((r, i) => `<tr data-r="${i}"><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('');
  $('#btnReveal').onclick = revealRows;
  $$('.path').forEach(b => b.onclick = () => {
    const p = PATHS[+b.dataset.path];
    $('#prTitle').textContent = p.t;
    $('#prBody').innerHTML = p.b;
    $('#pathResult').classList.add('on');
  });
  $('#btnBackMap').onclick = () => { showScreen('mapScreen'); updateMapStatus(); };
  $('#btnReset').onclick = () => {
    if (!confirm('重置本课记录？所有已收集的知识卡与进度将清空。')) return;
    state.done = new Set(); state.cards = []; save(); updateReport(); updateMapStatus(); toast('已重置');
  };
  const bc = document.getElementById('btnCards');
  if (bc) bc.onclick = showAllCards;
}

function updateReport() {
  $('#repScenes').textContent = state.done.size;
  $('#repCards').textContent = state.cards.length;
}

let revealing = false;
function revealRows() {
  if (revealing) return;
  revealing = true;
  const rows = $$('#cmpBody tr');
  let i = 0;
  const tick = () => {
    if (i >= rows.length) { $('#btnReveal').style.display = 'none'; return; }
    rows[i].classList.add('reveal'); i++; setTimeout(tick, 620);
  };
  tick();
}

function showAllCards() {
  const list = state.cards.map(([si, ci]) => {
    const c = SCENES[si].cards[ci]; if (!c) return '';
    return `<div style="padding:1.6vh 0;border-bottom:1px solid rgba(201,166,104,.16)">
      <div style="font-size:10px;letter-spacing:.26em;color:var(--gold)">${SCENES[si].chapter} · ${SCENES[si].name}</div>
      <div style="font-family:var(--serif);font-size:16px;letter-spacing:.08em;margin:.8vh 0;color:#f0e6d0">${c.t}</div>
      <div style="font-size:12.5px;line-height:1.95;color:#c8bfab">${c.b}</div></div>`;
  }).join('') || '<div style="color:#8a8272;padding:2vh 0">还没有收录任何知识卡。</div>';
  const modal = $('#cardModal');
  $('#cardPaper').innerHTML = `<div class="ck">知识卡回顾 · COLLECTION</div><div class="cb" style="max-height:56vh;overflow:auto;margin-top:2vh">${list}</div>
    <button class="close" id="btnCardClose">收起 ✕</button>`;
  modal.classList.add('on');
  $('#btnCardClose').onclick = () => modal.classList.remove('on');
}

/* ================= 事件 ================= */
function bindGlobal() {
  // 封面
  const start = () => { Snd.init(); showScreen('mapScreen'); Snd.amb('sea'); };
  $('#btnEnter').onclick = start;
  $('#cover').addEventListener('click', e => { if (e.target.id !== 'btnEnter') start(); });

  // 场景
  $('#stage').addEventListener('click', e => {
    if (e.target.closest('.task-wrap,.card-modal,.scene-hud,.cards-tray,.persona,.scene-title,.scene-foot')) return;
    advance();
  });
  $('#continueHint').onclick = e => { e.stopPropagation(); advance(); };

  $('#btnMap').onclick = () => toMap();
  $('#btnReplay').onclick = () => {
    state.line = 0; state.phase = 'lines';
    renderSceneBase(); typeLine();
  };
  $('#btnSound').textContent = '音效 关';
  $('#btnSound').onclick = () => {
    const on = Snd.toggle();
    $('#btnSound').textContent = on ? '音效 开' : '音效 关';
    if (on) Snd.amb(SCENES[state.idx].amb);
  };

  // 结课
  $('#btnReveal') && ($('#btnReveal').onclick = null);

  // 键盘
  document.addEventListener('keydown', e => {
    const inStage = $('#stage').classList.contains('on');
    if (e.key === 'Enter' || e.code === 'Space') {
      if ($('#cover').classList.contains('on')) { Snd.init(); showScreen('mapScreen'); e.preventDefault(); return; }
      if (inStage && !$('#taskWrap').classList.contains('on') && !$('#cardModal').classList.contains('on')) { e.preventDefault(); advance(); }
    }
    if (e.key === 'Escape' && inStage) toMap();
    if (e.key === 'f' || e.key === 'F') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
    }
    if (/^[1-6]$/.test(e.key)) { enterScene(+e.key - 1); }
  });

  // 视差
  const par = $('#parallax');
  document.addEventListener('mousemove', e => {
    if (!par) return;
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    par.style.transform = `translate3d(${(-x * 16).toFixed(1)}px,${(-y * 11).toFixed(1)}px,0)`;
  });

  window.addEventListener('resize', resizeMap);
}

/* ================= 启动 ================= */
load();
buildMap();
buildFinale();
bindGlobal();
updateMapStatus();

// 直达入口：index.html?start=map / ?scene=1..6 / ?task=1..6 / ?start=finale
const Q = new URLSearchParams(location.search);
const qScene = Q.get('scene') || Q.get('task');
if (Q.get('start') === 'map') showScreen('mapScreen');
if (Q.get('start') === 'finale') showScreen('finale');
if (qScene) {
  const i = Math.max(0, Math.min(5, (parseInt(qScene) || 1) - 1));
  showScreen('stage');
  setTimeout(() => {
    state.idx = i; state.line = 0;
    renderSceneBase(); setBG(SCENES[i].img);
    if (Q.get('task')) { state.phase = 'task'; typeLine(); setTimeout(openTask, 300); }
    else { state.phase = 'lines'; typeLine(); }
  }, 200);
}
if (Q.get('cover') === '0') { const c = document.getElementById('cover'); c.classList.remove('on'); c.style.display = 'none'; }

// 从结课二次进入时保持同步
document.addEventListener('visibilitychange', () => { if (document.hidden) Snd.stopAmb(); });

/* 手机端封面提示 */
if (window.innerWidth <= 820) {
  const cf = document.querySelector('.cover-foot');
  if (cf) cf.textContent = '点击任意处开始 · 建议横屏观看';
} 

