const P = (d, a) => `<path d="${d}"${a || ""}/>`;
const ICONS = {
  leaf: P("M20 4C10 4 4 8 4 15c0 3 2 5 5 5 7 0 11-6 11-16Z") + P("M4 20c3-5 7-8 13-10"),
  search: '<circle cx="10.8" cy="10.8" r="6.8"/>' + P("m16 16 5 5"),
  user: '<circle cx="12" cy="8" r="3.5"/>' + P("M5 21c.8-4 3-6 7-6s6.2 2 7 6"),
  cart: P("M3 4h2l2 11h10l3-8H6") + '<circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/>',
  menu: P("M4 7h16M4 12h16M4 17h16"),
  shield: P("M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z") + P("m9 12 2 2 4-4"),
  check: P("m5 12 4 4L19 6"),
  headset: P("M4 14v-2a8 8 0 0 1 16 0v2") + P("M4 14h3v5H5a1 1 0 0 1-1-1v-4Zm16 0h-3v5h2a1 1 0 0 0 1-1v-4Z"),
  flower: '<circle cx="12" cy="12" r="2"/>' + P("M12 10c-3-1-3-5 0-7 3 2 3 6 0 7ZM14 12c1-3 5-3 7 0-2 3-6 3-7 0ZM12 14c3 1 3 5 0 7-3-2-3-6 0-7ZM10 12c-1 3-5 3-7 0 2-3 6-3 7 0Z"),
  fruit: P("M12 8c-5 0-7 3-7 7s3 6 7 6 7-2 7-6-2-7-7-7Z") + P("M12 8c0-3 2-5 5-5"),
  apple: P("M12 8c-5-2-8 2-7 7 1 4 4 6 7 5 3 1 6-1 7-5 1-5-2-9-7-7Z") + P("M12 8c0-3 1-4 3-5"),
  sprout: P("M12 21v-9") + P("M12 12C12 7 8 5 4 5c0 5 3 7 8 7Zm0 2c0-4 3-6 8-6 0 4-3 6-8 6Z"),
  book: P("M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z") + P("M8 7h7M8 11h7"),
  tractor: '<circle cx="7" cy="16" r="3"/><circle cx="18" cy="17" r="2"/>' + P("M10 16h6V9H8l-1 4M12 9V5h3"),
  phone: P("M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"),
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/>' + P("m3 7 9 6 9-6"),
  pin: P("M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z") + '<circle cx="12" cy="10" r="2.5"/>',
  arrow: P("M5 12h14m-6-6 6 6-6 6"),
  fb: P("M14 8h2V4h-3a4 4 0 0 0-4 4v2H7v4h2v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z"),
  yt: '<rect x="3" y="6" width="18" height="12" rx="4"/>' + P("m10 9.5 5 2.5-5 2.5Z"),
  tt: P("M14 4v10a3.5 3.5 0 1 1-3.5-3.5M14 4c0 2.5 2 4 4.5 4"),
  drop: P("M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"),
  bag: P("M5 8h14l-1 12H6L5 8Z") + P("M9 8V6a3 3 0 0 1 6 0v2"),
  flask: P("M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"),
  globe: '<circle cx="12" cy="12" r="9"/>' + P("M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"),
  heart: P("M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11Z"),
  truck: '<rect x="1.5" y="6" width="12" height="9" rx="1"/>' + P("M13.5 9h4l3 3v3h-7") + '<circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  star: P("M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6-5.4-2.9-5.4 2.9 1-6L3.2 9.5l6.1-.9Z"),
  moon: P("M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"),
  sun: '<circle cx="12" cy="12" r="4"/>' + P("M12 2v2m0 16v2M2 12h2m16 0h2M4.6 4.6 6 6m12 12 1.4 1.4M19.4 4.6 18 6M6 18l-1.4 1.4")
};
const ic = (n, c) => `<svg class="icon ${c || ""}" viewBox="0 0 24 24">${ICONS[n]}</svg>`;
const IMG = {
  fruit: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=700&q=80",
  veg: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
  ind: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?auto=format&fit=crop&w=700&q=80",
  flower: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80",
  leaf: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80",
  farm: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
};
const bg = u => `style="background-image:url('${u}')"`;
const IMGU = u => u.startsWith("http") ? u : IMGBASE + u;
const FN = { bot: "Dạng bột", long: "Dạng lỏng", hat: "Dạng hạt" };
const GN = { npk: "Phân NPK hỗn hợp", foliar: "Phân bón lá", micro: "Vi lượng", bio: "Hữu cơ – sinh học", other: "Phân bón khác" };
const CN = { fruit: "Cây ăn trái", veg: "Rau màu", ind: "Cây công nghiệp", flower: "Hoa & cây cảnh" };
const FORMS_VI = p => p.form.map(f => FN[f]).join(" / ");
const byTitle = t => PRODUCTS.find(p => p.title === t);
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase();
const tagOf = p => /^(organic )?npk|^\d+-\d+-\d+/i.test(p.title) ? "NPK" : (GN[p.grp[0]] === "Phân bón lá" ? "Phân bón lá" : GN[p.grp[0]]);
const NOIMG = "this.replaceWith(Object.assign(document.createElement('span'),{className:'noimg',textContent:'GROW MORE'}))";
const pimg = p => `<img src="${IMGU(p.img[0])}" alt="${esc(p.title)}" loading="lazy" referrerpolicy="no-referrer" onerror="${NOIMG}">`;
const pcard = p => `<article class="pcard"><a class="pimg" href="san-pham-chi-tiet.html?id=${p.id}"><span class="tag">${tagOf(p)}</span>${pimg(p)}</a><div class="pbody"><h3><a href="san-pham-chi-tiet.html?id=${p.id}">${esc(p.title)}</a></h3><p class="psub">${esc(p.sub) || "&nbsp;"}</p><div class="meta"><span>${ic("drop")}${FORMS_VI(p)}</span><span>${ic("bag")}${esc(p.packs[0])}</span></div><div class="chips">${p.packs.slice(0, 3).map(c => `<span class="chip">${esc(c)}</span>`).join("")}${p.packs.length > 3 ? `<span class="chip">+${p.packs.length - 3}</span>` : ""}</div><div class="pact"><a class="l" href="lien-he.html?sp=${encodeURIComponent(p.title)}">Liên hệ</a><a class="btn btn-green sm" href="san-pham-chi-tiet.html?id=${p.id}">Xem chi tiết</a><button class="cbtn" aria-label="Thêm vào giỏ" onclick="addCart()">${ic("cart")}</button></div></div></article>`;

/* ---------- tiện ích động ---------- */
function toast(msg) {
  let w = document.getElementById("toasts");
  if (!w) { w = document.createElement("div"); w.id = "toasts"; document.body.appendChild(w); }
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = ic("check") + esc(msg);
  w.appendChild(t);
  setTimeout(() => t.classList.add("out"), 2600);
  setTimeout(() => t.remove(), 3100);
}
let cart = 0;
function addCart() {
  cart++;
  document.querySelectorAll(".cart i").forEach(e => {
    e.textContent = cart;
    e.classList.remove("bump"); void e.offsetWidth; e.classList.add("bump");
  });
  toast("Đã thêm sản phẩm vào giỏ hàng");
}

/* ---------- header / footer ---------- */
const NAV = [["index.html", "Trang chủ", "home"], ["san-pham.html", "Sản phẩm", "products"], ["giai-phap.html", "Giải pháp cây trồng", "solutions"], ["kien-thuc.html", "Kiến thức nông nghiệp", "knowledge"], ["gioi-thieu.html", "Về Grow More", "about"], ["lien-he.html", "Liên hệ", "contact"]];
const logo = `<a class="logo" href="index.html">${ic("leaf")}<span><b>GROW MORE</b><small>Better Growth. Greater Yield.</small></span></a>`;
const page = document.body.dataset.page;
document.getElementById("site-header").outerHTML = `<header class="site"><div class="header-inner">${logo}<nav class="main" id="nav">${NAV.map(n => `<a href="${n[0]}" class="${n[2] === page ? "active" : ""}">${n[1]}${["products", "solutions", "knowledge", "about"].includes(n[2]) ? '<span class="caret">⌄</span>' : ""}</a>`).join("")}</nav>
<form class="search" action="san-pham.html">${ic("search")}<input name="q" type="search" placeholder="Tìm sản phẩm, cây trồng hoặc nhu cầu..." aria-label="Tìm kiếm"><button aria-label="Tìm">${ic("search")}</button></form>
<div class="h-actions"><a href="lien-he.html" aria-label="Tài khoản">${ic("user")}</a><a class="cart" href="san-pham.html" aria-label="Giỏ hàng">${ic("cart")}<i>0</i></a><button class="icon-btn" id="theme-toggle" type="button" aria-label="Đổi giao diện sáng / tối"></button><button class="menu-toggle" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">${ic("menu")}</button></div></div></header>`;
document.getElementById("site-footer").outerHTML = `<footer class="site"><div class="container fgrid"><div>${logo}<p class="fdesc">Grow More Việt Nam – Giải pháp dinh dưỡng hiệu quả cho nền nông nghiệp bền vững.</p><div class="fcompany">GROW MORE COMPANY LIMITED</div><div class="fline">${ic("pin")}Tầng lửng, Số 911-917 Nguyễn Trãi, Phường Chợ Lớn, TP.HCM</div><div class="fline">${ic("phone")}Số điện thoại: 0283.755.9000</div><div class="fline">${ic("mail")}info@growmore.com.vn</div></div>
<div><h4>Liên kết nhanh</h4><ul class="flinks"><li><a href="index.html">Trang chủ</a></li><li><a href="gioi-thieu.html">Giới thiệu</a></li><li><a href="kien-thuc.html">Tin tức</a></li><li><a href="lien-he.html">Liên hệ</a></li><li><a href="#">Chính sách bảo mật</a></li><li><a href="#">Điều khoản sử dụng</a></li></ul></div>
<div><h4>Danh mục sản phẩm</h4><ul class="flinks">${[["Phân bón lá", "foliar"], ["Phân bón sinh học", "bio"], ["Vi lượng", "micro"], ["Phân NPK hỗn hợp", "npk"], ["Dạng bột", "bot"], ["Dạng lỏng", "long"], ["Dạng hạt", "hat"]].map(x => `<li><a href="san-pham.html?f=${x[1]}">${x[0]}</a></li>`).join("")}</ul></div>
<div class="nl"><h4>Đăng ký nhận tin</h4><p>Cập nhật sản phẩm mới, kỹ thuật nông nghiệp và các chương trình ưu đãi.</p><form class="sub" onsubmit="event.preventDefault();this.reset();toast('Cảm ơn bạn đã đăng ký nhận tin!')"><input type="email" placeholder="Nhập email của bạn" required aria-label="Email"><button>Đăng ký</button></form><h4>Kết nối với chúng tôi</h4><div class="socials"><a href="#" aria-label="Facebook">${ic("fb")}</a><a href="#" aria-label="YouTube">${ic("yt")}</a><a href="#" aria-label="Zalo"><b style="font-size:11px">Z</b></a><a href="#" aria-label="TikTok">${ic("tt")}</a></div></div></div>
<div class="bottom"><div class="container"><span>© 2025 GROW MORE COMPANY LIMITED. Tất cả quyền được bảo lưu.</span><span>${ic("check")} Sản phẩm chính hãng từ Grow More – USA</span></div></div></footer>
<div class="float"><a class="zalo" href="#" aria-label="Zalo">Zalo</a><a class="tel" href="tel:02837559000" aria-label="Gọi điện">${ic("phone")}</a></div>`;

/* ---------- dark mode ---------- */
const themeBtn = document.getElementById("theme-toggle");
const applyTheme = t => {
  document.documentElement.setAttribute("data-theme", t);
  try { localStorage.setItem("gm-theme", t); } catch (e) { }
  themeBtn.innerHTML = ic(t === "dark" ? "sun" : "moon");
  themeBtn.setAttribute("aria-label", t === "dark" ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối");
};
themeBtn.onclick = () => applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");

/* ---------- header đổ bóng khi cuộn ---------- */
addEventListener("scroll", () => {
  document.querySelector("header.site").classList.toggle("scrolled", scrollY > 8);
}, { passive: true });

const $ = s => document.querySelector(s), q = new URLSearchParams(location.search);

/* ---------- trang chủ ---------- */
if ($("#featured")) $("#featured").innerHTML = ["NPK 15-30-15+TE", "GRO-FOLAN NPK 1-18-18+TE", "BLOOM", "BORON"].map(byTitle).filter(Boolean).map(pcard).join("");

/* ---------- danh sách sản phẩm ---------- */
if ($("#plist")) {
  const PACKS = ["Hủ 100g", "Hủ 500g", "Hủ 1 kg", "Chai 100ml", "Chai 235ml", "Chai 473ml", "Chai 500ml", "Chai 1 lít", "Gói 1 kg", "Bao 20 kg (20 gói 1Kg/Bao)", "Bao 22.7 kg", "Bao 25 kg", "Can 5 lít", "Bình 3.8 lít", "Xô 19 lít", "Xô 20 lít"];
  const allPacks = [...new Set(PRODUCTS.flatMap(p => p.packs))]; const packList = PACKS.filter(x => allPacks.includes(x)).concat(allPacks.filter(x => !PACKS.includes(x)));
  const G = [["Nhóm sản phẩm", "g", ["npk", "foliar", "micro", "bio", "other"].map(k => [k, GN[k]])], ["Dạng sản phẩm", "form", ["hat", "long", "bot"].map(k => [k, FN[k]])], ["Loại cây trồng", "crop", ["fruit", "veg", "ind", "flower"].map(k => [k, CN[k]])], ["Quy cách", "pack", packList.map(k => [k, k])]];
  const has = (p, k, v) => k === "g" ? p.grp.includes(v) : k === "form" ? p.form.includes(v) : k === "crop" ? p.crops.includes(v) : p.packs.includes(v);
  const S = { g: new Set(), form: new Set(), crop: new Set(), pack: new Set() }; let query = q.get("q") || "", shown = 12;
  (q.get("f") || "").split(",").filter(Boolean).forEach(v => { v = decodeURIComponent(v); const g = G.find(x => x[2].some(o => o[0] === v)); if (g) S[g[1]].add(v); });
  $("#side").innerHTML = G.map(g => `<details ${g[1] !== "pack" || S.pack.size ? "open" : ""}><summary><h4>${g[0]}</h4></summary>${g[2].map(o => `<label><input type="checkbox" data-k="${g[1]}" value="${esc(o[0])}" ${S[g[1]].has(o[0]) ? "checked" : ""}><span>${o[1]}</span><em>${PRODUCTS.filter(p => has(p, g[1], o[0])).length}</em></label>`).join("")}</details>`).join("");
  $("#qin").value = query;
  const draw = () => {
    const nq = norm(query.trim()); const list = PRODUCTS.filter(p => Object.keys(S).every(k => !S[k].size || [...S[k]].some(v => has(p, k, v))) && (!nq || norm([p.name, p.sub, p.code, p.type, p.desc].join(" ")).includes(nq)));
    $("#count").textContent = list.length; $("#plist").innerHTML = list.length ? list.slice(0, shown).map(pcard).join("") : '<div class="empty">Chưa tìm thấy sản phẩm phù hợp. Vui lòng <a href="lien-he.html">liên hệ</a> để được tư vấn.</div>';
    $("#more").style.display = list.length > shown ? "inline-flex" : "none"; $("#more").textContent = "Xem thêm sản phẩm (" + (list.length - shown) + ")";
  };
  $("#side").onchange = e => { const t = e.target; t.checked ? S[t.dataset.k].add(t.value) : S[t.dataset.k].delete(t.value); shown = 12; draw(); };
  $("#qin").oninput = e => { query = e.target.value; shown = 12; draw(); };
  $("#more").onclick = () => { shown += 12; draw(); };
  $("#clear").onclick = () => { Object.values(S).forEach(s => s.clear()); query = ""; $("#qin").value = ""; document.querySelectorAll("#side input").forEach(i => i.checked = false); shown = 12; draw(); };
  draw();
}

/* ---------- chi tiết sản phẩm ---------- */
if ($("#detail")) {
  const p = PRODUCTS.find(x => x.id === q.get("id")) || byTitle("BLOOM");
  document.title = p.title + " | Grow More Việt Nam";
  $("#crumb-name").textContent = p.title;
  const bold = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const imgs = p.img.map(IMGU);
  const spec = [["Thương hiệu", p.brand], ["Mã sản phẩm", p.code], ["Loại phân bón", p.type], ["Dạng sản phẩm", FORMS_VI(p)], ["Xuất xứ", p.origin], ["Phân loại cây trồng", p.crops.map(c => CN[c]).join(", ")]].filter(r => r[1]);
  const packRows = Object.fromEntries(p.rows.map(r => [r[0], r]));
  const orderLink = `lien-he.html?sp=${encodeURIComponent(p.title)}`;

  $("#pd-head").innerHTML = `<a class="back" href="san-pham.html">${ic("arrow", "flip")} Chi tiết sản phẩm</a>
  <div class="pd-actions"><a class="btn btn-ghost sm" href="tel:02837559000">${ic("phone")} 0283.755.9000</a><a class="btn btn-green sm" href="${orderLink}">Liên hệ đặt hàng</a></div>`;

  $("#detail").innerHTML = `
  <div class="pd-left">
    <div class="gal">
      <div class="gal-main"><img id="mainimg" src="${imgs[0]}" alt="${esc(p.title)}" referrerpolicy="no-referrer" onerror="${NOIMG}"></div>
      ${imgs.length > 1 ? `<div class="gal-thumbs">${imgs.map((u, i) => `<button type="button" class="${i ? "" : "on"}" data-u="${u}" aria-label="Xem ảnh ${i + 1}"><img src="${u}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"></button>`).join("")}</div>` : ""}
    </div>
    <div class="brand-card">
      <div class="bc-row"><span class="bc-logo">${ic("leaf")}</span><div><b>GROW MORE ${ic("check", "vbadge")}</b><span>Nhập khẩu chính hãng từ Grow More – USA</span></div></div>
      <div class="bc-row"><span class="bc-loc">${ic("pin")} TP. Hồ Chí Minh, Việt Nam</span><a class="btn btn-ghost sm" href="gioi-thieu.html">Xem thêm</a></div>
    </div>
  </div>
  <div class="pd-right">
    <span class="pd-badge">${esc(p.cats[0] || GN[p.grp[0]])}</span>
    <h1>${esc(p.title)}</h1>
    ${p.sub ? `<p class="dsub">${esc(p.sub)}</p>` : ""}
    <div class="pd-meta"><span>${ic("shield")} Mã ${esc(p.code)}</span><span>${ic("drop")} ${FORMS_VI(p)}</span><span>${ic("globe")} ${esc(p.origin)}</span></div>
    <div class="pd-price"><b>Liên hệ báo giá</b><span>Giá theo quy cách đóng gói · Hotline 0283.755.9000</span></div>
    <div class="opt"><div class="opt-head"><b>Dạng sản phẩm:</b><span class="opt-val">${FORMS_VI(p)}</span></div>
      <div class="opt-chips">${p.form.map(f => `<span class="ochip">${FN[f]}</span>`).join("")}</div></div>
    <div class="opt"><div class="opt-head"><b>Quy cách đóng gói:</b><span class="opt-val" id="pack-val"></span></div>
      <div class="opt-chips" id="packs">${p.packs.map(c => `<button type="button" class="ochip" data-pack="${esc(c)}">${esc(c)}</button>`).join("")}</div>
      <p class="sku-note" id="sku-note"></p></div>
    <div class="opt"><b class="opt-title">Mô tả:</b>
      <ul class="pd-desc"><li>${esc(p.desc)}</li><li>Phù hợp: ${p.crops.map(c => CN[c]).join(", ")}.</li><li>Xuất xứ: ${esc(p.origin)} · Thương hiệu: ${esc(p.brand)}.</li></ul></div>
    <div class="opt"><b class="opt-title">Vận chuyển &amp; chính sách:</b>
      <div class="ship">${[["truck", "Giao hàng", "Giao nhanh toàn quốc"], ["shield", "Cam kết", "Chính hãng 100% từ USA"], ["headset", "Hỗ trợ", "Tư vấn kỹ thuật 24/7"]].map(s => `<div class="ship-t">${ic(s[0])}<div><b>${s[1]}</b><span>${s[2]}</span></div></div>`).join("")}</div></div>
    <div class="pd-cta"><a class="btn btn-green" href="${orderLink}">Liên hệ đặt hàng</a><a class="btn btn-ghost" href="tel:02837559000">${ic("phone")} 0283.755.9000</a><button class="cbtn big" id="wish" type="button" aria-label="Lưu sản phẩm">${ic("heart")}</button></div>
  </div>`;

  /* chọn quy cách → hiện SKU, tô sáng dòng bảng */
  const selPack = n => {
    $("#pack-val").textContent = n;
    document.querySelectorAll("#packs .ochip").forEach(b => b.classList.toggle("on", b.dataset.pack === n));
    const r = packRows[n];
    $("#sku-note").innerHTML = `${ic("check")} <span>Còn hàng · SKU: <b>${esc(r ? r[2] : "—")}</b>${r ? " · " + esc(r[1]) : ""}</span>`;
    document.querySelectorAll("#packtable tr[data-pack]").forEach(tr => tr.classList.toggle("hl", tr.dataset.pack === n));
    const bp = $("#bar-pack"); if (bp) bp.textContent = n;
  };
  $("#packs").onclick = e => { const b = e.target.closest(".ochip"); if (b) selPack(b.dataset.pack); };

  /* gallery: đổi ảnh mờ dần */
  const main = $("#mainimg");
  document.querySelectorAll(".gal-thumbs button").forEach(b => b.onclick = () => {
    if (main.getAttribute("src") === b.dataset.u) return;
    main.style.opacity = 0;
    setTimeout(() => { main.src = b.dataset.u; main.style.opacity = 1; }, 180);
    document.querySelectorAll(".gal-thumbs button").forEach(x => x.classList.toggle("on", x === b));
  });
  $("#wish").onclick = e => {
    const on = e.currentTarget.classList.toggle("on");
    toast(on ? "Đã lưu sản phẩm vào yêu thích" : "Đã bỏ khỏi danh sách yêu thích");
  };

  /* tabs nội dung */
  const comp = p.comp.split(/,\s(?=[^,:]+:)/).filter(x => x.includes(":"));
  const PANEL = {
    desc: () => `<div class="card"><h3 class="dh">Mô tả sản phẩm</h3><p>${esc(p.desc)}</p>
      <ul class="pd-desc"><li>Phù hợp: ${p.crops.map(c => CN[c]).join(", ")}.</li><li>Dạng sản phẩm: ${FORMS_VI(p)}.</li><li>Thương hiệu: ${esc(p.brand)} · Xuất xứ: ${esc(p.origin)}.</li></ul></div>`,
    comp: () => `<div class="card"><h3 class="dh">Thành phần &amp; chỉ tiêu</h3>${comp.length ? `<table class="specs">${comp.map(c => { const i = c.indexOf(":"); return `<tr><td>${esc(c.slice(0, i))}</td><td>${esc(c.slice(i + 1).replace(/\.$/, ""))}</td></tr>`; }).join("")}</table>` : `<p>${esc(p.comp)}</p>`}</div>`,
    usage: () => `<div class="card"><h3 class="dh">Hướng dẫn sử dụng</h3><ul class="ticks">${p.usage.map(u => `<li>${ic("check")}<span>${bold(u)}</span></li>`).join("")}</ul><h3 class="dh">Hướng dẫn bảo quản</h3><p>${esc(p.stor)}</p></div>`,
    packs: () => `<div class="card"><h3 class="dh">Quy cách &amp; SKU</h3><table class="specs packs" id="packtable"><tr><td>Quy cách</td><td>Dạng</td><td>SKU</td></tr>${p.rows.map(r => `<tr data-pack="${esc(r[0])}"><td>${esc(r[0])}</td><td>${esc((r[1] || "").replace("DẠNG ", "Dạng ").toLowerCase().replace(/^d/, "D"))}</td><td>${esc(r[2] || "")}</td></tr>`).join("")}</table>
      <table class="specs">${spec.map(r => `<tr><td>${r[0]}</td><td>${esc(r[1])}</td></tr>`).join("")}</table></div>`
  };
  const TABS = [["desc", "Mô tả"], ["comp", "Thành phần"], ["usage", "Hướng dẫn sử dụng"], ["packs", "Quy cách & SKU"]];
  $("#dmore").innerHTML = `<div class="tabs pd-tabs" id="pdtabs">${TABS.map(t => `<button type="button" data-k="${t[0]}">${t[1]}</button>`).join("")}</div><div class="pd-panel" id="pdpanel"></div>
  <div class="card review"><div class="rv-head"><h3>Đánh giá sản phẩm</h3><span class="rv-count">0 đánh giá</span></div>
  <div class="rv-body"><div class="rv-stars" id="rvstars" role="group" aria-label="Chấm điểm sản phẩm">${[1, 2, 3, 4, 5].map(i => `<button type="button" data-v="${i}" aria-label="${i} sao">${ic("star")}</button>`).join("")}</div><p id="rv-msg">Chưa có đánh giá nào — hãy là người đầu tiên chấm điểm sản phẩm này.</p></div></div>`;
  const showTab = k => {
    document.querySelectorAll("#pdtabs button").forEach(b => b.classList.toggle("on", b.dataset.k === k));
    const el = $("#pdpanel");
    el.classList.remove("anim"); void el.offsetWidth;
    el.innerHTML = PANEL[k]();
    el.classList.add("anim");
    if (k === "packs") selPack($("#pack-val").textContent);
  };
  $("#pdtabs").onclick = e => { const b = e.target.closest("button"); if (b) showTab(b.dataset.k); };
  showTab("desc");
  selPack(p.packs[0]);

  $("#rvstars").onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    const v = +b.dataset.v;
    document.querySelectorAll("#rvstars button").forEach(x => x.classList.toggle("on", +x.dataset.v <= v));
    $("#rv-msg").textContent = `Cảm ơn bạn! Bạn đã chấm ${v}/5 sao cho ${p.title}.`;
    toast(`Cảm ơn bạn đã đánh giá ${v} sao`);
  };

  /* thanh CTA dính cho mobile */
  document.body.insertAdjacentHTML("beforeend", `<div class="pd-bar"><div class="pack"><span>Quy cách</span><b id="bar-pack"></b></div><a class="btn btn-ghost" href="tel:02837559000" aria-label="Gọi ngay">${ic("phone")}</a><a class="btn btn-green" href="${orderLink}">Liên hệ đặt hàng</a></div>`);
  $("#bar-pack").textContent = p.packs[0];

  $("#related").innerHTML = PRODUCTS.filter(x => x.id !== p.id && x.grp[0] === p.grp[0]).slice(0, 3).map(pcard).join("");
}

/* ---------- giải pháp ---------- */
if ($("#tabs")) {
  const C = { fruit: ["Cây ăn trái", "Sầu riêng, xoài, cam, bưởi, mít"], veg: ["Rau màu", "Cải, xà lách, cà chua, ớt, dưa"], ind: ["Cây công nghiệp", "Cà phê, tiêu, cao su, điều"], flower: ["Hoa & cây cảnh", "Hoa hồng, lan, cây kiếng"] };
  const SI = { "Sinh trưởng": ["leaf", "Phát triển bộ lá, thân, rễ khỏe mạnh"], "Ra hoa": ["flower", "Kích thích ra hoa, tăng tỷ lệ đậu trái"], "Đậu trái": ["fruit", "Giúp trái non phát triển, hạn chế rụng"], "Nuôi trái": ["apple", "Tăng kích thước, màu sắc, chất lượng"] };
  const show = k => {
    $("#cropall").href = "san-pham.html?f=" + k; document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.k === k)); $("#cropname").textContent = C[k][0] + " – " + C[k][1];
    $("#stages").innerHTML = Object.keys(SI).map(st => { const p = byTitle(({ "Sinh trưởng": "NPK 15-30-15+TE", "Ra hoa": "GRO-FOLAN NPK 1-18-18+TE", "Đậu trái": "BLOOM", "Nuôi trái": "BORON" })[st]); return `<div class="stage"><div class="stage-top"><div class="circ" ${bg(IMG.leaf)}></div><div><h3>${ic(SI[st][0])}${st}</h3></div></div><p>${SI[st][1]}</p><div class="stage-prod"><img class="mini" src="${IMGU(p.img[0])}" alt="" referrerpolicy="no-referrer"><div><b>${esc(p.title)}</b><span>${FORMS_VI(p)} | ${esc(p.packs[0])}</span></div></div><a class="view-all" style="font-size:11px;display:block;margin-top:10px" href="san-pham-chi-tiet.html?id=${p.id}">Xem sản phẩm</a></div>`; }).join("");
  };
  $("#tabs").innerHTML = Object.keys(C).map(k => `<button data-k="${k}" onclick="show('${k}')">${C[k][0]}</button>`).join(""); window.show = show; show("fruit");
}

/* ---------- kiến thức ---------- */
if ($("#news")) {
  const A = [["Hướng dẫn", "Cách pha và phun phân bón lá đúng kỹ thuật", "Pha đúng nồng độ, phun đúng thời điểm giúp cây hấp thu tối đa dinh dưỡng.", IMG.leaf], ["Kỹ thuật", "Kích thích ra hoa đồng loạt cho cây ăn trái", "Những lưu ý về dinh dưỡng và chăm sóc trước và trong giai đoạn ra hoa.", IMG.flower], ["Kỹ thuật", "Tăng đậu trái, hạn chế rụng trái non", "Vai trò của Boron và amino acid đối với quá trình thụ phấn, đậu trái.", IMG.fruit], ["Hướng dẫn", "Sử dụng NPK hiệu quả cho từng giai đoạn", "Chọn đúng tỷ lệ N-P-K theo giai đoạn sinh trưởng để tiết kiệm chi phí.", IMG.ind], ["Thị trường", "Cập nhật mùa vụ và giá nông sản", "Tổng hợp xu hướng mùa vụ để bà con chủ động kế hoạch canh tác.", IMG.farm], ["Kỹ thuật", "Chăm sóc rau màu trong mùa mưa", "Phòng ngừa úng, nấm bệnh và bổ sung vi lượng cho rau màu.", IMG.veg]];
  const draw = c => { $("#news").innerHTML = A.filter(a => !c || a[0] === c).map(a => `<article class="art"><div class="im" ${bg(a[3])}></div><div class="bd"><small>${a[0].toUpperCase()}</small><h3>${a[1]}</h3><p>${a[2]}</p><em>Grow More Việt Nam</em></div></article>`).join(""); };
  $("#ktabs").innerHTML = ["Tất cả", "Hướng dẫn", "Kỹ thuật", "Thị trường"].map((t, i) => `<button class="${i ? "" : "on"}" onclick="document.querySelectorAll('#ktabs button').forEach(b=>b.classList.remove('on'));this.classList.add('on');window.dk('${i ? t : ""}')">${t}</button>`).join(""); window.dk = draw; draw("");
}

/* ---------- liên hệ ---------- */
if ($("#cform")) {
  const sp = q.get("sp"); if (sp) $("#cmsg").value = "Tôi quan tâm đến sản phẩm " + sp + ". Vui lòng tư vấn giúp.";
  $("#cform").onsubmit = e => { e.preventDefault(); $("#ok").style.display = "block"; e.target.reset(); toast("Đã gửi yêu cầu tư vấn thành công"); };
}

/* ---------- trang chủ: khối hero / danh mục / giai đoạn ---------- */
if ($("#hf")) {
  $("#hf").innerHTML = [["shield", "Nhập khẩu chính hãng", "Từ Grow More - USA"], ["headset", "Tư vấn kỹ thuật", "Đội ngũ chuyên gia giàu kinh nghiệm"], ["leaf", "Sản phẩm đa dạng", "Phù hợp nhiều loại cây trồng"]].map(x => `<div class="hf"><div class="ring">${ic(x[0])}</div><div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join("");
  $("#cats").innerHTML = [["apple", "Cây ăn trái", "Sầu riêng, xoài, cam, bưởi, mít...", "fruit"], ["sprout", "Rau màu", "Cải, xà lách, cà chua, ớt, dưa...", "veg"], ["flower", "Cây công nghiệp", "Cà phê, tiêu, cao su, điều...", "ind"], ["flower", "Hoa & cây cảnh", "Hoa hồng, lan, cây kiếng...", "flower"]].map(c => `<a class="cat" ${bg(IMG[c[3]])} href="san-pham.html?f=${c[3]}"><div class="in">${ic(c[0])}<h3>${c[1]}</h3><p>${c[2]}</p></div><span class="go">${ic("arrow")}</span></a>`).join("");
  const SI = [["leaf", "Sinh trưởng", "Phát triển bộ lá, thân, rễ khỏe mạnh", 0], ["flower", "Ra hoa", "Kích thích ra hoa, tăng tỷ lệ đậu trái", 1], ["fruit", "Đậu trái", "Giúp trái non phát triển, hạn chế rụng", 2], ["apple", "Nuôi trái", "Tăng kích thước, màu sắc, chất lượng", 3]];
  const CI = [IMG.leaf, IMG.flower, IMG.fruit, IMG.fruit];
  $("#hstages").innerHTML = SI.map(s => { const p = byTitle(["NPK 15-30-15+TE", "GRO-FOLAN NPK 1-18-18+TE", "BLOOM", "BORON"][s[3]]); return `<a class="stage" href="san-pham-chi-tiet.html?id=${p.id}"><div class="stage-top"><div class="circ" ${bg(CI[s[3]])}></div><div><h3>${ic(s[0])}${s[1]}</h3><p>${s[2]}</p></div></div><div class="stage-prod"><img class="mini" src="${IMGU(p.img[0])}" alt="" referrerpolicy="no-referrer"><div><b>${esc(p.title)}</b><span>${FORMS_VI(p)} | ${esc(p.packs[0])}</span></div></div></a>`; }).join("");
  $("#kl").innerHTML = [["book", "Hướng dẫn sử dụng phân bón"], ["sprout", "Kỹ thuật chăm sóc cây trồng"], ["tractor", "Cập nhật mùa vụ & thị trường"]].map(k => `<a href="kien-thuc.html">${ic(k[0])}${k[1]}</a>`).join("");
}
if ($("#vals")) $("#vals").innerHTML = [["flask", "Chất lượng chính hãng", "Sản phẩm nhập khẩu trực tiếp từ Grow More – USA, kiểm soát chất lượng chặt chẽ."], ["headset", "Đồng hành kỹ thuật", "Đội ngũ chuyên gia tư vấn quy trình dinh dưỡng theo từng mùa vụ."], ["globe", "Nông nghiệp bền vững", "Giải pháp giúp cây khỏe, tối ưu chi phí và bảo vệ môi trường canh tác."]].map(v => `<div class="card">${ic(v[0])}<h3>${v[1]}</h3><p>${v[2]}</p></div>`).join("");
if ($("#ab-why")) $("#ab-why").innerHTML = ["Sản phẩm nhập khẩu trực tiếp từ Grow More – USA, đầy đủ chứng từ nguồn gốc.", "Danh mục 51+ sản phẩm phủ trọn 4 nhóm cây trồng và mọi giai đoạn sinh trưởng.", "Quy trình tư vấn theo từng mùa vụ, từng loại cây – không bán theo cảm tính.", "Đội ngũ kỹ thuật đồng hành tận vườn, hỗ trợ suốt mùa vụ."].map(t => `<li>${ic("check")}<span>${t}</span></li>`).join("");
if ($("#ab-mission")) $("#ab-mission").innerHTML = [["globe", "Tầm nhìn", "Trở thành thương hiệu dinh dưỡng cây trồng được tin cậy hàng đầu tại Việt Nam, đồng hành cùng nền nông nghiệp bền vững."], ["leaf", "Sứ mệnh", "Mang giải pháp dinh dưỡng chuẩn Hoa Kỳ đến từng vườn cây, giúp nhà nông tăng năng suất và nâng cao chất lượng nông sản."], ["heart", "Triết lý", "Chất lượng thật – hiệu quả thật: sản phẩm chính hãng, tư vấn đúng quy trình, đồng hành trọn mùa vụ."]].map(v => `<div class="card">${ic(v[0])}<h3>${v[1]}</h3><p>${v[2]}</p></div>`).join("");
if ($("#ab-steps")) $("#ab-steps").innerHTML = [["globe", "Nhập khẩu trực tiếp", "Sản phẩm được nhập khẩu chính ngạch từ nhà máy Grow More tại Hoa Kỳ, nguyên đai nguyên kiện."], ["flask", "Kiểm định chặt chẽ", "Mỗi lô hàng được kiểm tra chất lượng và chứng từ trước khi đưa vào hệ thống phân phối."], ["truck", "Phân phối toàn quốc", "Mạng lưới phân phối rộng khắp giúp sản phẩm đến tay nhà nông nhanh chóng, đúng mùa vụ."], ["headset", "Đồng hành kỹ thuật", "Chuyên gia tư vấn quy trình sử dụng theo từng giai đoạn cây trồng, trọn suốt mùa vụ."]].map((s, i) => `<div class="stage"><div class="stage-top"><div class="step-num">0${i + 1}</div><div><h3>${ic(s[0])}${s[1]}</h3></div></div><p>${s[2]}</p></div>`).join("");
if ($("#c1")) { $("#c1").innerHTML = ic("phone") + "Số điện thoại: 0283.755.9000"; $("#c2").innerHTML = ic("mail") + "info@growmore.com.vn"; $("#c3").innerHTML = ic("pin") + "Tầng lửng, Số 911-917 Nguyễn Trãi, Phường Chợ Lớn, TP.HCM"; }

/* ---------- hiệu ứng động: reveal khi cuộn + đếm số ---------- */
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .1, rootMargin: "0px 0px -40px 0px" });
  const targets = [...document.querySelectorAll("section:not(.hero), .pd-left, .pd-right, .pcard, .stage, .art, .cat, .stats > div, .values .card")];
  const perParent = new Map();
  targets.forEach(el => {
    const par = el.parentElement, i = perParent.get(par) || 0;
    el.style.setProperty("--rv-d", (i % 4) * 80 + "ms");
    perParent.set(par, i + 1);
    el.classList.add("rv");
    io.observe(el);
  });
  document.querySelectorAll(".stats b").forEach(b => {
    const m = b.textContent.match(/^(\d+)(.*)$/);
    if (!m) return;
    const end = +m[1], suf = m[2];
    const io2 = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return;
      io2.disconnect();
      const t0 = performance.now();
      const step = t => {
        const k = Math.min(1, (t - t0) / 900);
        b.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: .6 });
    io2.observe(b);
  });
}
