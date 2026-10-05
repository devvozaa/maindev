# Banshree Old Clothes Buyer Mumbai — संशोधित वेबसाइट योजना

## उद्देश्य और सीमा

मौजूदा bright, premium HTML5 public one-page को बनाए रखते हुए असली साड़ी की तस्वीर, वस्तुएँ जोड़ने वाला home-pickup request flow और उसके साथ एक मालिक/admin demo view जोड़ना। Hindi, Marathi, Gujarati, Bengali और English की मौजूदा localization बनी रहेगी। अभी project static है; server और managed database बंद हैं। इसलिए नया intake flow केवल स्पष्ट **DEMO** रूप में इसी browser tab के `sessionStorage` में डेटा रखेगा—वह किसी server पर नहीं भेजेगा और किसी दूसरे device पर उपलब्ध नहीं होगा। Preview में असली customer का नाम, phone या पता दर्ज न करने की चेतावनी दिखेगी।

Cross-device live orders और सुरक्षित admin dashboard के लिए server+database तथा Manus OAuth/role gate चाहिए। ये managed capabilities अभी off हैं और one-way enablement हैं; database development तथा published app के बीच साझा रहता है। यह infrastructure तभी enable होगा जब मालिक स्पष्ट मंज़ूरी दे। तब तक demo/Preview और test-only डेटा से आगे नहीं बढ़ेंगे।

## पहले से तय दृश्य-दिशा

- **Design Movement:** Apple-जैसा bright editorial minimalism, भारतीय textile रंगों और reuse के tactile संकेतों के साथ।
- **Core Principles:** (1) साफ़ और तेज़ पठनीयता, (2) कपड़ा/रंग visual star, (3) भरोसेमंद स्पष्ट steps, (4) मोबाइल पर friction-विहीन form।
- **Color Philosophy:** warm ivory/white शांत premium canvas; charcoal text contrast; peacock green भरोसा और action; marigold/coral कपड़ों की भारतीय रंगत; muted sage सहायक backgrounds।
- **Layout Paradigm:** खुला asymmetric editorial landing page; services, pickup, saree gallery और map; intake flow एक स्पष्ट numbered stepper/card में; dense grids से बचें।
- **Signature Elements:** woven-loop B mark; कपड़े की रंग-रेखा/curved seam; छोटा “reuse” textile tag।
- **Interaction Philosophy:** भाषा तुरंत बदले; items को एक-एक कर request में जोड़ा/हटाया जा सके; item count के बिना pickup submit नहीं; contact/pickup details reviewable हों।
- **Animation:** GSAP से सीमित reveal और ticker; reduced-motion पर animation बंद/कम; content बिना CDN के usable रहे। Form feedback और validation animation के पीछे न छिपें।
- **Typography System:** system/Manrope Latin headings, Devanagari/Gujarati/Bengali के लिए Noto Sans fallback; mobile पर comfortable labels और input size।
- **Brand Essence:** “Mumbai में unused कपड़ों और पुरानी चीज़ों को सरल pickup request और स्पष्ट बातचीत तक पहुँचाने वाला स्थानीय खरीदार।” व्यक्तित्व: भरोसेमंद, व्यावहारिक, आत्मीय।
- **Brand Voice:** सीधे और सम्मानजनक वाक्य; कोई unverified rate/guarantee नहीं। उदाहरण: “अलमारी में जगह बनाएँ—पुराने कपड़ों की बात सीधे करें।” / “वस्तुएँ जोड़ें, pickup की जानकारी भरें—दाम और उपलब्धता पहले पक्की करें।”
- **Wordmark & Logo:** custom inline-SVG woven-loop B monogram और Banshree wordmark।
- **Signature Brand Color:** peacock green `#147A68`।

## सूचना-संरचना और व्यवहार

1. मौजूदा landing: व्यवसाय/सेवाएँ, representative कपड़ों की तस्वीरें, Home pickup, Mumbai का सामान्य map, Google Business Profile मदद, owner terms accordion। Exact phone, pin और listing अभी पुष्टि लंबित।
2. **Pickup request form** (`index.html#pickup-request`): पहले item type (साड़ी, pants/shirt/T-shirt, kurti/other clothes, old mobile, other), quantity, condition और छोटा note जोड़ें; item को जोड़/हटा सकें। फिर customer name, phone, area, पूरा pickup address, optional Google Maps link, preferred date/time और optional note भरें। Price/rate की कोई गढ़ी हुई गारंटी न हो।
3. **Live demo व्यवहार:** valid request submit करने पर unique reference/created time और item lines `sessionStorage` में जाएँ; उसी tab से `/admin.html` खोलकर admin preview में संबंधित details देखें। Admin demo status बदल सके, maps link/address Google Maps में खोले और केवल इसी tab का demo record हटा सके। Storage failure/invalid map URLs संभालें। User-entered content को HTML के रूप में render न करें।
4. **सुरक्षा संकेत:** form तथा `/admin.html` दोनों में prominent Hindi/selected-language संदेश हो: यह public preview demo है, secure login नहीं; वास्तविक नाम, फोन, घर का पता न भरें; data केवल इसी tab में रहता है, server पर नहीं जाता और अन्य devices पर साझा नहीं होता। वास्तविक orders के लिए login/backend लागू होने तक form को production के लिए घोषित न करें।
5. **Admin auth/backend अगला चरण:** Manus OAuth (provider unspecified होने पर default) और server-side admin allow-list/authorization के पीछे `/admin`। Real customer PII केवल authentication के बाद server+managed DB में; admin user ही पढ़/बदल सके। Admin email को chat/code में hard-code न करें; मंज़ूरी के बाद सुरक्षित protected input/config से लेना। No public API exposing pickup locations.
6. **साड़ी फोटो:** असली saree/stack की वास्तविक फोटो hero/gallery में, अनुकूलित local image, उपयुक्त crop/alt/credit के साथ। यह representative image है, Banshree की अपनी shop photo नहीं। बाकी real textile/sorting representative photos ठीक रहें।
7. पाँचों भाषाओं में नया public form fully localized; admin preview में भी Hindi/Marathi/Gujarati/Bengali/English labels उपलब्ध। Language localStorage preference बनी रहे।
8. Website quote/hosting/login/backups/renewal/support की मालिक-facing checklist केवल demo-labeled रहे; commercial value न गढ़ें।

## Implementation structure

- `index.html` — semantic HTML5 one-page public landing, localized pickup intake form और SEO metadata।
- `styles.css` — existing visual system के साथ responsive form, item rows, privacy warning और accessible controls।
- `app.js` — existing पाँच भाषा dictionaries तथा contact/map interactions; नए form labels, items, client validation और same-tab demo sessionStorage।
- `admin.html` + `admin.js` — noindex, clearly marked non-secure demo admin view; local-session orders, item details, address/map links, status updates, language switcher और demo-record deletion।
- `assets/images/saree-stack.jpg` तथा `/manus-storage/...` — search से चुनी व optimized वास्तविक saree photo; source/credit README में। मौजूदा brand SVG और representative textiles बने रहें।
- `manus-routes.json` — public `/` और demo admin `/admin.html` routes। कोई public API route नहीं।
- `plan.md`, `TODO.md`, `CONTENT-SETUP.md` — design/security assumptions, copied acceptance clauses, production launch handoff।

## संचालन और data boundary

अभी static port `3000` Preview, कोई server/API/database नहीं। demo order sessionStorage तक सीमित है और same-origin same-tab admin view से ही देखा जा सकता है; यह production order management का विकल्प नहीं है। Production workflow के लिए server/database enablement owner की explicit approval के बाद ही। Database project-scoped है; development और published app share करते हैं और platform अलग point-in-time backup/export नहीं देता—launch से पहले explicit retention/export/backups/security process चाहिए। Admin access के लिए default Manus OAuth और server-side authorization; admin account allow-list/identity verification अभी pending। Public publish/real data collection नहीं।
