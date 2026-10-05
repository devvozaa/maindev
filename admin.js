/* Pickup request admin view. Static demo storage; no backend/auth. */
(() => {
  const ORDER_KEY = "banshreeDemoPickupsV1";
  const COPY = {
    hi: {lang:"hi",title:"Banshree · Admin demo",demoTag:"DEMO · सुरक्षित login नहीं",languageLabel:"भाषा",back:"Request form पर लौटें",eyebrow:"मालिक का view · केवल prototype",pageTitle:"Pickup requests",intro:"इस browser/device से जमा किए गए pickup requests यहाँ दिखते हैं।",privacyTitle:"असली customer data न रखें",privacyText:"यह public demo page है, secure admin login नहीं। Requests इस browser/device के localStorage में रहती हैं; server/database पर नहीं जातीं और दूसरे device पर नहीं दिखतीं। Live उपयोग से पहले authenticated backend और owner-only access लागू करना होगा।",listEyebrow:"इस browser/device का अस्थायी data",ordersTitle:"Requests",newRequest:"+ नई pickup request",empty:"अभी कोई pickup request नहीं। Form में काल्पनिक details भरकर submit करें; फिर इसी tab में वापस आएँ।",backHome:"Banshree वेबसाइट पर वापस जाएँ",footerNote:"यह static demo admin view है; इसमें real backend login/database नहीं है।",created:"जमा समय",customer:"ग्राहक",phone:"फोन",area:"इलाका",address:"Pickup पता",map:"Maps location",openMap:"Google Maps में खोलें ↗",items:"जोड़ा गया सामान",quantity:"मात्रा",condition:"हालत",itemNote:"सामान की जानकारी",pickupTime:"पसंदीदा pickup",note:"अतिरिक्त जानकारी",status:"स्थिति",remove:"Pickup request हटाएँ",deleteConfirm:"क्या इस browser/device से यह pickup request हटानी है?",statusUpdated:"स्थिति इस tab में अपडेट हुई",emptyValue:"नहीं दिया",categoryNames:{saree:"साड़ी",clothes:"पैंट / शर्ट / T-shirt",kurti:"कुर्ती / अन्य कपड़े",mobile:"पुराना मोबाइल",other:"अन्य पुरानी चीज़"},conditionNames:{good:"अच्छी",fair:"ठीक-ठाक",worn:"पुरानी / खराब"},timeNames:{any:"समय पर बात कर लेंगे",morning:"सुबह",afternoon:"दोपहर",evening:"शाम"},statusNames:{new:"नई",contacted:"संपर्क किया",scheduled:"Pickup तय",completed:"पूरी हुई"}},
    mr: {lang:"mr",title:"Banshree · Admin demo",demoTag:"DEMO · सुरक्षित login नाही",languageLabel:"भाषा",back:"Request form कडे परत",eyebrow:"मालकाचे view · फक्त prototype",pageTitle:"Pickup requests",intro:"याच browser tab मधून जमा केलेल्या demo विनंत्या येथे दिसतात.",privacyTitle:"खऱ्या ग्राहकाची माहिती ठेवू नका",privacyText:"हे सार्वजनिक demo पान आहे, secure admin login नाही. Requests फक्त याच browser tab च्या sessionStorage मध्ये असतात; server वर जात नाहीत आणि दुसऱ्या device वर दिसत नाहीत. Live वापरापूर्वी authenticated backend आणि owner-only प्रवेश हवा.",listEyebrow:"फक्त या tab मधील तात्पुरता data",ordersTitle:"Requests",newRequest:"+ नवीन demo request",empty:"अजून demo विनंती नाही. Form मध्ये काल्पनिक तपशील भरा; नंतर याच tab मध्ये परत या.",backHome:"Banshree वेबसाइटवर परत",footerNote:"या view मध्ये खऱ्या pickup नोंदी किंवा login नाही.",created:"जमा वेळ",customer:"ग्राहक",phone:"फोन",area:"परिसर",address:"Pickup पत्ता",map:"Maps location",openMap:"Google Maps मध्ये उघडा ↗",items:"जोडलेल्या वस्तू",quantity:"प्रमाण",condition:"स्थिती",itemNote:"वस्तूची नोंद",pickupTime:"पसंतीची pickup वेळ",note:"अतिरिक्त माहिती",status:"स्थिती",remove:"Demo विनंती काढा",deleteConfirm:"ही demo विनंती या tab मधून काढायची का?",statusUpdated:"या tab मध्ये स्थिती बदलली",emptyValue:"दिलेले नाही",categoryNames:{saree:"साडी",clothes:"पँट / शर्ट / T-shirt",kurti:"कुर्ती / इतर कपडे",mobile:"जुना मोबाइल",other:"इतर जुनी वस्तू"},conditionNames:{good:"चांगली",fair:"ठीक",worn:"जुनी / खराब"},timeNames:{any:"वेळ बोलून ठरवू",morning:"सकाळ",afternoon:"दुपार",evening:"संध्याकाळ"},statusNames:{new:"नवीन",contacted:"संपर्क केला",scheduled:"Pickup ठरला",completed:"पूर्ण"}},
    gu: {lang:"gu",title:"Banshree · Admin demo",demoTag:"DEMO · સુરક્ષિત login નથી",languageLabel:"ભાષા",back:"Request form પર પાછા જાઓ",eyebrow:"માલિકનું view · ફક્ત prototype",pageTitle:"Pickup requests",intro:"આ જ browser tabમાં દાખલ કરેલી demo વિનંતીઓ અહીં દેખાય છે.",privacyTitle:"ગ્રાહકની સાચી માહિતી ન રાખો",privacyText:"આ public demo page છે, secure admin login નથી. Requests ફક્ત આ browser tabના sessionStorageમાં રહે છે; server પર મોકલાતી નથી અને બીજા deviceમાં દેખાતી નથી. Live ઉપયોગ પહેલાં authenticated backend અને owner-only access જરૂરી છે.",listEyebrow:"ફક્ત આ tabનો અસ્થાયી data",ordersTitle:"Requests",newRequest:"+ નવી demo request",empty:"હજુ demo request નથી. Formમાં કાલ્પનિક માહિતી ભરો અને પછી આ જ tabમાં પાછા આવો.",backHome:"Banshree વેબસાઇટ પર પાછા જાઓ",footerNote:"આ viewમાં વાસ્તવિક pickup record કે login નથી.",created:"મોકલવાનો સમય",customer:"ગ્રાહક",phone:"ફોન",area:"વિસ્તાર",address:"Pickup સરનામું",map:"Maps location",openMap:"Google Mapsમાં ખોલો ↗",items:"ઉમેરેલી વસ્તુઓ",quantity:"જથ્થો",condition:"સ્થિતિ",itemNote:"વસ્તુ વિશે નોંધ",pickupTime:"પસંદગીનો pickup સમય",note:"વધારાની માહિતી",status:"સ્થિતિ",remove:"Demo request દૂર કરો",deleteConfirm:"આ tabમાંથી આ demo request દૂર કરવી છે?",statusUpdated:"આ tabમાં સ્થિતિ બદલાઈ",emptyValue:"આપ્યું નથી",categoryNames:{saree:"સાડી",clothes:"પેન્ટ / શર્ટ / T-shirt",kurti:"કુર્તી / અન્ય કપડાં",mobile:"જૂનો મોબાઇલ",other:"અન્ય જૂની વસ્તુ"},conditionNames:{good:"સારી",fair:"ઠીક",worn:"જૂની / ખરાબ"},timeNames:{any:"સમય વિશે વાત કરીશું",morning:"સવાર",afternoon:"બપોર",evening:"સાંજ"},statusNames:{new:"નવી",contacted:"સંપર્ક કર્યો",scheduled:"Pickup નક્કી",completed:"પૂર્ણ"}},
    bn: {lang:"bn",title:"Banshree · Admin demo",demoTag:"DEMO · নিরাপদ login নয়",languageLabel:"ভাষা",back:"Request form-এ ফিরুন",eyebrow:"মালিকের view · শুধু prototype",pageTitle:"Pickup requests",intro:"এই একই browser tab থেকে জমা দেওয়া demo অনুরোধ এখানে দেখা যাবে।",privacyTitle:"আসল customer তথ্য রাখবেন না",privacyText:"এটি public demo page, secure admin login নয়। Requests শুধু এই browser tab-এর sessionStorage-এ থাকে; server-এ যায় না এবং অন্য device-এ দেখা যায় না। Live ব্যবহারের আগে authenticated backend ও owner-only access লাগবে।",listEyebrow:"শুধু এই tab-এর অস্থায়ী data",ordersTitle:"Requests",newRequest:"+ নতুন demo request",empty:"এখনও demo request নেই। Form-এ কাল্পনিক তথ্য দিন, তারপর এই tab-এ ফিরে আসুন।",backHome:"Banshree website-এ ফিরুন",footerNote:"এই view-তে real pickup record বা login নেই।",created:"জমার সময়",customer:"গ্রাহক",phone:"ফোন",area:"এলাকা",address:"Pickup ঠিকানা",map:"Maps location",openMap:"Google Maps-এ খুলুন ↗",items:"যোগ করা জিনিস",quantity:"পরিমাণ",condition:"অবস্থা",itemNote:"জিনিসের নোট",pickupTime:"পছন্দের pickup সময়",note:"অতিরিক্ত তথ্য",status:"অবস্থা",remove:"Demo request সরান",deleteConfirm:"এই tab থেকে এই demo request সরাবেন?",statusUpdated:"এই tab-এ অবস্থা আপডেট হয়েছে",emptyValue:"দেওয়া হয়নি",categoryNames:{saree:"শাড়ি",clothes:"প্যান্ট / শার্ট / T-shirt",kurti:"কুর্তি / অন্য পোশাক",mobile:"পুরোনো মোবাইল",other:"অন্য পুরোনো জিনিস"},conditionNames:{good:"ভালো",fair:"মোটামুটি",worn:"পুরোনো / নষ্ট"},timeNames:{any:"সময় নিয়ে কথা হবে",morning:"সকাল",afternoon:"দুপুর",evening:"সন্ধ্যা"},statusNames:{new:"নতুন",contacted:"যোগাযোগ হয়েছে",scheduled:"Pickup ঠিক হয়েছে",completed:"সম্পূর্ণ"}},
    en: {lang:"en",title:"Banshree · Admin demo",demoTag:"DEMO · no secure login",languageLabel:"Language",back:"Back to the request form",eyebrow:"Owner view · prototype only",pageTitle:"Pickup requests",intro:"Demo requests submitted from this same browser tab appear here.",privacyTitle:"Do not keep real customer details here",privacyText:"This is a public demo page, not a secure admin login. Requests stay only in this browser tab's sessionStorage; they are not sent to a server or visible from another device. An authenticated backend and owner-only access are needed before live use.",listEyebrow:"Temporary data from this tab only",ordersTitle:"Requests",newRequest:"+ New demo request",empty:"No demo requests yet. Enter fictional details in the form and return here in this same tab.",backHome:"Return to the Banshree website",footerNote:"This view has no real pickup records or login.",created:"Submitted",customer:"Customer",phone:"Phone",area:"Area",address:"Pickup address",map:"Maps location",openMap:"Open in Google Maps ↗",items:"Added items",quantity:"Quantity",condition:"Condition",itemNote:"Item note",pickupTime:"Preferred pickup",note:"Extra details",status:"Status",remove:"Remove demo request",deleteConfirm:"Remove this demo request from this tab?",statusUpdated:"Status updated in this tab",emptyValue:"Not provided",categoryNames:{saree:"Saree",clothes:"Pants / shirt / T-shirt",kurti:"Kurti / other clothes",mobile:"Old mobile",other:"Other old item"},conditionNames:{good:"Good",fair:"Fair",worn:"Used / damaged"},timeNames:{any:"Discuss a time",morning:"Morning",afternoon:"Afternoon",evening:"Evening"},statusNames:{new:"New",contacted:"Contacted",scheduled:"Pickup scheduled",completed:"Completed"}}
  };
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  let language = "hi";
  let orders = [];

  function safeText(value) { return String(value == null || value === "" ? COPY[language].emptyValue : value); }
  function node(tag, className, value) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (value !== undefined) element.textContent = safeText(value);
    return element;
  }
  function loadOrders() {
    try {
      const raw = localStorage.getItem(ORDER_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item === "object") : [];
    } catch (_) { return []; }
  }
  function saveOrders() {
    try { localStorage.setItem(ORDER_KEY, JSON.stringify(orders)); return true; }
    catch (_) { return false; }
  }
  function safeMapUrl(order) {
    try {
      const url = new URL(order.mapUrl);
      if (url.protocol === "https:" && (url.hostname === "maps.app.goo.gl" || url.hostname === "maps.google.com" || url.hostname === "google.com" || url.hostname.endsWith(".google.com"))) return url.href;
    } catch (_) { /* use a generated Google Maps search */ }
    const query = [order.address, order.area, "Mumbai"].filter(Boolean).join(", ");
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }
  function formatDate(value) {
    try { return new Intl.DateTimeFormat(language, {dateStyle:"medium",timeStyle:"short"}).format(new Date(value)); }
    catch (_) { return value || ""; }
  }
  function addField(container, label, value, full = false) {
    const wrap = node("div", full ? "order-field order-field-full" : "order-field");
    const term = node("dt", "", label);
    const description = node("dd", "", value);
    wrap.append(term, description);
    container.append(wrap);
    return description;
  }
  function renderOrder(order) {
    const copy = COPY[language];
    const card = node("article", "order-card");
    const head = node("div", "order-card-head");
    const ref = node("div", "order-reference");
    ref.append(node("strong", "", order.id), node("span", "", `${copy.created}: ${formatDate(order.createdAt)}`));
    const statusControl = node("div", "order-status-control");
    const statusLabel = node("label", "", copy.status);
    const statusSelect = node("select", "");
    statusSelect.setAttribute("aria-label", `${copy.status}: ${order.id}`);
    Object.entries(copy.statusNames).forEach(([key, label]) => {
      const option = node("option", "", label);
      option.value = key;
      statusSelect.append(option);
    });
    statusSelect.value = copy.statusNames[order.status] ? order.status : "new";
    statusSelect.addEventListener("change", () => {
      const found = orders.find((entry) => entry.id === order.id);
      if (found) { found.status = statusSelect.value; saveOrders(); }
      live.textContent = copy.statusUpdated;
    });
    statusControl.append(statusLabel, statusSelect);
    head.append(ref, statusControl);
    const details = node("dl", "order-data");
    addField(details, copy.customer, order.name);
    addField(details, copy.phone, order.phone);
    addField(details, copy.area, order.area);
    addField(details, copy.address, order.address, true);
    const mapField = node("div", "order-field order-field-full");
    mapField.append(node("dt", "", copy.map));
    const mapLink = node("a", "order-map-link", copy.openMap);
    mapLink.href = safeMapUrl(order);
    mapLink.target = "_blank";
    mapLink.rel = "noopener noreferrer";
    mapField.append(mapLink);
    details.append(mapField);
    const itemField = node("div", "order-field order-field-full");
    itemField.append(node("dt", "", copy.items));
    const itemList = node("ul", "order-items");
    (Array.isArray(order.items) ? order.items : []).forEach((item) => {
      const li = node("li", "");
      const category = node("span", "", copy.categoryNames[item.category] || item.category);
      const condition = copy.conditionNames[item.condition] || item.condition;
      const amount = node("span", "", `${copy.quantity}: ${item.quantity} · ${copy.condition}: ${condition}`);
      li.append(category, amount);
      itemList.append(li);
      if (item.note) {
        const noteRow = node("li", "");
        noteRow.append(node("span", "", copy.itemNote), node("span", "", item.note));
        itemList.append(noteRow);
      }
    });
    itemField.append(itemList);
    details.append(itemField);
    const requested = [order.date, copy.timeNames[order.time] || ""].filter(Boolean).join(" · ") || copy.timeNames.any;
    addField(details, copy.pickupTime, requested);
    if (order.note) addField(details, copy.note, order.note, true);
    const actions = node("div", "order-card-actions");
    const remove = node("button", "delete-demo-order", copy.remove);
    remove.type = "button";
    remove.addEventListener("click", () => {
      if (!window.confirm(copy.deleteConfirm)) return;
      orders = orders.filter((entry) => entry.id !== order.id);
      saveOrders();
      renderOrders();
    });
    actions.append(remove);
    card.append(head, details, actions);
    return card;
  }
  const live = $("#admin-status");
  function renderOrders() {
    const list = $("#order-list");
    if (!list) return;
    orders = loadOrders();
    list.replaceChildren();
    orders.forEach((order) => list.append(renderOrder(order)));
    $("#orders-count").textContent = String(orders.length);
    $("#empty-state").hidden = orders.length > 0;
  }
  function setLanguage(next) {
    language = COPY[next] ? next : "hi";
    const copy = COPY[language];
    document.documentElement.lang = copy.lang;
    document.title = copy.title;
    $$('[data-admin-i18n]').forEach((element) => {
      const value = copy[element.dataset.adminI18n];
      if (typeof value === "string") element.textContent = value;
    });
    const select = $("#admin-language");
    if (select) { select.setAttribute("aria-label", copy.languageLabel); select.value = language; }
    renderOrders();
  }
  window.addEventListener("storage", (event) => {
    if (event.key === ORDER_KEY) {
      orders = loadOrders();
      setLanguage(language);
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      orders = loadOrders();
      renderOrders();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    try { language = localStorage.getItem("banshree-language") || "hi"; } catch (_) { language = "hi"; }
    setLanguage(language);
    $("#admin-language").addEventListener("change", (event) => {
      setLanguage(event.target.value);
      try { localStorage.setItem("banshree-language", language); } catch (_) { /* preference is optional */ }
    });
  });
})();
