/* Pickup-request service: demo orders are shared across tabs/windows on this browser/device. */
(() => {
  const ORDER_KEY = "banshreeDemoPickupsV1";
  const TEXT = {
    hi: {
      requestEyebrow: "वस्तुएँ जोड़ें · pickup पूछें", requestTitle: "क्या लेना है?\nPickup कहाँ चाहिए?",
      requestLead: "एक request में कई तरह के कपड़े या पुरानी चीज़ें जोड़ें। खरीदी, दाम और pickup की उपलब्धता बाद में पुष्टि होगी।",
      demoWarning: "केवल demo: अपना असली नाम, फोन या घर का पता न डालें। विवरण सिर्फ़ इसी browser tab में अस्थायी रूप से रहता है—कहीं भेजा या किसी दूसरे device से साझा नहीं होता।",
      stepItems: "01 · सामान", stepContact: "02 · संपर्क और pickup", itemType: "वस्तु का प्रकार", quantity: "कितनी वस्तुएँ?", condition: "हालत", itemNote: "इस वस्तु के बारे में note (वैकल्पिक)",
      itemNotePlaceholder: "उदाहरण: लगभग 5 साड़ियाँ", addItem: "Pickup request में जोड़ें", selectedItems: "जोड़े गए सामान", emptyItems: "अभी कोई सामान नहीं जोड़ा।", remove: "हटाएँ", itemCount: "वस्तुएँ", name: "आपका नाम", namePlaceholder: "Demo नाम", phone: "फोन नंबर", phonePlaceholder: "असली नंबर न डालें", area: "इलाका / नज़दीकी जगह", areaPlaceholder: "उदाहरण: अंधेरी (demo)", address: "Pickup का पूरा पता", addressPlaceholder: "केवल demo पता", mapUrl: "Google Maps link (वैकल्पिक)", mapPlaceholder: "https://maps.app.goo.gl/…", pickupDate: "पसंदीदा तारीख (वैकल्पिक)", pickupTime: "पसंदीदा समय", timeAny: "समय पर बात कर लेंगे", timeMorning: "सुबह", timeAfternoon: "दोपहर", timeEvening: "शाम", customerNote: "अतिरिक्त जानकारी (वैकल्पिक)", customerNotePlaceholder: "Gate या pickup के बारे में demo note", privacyAgree: "मैं समझता/समझती हूँ कि यह demo है और केवल काल्पनिक जानकारी भरूँगा/भरूँगी।",
      submit: "Pickup request सुरक्षित करें", submitHint: "यह demo request server पर नहीं भेजता।", addFirst: "पहले कम-से-कम एक वस्तु जोड़ें।", success: "Pickup request इस browser/device में सुरक्षित हुई। Admin view इसी browser/device पर इसे देख सकता है।", adminView: "इस tab का Admin pickup requests देखें", storageError: "इस browser/device में request data रखना संभव नहीं हुआ। कोई जानकारी भेजी नहीं गई।", invalidMap: "Google Maps link https:// से शुरू होना चाहिए और Google Maps का होना चाहिए।", categoryNames: {saree:"साड़ी", clothes:"पैंट / शर्ट / T-shirt", kurti:"कुर्ती / अन्य कपड़े", mobile:"पुराना मोबाइल", other:"अन्य पुरानी चीज़"}, conditionNames: {good:"अच्छी", fair:"ठीक-ठाक", worn:"पुरानी / खराब"},
      altSaree: "पारंपरिक सुनहरे कढ़ाई वाले बैंगनी और पीले रंग की मुड़ी हुई रेशमी साड़ी; Pexels की प्रतिनिधि फोटो"
    },
    mr: {
      requestEyebrow: "वस्तू जोडा · pickup विचारा", requestTitle: "काय घ्यायचे आहे?\nPickup कुठे हवा?", requestLead: "एका विनंतीत अनेक प्रकारचे कपडे किंवा जुन्या वस्तू जोडा. खरेदी, किंमत आणि pickup उपलब्धता नंतर निश्चित होईल.",
      demoWarning: "फक्त demo: तुमचे खरे नाव, फोन किंवा घरचा पत्ता लिहू नका. माहिती फक्त याच browser tab मध्ये तात्पुरती राहते—कुठेही पाठवली किंवा दुसऱ्या device सोबत share होत नाही.",
      stepItems: "01 · वस्तू", stepContact: "02 · संपर्क आणि pickup", itemType: "वस्तूचा प्रकार", quantity: "किती वस्तू?", condition: "स्थिती", itemNote: "या वस्तूबद्दल नोंद (ऐच्छिक)", itemNotePlaceholder: "उदा. सुमारे 5 साड्या", addItem: "विनंतीत जोडा", selectedItems: "जोडलेल्या वस्तू", emptyItems: "अजून कोणतीही वस्तू जोडलेली नाही.", remove: "काढा", itemCount: "वस्तू", name: "तुमचे नाव", namePlaceholder: "Demo नाव", phone: "फोन क्रमांक", phonePlaceholder: "खरा क्रमांक लिहू नका", area: "परिसर / जवळची जागा", areaPlaceholder: "उदा. अंधेरी (demo)", address: "Pickup चा पूर्ण पत्ता", addressPlaceholder: "फक्त demo पत्ता", mapUrl: "Google Maps link (ऐच्छिक)", mapPlaceholder: "https://maps.app.goo.gl/…", pickupDate: "पसंतीची तारीख (ऐच्छिक)", pickupTime: "पसंतीची वेळ", timeAny: "वेळ बोलून ठरवू", timeMorning: "सकाळ", timeAfternoon: "दुपार", timeEvening: "संध्याकाळ", customerNote: "अतिरिक्त माहिती (ऐच्छिक)", customerNotePlaceholder: "Gate किंवा pickup बद्दल demo नोंद", privacyAgree: "हा demo आहे आणि मी फक्त काल्पनिक माहिती भरेन, हे मला समजले आहे.", submit: "Demo विनंती जतन करा", submitHint: "ही खरी विनंती पाठवत नाही.", addFirst: "आधी किमान एक वस्तू जोडा.", success: "Demo विनंती फक्त याच tab मध्ये ठेवली—पाठवली नाही.", adminView: "या tab मधील Admin demo पहा", storageError: "या browser tab मध्ये demo माहिती ठेवता आली नाही. काहीही पाठवले नाही.", invalidMap: "Google Maps link https:// ने सुरू होऊन Google Maps चाच असावा.", categoryNames: {saree:"साडी", clothes:"पँट / शर्ट / T-shirt", kurti:"कुर्ती / इतर कपडे", mobile:"जुना मोबाइल", other:"इतर जुनी वस्तू"}, conditionNames: {good:"चांगली", fair:"ठीक", worn:"जुनी / खराब"}, altSaree: "पारंपरिक सोनेरी नक्षीची जांभळी व पिवळी दुमडलेली रेशमी साडी; Pexels वरील उदाहरण फोटो"
    },
    gu: {
      requestEyebrow: "વસ્તુઓ ઉમેરો · pickup પૂછો", requestTitle: "શું આપવાનું છે?\nPickup ક્યાં જોઈએ?", requestLead: "એક વિનંતીમાં અનેક પ્રકારનાં કપડાં અથવા જૂની વસ્તુઓ ઉમેરો. ખરીદી, ભાવ અને pickupની ઉપલબ્ધતા પછીથી પુષ્ટિ થશે.",
      demoWarning: "માત્ર demo: તમારું સાચું નામ, ફોન કે ઘરનું સરનામું ન લખો. વિગતો ફક્ત આ browser tabમાં અસ્થાયી રીતે રહે છે—ક્યાંય મોકલાતી નથી કે બીજા device સાથે share થતી નથી.",
      stepItems: "01 · વસ્તુઓ", stepContact: "02 · સંપર્ક અને pickup", itemType: "વસ્તુનો પ્રકાર", quantity: "કેટલી વસ્તુઓ?", condition: "સ્થિતિ", itemNote: "વસ્તુ વિશે નોંધ (વૈકલ્પિક)", itemNotePlaceholder: "ઉદાહરણ: લગભગ 5 સાડીઓ", addItem: "વિનંતીમાં ઉમેરો", selectedItems: "ઉમેરેલી વસ્તુઓ", emptyItems: "હજુ કોઈ વસ્તુ ઉમેરાઈ નથી.", remove: "દૂર કરો", itemCount: "વસ્તુઓ", name: "તમારું નામ", namePlaceholder: "Demo નામ", phone: "ફોન નંબર", phonePlaceholder: "સાચો નંબર ન લખો", area: "વિસ્તાર / નજીકનું સ્થળ", areaPlaceholder: "ઉદાહરણ: અંધેરી (demo)", address: "Pickupનું પૂરું સરનામું", addressPlaceholder: "ફક્ત demo સરનામું", mapUrl: "Google Maps link (વૈકલ્પિક)", mapPlaceholder: "https://maps.app.goo.gl/…", pickupDate: "પસંદગીની તારીખ (વૈકલ્પિક)", pickupTime: "પસંદગીનો સમય", timeAny: "સમય વિશે વાત કરીશું", timeMorning: "સવાર", timeAfternoon: "બપોર", timeEvening: "સાંજ", customerNote: "વધારાની માહિતી (વૈકલ્પિક)", customerNotePlaceholder: "Gate અથવા pickup વિશે demo નોંધ", privacyAgree: "મને સમજાયું કે આ demo છે અને હું ફક્ત કાલ્પનિક માહિતી આપીશ.", submit: "Demo વિનંતી સાચવો", submitHint: "આ વાસ્તવિક વિનંતી મોકલતું નથી.", addFirst: "પહેલાં ઓછામાં ઓછી એક વસ્તુ ઉમેરો.", success: "Demo વિનંતી ફક્ત આ tabમાં રાખી—મોકલી નથી.", adminView: "આ tabનું Admin demo જુઓ", storageError: "આ browser tabમાં demo માહિતી રાખી શકાઈ નહીં. કંઈ મોકલાયું નથી.", invalidMap: "Google Maps link https://થી શરૂ થવી જોઈએ અને Google Mapsની જ હોવી જોઈએ.", categoryNames: {saree:"સાડી", clothes:"પેન્ટ / શર્ટ / T-shirt", kurti:"કુર્તી / અન્ય કપડાં", mobile:"જૂનો મોબાઇલ", other:"અન્ય જૂની વસ્તુ"}, conditionNames: {good:"સારી", fair:"ઠીક", worn:"જૂની / ખરાબ"}, altSaree: "પરંપરાગત સોનેરી કઢાઈવાળી જાંબલી અને પીળી વળેલી રેશમી સાડી; Pexelsની ઉદાહરણ તસવીર"
    },
    bn: {
      requestEyebrow: "জিনিস যোগ করুন · pickup জানতে চান", requestTitle: "কী দিতে চান?\nPickup কোথায় লাগবে?", requestLead: "একটি অনুরোধে একাধিক ধরনের পোশাক বা পুরোনো জিনিস যোগ করুন। কেনা, দাম ও pickup-এর availability পরে নিশ্চিত হবে।",
      demoWarning: "শুধু demo: নিজের আসল নাম, ফোন বা বাড়ির ঠিকানা দেবেন না। তথ্য শুধু এই browser tab-এ অস্থায়ীভাবে থাকে—কোথাও পাঠানো হয় না বা অন্য device-এর সঙ্গে ভাগ হয় না।",
      stepItems: "01 · জিনিস", stepContact: "02 · যোগাযোগ ও pickup", itemType: "জিনিসের ধরন", quantity: "কতগুলি?", condition: "অবস্থা", itemNote: "জিনিস সম্পর্কে নোট (ঐচ্ছিক)", itemNotePlaceholder: "উদাহরণ: প্রায় 5টি শাড়ি", addItem: "অনুরোধে যোগ করুন", selectedItems: "যোগ করা জিনিস", emptyItems: "এখনও কিছু যোগ করা হয়নি।", remove: "সরান", itemCount: "জিনিস", name: "আপনার নাম", namePlaceholder: "Demo নাম", phone: "ফোন নম্বর", phonePlaceholder: "আসল নম্বর দেবেন না", area: "এলাকা / কাছের জায়গা", areaPlaceholder: "উদাহরণ: আন্ধেরি (demo)", address: "Pickup-এর সম্পূর্ণ ঠিকানা", addressPlaceholder: "শুধু demo ঠিকানা", mapUrl: "Google Maps link (ঐচ্ছিক)", mapPlaceholder: "https://maps.app.goo.gl/…", pickupDate: "পছন্দের তারিখ (ঐচ্ছিক)", pickupTime: "পছন্দের সময়", timeAny: "সময় নিয়ে কথা হবে", timeMorning: "সকাল", timeAfternoon: "দুপুর", timeEvening: "সন্ধ্যা", customerNote: "অতিরিক্ত তথ্য (ঐচ্ছিক)", customerNotePlaceholder: "Gate বা pickup নিয়ে demo নোট", privacyAgree: "আমি বুঝেছি এটি demo এবং আমি শুধু কাল্পনিক তথ্য দেব।", submit: "Demo অনুরোধ সংরক্ষণ করুন", submitHint: "এটি আসল অনুরোধ পাঠায় না।", addFirst: "আগে অন্তত একটি জিনিস যোগ করুন।", success: "Demo অনুরোধ শুধু এই tab-এ রাখা হয়েছে—পাঠানো হয়নি।", adminView: "এই tab-এর Admin demo দেখুন", storageError: "এই browser tab-এ demo তথ্য রাখা যায়নি। কিছুই পাঠানো হয়নি।", invalidMap: "Google Maps link অবশ্যই https:// দিয়ে শুরু হবে এবং Google Maps-এর হতে হবে।", categoryNames: {saree:"শাড়ি", clothes:"প্যান্ট / শার্ট / T-shirt", kurti:"কুর্তি / অন্য পোশাক", mobile:"পুরোনো মোবাইল", other:"অন্যান্য পুরোনো জিনিস"}, conditionNames: {good:"ভালো", fair:"মোটামুটি", worn:"পুরোনো / খারাপ"}, altSaree: "ঐতিহ্যবাহী সোনালি নকশার বেগুনি ও হলুদ ভাঁজ করা সিল্ক শাড়ি; Pexels-এর প্রতিনিধি ছবি"
    },
    en: {
      requestEyebrow: "Add items · ask about pickup", requestTitle: "What would you like us to take?\nWhere should pickup be?", requestLead: "Add several kinds of clothes or old items to one request. Purchase, price and pickup availability are confirmed later.",
      demoWarning: "Demo only: do not enter your real name, phone or home address. Details stay temporarily in this browser tab only—they are not sent anywhere or shared with another device.",
      stepItems: "01 · Items", stepContact: "02 · Contact & pickup", itemType: "Item type", quantity: "How many?", condition: "Condition", itemNote: "Note about this item (optional)", itemNotePlaceholder: "For example: about 5 sarees", addItem: "Add to request", selectedItems: "Added items", emptyItems: "No items added yet.", remove: "Remove", itemCount: "items", name: "Your name", namePlaceholder: "Demo name", phone: "Phone number", phonePlaceholder: "Do not enter a real number", area: "Area / nearby landmark", areaPlaceholder: "For example: Andheri (demo)", address: "Full pickup address", addressPlaceholder: "Demo address only", mapUrl: "Google Maps link (optional)", mapPlaceholder: "https://maps.app.goo.gl/…", pickupDate: "Preferred date (optional)", pickupTime: "Preferred time", timeAny: "Discuss a time", timeMorning: "Morning", timeAfternoon: "Afternoon", timeEvening: "Evening", customerNote: "Extra details (optional)", customerNotePlaceholder: "Demo note about the gate or pickup", privacyAgree: "I understand this is a demo and will enter fictional details only.", submit: "Save demo request", submitHint: "This does not send a real request.", addFirst: "Add at least one item first.", success: "Demo request saved in this tab only—it was not sent.", adminView: "Open this tab's Admin demo", storageError: "Demo data could not be kept in this browser tab. Nothing was sent.", invalidMap: "Google Maps links must start with https:// and point to Google Maps.", categoryNames: {saree:"Saree", clothes:"Pants / shirt / T-shirt", kurti:"Kurti / other clothes", mobile:"Old mobile", other:"Other old item"}, conditionNames: {good:"Good", fair:"Fair", worn:"Used / damaged"}, altSaree: "Folded purple and yellow silk sarees with traditional gold embroidery; representative Pexels photo"
    }
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const PHOTO_CREDIT = {
    hi: "फोटो: Pexels पर Kizhakke Vdu की प्रतिनिधि saree फोटो; अन्य textile दृश्य भी प्रतिनिधि उदाहरण हैं, Banshree की shop/team photos नहीं।",
    mr: "फोटो: Pexels वरील Kizhakke Vdu यांचा प्रतिनिधी saree फोटो; इतर textile दृश्यही उदाहरण आहेत, Banshree च्या दुकान/टीमचे फोटो नाहीत.",
    gu: "ફોટો: Pexels પર Kizhakke Vduનો પ્રતિનિધિ saree ફોટો; અન્ય textile દૃશ્યો પણ ઉદાહરણ છે, Banshreeની દુકાન/ટીમના ફોટા નથી.",
    bn: "ছবি: Pexels-এ Kizhakke Vdu-এর প্রতিনিধি saree ছবি; অন্য textile দৃশ্যও উদাহরণ, Banshree-এর দোকান/দলের ছবি নয়।",
    en: "Photo: representative saree image by Kizhakke Vdu on Pexels; other textile scenes are examples, not photos of Banshree's shop or team."
  };
  const categoryValues = ["saree", "clothes", "kurti", "mobile", "other"];
  const conditionValues = ["good", "fair", "worn"];
  const timeValues = ["any", "morning", "afternoon", "evening"];
  let draftItems = [];

  function currentLanguage() {
    try { return TEXT[localStorage.getItem("banshree-language")] ? localStorage.getItem("banshree-language") : "hi"; }
    catch (_) { return "hi"; }
  }

  function text() { return TEXT[currentLanguage()]; }

  function fillOptions(select, values, labels, keepValue = true) {
    const previous = keepValue ? select.value : "";
    select.replaceChildren();
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = labels[value];
      select.append(option);
    });
    if (values.includes(previous)) select.value = previous;
  }

  function updateCopy() {
    const copy = text();
    $$('[data-flow-i18n]').forEach((element) => {
      const value = copy[element.dataset.flowI18n];
      if (typeof value === "string") {
        const label = ["stepItems", "stepContact"].includes(element.dataset.flowI18n) ? value.replace(/^0[12]\s*[·.]\s*/, "") : value;
        element.textContent = label;
      }
    });
    $$('[data-flow-placeholder]').forEach((element) => {
      element.placeholder = copy[element.dataset.flowPlaceholder] || "";
    });
    $$('[data-flow-credit]').forEach((element) => {
      element.textContent = PHOTO_CREDIT[currentLanguage()];
    });
    const category = $("#item-category");
    const condition = $("#item-condition");
    const time = $("#pickup-time");
    if (category) fillOptions(category, categoryValues, copy.categoryNames);
    if (condition) fillOptions(condition, conditionValues, copy.conditionNames);
    if (time) fillOptions(time, timeValues, {any: copy.timeAny, morning: copy.timeMorning, afternoon: copy.timeAfternoon, evening: copy.timeEvening});
    const sareeAlt = $("#saree-hero");
    if (sareeAlt) sareeAlt.alt = copy.altSaree;
    renderDraft();
  }

  function renderDraft() {
    const list = $("#draft-items");
    if (!list) return;
    const copy = text();
    list.replaceChildren();
    if (!draftItems.length) {
      const empty = document.createElement("p");
      empty.className = "empty-items";
      empty.textContent = copy.emptyItems;
      list.append(empty);
    } else {
      draftItems.forEach((item) => {
        const row = document.createElement("article");
        row.className = "request-item-row";
        const title = document.createElement("strong");
        title.textContent = copy.categoryNames[item.category];
        const meta = document.createElement("span");
        meta.className = "request-item-meta";
        meta.textContent = `${item.quantity} ${copy.itemCount} · ${copy.conditionNames[item.condition]}`;
        row.append(title, meta);
        if (item.note) {
          const note = document.createElement("p");
          note.textContent = item.note;
          row.append(note);
        }
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "remove-item";
        remove.textContent = copy.remove;
        remove.setAttribute("aria-label", `${copy.remove}: ${copy.categoryNames[item.category]}`);
        remove.addEventListener("click", () => {
          draftItems = draftItems.filter((entry) => entry.id !== item.id);
          renderDraft();
        });
        row.append(remove);
        list.append(row);
      });
    }
    const count = $("#draft-count");
    if (count) count.textContent = `${draftItems.length} ${copy.itemCount}`;
    const submit = $("#request-submit");
    if (submit) submit.disabled = draftItems.length === 0;
  }

  function isGoogleMapsUrl(value) {
    if (!value) return true;
    try {
      const url = new URL(value);
      return url.protocol === "https:" && (url.hostname === "maps.app.goo.gl" || url.hostname === "maps.google.com" || url.hostname === "google.com" || url.hostname.endsWith(".google.com"));
    } catch (_) { return false; }
  }

  window.BanshreePickupService = { key: ORDER_KEY, storage: "localStorage" };

    document.addEventListener("DOMContentLoaded", () => {
    const itemForm = $("#item-builder");
    const requestForm = $("#pickup-form");
    if (!itemForm || !requestForm) return;
    updateCopy();
    const date = $("#pickup-date");
    const now = new Date();
    if (date) {
      date.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    }
    document.addEventListener("change", (event) => {
      if (event.target && event.target.id === "language-select") updateCopy();
    });
    itemForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!itemForm.reportValidity()) return;
      const data = new FormData(itemForm);
      draftItems.push({
        id: `I-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        category: String(data.get("category")), quantity: Number(data.get("quantity")),
        condition: String(data.get("condition")), note: String(data.get("itemNote") || "").trim()
      });
      itemForm.reset();
      updateCopy();
      $("#item-category").focus();
    });
    requestForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const copy = text();
      const status = $("#request-status");
      const mapInput = $("#pickup-map");
      if (!draftItems.length) {
        status.textContent = copy.addFirst;
        status.classList.add("is-error");
        return;
      }
      if (!requestForm.reportValidity()) return;
      if (!isGoogleMapsUrl(mapInput.value.trim())) {
        mapInput.setCustomValidity(copy.invalidMap);
        mapInput.reportValidity();
        mapInput.addEventListener("input", () => mapInput.setCustomValidity(""), {once: true});
        return;
      }
      const data = new FormData(requestForm);
      const order = {
        id: `DEMO-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
        createdAt: new Date().toISOString(), language: currentLanguage(),
        name: String(data.get("name")).trim(), phone: String(data.get("phone")).trim(),
        area: String(data.get("area")).trim(), address: String(data.get("address")).trim(),
        mapUrl: String(data.get("mapUrl") || "").trim(), date: String(data.get("date") || ""),
        time: String(data.get("time") || "any"), note: String(data.get("customerNote") || "").trim(),
        items: draftItems.map((item) => ({...item})), status: "new"
      };
      try {
        const existing = JSON.parse(localStorage.getItem(ORDER_KEY) || "[]");
        if (!Array.isArray(existing)) throw new Error("invalid session data");
        localStorage.setItem(ORDER_KEY, JSON.stringify([order, ...existing].slice(0, 15)));
        status.classList.remove("is-error");
        status.textContent = `${copy.success} ${order.id}`;
        $("#admin-view-link").hidden = false;
        $("#admin-view-link").href = "admin.html";
        draftItems = [];
        itemForm.reset();
        renderDraft();
      } catch (_) {
        status.textContent = copy.storageError;
        status.classList.add("is-error");
      }
    });
  });
})();
