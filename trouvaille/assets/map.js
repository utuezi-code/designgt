// Shared, seeded city map for the Trouvaille film (illustrative, not a real place).
window.TrouvailleMap = (function () {
  var NS = "http://www.w3.org/2000/svg";
  var TOI = { x: 540, y: 1040 };
  var SHOPS = [
    { x: 708, y: 902, price: "24 500 F", init: "KT", name: "Kadi Tech", dist: "À 650 m" },
    { x: 330, y: 1186, price: "27 000 F", init: "AE", name: "Électro Plus", dist: "À 1,2 km" },
    { x: 868, y: 1290, price: "29 900 F", init: "BS", name: "Boutique Son", dist: "À 1,8 km" },
    { x: 236, y: 764, price: "31 000 F", init: "TP", name: "Top Phone", dist: "À 2,4 km" },
  ];
  var OTHERS = [
    { x: 470, y: 640 }, { x: 900, y: 610 }, { x: 160, y: 1420 }, { x: 640, y: 1500 }, { x: 960, y: 1060 }, { x: 420, y: 880 },
  ];
  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function pinPath() {
    return "M0,-58 C-26,-58 -40,-38 -40,-20 C-40,6 0,40 0,40 C0,40 40,6 40,-20 C40,-38 26,-58 0,-58 Z";
  }
  function build(svg, prefix) {
    el("rect", { x: 0, y: 0, width: 1080, height: 1920, fill: "#f8e6df" }, svg);
    // lagoon
    el("path", { d: "M-20,1700 C180,1610 360,1700 560,1640 C760,1580 900,1660 1100,1600 L1100,1960 L-20,1960 Z", fill: "#d9e8ee" }, svg);
    // parks
    el("rect", { x: 610, y: 1110, width: 170, height: 120, rx: 18, fill: "#e4ebd9" }, svg);
    el("rect", { x: 92, y: 900, width: 150, height: 170, rx: 18, fill: "#e4ebd9" }, svg);
    var streets = [];
    var g = el("g", { id: prefix + "-streets", fill: "none", stroke: "#ffffff", "stroke-linecap": "round" }, svg);
    var defs = [
      ["M-40,520 L1120,520", 46], ["M-40,980 L1120,980", 46], ["M-40,1440 L1120,1440", 46],
      ["M260,-40 L260,1960", 46], ["M820,-40 L820,1960", 46],
      ["M-40,1260 L1120,700", 56],
      ["M-40,300 L1120,300", 22], ["M-40,750 L1120,750", 22], ["M-40,1200 L1120,1200", 22], ["M-40,1620 L1120,1620", 22],
      ["M60,-40 L60,1960", 22], ["M540,-40 L540,1960", 22], ["M1010,-40 L1010,1960", 22], ["M400,520 L400,980", 18], ["M680,980 L680,1440", 18],
    ];
    defs.forEach(function (d) {
      var p = el("path", { d: d[0], "stroke-width": d[1] }, g);
      streets.push(p);
    });
    var shopsG = el("g", { id: prefix + "-shops" }, svg);
    function shopPin(s, i, active) {
      var pg = el("g", { class: prefix + "-pin", "data-i": i }, shopsG);
      var inner = el("g", {}, pg);
      el("ellipse", { cx: 0, cy: 44, rx: 22, ry: 7, fill: "rgba(80,40,30,0.18)" }, inner);
      el("path", { d: pinPath(), fill: active ? "#e45846" : "#c9b8b2" }, inner);
      el("rect", { x: -16, y: -36, width: 32, height: 26, rx: 5, fill: "#ffffff" }, inner);
      el("path", { d: "M-16,-30 L16,-30", stroke: active ? "#e45846" : "#c9b8b2", "stroke-width": 6 }, inner);
      pg.setAttribute("transform", "translate(" + s.x + "," + s.y + ")");
      return { g: pg, inner: inner };
    }
    var others = OTHERS.map(function (s, i) { return shopPin(s, i, false); });
    var shops = SHOPS.map(function (s, i) { return shopPin(s, i, true); });
    return { streets: streets, shops: shops, others: others };
  }
  return { build: build, TOI: TOI, SHOPS: SHOPS, OTHERS: OTHERS, el: el };
})();
