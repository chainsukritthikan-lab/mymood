/* ============ AllergyGuard ============ */

/* ---- Allergen database: the 14 major allergens + hidden label names ---- */
const ALLERGENS = {
  peanut: {
    label: "Peanuts", emoji: "🥜",
    desc: "A legume, not a true nut — but one of the most severe common allergies.",
    terms: ["peanut", "peanuts", "groundnut", "groundnuts", "arachis", "arachis oil",
      "beer nuts", "monkey nuts", "goober", "peanut butter", "peanut flour", "satay"]
  },
  treenut: {
    label: "Tree nuts", emoji: "🌰",
    desc: "Almonds, cashews, walnuts, hazelnuts, pistachios, pecans, macadamias, Brazil nuts.",
    terms: ["almond", "almonds", "cashew", "cashews", "walnut", "walnuts", "hazelnut",
      "hazelnuts", "pecan", "pecans", "pistachio", "pistachios", "macadamia",
      "brazil nut", "brazil nuts", "pine nut", "pine nuts", "chestnut", "chestnuts",
      "praline", "marzipan", "nougat", "frangipane", "gianduja", "nut butter",
      "nut oil", "nut paste", "tree nut", "tree nuts"]
  },
  milk: {
    label: "Milk / dairy", emoji: "🥛",
    desc: "Hides as casein, whey, lactose, ghee and many 'lact-' words.",
    terms: ["milk", "whole milk", "skim milk", "milk powder", "milk solids", "buttermilk",
      "cream", "butter", "butterfat", "ghee", "cheese", "yogurt", "yoghurt", "curd",
      "curds", "custard", "casein", "caseinate", "caseinates", "sodium caseinate",
      "whey", "whey protein", "lactose", "lactalbumin", "lactoglobulin", "lactoferrin",
      "dairy", "half-and-half", "kefir", "paneer", "quark"]
  },
  egg: {
    label: "Eggs", emoji: "🥚",
    desc: "Hides as albumin, ovalbumin, lysozyme, mayonnaise, meringue.",
    terms: ["egg", "eggs", "egg white", "egg whites", "egg yolk", "egg yolks",
      "egg powder", "dried egg", "albumin", "albumen", "ovalbumin", "ovomucoid",
      "ovomucin", "ovoglobulin", "lysozyme", "mayonnaise", "mayo", "meringue",
      "aioli", "eggnog", "globulin", "livetin", "vitellin"]
  },
  fish: {
    label: "Fish", emoji: "🐟",
    desc: "Includes fish sauce, anchovy (often in Worcestershire sauce and Caesar dressing).",
    terms: ["fish", "anchovy", "anchovies", "cod", "salmon", "tuna", "haddock",
      "halibut", "mackerel", "sardine", "sardines", "tilapia", "trout", "bass",
      "fish sauce", "fish oil", "fish stock", "fish paste", "worcestershire",
      "surimi", "caviar", "roe", "nam pla", "furikake", "bonito", "dashi", "katsuobushi"]
  },
  shellfish: {
    label: "Crustaceans", emoji: "🦐",
    desc: "Shrimp, prawn, crab, lobster, crayfish — and shrimp paste in many Asian sauces.",
    terms: ["shrimp", "prawn", "prawns", "crab", "lobster", "crayfish", "crawfish",
      "krill", "scampi", "langoustine", "shellfish", "crustacean", "crustaceans",
      "shrimp paste", "belacan", "kapi", "tom yum paste"]
  },
  mollusc: {
    label: "Molluscs", emoji: "🦪",
    desc: "Clams, mussels, oysters, squid, octopus, scallops, snails — and oyster sauce.",
    terms: ["clam", "clams", "mussel", "mussels", "oyster", "oysters", "scallop",
      "scallops", "squid", "calamari", "octopus", "snail", "snails", "escargot",
      "abalone", "whelk", "cockle", "cockles", "mollusc", "molluscs", "mollusk",
      "mollusks", "oyster sauce", "cuttlefish"]
  },
  wheat: {
    label: "Wheat / gluten", emoji: "🌾",
    desc: "Hides as semolina, spelt, durum, farro, seitan, malt, couscous, bulgur.",
    terms: ["wheat", "wheat flour", "whole wheat", "gluten", "semolina", "durum",
      "spelt", "farro", "einkorn", "emmer", "kamut", "couscous", "bulgur", "bran",
      "farina", "graham", "seitan", "malt", "malt extract", "malt vinegar",
      "barley", "rye", "triticale", "breadcrumbs", "panko", "soy sauce", "udon", "orzo"]
  },
  soy: {
    label: "Soy", emoji: "🫘",
    desc: "Hides as edamame, tofu, tempeh, miso, textured vegetable protein, lecithin (E322).",
    terms: ["soy", "soya", "soybean", "soybeans", "soy sauce", "soy protein",
      "soy flour", "soy lecithin", "lecithin", "e322", "edamame", "tofu", "tempeh",
      "miso", "natto", "tamari", "textured vegetable protein", "tvp",
      "hydrolyzed vegetable protein", "hvp", "okara", "yuba"]
  },
  sesame: {
    label: "Sesame", emoji: "🫓",
    desc: "Hides as tahini, benne, gingelly oil, halvah, za'atar, hummus.",
    terms: ["sesame", "sesame seed", "sesame seeds", "sesame oil", "tahini", "tahina",
      "benne", "benne seed", "gingelly", "gingelly oil", "halvah", "halva",
      "za'atar", "zaatar", "hummus", "houmous", "gomashio", "furikake"]
  },
  mustard: {
    label: "Mustard", emoji: "🌭",
    desc: "In dressings, curry powder, mayonnaise, pickles and many spice blends.",
    terms: ["mustard", "mustard seed", "mustard seeds", "mustard flour", "mustard oil",
      "dijon", "wasabi powder", "curry powder", "piccalilli"]
  },
  celery: {
    label: "Celery", emoji: "🥬",
    desc: "Includes celeriac, celery salt, celery seed — common in stocks and soups.",
    terms: ["celery", "celeriac", "celery salt", "celery seed", "celery seeds",
      "celery extract", "celery leaf", "celery root"]
  },
  lupin: {
    label: "Lupin", emoji: "🌼",
    desc: "A legume flour used in some breads, pasta and gluten-free products.",
    terms: ["lupin", "lupine", "lupini", "lupin flour", "lupin bean", "lupin beans"]
  },
  sulphite: {
    label: "Sulphites", emoji: "🍷",
    desc: "Preservatives E220–E228 in wine, dried fruit, and processed foods.",
    terms: ["sulphite", "sulphites", "sulfite", "sulfites", "sulphur dioxide",
      "sulfur dioxide", "e220", "e221", "e222", "e223", "e224", "e225", "e226",
      "e227", "e228", "sodium metabisulphite", "sodium metabisulfite",
      "potassium metabisulphite", "sodium sulphite", "sodium bisulphite"]
  }
};

/* ---- Common foods & their typical allergens ---- */
const FOODS = [
  { name: "Pad thai", allergens: ["peanut", "fish", "egg", "soy", "shellfish"] },
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

/* Returns [{allergenLabel, matchedTerms:[...]}] for the user's allergens found in text */
function findMatches(text) {
  const lower = text.toLowerCase();
  const results = [];

  const checkTerms = (label, terms) => {
    const matched = [];
    for (const term of terms) {
      const re = new RegExp(`(^|[^a-z])${escapeRegex(term)}([^a-z]|$)`, "i");
      if (re.test(lower)) matched.push(term);
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

function gaugeHtml(pct, level) {
  const label = level === "danger" ? "DANGEROUS for you"
    : level === "warning" ? "RISKY — be careful"
    : "Low risk for you";
  return `
    <div class="gauge">
      <div class="gauge-top">
        <span class="gauge-pct">${pct}%</span>
        <span class="gauge-label">${label}</span>
      </div>
      <div class="gauge-bar"><span class="gauge-needle" style="left:${pct}%"></span></div>
      <div class="gauge-scale"><span>0% safe</span><span>50%</span><span>100% danger</span></div>
    </div>`;
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
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
  $("camera-btn").addEventListener("click", startCamera);
  $("camera-stop-btn").addEventListener("click", stopCamera);
  $("barcode-btn").addEventListener("click", () => lookupBarcode($("barcode-input").value));
  $("barcode-input").addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); lookupBarcode(e.target.value); }
  });

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
