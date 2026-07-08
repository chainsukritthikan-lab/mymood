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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
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
  return /may contain|traces of|produced in a (factory|facility)|same (factory|facility|equipment|line)|cross[- ]?contamination/i.test(text);
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

function checkIngredients() {
  const text = $("ingredient-input").value.trim();
  const result = $("scan-result");
  if (!text) {
    result.className = "result warning";
    result.innerHTML = "<h3>Nothing to check</h3><p>Paste or type the ingredient list first.</p>";
    result.classList.remove("hidden");
    return;
  }

  const matches = findMatches(text);
  const trace = hasTraceWarning(text);
  result.classList.remove("hidden");

  if (matches.length) {
    const allTerms = matches.flatMap(m => m.matchedTerms);
    result.className = "result danger";
    result.innerHTML = `
      <h3>⛔ NOT SAFE — contains your allergens</h3>
      <ul>${matches.map(m =>
        `<li>${m.label}: found <span class="match-term">${m.matchedTerms.map(escapeHtml).join(", ")}</span></li>`).join("")}
      </ul>
      ${trace ? `<p style="margin-top:8px">Plus a <strong>"may contain / traces"</strong> warning was detected.</p>` : ""}
      <p class="fine-print">Highlighted in your text: <br>${highlightTerms(text, allTerms)}</p>`;
  } else if (trace) {
    result.className = "result warning";
    result.innerHTML = `
      <h3>⚠️ Caution — possible cross-contamination</h3>
      <p>No allergen from your profile is listed as an ingredient, but the label has a
      <strong>"may contain / traces / same facility"</strong> warning. If your allergy is severe, avoid it.</p>`;
  } else {
    result.className = "result safe";
    result.innerHTML = `
      <h3>✅ Looks clear for your profile</h3>
      <p>None of your allergens (or their hidden names) were found in this list.</p>
      <p class="fine-print">Still double-check the real label — this tool can't see typos,
      missing ingredients, or cross-contamination the label doesn't mention.</p>`;
  }
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
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

    const verdict = hits.length
      ? `<div class="food-verdict bad">⛔ Usually contains: ${hits.map(h => ALLERGENS[h].label).join(", ")} — risky for you</div>`
      : f.allergens.length
        ? `<div class="food-verdict ok">✅ None of your allergens typically — but recipes vary, always ask</div>`
        : `<div class="food-verdict ok">✅ Typically allergen-free</div>`;

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
  $("check-btn").addEventListener("click", checkIngredients);
  $("food-search").addEventListener("input", e => renderFoodList(e.target.value));

  const saved = loadProfile();
  if (saved) {
    profile = saved;
    showMain();
  } else {
    openProfileEditor();
  }
}

document.addEventListener("DOMContentLoaded", init);
