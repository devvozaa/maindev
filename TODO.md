# Banshree वेबसाइट डेमो — outcome ToDo

## 1. व्यवसाय, खरीदी जाने वाली वस्तुएँ और home pickup — complete
- वेबसाइट में व्यवसाय का नाम **Banshree Old Clothes Buyer Mumbai** और व्यवसाय की पूरी परिचयात्मक जानकारी शामिल हो।
- पुराने और इस्तेमाल किए हुए कपड़ों की खरीदी/सेवाएँ स्पष्ट हों: साड़ी, पैंट, शर्ट, T-shirt, कुर्ती आदि; साथ में पुराने/खराब मोबाइल और अन्य पुरानी चीजें भी सूचीबद्ध हों।
- Services और खरीदारी की जानकारी साफ़ हो; कोई ऐसा rate, वस्तु-स्वीकृति या खरीद की गारंटी न दिखाई जाए जिसकी मालिक ने पुष्टि नहीं की है।
- Home pickup की जानकारी, क्षेत्र/उपलब्धता की पुष्टि स्थिति और pickup पूछने का स्पष्ट call-to-action हो।

## 2. WhatsApp, Call, Maps और Google Business Profile — confirmation pending
- वेबसाइट में Direct WhatsApp और Call बटन हों; वे केवल सत्यापित business number मिलने पर सही business destinations बनें। नंबर अभी न मिलने पर editable “पुष्टि लंबित” placeholder दिखे और कोई नकली/गलत नंबर न खुले।
- Google Maps location section/embed हो; अभी business address/pin नहीं मिला है, इसलिए Mumbai का नक्शा केवल general city/service-area preview के रूप में स्पष्ट चिह्नित हो, business location के रूप में नहीं। सही pin मिलने पर exact map/location link बदला जा सके।
- Google Business Profile के साथ link/help section हो; verified listing URL न होने पर साफ़ “पुष्टि लंबित” placeholder हो, कोई नकली listing न बनाई जाए।

## 3. पाँच भाषाओं की जानकारी — complete for landing; pickup form/admin labels pending implementation
- भाषा चयन सुविधा के माध्यम से वेबसाइट की आवश्यक जानकारी **Hindi, Marathi, Gujarati, Bengali और English** में उपलब्ध हो।
- भाषा switcher वास्तविक translated headings, service descriptions, CTAs, contact/map/status labels और relevant demo notes बदले; केवल language menu दिखाकर content को untranslated न छोड़े।
- चुनी हुई भाषा session refresh के बाद भी उपलब्ध रहे; हिन्दी default भाषा हो।

## 4. फोटो और वास्तविक वस्त्र imagery — add saree photo
- व्यवसाय और कपड़ों की photos/gallery वाला अनुभाग हो। वेबसाइट में साड़ियों, कपड़ों और पुनः उपयोग/छँटाई की वास्तविक तस्वीरें इस्तेमाल हों।
- चुनी हुई वास्तविक saree-stack photo को hero या gallery में दिखाएँ; image को website delivery के लिए optimize करके project storage में रखें, accessible alt text दें और source/credit दर्ज करें।
- Banshree की खुद की business/team/shop photos उपयोगकर्ता ने अभी नहीं दी हैं; representative/stock images को असली Banshree तस्वीर कहकर प्रस्तुत न करें, उन्हें demo/उदाहरण के रूप में label करें।

## 5. Responsive HTML5, mobile flow और दृश्य/interaction design — update in progress
- deliverable एक single-page **HTML5** public demo website हो, साफ़, उजला और Apple-जैसी premium textile visual style में हो।
- website mobile phone पर सहज, readable और usable responsive हो; desktop/tablet पर भी layout ठीक रहे।
- GSAP आधारित हल्की motion/reveal हो; reduced-motion पसंद करने वाले उपयोगकर्ताओं और GSAP अनुपलब्ध होने पर भी जरूरी content व interactions काम करें।
- मुख्य page में pickup-request flow हो: user अलग-अलग items जोड़/हटा सके, हर item के लिए item type, quantity, condition और optional description भरे; फिर अपना नाम/फोन, pickup area, पूरा पता, optional Google Maps link, preferred date/time तथा optional note दे; submit से पहले input validate हो और बिना कम-से-कम एक item request submit न हो।
- Public preview स्पष्ट बताए कि यह demo है और user को वास्तविक contact/location जानकारी न भरनी चाहिए; form data server पर नहीं भेजा जाए।

## 6. Demo admin dashboard और production access boundary — demo view complete; real admin backend pending owner approval
- `/admin.html` पर clearly labelled, non-secure demo admin view उपलब्ध हो, जहाँ उसी browser tab session से जमा demo requests देखी जाएँ; user अलग device से यह data नहीं देख सकता।
- Admin preview request reference/time, customer name/contact, item category/quantity/condition/notes, pickup area/full address, preferred date/time, customer note और safe Google Maps link दिखाए; item status बदले; current tab के demo record हटाए।
- Admin page noindex हो, वहीं भी सूचना हो कि यह असली login/admin access नहीं है और real customer data नहीं डालना चाहिए। User-provided strings text की तरह render हों, executable HTML की तरह नहीं।
- Cross-device production orders, secure admin sign-in और durable storage के लिए server+database तथा Manus OAuth/server-side admin allow-list चाहिए। अभी server/database दोनों बंद हैं; managed enablement one-way है और development/published database shared रहती है। इन्हें owner की स्पष्ट अनुमति से पहले enable न करें; protected input के बिना admin email/identity hard-code न करें। जब तक live backend/auth/security process लागू नहीं, real customer data न लें और कोई public launch न करें।

## 7. Google Search के लिए basic SEO — complete
- semantic, content-bearing initial HTML, उपयुक्त title/description, language/heading hierarchy, image alt text तथा local business/service-area संदर्भ वाला basic SEO शामिल हो।
- पता/domain/listing का अनुमान न करें; जब तक वास्तविक public origin/pin/GBP URL उपलब्ध न हो, guessed canonical URL, नकली address/phone या गलत business pin न बनाएं।

## 8. वेबसाइट के मूल्य और स्वामी-शर्तों की पुष्टि — pending owner/vendor inputs
- demo में अंतिम कुल website price तथा domain, hosting, SSL, design और SEO उस price में शामिल हैं या अलग—इन सबके लिए स्पष्ट editable “पुष्टि लंबित” field हो; कोई रकम/कुल final price न गढ़ें।
- domain और hosting कितने समय के लिए मिलेंगे, SSL certificate मिलेगा या नहीं, login ID/password कब/कैसे मिलेगा, तथा मालिक बाद में खुद photos व business information बदल सकता है या नहीं—हर बिंदु स्पष्ट, editable “पुष्टि लंबित” स्थिति में हो।
- website backup और security कौन संभालेगा, delivery कितने दिनों में होगी, बाद में annual renewal/hidden charges हैं या नहीं, launch के बाद support कितने समय मिलेगा—हर बिंदु स्पष्ट, editable “पुष्टि लंबित” स्थिति में हो।
- काम शुरू होने और payment से पहले सभी चीज़ें समझने की अपेक्षा स्पष्ट रहे; demo कोई payment request या unauthorized WhatsApp message न भेजे। Final quote WhatsApp पर भेजने के लिए असली recipient number आवश्यक है।

## 9. Release state
- Project का real buyer-facing server/database, private admin authentication, durable orders, privacy/retention notice, backup/export process और published domain अभी configure/approved नहीं हैं; इन्हें production-complete न बताएं।
- Preview और public publish अलग हैं; explicit request/appropriate confirmation के बिना auto-publish या public launch न करें।
