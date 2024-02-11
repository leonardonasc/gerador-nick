const nome = [
  "fall",
  "bite",
  "material",
  "sketch",
  "performance",
  "reader",
  "prediction",
  "disorder",
  "unpleasant",
  "reservoir",
  "fist",
  "resist",
  "fight",
  "nonsense",
  "cut",
  "bird",
  "voyage",
  "replacement",
  "moral",
  "hole",
  "chart",
  "seize",
  "cooperation",
  "feel",
  "farewell",
  "bargain",
  "script",
  "copper",
  "week",
  "hospitality",
  "different",
  "neighbour",
  "bitch",
  "lip",
  "intensify",
  "urgency",
  "implication",
  "hostage",
  "stable",
  "impress",
  "snuggle",
  "reflection",
  "elaborate",
  "mask",
  "to",
  "lace",
  "popular",
  "lose",
  "parachute",
  "gun",
];

const meio = ["the", "who"];

const verbo = [
  "reply",
  "find",
  "compel",
  "found",
  "stare",
  "represent",
  "exchange",
  "review",
  "rate",
  "improve",
  "prove",
  "observe",
  "assume",
  "refer",
  "spin",
  "survive",
  "hurry",
  "insert",
  "count",
  "struggle",
  "persuade",
  "demonstrate",
  "test",
  "handle",
  "rain",
  "serve",
  "boost",
  "compensate",
  "gain",
  "reject",
  "pose",
  "stop",
  "shift",
  "object",
  "guide",
  "support",
  "preserve",
  "enter",
  "engage",
  "stick",
  "transmit",
  "answer",
  "possess",
  "contact",
  "cheer",
  "interview",
  "develop",
  "acquire",
  "record",
  "rush",
];

const plat = [
  "-TTV",
  "-KICK",
  "-FB",
]

const nmFix = nome.map(word => word.charAt(0).toUpperCase() + word.slice(1));
const meFix = meio.map(word => word.charAt(0).toUpperCase() + word.slice(1));
const vbFix = verbo.map(word => word.charAt(0).toUpperCase() + word.slice(1));

function pick() {
  let nm = Math.floor(Math.random() * nome.length);
  let me = Math.floor(Math.random() * meio.length);
  let vb = Math.floor(Math.random() * verbo.length);
  let pm = Math.floor(Math.random() * plat.length);
  let output = document.querySelector("p");
  let final = ` ${nmFix[nm]}${meFix[me]}${vbFix[vb]}${plat[pm]}`;
  output.innerHTML = `${final}`

  
}
