/* ============ AllergyGuard ============ */

/* ---- Allergen database: the 14 major allergens + hidden label names ---- */
const ALLERGENS = {
  peanut: {
    label: "Peanuts", emoji: "🥜",
    desc: "A legume, not a true nut — but one of the most severe common allergies.",
    terms: ["peanut", "peanuts", "groundnut", "groundnuts", "arachis", "arachis oil",
      "beer nuts", "monkey nuts", "goober", "peanut butter", "peanut flour", "satay",
      "ถั่วลิสง", "เนยถั่ว", "สะเต๊ะ"]
  },
  treenut: {
    label: "Tree nuts", emoji: "🌰",
    desc: "Almonds, cashews, walnuts, hazelnuts, pistachios, pecans, macadamias, Brazil nuts.",
    terms: ["almond", "almonds", "cashew", "cashews", "walnut", "walnuts", "hazelnut",
      "hazelnuts", "pecan", "pecans", "pistachio", "pistachios", "macadamia",
      "brazil nut", "brazil nuts", "pine nut", "pine nuts", "chestnut", "chestnuts",
      "praline", "marzipan", "nougat", "frangipane", "gianduja", "nut butter",
      "nut oil", "nut paste", "tree nut", "tree nuts",
      "อัลมอนด์", "เม็ดมะม่วงหิมพานต์", "วอลนัท", "เฮเซลนัท", "พิสตาชิโอ", "แมคคาเดเมีย"]
  },
  milk: {
    label: "Milk / dairy", emoji: "🥛",
    desc: "Hides as casein, whey, lactose, ghee and many 'lact-' words.",
    terms: ["milk", "whole milk", "skim milk", "milk powder", "milk solids", "buttermilk",
      "cream", "butter", "butterfat", "ghee", "cheese", "yogurt", "yoghurt", "curd",
      "curds", "custard", "casein", "caseinate", "caseinates", "sodium caseinate",
      "whey", "whey protein", "lactose", "lactalbumin", "lactoglobulin", "lactoferrin",
      "dairy", "half-and-half", "kefir", "paneer", "quark",
      "นม", "นมผง", "นมวัว", "นมสด", "นมข้น", "หางนม", "เนย", "ชีส", "โยเกิร์ต", "ครีม", "เวย์"]
  },
  egg: {
    label: "Eggs", emoji: "🥚",
    desc: "Hides as albumin, ovalbumin, lysozyme, mayonnaise, meringue.",
    terms: ["egg", "eggs", "egg white", "egg whites", "egg yolk", "egg yolks",
      "egg powder", "dried egg", "albumin", "albumen", "ovalbumin", "ovomucoid",
      "ovomucin", "ovoglobulin", "lysozyme", "mayonnaise", "mayo", "meringue",
      "aioli", "eggnog", "globulin", "livetin", "vitellin",
      "ไข่", "ไข่ขาว", "ไข่แดง", "ไข่ผง", "มายองเนส"]
  },
  fish: {
    label: "Fish", emoji: "🐟",
    desc: "Includes fish sauce, anchovy (often in Worcestershire sauce and Caesar dressing).",
    terms: ["fish", "anchovy", "anchovies", "cod", "salmon", "tuna", "haddock",
      "halibut", "mackerel", "sardine", "sardines", "tilapia", "trout", "bass",
      "fish sauce", "fish oil", "fish stock", "fish paste", "worcestershire",
      "surimi", "caviar", "roe", "nam pla", "furikake", "bonito", "dashi", "katsuobushi",
      "ปลา", "น้ำปลา", "ปลาร้า", "ปลากรอบ", "ปลาป่น", "ซอสปลา"]
  },
  shellfish: {
    label: "Crustaceans", emoji: "🦐",
    desc: "Shrimp, prawn, crab, lobster, crayfish — and shrimp paste in many Asian sauces.",
    terms: ["shrimp", "prawn", "prawns", "crab", "lobster", "crayfish", "crawfish",
      "krill", "scampi", "langoustine", "shellfish", "crustacean", "crustaceans",
      "shrimp paste", "belacan", "kapi", "tom yum paste",
      "กุ้ง", "กุ้งแห้ง", "ปู", "กะปิ", "ล็อบสเตอร์"]
  },
  mollusc: {
    label: "Molluscs", emoji: "🦪",
    desc: "Clams, mussels, oysters, squid, octopus, scallops, snails — and oyster sauce.",
    terms: ["clam", "clams", "mussel", "mussels", "oyster", "oysters", "scallop",
      "scallops", "squid", "calamari", "octopus", "snail", "snails", "escargot",
      "abalone", "whelk", "cockle", "cockles", "mollusc", "molluscs", "mollusk",
      "mollusks", "oyster sauce", "cuttlefish",
      "หอย", "หอยนางรม", "ปลาหมึก", "หมึก", "ซอสหอยนางรม"]
  },
  wheat: {
    label: "Wheat / gluten", emoji: "🌾",
    desc: "Hides as semolina, spelt, durum, farro, seitan, malt, couscous, bulgur.",
    terms: ["wheat", "wheat flour", "whole wheat", "gluten", "semolina", "durum",
      "spelt", "farro", "einkorn", "emmer", "kamut", "couscous", "bulgur", "bran",
      "farina", "graham", "seitan", "malt", "malt extract", "malt vinegar",
      "barley", "rye", "triticale", "breadcrumbs", "panko", "soy sauce", "udon", "orzo",
      "แป้งสาลี", "ข้าวสาลี", "กลูเตน", "ซีอิ๊ว", "เกล็ดขนมปัง", "บะหมี่"]
  },
  soy: {
    label: "Soy", emoji: "🫘",
    desc: "Hides as edamame, tofu, tempeh, miso, textured vegetable protein, lecithin (E322).",
    terms: ["soy", "soya", "soybean", "soybeans", "soy sauce", "soy protein",
      "soy flour", "soy lecithin", "lecithin", "e322", "edamame", "tofu", "tempeh",
      "miso", "natto", "tamari", "textured vegetable protein", "tvp",
      "hydrolyzed vegetable protein", "hvp", "okara", "yuba",
      "ถั่วเหลือง", "เต้าหู้", "เต้าเจี้ยว", "ซีอิ๊ว", "โปรตีนถั่วเหลือง", "เลซิติน", "มิโซะ"]
  },
  sesame: {
    label: "Sesame", emoji: "🫓",
    desc: "Hides as tahini, benne, gingelly oil, halvah, za'atar, hummus.",
    terms: ["sesame", "sesame seed", "sesame seeds", "sesame oil", "tahini", "tahina",
      "benne", "benne seed", "gingelly", "gingelly oil", "halvah", "halva",
      "za'atar", "zaatar", "hummus", "houmous", "gomashio", "furikake",
      "งาขาว", "งาดำ", "เมล็ดงา", "น้ำมันงา", "งาคั่ว"]
  },
  mustard: {
    label: "Mustard", emoji: "🌭",
    desc: "In dressings, curry powder, mayonnaise, pickles and many spice blends.",
    terms: ["mustard", "mustard seed", "mustard seeds", "mustard flour", "mustard oil",
      "dijon", "wasabi powder", "curry powder", "piccalilli", "มัสตาร์ด", "ผงกะหรี่"]
  },
  celery: {
    label: "Celery", emoji: "🥬",
    desc: "Includes celeriac, celery salt, celery seed — common in stocks and soups.",
    terms: ["celery", "celeriac", "celery salt", "celery seed", "celery seeds",
      "celery extract", "celery leaf", "celery root", "ขึ้นฉ่าย", "คื่นช่าย"]
  },
  lupin: {
    label: "Lupin", emoji: "🌼",
    desc: "A legume flour used in some breads, pasta and gluten-free products.",
    terms: ["lupin", "lupine", "lupini", "lupin flour", "lupin bean", "lupin beans", "ลูพิน"]
  },
  sulphite: {
    label: "Sulphites", emoji: "🍷",
    desc: "Preservatives E220–E228 in wine, dried fruit, and processed foods.",
    terms: ["sulphite", "sulphites", "sulfite", "sulfites", "sulphur dioxide",
      "sulfur dioxide", "e220", "e221", "e222", "e223", "e224", "e225", "e226",
      "e227", "e228", "sodium metabisulphite", "sodium metabisulfite",
      "potassium metabisulphite", "sodium sulphite", "sodium bisulphite",
      "ซัลไฟต์", "ซัลเฟอร์ไดออกไซด์", "สารกันบูด"]
  }
};

/* ---- Common foods & their typical allergens ---- */
const FOODS = [
  { name: "Pad thai", allergens: ["peanut", "fish", "egg", "soy", "shellfish"] },
  { name: "Som tam (papaya salad)", allergens: ["peanut", "fish", "shellfish"] },
  { name: "Pad krapow (basil stir-fry)", allergens: ["fish", "soy", "egg"] },
  { name: "Massaman curry", allergens: ["peanut", "fish"] },
  { name: "Tom kha gai", allergens: ["fish"] },
  { name: "Khao man gai", allergens: ["soy", "fish"] },
  { name: "Mango sticky rice", allergens: [] },
  { name: "Green curry", allergens: ["shellfish", "fish"] },
  { name: "Tom yum soup", allergens: ["shellfish", "fish"] },
  { name: "Fried rice", allergens: ["egg", "soy", "wheat", "fish"] },
  { name: "Ramen", allergens: ["wheat", "egg", "soy", "fish"] },
  { name: "Sushi (typical set)", allergens: ["fish", "soy", "wheat", "sesame", "mollusc"] },
  { name: "Pizza", allergens: ["wheat", "milk"] },
  { name: "Cheeseburger", allergens: ["wheat", "milk", "sesame", "egg", "soy", "mustard"] },
  { name: "Pancakes", allergens: ["wheat", "milk", "egg"] },
  { name: "Ice cream", allergens: ["milk", "egg"] },
  { name: "Milk chocolate", allergens: ["milk", "soy", "peanut", "treenut"] },
  { name: "Peanut butter sandwich", allergens: ["peanut", "wheat"] },
  { name: "Caesar salad", allergens: ["fish", "egg", "milk", "wheat", "mustard"] },
  { name: "Hummus with pita", allergens: ["sesame", "wheat"] },
  { name: "Spring rolls (fried)", allergens: ["wheat", "soy", "shellfish", "egg"] },
  { name: "Instant noodles", allergens: ["wheat", "soy", "fish", "egg"] },
  { name: "Pesto pasta", allergens: ["treenut", "milk", "wheat"] },
  { name: "Fish and chips", allergens: ["fish", "wheat", "egg", "milk"] },
  { name: "Omelette", allergens: ["egg", "milk"] },
  { name: "Granola / muesli", allergens: ["treenut", "peanut", "wheat", "soy", "milk", "sesame"] },
  { name: "Doughnut", allergens: ["wheat", "milk", "egg", "soy"] },
  { name: "Mayonnaise", allergens: ["egg", "mustard"] },
  { name: "Soy milk latte", allergens: ["soy"] },
  { name: "Dried fruit & wine", allergens: ["sulphite"] },
  { name: "Falafel wrap", allergens: ["sesame", "wheat", "celery"] },
  { name: "Miso soup", allergens: ["soy", "fish"] },
  { name: "Oyster sauce stir-fry", allergens: ["mollusc", "soy", "wheat", "fish"] },
  { name: "Chicken satay", allergens: ["peanut", "soy", "fish"] },
  { name: "Vegetable stock / soup", allergens: ["celery", "mustard"] },
  { name: "Plain rice", allergens: [] },
  { name: "Fresh fruit", allergens: [] },
  { name: "Grilled chicken (plain)", allergens: [] }
];

/* Vague label terms that can hide allergens — each adds a little risk */
const AMBIGUOUS_TERMS = [
  "natural flavor", "natural flavors", "natural flavour", "natural flavours",
  "artificial flavor", "artificial flavors", "artificial flavour", "artificial flavours",
  "spices", "seasoning", "seasonings", "vegetable oil", "vegetable broth",
  "vegetable protein", "hydrolyzed protein", "hydrolysed protein",
  "modified starch", "modified food starch", "emulsifier", "emulsifiers"
];

/* Open Food Facts allergen tags → our allergen keys */
const OFF_TAG_MAP = {
  "en:milk": "milk", "en:peanuts": "peanut", "en:nuts": "treenut",
  "en:eggs": "egg", "en:fish": "fish", "en:crustaceans": "shellfish",
  "en:molluscs": "mollusc", "en:gluten": "wheat", "en:soybeans": "soy",
  "en:sesame-seeds": "sesame", "en:mustard": "mustard", "en:celery": "celery",
  "en:lupin": "lupin", "en:sulphur-dioxide-and-sulphites": "sulphite"
};

const TRACE_RE = /may contain|traces of|produced in a (factory|facility)|same (factory|facility|equipment|line)|cross[- ]?contamination/i;

const STORAGE_KEY = "allergyguard-profile-v1";

/* ============ Monetization ============
   Free plan: N scans per day (dish photo, barcode, label photo).
   Manual paste-and-check always stays free.
   To charge real money: create Stripe Payment Links (dashboard.stripe.com →
   Payment Links) and paste the URLs below. With no link set, checkout runs
   in demo mode and unlocks Pro instantly. NOTE: verifying payments for real
   requires a small backend — a Payment Link alone can't prove who paid. */
const PAYWALL = {
  freeScansPerDay: 3,
  plans: {
    monthly: { label: "Monthly", price: "$2.99", per: "/month", link: "" },
    lifetime: { label: "Lifetime", price: "$19.99", per: "once", link: "" }
  }
};
const PRO_KEY = "allergyguard-pro-v1";
const CREDITS_KEY = "allergyguard-credits-v1";

function isPro() {
  try { return JSON.parse(localStorage.getItem(PRO_KEY))?.active === true; }
  catch (e) { return false; }
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function scansUsedToday() {
  try {
    const c = JSON.parse(localStorage.getItem(CREDITS_KEY));
    return c && c.day === todayKey() ? c.used : 0;
  } catch (e) { return 0; }
}

function scansLeft() {
  return Math.max(0, PAYWALL.freeScansPerDay - scansUsedToday());
}

function consumeScan() {
  if (isPro()) return;
  try {
    localStorage.setItem(CREDITS_KEY, JSON.stringify({ day: todayKey(), used: scansUsedToday() + 1 }));
  } catch (e) { /* storage blocked — stays free-tier in memory */ }
  updateScanMeter();
}

/* Call before starting any scan. Returns true if allowed; shows the paywall if not. */
function canScan() {
  if (isPro() || scansLeft() > 0) return true;
  openPaywall();
  return false;
}

function activatePro(plan) {
  try { localStorage.setItem(PRO_KEY, JSON.stringify({ active: true, plan, at: Date.now() })); }
  catch (e) { window.__proInMemory = true; }
  updateScanMeter();
  renderProBadge();
}

function updateScanMeter() {
  const el = $("scan-meter");
  if (!el) return;
  if (isPro() || window.__proInMemory) {
    el.innerHTML = `<span class="meter-pro">⭐ Pro — unlimited scans</span>`;
  } else {
    const left = scansLeft();
    el.innerHTML = left > 0
      ? `<span class="meter-free">⚡ ${left} free scan${left === 1 ? "" : "s"} left today</span>
         <button class="meter-upgrade" id="meter-upgrade-btn">Go Pro</button>`
      : `<span class="meter-out">🔒 Free scans used up for today</span>
         <button class="meter-upgrade" id="meter-upgrade-btn">Go Pro</button>`;
    const btn = $("meter-upgrade-btn");
    if (btn) btn.addEventListener("click", openPaywall);
  }
}

function renderProBadge() {
  const badge = $("pro-badge");
  if (badge) badge.classList.toggle("hidden", !(isPro() || window.__proInMemory));
}

function renderPaywallBody() {
  const p = PAYWALL.plans;
  $("paywall-body").innerHTML = `
    <div class="paywall-crown">👑</div>
    <h2>AllergyGuard Pro</h2>
    <p class="muted">You get ${PAYWALL.freeScansPerDay} free scans a day. Go Pro for unlimited protection.</p>
    <ul class="paywall-features">
      <li>🍽️ Unlimited food photo recognition</li>
      <li>📷 Unlimited barcode lookups</li>
      <li>🔍 Unlimited label reading (OCR)</li>
      <li>🇹🇭 English + Thai label support</li>
      <li>❤️ Supports keeping the app alive</li>
    </ul>
    <div class="paywall-plans">
      <button class="plan-btn" data-plan="monthly">
        <span class="plan-name">${p.monthly.label}</span>
        <span class="plan-price">${p.monthly.price}</span>
        <span class="plan-per">${p.monthly.per}</span>
      </button>
      <button class="plan-btn featured" data-plan="lifetime">
        <span class="plan-badge">Best value</span>
        <span class="plan-name">${p.lifetime.label}</span>
        <span class="plan-price">${p.lifetime.price}</span>
        <span class="plan-per">${p.lifetime.per}</span>
      </button>
    </div>
    <p class="paywall-fine">Checking pasted ingredient lists is always free. Pro applies to this device.</p>`;
  document.querySelectorAll("[data-plan]").forEach(btn =>
    btn.addEventListener("click", () => startCheckout(btn.dataset.plan)));
}

function openPaywall() {
  renderPaywallBody();
  $("paywall").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePaywall() {
  $("paywall").classList.add("hidden");
  document.body.style.overflow = "";
}

function startCheckout(planKey) {
  const plan = PAYWALL.plans[planKey];
  const body = $("paywall-body");
  if (plan.link) {
    // Real payment page opens in a new tab; user confirms afterwards.
    window.open(plan.link, "_blank", "noopener");
    body.innerHTML = `
      <div class="paywall-crown">💳</div>
      <h2>Finish paying in the new tab</h2>
      <p class="muted">Complete the ${plan.label} checkout there, then come back and activate.</p>
      <button class="primary-btn" id="paywall-activate">I've paid — activate Pro</button>
      <p class="paywall-fine">Activation is on your honor until a payment server is connected.</p>`;
    $("paywall-activate").addEventListener("click", () => { activatePro(planKey); showProWelcome(); });
  } else {
    // Demo checkout: no Stripe link configured yet.
    body.innerHTML = `
      <div class="paywall-crown">⏳</div>
      <h2>Processing…</h2>
      <p class="muted">Demo checkout — no real charge. Paste your Stripe Payment Link in app.js to charge real money.</p>`;
    setTimeout(() => { activatePro(planKey); showProWelcome(); }, 900);
  }
}

function showProWelcome() {
  $("paywall-body").innerHTML = `
    <div class="paywall-crown">🎉</div>
    <h2>Welcome to Pro!</h2>
    <p class="muted">Unlimited dish, barcode and label scans are now unlocked on this device.</p>
    <button class="primary-btn" id="paywall-done">Start scanning</button>`;
  $("paywall-done").addEventListener("click", closePaywall);
}

/* ---- State ---- */
let profile = { selected: [], custom: [] };
let editingSelected = new Set();
let editingCustom = [];

/* ---- Elements ---- */
const $ = (id) => document.getElementById(id);
const profileScreen = $("profile-screen");
const mainScreen = $("main-screen");

/* ============ Profile setup ============ */
function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (Array.isArray(p.selected) && Array.isArray(p.custom)) return p;
    }
  } catch (e) { /* corrupted storage — start fresh */ }
  return null;
}

function saveProfile() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) { /* private browsing or sandbox may block storage — keep profile in memory */ }
}

function renderAllergenGrid() {
  const grid = $("allergen-grid");
  grid.innerHTML = "";
  for (const [key, a] of Object.entries(ALLERGENS)) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "allergen-tile" + (editingSelected.has(key) ? " selected" : "");
    btn.innerHTML = `<span class="emoji">${a.emoji}</span><span>${a.label}</span>`;
    btn.addEventListener("click", () => {
      editingSelected.has(key) ? editingSelected.delete(key) : editingSelected.add(key);
      btn.classList.toggle("selected");
    });
    grid.appendChild(btn);
  }
}

function renderCustomList() {
  const list = $("custom-list");
  list.innerHTML = "";
  editingCustom.forEach((term, i) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    const label = document.createElement("span");
    label.textContent = term;
    const remove = document.createElement("button");
    remove.textContent = "✕";
    remove.setAttribute("aria-label", `Remove ${term}`);
    remove.addEventListener("click", () => {
      editingCustom.splice(i, 1);
      renderCustomList();
    });
    chip.append(label, remove);
    list.appendChild(chip);
  });
}

function addCustomAllergen() {
  const input = $("custom-input");
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  if (!editingCustom.includes(val)) {
    editingCustom.push(val);
    renderCustomList();
  }
  input.value = "";
  input.focus();
}

function openProfileEditor() {
  editingSelected = new Set(profile.selected);
  editingCustom = [...profile.custom];
  renderAllergenGrid();
  renderCustomList();
  profileScreen.classList.remove("hidden");
  mainScreen.classList.add("hidden");
}

function commitProfile() {
  if (editingSelected.size === 0 && editingCustom.length === 0) {
    alert("Select at least one allergy (or add a custom one) so we know what to watch for.");
    return;
  }
  profile = { selected: [...editingSelected], custom: [...editingCustom] };
  saveProfile();
  showMain();
}

/* ============ Main screen ============ */
function showMain() {
  profileScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
  renderProfileSummary();
  renderFoodList($("food-search").value);
  renderLearnList();
  $("scan-result").classList.add("hidden");
}

function renderProfileSummary() {
  const el = $("profile-summary");
  el.innerHTML = `<span class="label">Watching for:</span>`;
  const names = profile.selected.map(k => `${ALLERGENS[k].emoji} ${ALLERGENS[k].label}`)
    .concat(profile.custom.map(c => `⚠️ ${c}`));
  names.forEach(n => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = n;
    el.appendChild(chip);
  });
}

/* ============ Ingredient scanner ============ */
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* Thai word segmentation (built into modern browsers) so นม (milk) doesn't
   false-match inside ขนม (dessert). Falls back to substring matching. */
const thaiSegmenter = (typeof Intl !== "undefined" && Intl.Segmenter)
  ? new Intl.Segmenter("th", { granularity: "word" }) : null;

function hasThai(s) { return /[฀-๿]/.test(s); }

function termFoundIn(lower, term) {
  if (!hasThai(term)) {
    const re = new RegExp(`(^|[^a-z])${escapeRegex(term)}([^a-z]|$)`, "i");
    return re.test(lower);
  }
  if (!lower.includes(term)) return false;
  if (!thaiSegmenter) return true;
  // accept when the term is a segmented word, or starts one (นม matches นมผง, not ขนม)
  for (const seg of thaiSegmenter.segment(lower)) {
    if (seg.segment === term || seg.segment.startsWith(term)) return true;
  }
  // multi-word terms (e.g. น้ำปลา may segment as น้ำ + ปลา): check the raw
  // occurrence begins at a word boundary
  const starts = new Set();
  for (const seg of thaiSegmenter.segment(lower)) starts.add(seg.index);
  let idx = lower.indexOf(term);
  while (idx !== -1) {
    if (starts.has(idx)) return true;
    idx = lower.indexOf(term, idx + 1);
  }
  return false;
}

/* Returns [{allergenLabel, matchedTerms:[...]}] for the user's allergens found in text */
function findMatches(text) {
  const lower = text.toLowerCase();
  const results = [];

  const checkTerms = (label, terms) => {
    const matched = [];
    for (const term of terms) {
      if (termFoundIn(lower, term)) matched.push(term);
    }
    // keep only the most specific matches for display (drop terms contained in longer matches)
    const unique = matched.filter(t => !matched.some(o => o !== t && o.includes(t)));
    if (matched.length) results.push({ label, matchedTerms: unique.length ? unique : matched });
  };

  for (const key of profile.selected) {
    const a = ALLERGENS[key];
    checkTerms(`${a.emoji} ${a.label}`, a.terms);
  }
  for (const custom of profile.custom) {
    checkTerms(`⚠️ ${custom}`, [custom]);
  }
  return results;
}

function hasTraceWarning(text) {
  return TRACE_RE.test(text);
}

/* Split label text into the main ingredient part and the "may contain…" trace part,
   so an allergen that only appears in the trace warning scores lower than a real ingredient. */
function splitTraceSection(text) {
  const m = TRACE_RE.exec(text);
  if (!m) return { main: text, trace: "" };
  return { main: text.slice(0, m.index), trace: text.slice(m.index) };
}

function findAmbiguous(text) {
  const lower = text.toLowerCase();
  const found = [];
  for (const term of AMBIGUOUS_TERMS) {
    const re = new RegExp(`(^|[^a-z])${escapeRegex(term)}([^a-z]|$)`, "i");
    if (re.test(lower)) found.push(term);
  }
  // drop terms contained in longer matches (e.g. "flavor" inside "natural flavor")
  return found.filter(t => !found.some(o => o !== t && o.includes(t)));
}

/* ---- Danger score: 0–100% ----
   ingredientMatches / traceMatches are findMatches() results for each label section.
   Returns { pct, level, reasons } — level: danger | warning | safe */
function computeRisk(text, ingredientMatches, traceMatches) {
  const genericTrace = hasTraceWarning(text);
  const ambiguous = findAmbiguous(text);
  const reasons = [];
  let pct;

  if (ingredientMatches.length) {
    // Allergen is an actual ingredient: 90–99%
    pct = 90 + Math.min(9, (ingredientMatches.length - 1) * 4 + (traceMatches.length ? 2 : 0));
    for (const m of ingredientMatches)
      reasons.push(`${m.label} is listed as an ingredient (${m.matchedTerms.join(", ")})`);
    for (const m of traceMatches)
      reasons.push(`${m.label} also appears in a "may contain" warning`);
  } else if (traceMatches.length) {
    // Only in the trace warning: 55–70%
    pct = 55 + Math.min(15, (traceMatches.length - 1) * 8 + ambiguous.length * 4);
    for (const m of traceMatches)
      reasons.push(`${m.label} appears in a "may contain / traces" warning (${m.matchedTerms.join(", ")})`);
  } else if (genericTrace) {
    // Cross-contamination warning that doesn't name your allergen: ~35%
    pct = 35 + Math.min(10, ambiguous.length * 4);
    reasons.push(`The label warns about possible cross-contamination`);
  } else {
    // Nothing found: 3% base — labels can be incomplete, so never 0
    pct = 3 + Math.min(22, ambiguous.length * 7);
    if (ambiguous.length === 0) reasons.push("None of your allergens (or their hidden names) were found");
  }

  for (const a of ambiguous)
    reasons.push(`"${a}" is vague — it can hide allergens, ask the maker what's in it`);

  const level = pct >= 75 ? "danger" : pct >= 25 ? "warning" : "safe";
  return { pct: Math.min(100, Math.round(pct)), level, reasons };
}

const GAUGE_ARC_LEN = 263.9; // length of the semicircle path below

function gaugeHtml(pct, level) {
  const label = level === "danger" ? "Dangerous for you"
    : level === "warning" ? "Risky — be careful"
    : "Low risk for you";
  const finalOffset = (GAUGE_ARC_LEN * (1 - pct / 100)).toFixed(1);
  return `
    <div class="gauge" role="img" aria-label="Danger level ${pct} percent — ${label}">
      <svg class="gauge-svg" viewBox="0 0 200 116" aria-hidden="true">
        <path class="gauge-track" d="M16 104 A 84 84 0 0 1 184 104"></path>
        <path class="gauge-arc" d="M16 104 A 84 84 0 0 1 184 104"
          style="stroke-dasharray:${GAUGE_ARC_LEN};stroke-dashoffset:${GAUGE_ARC_LEN}"
          data-final="${finalOffset}"></path>
      </svg>
      <div class="gauge-center">
        <span class="gauge-pct" data-target="${pct}">0%</span>
        <span class="gauge-label">${label}</span>
      </div>
      <div class="gauge-scale"><span>Safe</span><span>Danger</span></div>
    </div>`;
}

/* Sweep the dial and count the % up after the gauge is in the DOM */
function animateGauge(container) {
  const pctEl = container.querySelector(".gauge-pct");
  const arc = container.querySelector(".gauge-arc");
  if (!pctEl || !arc) return;
  const target = parseInt(pctEl.dataset.target, 10);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    pctEl.textContent = target + "%";
    arc.style.strokeDashoffset = arc.dataset.final;
    return;
  }
  requestAnimationFrame(() => { arc.style.strokeDashoffset = arc.dataset.final; });
  const t0 = performance.now();
  const dur = 700;
  const tick = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    pctEl.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + "%";
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function highlightTerms(text, terms) {
  let safe = escapeHtml(text);
  // longest first so overlapping terms highlight correctly
  const sorted = [...new Set(terms)].sort((a, b) => b.length - a.length);
  for (const term of sorted) {
    const re = new RegExp(`(^|[^a-zA-Z])(${escapeRegex(term)})(?=[^a-zA-Z]|$)`, "gi");
    safe = safe.replace(re, "$1<mark>$2</mark>");
  }
  return safe;
}

/* extra = { productName, officialAllergens, officialTraces } from a barcode lookup */
function checkIngredients(extra = null) {
  const text = $("ingredient-input").value.trim();
  const result = $("scan-result");
  if (!text && !extra) {
    result.className = "result warning";
    result.innerHTML = "<h3>Nothing to check</h3><p>Scan a barcode or paste the ingredient list first.</p>";
    result.classList.remove("hidden");
    return;
  }

  const { main, trace } = splitTraceSection(text);
  let ingredientMatches = findMatches(main);
  let traceMatches = findMatches(trace)
    .filter(t => !ingredientMatches.some(m => m.label === t.label));

  // Merge the database's own allergen declarations from a barcode lookup
  if (extra) {
    const mySet = new Set(profile.selected);
    const addOfficial = (tags, bucket, other) => {
      for (const tag of tags || []) {
        const key = OFF_TAG_MAP[tag];
        if (!key || !mySet.has(key)) continue;
        const label = `${ALLERGENS[key].emoji} ${ALLERGENS[key].label}`;
        if (!bucket.some(m => m.label === label) && !other.some(m => m.label === label))
          bucket.push({ label, matchedTerms: ["declared by product database"] });
      }
    };
    addOfficial(extra.officialAllergens, ingredientMatches, []);
    addOfficial(extra.officialTraces, traceMatches, ingredientMatches);
  }

  const risk = computeRisk(text, ingredientMatches, traceMatches);
  const allTerms = [...ingredientMatches, ...traceMatches]
    .flatMap(m => m.matchedTerms).filter(t => t !== "declared by product database");

  result.className = `result ${risk.level}`;
  const heading = risk.level === "danger" ? "⛔ Don't eat this"
    : risk.level === "warning" ? "⚠️ Caution — check before eating"
    : "✅ Looks clear for your profile";

  result.innerHTML = `
    ${extra?.productName ? `<div class="product-name">📦 ${escapeHtml(extra.productName)}</div>` : ""}
    ${gaugeHtml(risk.pct, risk.level)}
    <h3>${heading}</h3>
    <ul>${risk.reasons.map(r => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
    ${text && allTerms.length ? `<p class="fine-print">Highlighted in the label: <br>${highlightTerms(text, allTerms)}</p>` : ""}
    <p class="fine-print">The % is an estimate from the label text${extra ? " and the Open Food Facts database" : ""} —
    labels can be wrong or incomplete. If your allergy is severe, treat anything above 0% with care.</p>`;
  result.classList.remove("hidden");
  animateGauge(result);
  addHistory({
    name: extra?.productName || text.slice(0, 60) + (text.length > 60 ? "…" : ""),
    pct: risk.pct,
    level: risk.level,
    at: Date.now()
  });
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ============ Scan history ============ */
const HISTORY_KEY = "allergyguard-history-v1";

function loadHistory() {
  try {
    const h = JSON.parse(localStorage.getItem(HISTORY_KEY));
    return Array.isArray(h) ? h : [];
  } catch (e) { return []; }
}

function addHistory(entry) {
  const h = loadHistory();
  h.unshift(entry);
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(h.slice(0, 10))); } catch (e) { /* storage blocked */ }
  renderHistory();
}

function clearHistory() {
  try { localStorage.removeItem(HISTORY_KEY); } catch (e) { /* storage blocked */ }
  renderHistory();
}

function renderHistory() {
  const card = $("history-card");
  const list = $("history-list");
  const h = loadHistory();
  card.hidden = h.length === 0;
  list.innerHTML = "";
  for (const e of h) {
    const row = document.createElement("div");
    row.className = `history-item ${e.level}`;
    const when = new Date(e.at).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
    row.innerHTML = `
      <span class="history-pct">${e.pct}%</span>
      <span class="history-name">${escapeHtml(e.name)}</span>
      <span class="history-time">${when}</span>`;
    list.appendChild(row);
  }
}

/* ============ Barcode lookup (Open Food Facts) ============ */
function setBarcodeStatus(msg, isError = false) {
  const el = $("barcode-status");
  el.textContent = msg;
  el.className = "barcode-status" + (isError ? " error" : "");
}

async function lookupBarcode(code) {
  code = String(code).replace(/\D/g, "");
  if (code.length < 6) {
    setBarcodeStatus("That doesn't look like a barcode number — it should be 8–13 digits.", true);
    return;
  }
  setBarcodeStatus(`Looking up ${code}…`);
  try {
    const res = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${code}.json` +
      `?fields=product_name,ingredients_text,ingredients_text_en,allergens_tags,traces_tags`);
    const data = await res.json();
    if (data.status !== 1 || !data.product) {
      setBarcodeStatus("Product not found in Open Food Facts. Paste the ingredients from the package instead.", true);
      return;
    }
    const p = data.product;
    const ingredients = p.ingredients_text_en || p.ingredients_text || "";
    $("ingredient-input").value = ingredients;
    setBarcodeStatus(`Found: ${p.product_name || code}${ingredients ? "" : " (no ingredient text in database — using its allergen declarations only)"}`);
    checkIngredients({
      productName: p.product_name || `Barcode ${code}`,
      officialAllergens: p.allergens_tags,
      officialTraces: p.traces_tags
    });
  } catch (e) {
    setBarcodeStatus("Couldn't reach the product database (no internet, or blocked in this preview). Paste the ingredients from the package instead.", true);
  }
}

/* ============ Photo-of-food recognition (TensorFlow.js MobileNet) ============ */

/* Foods the on-device vision model can recognize → their typical allergens.
   Keys match MobileNet/ImageNet class names (first synonym, lowercase). */
const VISION_FOODS = {
  "cheeseburger": { name: "Cheeseburger", emoji: "🍔", allergens: ["wheat", "milk", "sesame", "egg", "soy", "mustard"] },
  "hotdog": { name: "Hot dog", emoji: "🌭", allergens: ["wheat", "mustard", "soy"] },
  "pizza": { name: "Pizza", emoji: "🍕", allergens: ["wheat", "milk"] },
  "carbonara": { name: "Pasta carbonara", emoji: "🍝", allergens: ["wheat", "egg", "milk"] },
  "ice cream": { name: "Ice cream", emoji: "🍨", allergens: ["milk", "egg"] },
  "ice lolly": { name: "Ice pop", emoji: "🍧", allergens: [] },
  "trifle": { name: "Trifle", emoji: "🍰", allergens: ["milk", "egg", "wheat"] },
  "chocolate sauce": { name: "Chocolate sauce", emoji: "🍫", allergens: ["milk", "soy"] },
  "bagel": { name: "Bagel", emoji: "🥯", allergens: ["wheat", "sesame", "egg"] },
  "pretzel": { name: "Pretzel", emoji: "🥨", allergens: ["wheat"] },
  "french loaf": { name: "Bread / baguette", emoji: "🥖", allergens: ["wheat"] },
  "dough": { name: "Dough / pastry", emoji: "🥟", allergens: ["wheat", "egg", "milk"] },
  "meat loaf": { name: "Meatloaf", emoji: "🍖", allergens: ["wheat", "egg", "milk"] },
  "potpie": { name: "Pot pie", emoji: "🥧", allergens: ["wheat", "milk", "egg", "celery"] },
  "burrito": { name: "Burrito", emoji: "🌯", allergens: ["wheat", "milk"] },
  "guacamole": { name: "Guacamole", emoji: "🥑", allergens: [] },
  "mashed potato": { name: "Mashed potato", emoji: "🥔", allergens: ["milk"] },
  "eggnog": { name: "Eggnog", emoji: "🥛", allergens: ["egg", "milk"] },
  "espresso": { name: "Espresso", emoji: "☕", allergens: [] },
  "red wine": { name: "Red wine", emoji: "🍷", allergens: ["sulphite"] },
  "consomme": { name: "Consommé / clear soup", emoji: "🍲", allergens: ["celery", "egg"] },
  "hot pot": { name: "Hot pot", emoji: "🍲", allergens: ["fish", "shellfish", "soy"] },
  "banana": { name: "Banana", emoji: "🍌", allergens: [] },
  "strawberry": { name: "Strawberry", emoji: "🍓", allergens: [] },
  "orange": { name: "Orange", emoji: "🍊", allergens: [] },
  "lemon": { name: "Lemon", emoji: "🍋", allergens: [] },
  "fig": { name: "Fig", emoji: "🫒", allergens: [] },
  "pineapple": { name: "Pineapple", emoji: "🍍", allergens: [] },
  "granny smith": { name: "Apple", emoji: "🍏", allergens: [] },
  "pomegranate": { name: "Pomegranate", emoji: "🍎", allergens: [] },
  "jackfruit": { name: "Jackfruit", emoji: "🍈", allergens: [] },
  "custard apple": { name: "Custard apple", emoji: "🍈", allergens: [] },
  "broccoli": { name: "Broccoli", emoji: "🥦", allergens: [] },
  "cauliflower": { name: "Cauliflower", emoji: "🥦", allergens: [] },
  "cucumber": { name: "Cucumber", emoji: "🥒", allergens: [] },
  "bell pepper": { name: "Bell pepper", emoji: "🫑", allergens: [] },
  "mushroom": { name: "Mushroom", emoji: "🍄", allergens: [] },
  "artichoke": { name: "Artichoke", emoji: "🥬", allergens: [] },
  "zucchini": { name: "Zucchini", emoji: "🥒", allergens: [] },
  "corn": { name: "Corn", emoji: "🌽", allergens: [] }
};

let visionModel = null;
let visionLoading = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error("load failed: " + src));
    document.head.appendChild(s);
  });
}

async function loadVision() {
  if (visionModel) return visionModel;
  if (visionLoading) return visionLoading;
  visionLoading = (async () => {
    if (!window.mobilenet) {
      if (!window.tf) await loadScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4/dist/tf.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2/dist/mobilenet.min.js");
    }
    visionModel = await window.mobilenet.load();
    return visionModel;
  })();
  try {
    return await visionLoading;
  } catch (e) {
    visionLoading = null;
    throw e;
  }
}

function matchVisionFood(className) {
  for (const part of className.toLowerCase().split(",")) {
    const key = part.trim();
    if (VISION_FOODS[key]) return VISION_FOODS[key];
  }
  return null;
}

function fileToImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => resolve(img);
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("bad image")); };
    img.src = url;
  });
}

function showDishResult(food, confidence, alternates) {
  const result = $("scan-result");
  const mySet = new Set(profile.selected);
  const hits = food.allergens.filter(a => mySet.has(a));
  const pct = hits.length
    ? Math.min(95, 85 + (hits.length - 1) * 5)
    : food.allergens.length ? 8 : 3;
  const level = pct >= 75 ? "danger" : pct >= 25 ? "warning" : "safe";
  const heading = level === "danger" ? "⛔ Don't eat this"
    : "✅ Usually fine for your profile";

  const reasons = hits.length
    ? hits.map(h => `${food.name} usually contains ${ALLERGENS[h].label.toLowerCase()}`)
    : food.allergens.length
      ? [`${food.name} typically contains ${food.allergens.map(a => ALLERGENS[a].label.toLowerCase()).join(", ")} — none of your allergens, but recipes vary`]
      : [`${food.name} is typically free of the major allergens`];

  result.className = `result ${level}`;
  result.innerHTML = `
    <div class="product-name">${food.emoji} Looks like: <strong>${food.name}</strong>
      <span class="confidence">(${Math.round(confidence * 100)}% sure)</span></div>
    ${gaugeHtml(pct, level)}
    <h3>${heading}</h3>
    <ul>${reasons.map(r => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
    ${alternates.length ? `<p class="fine-print">Not ${food.name.toLowerCase()}? It might also be: ${alternates.map(escapeHtml).join(", ")}.</p>` : ""}
    <p class="fine-print">This is a guess from a photo — the actual recipe decides what's really in it.
    If your allergy is severe, confirm the ingredients with the cook or the label.</p>`;
  result.classList.remove("hidden");
  animateGauge(result);
  addHistory({ name: `${food.emoji} ${food.name} (photo)`, pct, level, at: Date.now() });
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

async function scanDishPhoto(file) {
  if (!file) return;
  setBarcodeStatus("Loading food recognizer (first time downloads ~17 MB)…");
  let model;
  try {
    model = await loadVision();
  } catch (e) {
    setBarcodeStatus("Couldn't load the food recognizer (no internet, or blocked in this preview). Search the Food lookup tab instead.", true);
    return;
  }
  try {
    setBarcodeStatus("Looking at your food…");
    const img = await fileToImage(file);
    const predictions = await model.classify(img, 5);
    URL.revokeObjectURL(img.src);

    const recognized = [];
    for (const p of predictions) {
      const food = matchVisionFood(p.className);
      if (food) recognized.push({ food, probability: p.probability });
    }
    if (!recognized.length || predictions[0].probability < 0.05) {
      const guesses = predictions.slice(0, 3).map(p => p.className.split(",")[0]).join(", ");
      setBarcodeStatus(`Couldn't recognize a dish I know (saw: ${guesses}). Try the Food lookup tab or photograph the ingredient label instead.`, true);
      return;
    }
    const best = recognized[0];
    const alternates = recognized.slice(1, 3).map(r => `${r.food.emoji} ${r.food.name}`);
    setBarcodeStatus("");
    showDishResult(best.food, best.probability, alternates);
  } catch (e) {
    setBarcodeStatus("Couldn't analyze that photo — try a clearer shot of the food.", true);
  }
}

/* ============ Photo-of-label OCR (Tesseract.js, loaded on demand) ============ */
let tesseractLoading = null;

function loadTesseract() {
  if (window.Tesseract) return Promise.resolve();
  if (tesseractLoading) return tesseractLoading;
  tesseractLoading = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    s.onload = resolve;
    s.onerror = () => { tesseractLoading = null; reject(new Error("load failed")); };
    document.head.appendChild(s);
  });
  return tesseractLoading;
}

async function scanLabelPhoto(file) {
  if (!file) return;
  setBarcodeStatus("Loading text reader (first time takes a moment)…");
  try {
    await loadTesseract();
  } catch (e) {
    setBarcodeStatus("Couldn't load the text reader (no internet, or blocked in this preview). Type the ingredients instead.", true);
    return;
  }
  try {
    setBarcodeStatus("Reading the label… 0%");
    const { data } = await Tesseract.recognize(file, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text")
          setBarcodeStatus(`Reading the label… ${Math.round(m.progress * 100)}%`);
      }
    });
    const text = (data.text || "").replace(/\s+/g, " ").trim();
    if (!text) {
      setBarcodeStatus("Couldn't read any text — try a closer, sharper photo with good light.", true);
      return;
    }
    $("ingredient-input").value = text;
    setBarcodeStatus("Text read from the photo — check it looks right, then see the score below.");
    checkIngredients();
  } catch (e) {
    setBarcodeStatus("Couldn't read the photo — try a closer, sharper shot, or type the ingredients.", true);
  }
}

/* ---- Camera barcode scanning (BarcodeDetector, works on most phones) ---- */
let cameraStream = null;
let scanTimer = null;

function stopCamera() {
  if (scanTimer) { clearInterval(scanTimer); scanTimer = null; }
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  $("camera-wrap").classList.add("hidden");
}

async function startCamera() {
  if (!("BarcodeDetector" in window)) {
    setBarcodeStatus("This browser can't scan barcodes with the camera (try Chrome on Android). Type the barcode number instead.", true);
    $("barcode-input").focus();
    return;
  }
  try {
    const detector = new BarcodeDetector({
      formats: ["ean_13", "ean_8", "upc_a", "upc_e", "code_128"]
    });
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }
    });
    const video = $("camera-video");
    video.srcObject = cameraStream;
    await video.play();
    $("camera-wrap").classList.remove("hidden");
    setBarcodeStatus("Point the camera at the barcode…");

    scanTimer = setInterval(async () => {
      try {
        const codes = await detector.detect(video);
        if (codes.length) {
          const value = codes[0].rawValue;
          stopCamera();
          $("barcode-input").value = value;
          lookupBarcode(value);
        }
      } catch (e) { /* keep scanning */ }
    }, 400);
  } catch (e) {
    stopCamera();
    setBarcodeStatus("Couldn't open the camera (permission denied or not available). Type the barcode number instead.", true);
  }
}

/* ============ Food lookup ============ */
function renderFoodList(query = "") {
  const list = $("food-list");
  list.innerHTML = "";
  const q = query.trim().toLowerCase();
  const mySet = new Set(profile.selected);

  const foods = FOODS.filter(f => !q || f.name.toLowerCase().includes(q));
  if (!foods.length) {
    list.innerHTML = `<p class="muted">No match — try the "Check a label" tab and type the dish's ingredients instead.</p>`;
    return;
  }

  for (const f of foods) {
    const hits = f.allergens.filter(a => mySet.has(a));
    const item = document.createElement("div");
    item.className = "food-item " + (hits.length ? "unsafe" : "safe-ish");

    const flags = f.allergens.map(a => {
      const hit = mySet.has(a);
      return `<span class="food-flag ${hit ? "hit" : ""}">${ALLERGENS[a].emoji} ${ALLERGENS[a].label}</span>`;
    }).join("");

    const pct = hits.length
      ? Math.min(95, 85 + (hits.length - 1) * 5)
      : f.allergens.length ? 8 : 3;
    const verdict = hits.length
      ? `<div class="food-verdict bad">⛔ ~${pct}% danger — usually contains: ${hits.map(h => ALLERGENS[h].label).join(", ")}</div>`
      : f.allergens.length
        ? `<div class="food-verdict ok">✅ ~${pct}% — none of your allergens typically, but recipes vary, always ask</div>`
        : `<div class="food-verdict ok">✅ ~${pct}% — typically allergen-free</div>`;

    item.innerHTML = `<span class="food-name">${f.name}</span>${flags}${verdict}`;
    list.appendChild(item);
  }
}

/* ============ Hidden names tab ============ */
function renderLearnList() {
  const list = $("learn-list");
  list.innerHTML = "";
  const mySet = new Set(profile.selected);
  const entries = Object.entries(ALLERGENS)
    .sort(([a], [b]) => Number(mySet.has(b)) - Number(mySet.has(a)));

  for (const [key, a] of entries) {
    const mine = mySet.has(key);
    const item = document.createElement("div");
    item.className = "learn-item" + (mine ? " mine" : "");
    item.innerHTML = `
      <h3>${a.emoji} ${a.label}${mine ? '<span class="you-tag">YOUR ALLERGY</span>' : ""}</h3>
      <p>${a.desc}</p>
      <p><strong>Watch for:</strong> ${a.terms.join(", ")}</p>`;
    list.appendChild(item);
  }
}

/* ============ Tabs ============ */
function setupTabs() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.add("hidden"));
      $("tab-" + tab.dataset.tab).classList.remove("hidden");
    });
  });
}

/* ============ Init ============ */
function init() {
  setupTabs();
  $("save-profile-btn").addEventListener("click", commitProfile);
  $("edit-profile-btn").addEventListener("click", openProfileEditor);
  $("add-custom-btn").addEventListener("click", addCustomAllergen);
  $("custom-input").addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); addCustomAllergen(); }
  });
  $("check-btn").addEventListener("click", () => checkIngredients());
  $("food-search").addEventListener("input", e => renderFoodList(e.target.value));
  $("camera-btn").addEventListener("click", () => {
    if (!canScan()) return;
    consumeScan();
    startCamera();
  });
  $("camera-stop-btn").addEventListener("click", stopCamera);
  const gatedLookup = (value) => {
    if (!canScan()) return;
    consumeScan();
    lookupBarcode(value);
  };
  $("barcode-btn").addEventListener("click", () => gatedLookup($("barcode-input").value));
  $("barcode-input").addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); gatedLookup(e.target.value); }
  });
  $("photo-btn").addEventListener("click", () => { if (canScan()) $("photo-input").click(); });
  $("photo-input").addEventListener("change", e => {
    if (e.target.files[0]) { consumeScan(); scanLabelPhoto(e.target.files[0]); }
    e.target.value = "";
  });
  $("dish-btn").addEventListener("click", () => { if (canScan()) $("dish-input").click(); });
  $("dish-input").addEventListener("change", e => {
    if (e.target.files[0]) { consumeScan(); scanDishPhoto(e.target.files[0]); }
    e.target.value = "";
  });

  // Paywall
  $("paywall-close").addEventListener("click", closePaywall);
  $("paywall").addEventListener("click", e => { if (e.target === $("paywall")) closePaywall(); });
  updateScanMeter();
  renderProBadge();
  $("clear-history-btn").addEventListener("click", clearHistory);
  renderHistory();

  // Installable app + offline support when served over https/localhost
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* offline mode unavailable */ });
  }

  const saved = loadProfile();
  if (saved) {
    profile = saved;
    showMain();
  } else {
    openProfileEditor();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
