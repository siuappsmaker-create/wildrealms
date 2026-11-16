// ===== Settings: put the real Facebook page address here =====
const FB_URL = "https://www.facebook.com/share/1ChCuavAvT/";

// ===== Game data =====
const CLASSES = [
  { id: "warrior", en: ["Warrior", "Frontline fighter", "Sword and shield master who charges into battle and protects allies."],
    vi: ["Chiến Binh", "Tiên phong", "Bậc thầy kiếm và khiên, xông pha trận mạc và bảo vệ đồng đội."] },
  { id: "viking", en: ["Viking", "Berserker", "Dual-axe brawler with a thunderous roar and crushing slams."],
    vi: ["Viking", "Cuồng chiến", "Chiến binh song rìu với tiếng gầm vang dội và những cú đập hủy diệt."] },
  { id: "hunter", en: ["Hunter", "Ranged", "Deadly archer who strikes from afar and never misses prey."],
    vi: ["Thợ Săn", "Tầm xa", "Cung thủ chết chóc, tấn công từ xa và không bao giờ trượt mục tiêu."] },
  { id: "shadowstalker", en: ["Shadowstalker", "Assassin", "Poison, smoke and shadow-steps. Strike before they see you."],
    vi: ["Bóng Ma", "Sát thủ", "Độc dược, khói mù và bước bóng tối. Ra đòn trước khi kẻ thù kịp thấy."] },
  { id: "mage", en: ["Mage", "Spellcaster", "Commands fire and lightning with a staff of pure power."],
    vi: ["Pháp Sư", "Phép thuật", "Điều khiển lửa và sấm sét bằng cây trượng đầy sức mạnh."] },
  { id: "archmage", en: ["Archmage", "Elemental", "Meteors from the sky and frost that stops enemies cold."],
    vi: ["Đại Pháp Sư", "Nguyên tố", "Gọi thiên thạch từ trời cao và băng giá làm kẻ thù đóng băng."] },
  { id: "healer", en: ["Healer", "Support", "Holy light that mends wounds and keeps the family alive."],
    vi: ["Người Chữa Lành", "Hỗ trợ", "Ánh sáng thần thánh chữa lành vết thương và giữ gia đình sống sót."] },
  { id: "druid", en: ["Druid", "Nature", "Thorns, regrowth and the ancestral power of the forest."],
    vi: ["Tu Sĩ Rừng", "Thiên nhiên", "Gai nhọn, hồi sinh và sức mạnh tổ tiên của khu rừng."] },
  { id: "werewolf", en: ["Werewolf", "Shapeshifter", "Transform into a beast under the moon and tear through foes."],
    vi: ["Người Sói", "Biến hình", "Hóa thú dưới ánh trăng và xé tan mọi kẻ thù."] },
];
const MOUNTS = [
  ["mount_horse_brown", "Brown Horse", "Ngựa Nâu"], ["mount_horse_white", "White Horse", "Ngựa Trắng"],
  ["mount_horse_black", "Black Horse", "Ngựa Đen"], ["mount_horse_golden", "Golden Horse", "Ngựa Vàng"],
  ["mount_wolf_black", "Shadow Wolf", "Sói Bóng Đêm"], ["mount_wolf_white", "Snow Wolf", "Sói Tuyết"],
  ["mount_wolf_brown", "Timber Wolf", "Sói Rừng"], ["mount_wolf_golden", "Crimson Wolf", "Sói Đỏ"],
];
const GALLERY = [
  ["village", "The safe-zone village and castle", "Ngôi làng an toàn và lâu đài"],
  ["horses", "Wild horses in the meadow", "Ngựa hoang trên đồng cỏ"],
  ["campfire_day", "Roasting meat over the fire", "Nướng thịt bên đống lửa"],
  ["cave_entrance", "A glowing legendary cave entrance", "Lối vào hang huyền thoại phát sáng"],
  ["cave_tiles", "Mine tracks deep underground", "Đường ray mỏ sâu dưới lòng đất"],
  ["cave_purple", "An enhanced PvP cave", "Hang nâng cao có PvP"],
  ["cave_boss", "The boss chamber and its chest", "Phòng trùm và rương báu"],
  ["frost_maple", "Maple trees in the Frostlands", "Rừng phong ở Vùng Băng Giá"],
  ["frost_gold", "Gold ore in the snow", "Quặng vàng giữa tuyết trắng"],
  ["campfire", "A safe night by the fire", "Một đêm an toàn bên đống lửa"],
  ["staff_fight", "Casting with a legendary staff", "Thi triển phép với trượng huyền thoại"],
  ["ride_golden", "Riding a golden horse", "Cưỡi ngựa vàng"],
  ["werewolf", "The werewolf form", "Hình dạng người sói"],
  ["well", "A village well — drink to survive", "Giếng làng — uống nước để sinh tồn"],
  ["pond", "Lakes full of fish", "Hồ đầy cá"],
  ["ancient_tree", "The Ancient Tree", "Cây Cổ Thụ"],
  ["base_doors", "Walls and doors of every level", "Tường và cửa ở mọi cấp độ"],
  ["crafting", "Crafting stations", "Các trạm chế tạo"],
  ["raid", "Raiding an enemy base", "Đột kích căn cứ kẻ thù"],
  ["garden", "Your own garden", "Khu vườn của riêng bạn"],
  ["elder", "The village Elder", "Già làng"],
  ["world_map", "A huge world to explore", "Thế giới rộng lớn để khám phá"],
  ["chest", "Loot from a cave chest", "Chiến lợi phẩm từ rương trong hang"],
];

// ===== Translations =====
const T = {
  en: {
    nav_world: "World", nav_features: "Features", nav_classes: "Classes", nav_mounts: "Mounts", nav_gallery: "Gallery", nav_trailer: "Trailer", nav_reward: "Launch reward",
    follow: "Follow", hero_title: "Your world. Your adventure. Your survival.",
    hero_lead: "An open-world fantasy MMORPG where adventure, danger and survival wait around every corner.",
    cta_follow: "Follow on Facebook", cta_trailer: "▶ Watch the trailer", soon: "📱 Coming soon to mobile",
    p_build: "Build", p_build_s: "Bases, walls & workshops", p_explore: "Explore", p_explore_s: "Forests, frostlands & caves",
    p_fight: "Fight", p_fight_s: "PvE bosses & PvP battles", p_survive: "Survive", p_survive_s: "Hunger, thirst & the wild",
    w_eyebrow: "Welcome, adventurer", w_title: "Enter WildRealms",
    w_p1: "Journey through forests, mountains, lakes, mysterious caves and dangerous dungeons. Gather resources, discover hidden treasures and uncover the secrets of WildRealms.",
    w_p2: "Every tree can be chopped, every rock mined, every cave holds keys, levers and chests. Head north to the snowy Frostlands for maple, copper and gold — but watch out for the wolves.",
    f_caves: "caves & dungeons", f_classes: "playable classes", f_lands: "lands: Wildwood & Frostlands", f_mounts: "horse & wolf mounts",
    feat_eyebrow: "What awaits you", feat_title: "Build. Explore. Fight. Survive.",
    f1_t: "Explore a living open world", f1_p: "Forests, mountains, lakes, glowing cave entrances and deep dungeons. Gather resources and find hidden treasure.",
    f2_t: "Epic PvE & PvP combat", f2_p: "Battle monsters and bosses, challenge other players and compete for valuable loot.",
    f3_t: "Build your own base", f3_p: "Craft weapons and armor, build your home, upgrade your defenses and protect what you built.",
    f4_t: "Survive alone or with family", f4_p: "Take on dungeons solo or form a family with other players to fight, build and explore together.",
    f5_t: "Choose your class", f5_p: "Nine classes, each with unique skills. Develop your own fighting style.",
    f6_t: "Tame and ride mounts", f6_p: "Throw your lasso, tame wild horses and wolves, and ride them across the realm.",
    f7_t: "Test your survival skills", f7_p: "Manage hunger and thirst, hunt for food, drink from wells, gather resources and prepare for the dangers of the wilderness.",
    cl_eyebrow: "Nine paths to power", cl_title: "Choose your class",
    s1_t: "Enhanced caves", s1_p: "Neon-lit dungeons, PvP inside, legendary loot", s2_t: "The Frostlands", s2_p: "Snow, maple trees, copper and gold",
    s3_t: "The Ancient Tree", s3_p: "A golden cauldron at the heart of the village",
    m_eyebrow: "Tame the wild", m_title: "Horses, wolves & more",
    m_p: "Sneak up on a wild horse, throw your lasso and make it yours. Saddle up a Shadow, Snow, Timber or Crimson wolf and charge into battle. More fantasy creatures are on the way.",
    h_eyebrow: "Pick your look", h_title: "Heroes of the realm", g_eyebrow: "Straight from the game", g_title: "Gallery",
    t_eyebrow: "See it in motion", t_title: "Official trailer",
    r_eyebrow: "🎁 Special launch reward", r_title: "Follow us. Get a random Legendary gear item.",
    r_p: "Follow the official WildRealms Facebook page and receive ONE RANDOM LEGENDARY GEAR ITEM when the game launches!",
    c_title: "Are you ready to enter WildRealms?", back_top: "Back to top ↑",
  },
  vi: {
    nav_world: "Thế giới", nav_features: "Tính năng", nav_classes: "Lớp nhân vật", nav_mounts: "Thú cưỡi", nav_gallery: "Hình ảnh", nav_trailer: "Trailer", nav_reward: "Quà ra mắt",
    follow: "Theo dõi", hero_title: "Thế giới của bạn. Cuộc phiêu lưu của bạn. Sự sinh tồn của bạn.",
    hero_lead: "Game MMORPG giả tưởng thế giới mở, nơi phiêu lưu, hiểm nguy và sinh tồn chờ đợi ở mọi ngóc ngách.",
    cta_follow: "Theo dõi trên Facebook", cta_trailer: "▶ Xem trailer", soon: "📱 Sắp ra mắt trên di động",
    p_build: "Xây dựng", p_build_s: "Căn cứ, tường thành & xưởng", p_explore: "Khám phá", p_explore_s: "Rừng xanh, vùng băng & hang động",
    p_fight: "Chiến đấu", p_fight_s: "Trùm PvE & trận PvP", p_survive: "Sinh tồn", p_survive_s: "Đói, khát & thiên nhiên hoang dã",
    w_eyebrow: "Chào mừng, nhà thám hiểm", w_title: "Bước vào WildRealms",
    w_p1: "Hành trình qua rừng rậm, núi non, hồ nước, hang động bí ẩn và những hầm ngục nguy hiểm. Thu thập tài nguyên, khám phá kho báu ẩn giấu và hé lộ bí mật của WildRealms.",
    w_p2: "Mỗi cái cây đều có thể chặt, mỗi tảng đá đều có thể khai thác, mỗi hang động đều chứa chìa khóa, cần gạt và rương báu. Tiến lên phương Bắc tới Vùng Băng Giá để tìm gỗ phong, đồng và vàng — nhưng hãy cẩn thận với bầy sói.",
    f_caves: "hang động & hầm ngục", f_classes: "lớp nhân vật", f_lands: "vùng đất: Rừng Hoang & Băng Giá", f_mounts: "thú cưỡi ngựa & sói",
    feat_eyebrow: "Điều gì đang chờ bạn", feat_title: "Xây dựng. Khám phá. Chiến đấu. Sinh tồn.",
    f1_t: "Khám phá thế giới mở sống động", f1_p: "Rừng rậm, núi non, hồ nước, lối vào hang phát sáng và hầm ngục sâu thẳm. Thu thập tài nguyên và tìm kho báu ẩn giấu.",
    f2_t: "Chiến đấu PvE & PvP hoành tráng", f2_p: "Chiến đấu với quái vật và trùm, thách đấu người chơi khác và tranh giành chiến lợi phẩm quý giá.",
    f3_t: "Xây dựng căn cứ của riêng bạn", f3_p: "Chế tạo vũ khí và giáp, xây nhà, nâng cấp phòng thủ và bảo vệ thành quả của bạn.",
    f4_t: "Sinh tồn một mình hoặc cùng gia đình", f4_p: "Chinh phục hầm ngục một mình hoặc lập gia đình với người chơi khác để cùng chiến đấu, xây dựng và khám phá.",
    f5_t: "Chọn lớp nhân vật", f5_p: "Chín lớp nhân vật, mỗi lớp có kỹ năng riêng. Phát triển phong cách chiến đấu của bạn.",
    f6_t: "Thuần hóa và cưỡi thú", f6_p: "Ném dây thòng lọng, thuần hóa ngựa và sói hoang dã, rồi cưỡi chúng khắp vương quốc.",
    f7_t: "Thử thách kỹ năng sinh tồn", f7_p: "Quản lý cơn đói và khát, săn thức ăn, uống nước giếng, thu thập tài nguyên và chuẩn bị cho hiểm nguy nơi hoang dã.",
    cl_eyebrow: "Chín con đường sức mạnh", cl_title: "Chọn lớp nhân vật",
    s1_t: "Hang động nâng cao", s1_p: "Hầm ngục rực sáng neon, có PvP, chiến lợi phẩm huyền thoại", s2_t: "Vùng Băng Giá", s2_p: "Tuyết trắng, cây phong, đồng và vàng",
    s3_t: "Cây Cổ Thụ", s3_p: "Chiếc vạc vàng nơi trái tim ngôi làng",
    m_eyebrow: "Thuần hóa hoang dã", m_title: "Ngựa, sói & nhiều hơn nữa",
    m_p: "Rón rén tiếp cận ngựa hoang, ném dây thòng lọng và biến nó thành của bạn. Thắng yên cho Sói Bóng Đêm, Sói Tuyết, Sói Rừng hay Sói Đỏ và lao vào trận chiến. Nhiều sinh vật kỳ ảo hơn đang đến.",
    h_eyebrow: "Chọn diện mạo", h_title: "Anh hùng của vương quốc", g_eyebrow: "Trực tiếp từ trò chơi", g_title: "Hình ảnh",
    t_eyebrow: "Xem trong chuyển động", t_title: "Trailer chính thức",
    r_eyebrow: "🎁 Phần thưởng ra mắt đặc biệt", r_title: "Theo dõi chúng tôi. Nhận ngẫu nhiên một trang bị Huyền Thoại.",
    r_p: "Theo dõi trang Facebook chính thức của WildRealms và nhận MỘT TRANG BỊ HUYỀN THOẠI NGẪU NHIÊN khi trò chơi ra mắt!",
    c_title: "Bạn đã sẵn sàng bước vào WildRealms chưa?", back_top: "Lên đầu trang ↑",
  },
};

let lang = (() => { try { return localStorage.getItem("wr_lang"); } catch (e) { return null; } })() || "en";

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = T[lang][el.dataset.i18n];
    if (v) el.textContent = v;
  });
  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
  document.getElementById("classGrid").innerHTML = CLASSES.map((c) => {
    const [n, r, d] = c[lang];
    return `<div class="class reveal"><img src="assets/classes/class_${c.id}.png" alt="${n} emblem"><div class="role">${r}</div><h3>${n}</h3><p>${d}</p></div>`;
  }).join("");
  document.getElementById("mountGrid").innerHTML = MOUNTS.map(([f, en, vi]) =>
    `<div class="mount"><img src="assets/mounts/${f}.png" alt="${en}"><span>${lang === "vi" ? vi : en}</span></div>`).join("");
  document.getElementById("gal").innerHTML = GALLERY.map(([f, en, vi], i) =>
    `<button data-i="${i}"><img src="assets/shots/${f}.jpg" alt="${lang === "vi" ? vi : en}"></button>`).join("");
  observe();
}

document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
  lang = b.dataset.lang;
  try { localStorage.setItem("wr_lang", lang); } catch (e) {}
  render();
}));

// avatars (static)
document.getElementById("avatarRow").innerHTML = Array.from({ length: 10 }, (_, i) =>
  `<img src="assets/avatars/avatar_${i + 1}.png" alt="Hero portrait ${i + 1}">`).join("");

// Facebook links
document.querySelectorAll(".fb-link").forEach((a) => (a.href = FB_URL));

// burger menu
const links = document.getElementById("links");
document.getElementById("burger").addEventListener("click", () => links.classList.toggle("open"));
links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

// lightbox
const lb = document.getElementById("lightbox");
document.getElementById("gal").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-i]"); if (!b) return;
  const [f, en, vi] = GALLERY[+b.dataset.i];
  lb.querySelector("img").src = `assets/shots/${f}.jpg`;
  lb.querySelector("p").textContent = lang === "vi" ? vi : en;
  lb.hidden = false;
});
lb.addEventListener("click", () => (lb.hidden = true));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

// reveal on scroll
let io;
function observe() {
  if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in")); return; }
  io = io || new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".feat, .class, .facts li, .strip figure, .mount, .gal button, .crest-frame, .reward-img").forEach((el) => {
    if (!el.classList.contains("in")) { el.classList.add("reveal"); io.observe(el); }
  });
}
render();
