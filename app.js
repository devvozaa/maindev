/* Owner-editable details. Replace these only after the business owner verifies them. */
const SITE_DETAILS = {
  phone: "",                 // International phone digits for tel: can be +91...
  whatsapp: "",              // WhatsApp number: digits only, country code included
  businessProfileUrl: "",    // Verified Banshree Business Profile URL; never a generic search result
};

const COPY = {
  hi: {
    htmlLang: "hi", title: "Banshree Mumbai | पुराने कपड़ों का खरीदार",
    description: "मुंबई में पुरानी साड़ी, कपड़े, कुर्ती, मोबाइल और अन्य पुरानी चीज़ें बेचने की जानकारी लें। Home pickup की उपलब्धता पूछें।",
    skip: "मुख्य सामग्री पर जाएँ", announcement: "पुरानी चीज़ें, नई शुरुआत — मुंबई में", brandSub: "Old Clothes Buyer · Mumbai",
    navBuy: "हम क्या खरीदते हैं", navPickup: "Home pickup", navLocation: "लोकेशन", languageLabel: "भाषा चुनें", navCta: "बात करें",
    heroEyebrow: "पुरानी चीज़ों का नया रास्ता · मुंबई", heroTitle: "कपड़े पुराने हैं।<br>काम अभी बाकी है।",
    heroLead: "साड़ी, पैंट, शर्ट, T-shirt, कुर्ती, पुराने मोबाइल और दूसरी इस्तेमाल की चीज़ों की खरीदी के बारे में पूछें।",
    heroCta: "WhatsApp पर पूछें", heroSecondary: "क्या-क्या खरीदते हैं", contactStatus: "संपर्क नंबर जोड़ना बाकी है — यह demo है",
    heroImageLabel: "हर कपड़े में एक और मौका", heroImageCaption: "रंग, रेशे और फिर से काम आने की बात।",
    ticker: ["साड़ियाँ", "रोज़मर्रा के कपड़े", "कुर्ती और परिधान", "पुराने मोबाइल"],
    serviceEyebrow: "जगह बनाएँ, सही बात करें", serviceTitle: "आपके पास क्या है?",
    serviceIntro: "वस्तु की फोटो और मात्रा भेजकर पहले पूछ लें। खरीद की कीमत और स्वीकार्यता चीज़ की हालत देखकर पुष्टि होगी।",
    serviceCards: [
      ["साड़ी और पारंपरिक परिधान", "पुरानी साड़ियाँ और अन्य भारतीय परिधान — कपड़े की हालत बताकर पूछें।", "◌"],
      ["पैंट, शर्ट और T-shirt", "रोज़मर्रा के पहने हुए कपड़े — फोटो और लगभग मात्रा भेजें।", "⌁"],
      ["कुर्ती और दूसरे कपड़े", "कुर्ती व घर में रखे अन्य उपयोग किए कपड़े।", "✳"],
      ["पुराने मोबाइल व अन्य चीज़ें", "पुराने/खराब मोबाइल और दूसरी पुरानी चीज़ों के लिए अलग से पूछें।", "⌑"]
    ],
    serviceFoot: "किसी वस्तु के लिए दाम या pickup पक्का करने से पहले फोन पर पुष्टि ज़रूर करें।", serviceCta: "पहले पूछें <span aria-hidden=\"true\">↗</span>",
    pickupEyebrow: "आपके दरवाज़े तक — उपलब्धता पूछें", pickupTitle: "घर से pickup.<br>बात सीधी।",
    pickupLead: "Mumbai में home pickup की उपलब्धता अपने इलाके, सामान और समय के अनुसार पूछें। पहले फोटो भेजें, फिर pickup का समय तय करें।",
    pickupCta: "pickup की बात करें <span aria-hidden=\"true\">↗</span>", pickupRibbon: "आसान · साफ़ · पहले बात",
    steps: [["फोटो भेजें", "WhatsApp या फोन पर वस्तुओं की तस्वीर और अंदाज़ी मात्रा बताएँ."], ["जानकारी मिलाएँ", "हालत, प्रकार, खरीदी की कीमत और pickup-area की पुष्टि करें."], ["समय तय करें", "उपलब्धता मिलने पर pickup का समय मिलकर तय करें."]],
    galleryEyebrow: "कपड़े, रंग और बनावट", galleryTitle: "फिर से काम आने की<br>शुरुआत यहीं से।",
    galleryLead: "ये वास्तविक textile उदाहरणों की तस्वीरें हैं, Banshree की दुकान या टीम की नहीं। असली business photos मालिक से मिलने पर बदलें।",
    photoCaption1: "रंगों का दूसरा दौर", photoCaption2: "छँटाई और फिर से इस्तेमाल — प्रतिनिधि फोटो",
    imageCredit: "फोटो: Unsplash और MS Group Textiles से प्रतिनिधि उदाहरण। ये Banshree के अपने व्यवसाय की तस्वीरें नहीं हैं।",
    locationEyebrow: "मुंबई में सेवा-क्षेत्र", locationTitle: "आप कहाँ हैं,<br>वहीं से शुरू करें।",
    locationLead: "यह मुंबई शहर का सामान्य नक्शा है—Banshree का verified shop pin नहीं। सटीक पता और location मालिक से पुष्टि के बाद जोड़ें।",
    mapCta: "Google Maps में मुंबई देखें", mapBadge: "सटीक business pin पुष्टि लंबित",
    profileTitle: "Google Business Profile", profileLead: "Banshree की verified listing का link मिलने पर यहाँ जोड़ें।",
    profileHelp: "Google Business Profile सहायता <span aria-hidden=\"true\">↗</span>",
    ownerEyebrow: "इस demo के मालिक के लिए", ownerTitle: "पहले सब साफ़।<br>फिर आगे बढ़ें।",
    ownerLead: "नीचे वेबसाइट बनाने से जुड़ी शर्तों की owner checklist है—यह खरीदारों के लिए business policy नहीं। सभी जवाब पुष्टि के बाद भरें।",
    ownerSummary: "वेबसाइट की कीमत और ज़िम्मेदारियाँ — अभी पुष्टि लंबित",
    ownerNote: "इस preview में कोई final quote, deadline या service contract तय नहीं है। पूरी कीमत और शर्तें लिखित में समझकर/स्वीकृत करके ही payment करें।",
    ownerRows: ["वेबसाइट की कुल अंतिम कीमत", "डोमेन और hosting की अवधि", "SSL certificate मिलेगा या नहीं", "Login ID / password की जानकारी", "क्या बाद में photos व जानकारी स्वयं बदल सकेंगे?", "Backup और security किसकी ज़िम्मेदारी?", "Design और SEO कीमत में शामिल हैं या अलग?", "तैयार होने में कितने दिन?", "Annual renewal या hidden charges?", "Website के बाद support की अवधि?", "Payment से पहले scope/terms की लिखित पुष्टि", "Quote WhatsApp पर भेजने के लिए recipient number"],
    contactKicker: "पुराने कपड़े बेचने की पूछताछ", contactBarText: "WhatsApp और Call के लिए सही नंबर मिलने पर ये बटन सीधे जुड़ेंगे।",
    callCta: "Call करें", whatsappCta: "WhatsApp करें",
    footerNote: "पुराने कपड़ों और दूसरी पुरानी चीज़ों के लिए Mumbai में खरीदार। pickup, दाम और उपलब्धता पहले पुष्टि करें।",
    demoStamp: "DEMO · जानकारी की पुष्टि लंबित", footerLine: "कपड़ों को एक और मौका दें।",
    toast: "इस demo में सही business number अभी जोड़ा नहीं गया है। सीधा WhatsApp/Call चालू करने के लिए मालिक का नंबर भरें।",
  },
  mr: {
    htmlLang: "mr", title: "Banshree Mumbai | जुने कपडे खरेदीदार",
    description: "मुंबईत जुनी साडी, कपडे, कुर्ती, मोबाइल आणि इतर जुन्या वस्तू विकण्याची माहिती घ्या. घरून pickup उपलब्ध आहे का ते विचारा.",
    skip: "मुख्य मजकुराकडे जा", announcement: "जुन्या वस्तू, नवी सुरुवात — मुंबईत", brandSub: "Old Clothes Buyer · Mumbai",
    navBuy: "आम्ही काय खरेदी करतो", navPickup: "घरून pickup", navLocation: "पत्ता", languageLabel: "भाषा निवडा", navCta: "बोला",
    heroEyebrow: "जुन्या वस्तूंना नवा मार्ग · मुंबई", heroTitle: "कपडे जुने झाले.<br>उपयोग अजून बाकी।",
    heroLead: "साडी, पँट, शर्ट, T-shirt, कुर्ती, जुने मोबाइल आणि इतर वापरलेल्या वस्तूंच्या खरेदीबद्दल विचारा.",
    heroCta: "WhatsApp वर विचारा", heroSecondary: "काय खरेदी करतो", contactStatus: "संपर्क क्रमांक जोडणे बाकी — हा demo आहे",
    heroImageLabel: "प्रत्येक कापडाला आणखी एक संधी", heroImageCaption: "रंग, धागे आणि पुन्हा उपयोगी पडण्याची गोष्ट.",
    ticker: ["साड्या", "रोजचे कपडे", "कुर्ती व पोशाख", "जुने मोबाइल"],
    serviceEyebrow: "जागा करा, आधी स्पष्ट विचारा", serviceTitle: "तुमच्याकडे काय आहे?",
    serviceIntro: "वस्तूचा फोटो व अंदाजे प्रमाण पाठवून आधी विचारा. खरेदीची किंमत आणि स्वीकार वस्तूची स्थिती पाहूनच निश्चित होईल.",
    serviceCards: [
      ["साडी आणि पारंपरिक पोशाख", "जुन्या साड्या व इतर भारतीय पोशाख — स्थिती सांगून विचारा.", "◌"],
      ["पँट, शर्ट आणि T-shirt", "रोजचे वापरलेले कपडे — फोटो व अंदाजे प्रमाण पाठवा.", "⌁"],
      ["कुर्ती आणि इतर कपडे", "कुर्ती तसेच घरात ठेवलेले इतर वापरलेले कपडे.", "✳"],
      ["जुने मोबाइल व इतर वस्तू", "जुने/बिघडलेले मोबाइल आणि इतर जुन्या वस्तूंसाठी वेगळे विचारा.", "⌑"]
    ],
    serviceFoot: "किंमत किंवा pickup निश्चित करण्यापूर्वी फोनवर खात्री करून घ्या.", serviceCta: "आधी विचारा <span aria-hidden=\"true\">↗</span>",
    pickupEyebrow: "तुमच्या दारापर्यंत — उपलब्धता विचारा", pickupTitle: "घरून pickup.<br>बोलणे सोपे।",
    pickupLead: "Mumbai मधील तुमचा भाग, वस्तू आणि वेळेनुसार घरून pickup उपलब्ध आहे का ते विचारा. आधी फोटो पाठवा आणि मग वेळ ठरवा.",
    pickupCta: "pickup बद्दल विचारा <span aria-hidden=\"true\">↗</span>", pickupRibbon: "सोपे · स्पष्ट · आधी बोला",
    steps: [["फोटो पाठवा", "WhatsApp किंवा फोनवर वस्तूंचे फोटो आणि अंदाजे प्रमाण सांगा."], ["तपशील ठरवा", "स्थिती, प्रकार, खरेदीची किंमत आणि pickup परिसराची खात्री करा."], ["वेळ ठरवा", "उपलब्धता निश्चित झाल्यावर pickup ची वेळ एकत्र ठरवा."]],
    galleryEyebrow: "कापड, रंग आणि पोत", galleryTitle: "पुन्हा उपयोगी होण्याची<br>सुरुवात इथून।",
    galleryLead: "ही खऱ्या textile उदाहरणांची छायाचित्रे आहेत; Banshree दुकान किंवा टीमची नाहीत. मालकाकडून खरी business छायाचित्रे मिळाल्यावर बदला.",
    photoCaption1: "रंगांचा दुसरा फेर", photoCaption2: "छाननी आणि पुनर्वापर — उदाहरणार्थ फोटो",
    imageCredit: "फोटो: Unsplash आणि MS Group Textiles मधील उदाहरणे. ही Banshree च्या स्वतःच्या व्यवसायाची छायाचित्रे नाहीत.",
    locationEyebrow: "मुंबईमधील सेवा क्षेत्र", locationTitle: "तुम्ही कुठे आहात,<br>तिथूनच सुरुवात।",
    locationLead: "हा मुंबई शहराचा सर्वसाधारण नकाशा आहे—Banshree चा खात्रीशीर shop pin नाही. मालकाची खात्री झाल्यावरच अचूक पत्ता व location जोडा.",
    mapCta: "Google Maps वर मुंबई पहा", mapBadge: "अचूक business pin खात्री बाकी",
    profileTitle: "Google Business Profile", profileLead: "Banshree च्या खात्रीशीर listing ची लिंक मिळाल्यावर येथे जोडा.",
    profileHelp: "Google Business Profile मदत <span aria-hidden=\"true\">↗</span>",
    ownerEyebrow: "या demo च्या मालकासाठी", ownerTitle: "आधी सर्व स्पष्ट.<br>मग पुढे।",
    ownerLead: "खाली वेबसाइट तयार करण्याच्या अटींची owner checklist आहे—ग्राहकांसाठीची business policy नाही. सर्व उत्तरे खात्री करून भरा.",
    ownerSummary: "वेबसाइटची किंमत व जबाबदाऱ्या — खात्री बाकी",
    ownerNote: "या preview मध्ये अंतिम quote, deadline किंवा service contract ठरलेला नाही. पूर्ण किंमत व अटी लिखित स्वरूपात समजून/मान्य करूनच payment करा.",
    ownerRows: ["वेबसाइटची अंतिम एकूण किंमत", "Domain आणि hosting किती काळासाठी", "SSL certificate मिळेल का", "Login ID / password तपशील", "नंतर photos व माहिती स्वतः बदलता येईल का?", "Backup आणि security ची जबाबदारी कोणाची?", "Design आणि SEO किंमतीत आहेत की वेगळे?", "तयार होण्यासाठी किती दिवस?", "Annual renewal किंवा hidden charges?", "वेबसाइटनंतर support किती काळ?", "Payment आधी scope/अटींची लिखित खात्री", "WhatsApp वर quote पाठवण्यासाठी क्रमांक"],
    contactKicker: "जुने कपडे विकण्याची चौकशी", contactBarText: "योग्य WhatsApp आणि Call क्रमांक मिळाल्यावर ही बटणे थेट जोडली जातील.",
    callCta: "Call करा", whatsappCta: "WhatsApp करा",
    footerNote: "जुन्या कपड्यांसाठी व इतर जुन्या वस्तूंसाठी Mumbai मधील खरेदीदार. pickup, किंमत व उपलब्धता आधी खात्री करा.",
    demoStamp: "DEMO · माहितीची खात्री बाकी", footerLine: "कपड्यांना आणखी एक संधी द्या.",
    toast: "या demo मध्ये योग्य business क्रमांक जोडलेला नाही. थेट WhatsApp/Call सुरू करण्यासाठी मालकाचा क्रमांक भरा.",
  },
  gu: {
    htmlLang: "gu", title: "Banshree Mumbai | જૂનાં કપડાં ખરીદનાર",
    description: "મુંબઈમાં જૂની સાડી, કપડાં, કુર્તી, મોબાઇલ અને અન્ય જૂની વસ્તુઓ વેચવાની માહિતી મેળવો. ઘરેથી pickup ઉપલબ્ધ છે કે નહીં પૂછો.",
    skip: "મુખ્ય સામગ્રી પર જાઓ", announcement: "જૂની વસ્તુઓ, નવી શરૂઆત — મુંબઈમાં", brandSub: "Old Clothes Buyer · Mumbai",
    navBuy: "અમે શું ખરીદીએ છીએ", navPickup: "ઘરેથી pickup", navLocation: "સ્થળ", languageLabel: "ભાષા પસંદ કરો", navCta: "વાત કરો",
    heroEyebrow: "જૂની વસ્તુઓને નવો રસ્તો · મુંબઈ", heroTitle: "કપડાં જૂનાં છે.<br>ઉપયોગ હજી બાકી છે।",
    heroLead: "સાડી, પેન્ટ, શર્ટ, T-shirt, કુર્તી, જૂના મોબાઇલ અને અન્ય વપરાયેલી વસ્તુઓની ખરીદી વિશે પૂછો.",
    heroCta: "WhatsApp પર પૂછો", heroSecondary: "શું ખરીદીએ છીએ", contactStatus: "સંપર્ક નંબર ઉમેરવાનો બાકી — આ demo છે",
    heroImageLabel: "દરેક કાપડને બીજી તક", heroImageCaption: "રંગ, તાંતણા અને ફરી ઉપયોગી થવાની વાત.",
    ticker: ["સાડીઓ", "રોજિંદાં કપડાં", "કુર્તી અને પોશાક", "જૂના મોબાઇલ"],
    serviceEyebrow: "જગ્યા બનાવો, પહેલાં સ્પષ્ટ પૂછો", serviceTitle: "તમારી પાસે શું છે?",
    serviceIntro: "વસ્તુનો ફોટો અને અંદાજિત જથ્થો મોકલીને પહેલાં પૂછો. ખરીદીનો ભાવ અને સ્વીકાર વસ્તુની સ્થિતિ તપાસ્યા પછી જ નક્કી થશે.",
    serviceCards: [
      ["સાડી અને પરંપરાગત પોશાક", "જૂની સાડીઓ તથા અન્ય ભારતીય પોશાક — સ્થિતિ જણાવીને પૂછો.", "◌"],
      ["પેન્ટ, શર્ટ અને T-shirt", "રોજિંદા વપરાયેલા કપડાં — ફોટો અને અંદાજિત જથ્થો મોકલો.", "⌁"],
      ["કુર્તી અને અન્ય કપડાં", "કુર્તી તથા ઘરમાં રાખેલા બીજા વપરાયેલા કપડાં.", "✳"],
      ["જૂના મોબાઇલ અને અન્ય વસ્તુઓ", "જૂના/ખરાબ મોબાઇલ અને અન્ય જૂની વસ્તુઓ માટે અલગથી પૂછો.", "⌑"]
    ],
    serviceFoot: "ભાવ કે pickup નક્કી કરતાં પહેલાં ફોન પર ખાતરી જરૂર કરો.", serviceCta: "પહેલાં પૂછો <span aria-hidden=\"true\">↗</span>",
    pickupEyebrow: "તમારા દરવાજે — ઉપલબ્ધતા પૂછો", pickupTitle: "ઘરેથી pickup.<br>વાત સીધી।",
    pickupLead: "Mumbaiમાં તમારા વિસ્તાર, વસ્તુઓ અને સમય પ્રમાણે ઘરેથી pickup ઉપલબ્ધ છે કે નહીં પૂછો. પહેલાં ફોટો મોકલો, પછી સમય નક્કી કરો.",
    pickupCta: "pickup વિશે વાત કરો <span aria-hidden=\"true\">↗</span>", pickupRibbon: "સરળ · સ્પષ્ટ · પહેલાં વાત",
    steps: [["ફોટો મોકલો", "WhatsApp અથવા ફોન પર વસ્તુઓના ફોટા અને અંદાજિત જથ્થો જણાવો."], ["વિગતો નક્કી કરો", "સ્થિતિ, પ્રકાર, ખરીદીનો ભાવ અને pickup વિસ્તારની ખાતરી કરો."], ["સમય નક્કી કરો", "ઉપલબ્ધતા નક્કી થયા પછી pickup નો સમય સાથે નક્કી કરો."]],
    galleryEyebrow: "કાપડ, રંગ અને રચના", galleryTitle: "ફરી ઉપયોગી થવાની<br>શરૂઆત અહીંથી।",
    galleryLead: "આ વાસ્તવિક textile ઉદાહરણોના ફોટા છે; Banshreeની દુકાન કે ટીમના નથી. માલિક પાસેથી સાચા business ફોટા મળે ત્યારે બદલો.",
    photoCaption1: "રંગોની બીજી તક", photoCaption2: "ચકાસણી અને ફરી ઉપયોગ — ઉદાહરણ ફોટો",
    imageCredit: "ફોટો: Unsplash અને MS Group Textilesના પ્રતિનિધિ ઉદાહરણો. આ Banshreeના પોતાના વ્યવસાયના ફોટા નથી.",
    locationEyebrow: "Mumbaiમાં સેવા વિસ્તાર", locationTitle: "તમે જ્યાં હો,<br>ત્યાંથી શરૂઆત કરો।",
    locationLead: "આ મુંબઈ શહેરનો સામાન્ય નકશો છે—Banshreeનું ચકાસેલું shop pin નથી. માલિકની પુષ્ટિ પછી જ ચોક્કસ સરનામું અને location ઉમેરો.",
    mapCta: "Google Maps પર મુંબઈ જુઓ", mapBadge: "ચોક્કસ business pinની પુષ્ટિ બાકી",
    profileTitle: "Google Business Profile", profileLead: "Banshreeની ચકાસેલી listingની link મળે ત્યારે અહીં ઉમેરો.",
    profileHelp: "Google Business Profile મદદ <span aria-hidden=\"true\">↗</span>",
    ownerEyebrow: "આ demoના માલિક માટે", ownerTitle: "પહેલાં બધું સ્પષ્ટ.<br>પછી આગળ।",
    ownerLead: "નીચે વેબસાઇટ બનાવવાની શરતોની owner checklist છે—ગ્રાહકો માટેની business policy નથી. દરેક જવાબ પુષ્ટિ પછી भरो.",
    ownerSummary: "વેબસાઇટની કિંમત અને જવાબદારીઓ — પુષ્ટિ બાકી",
    ownerNote: "આ previewમાં final quote, deadline કે service contract નક્કી નથી. સંપૂર્ણ કિંમત અને શરતો લેખિતમાં સમજી/મંજૂર કર્યા પછી જ payment કરો.",
    ownerRows: ["વેબસાઇટની અંતિમ કુલ કિંમત", "Domain અને hostingનો સમયગાળો", "SSL certificate મળશે કે નહીં", "Login ID / passwordની વિગતો", "પછી photos અને માહિતી જાતે બદલી શકાશે?", "Backup અને securityની જવાબદારી કોની?", "Design અને SEO કિંમતમાં છે કે અલગ?", "તૈયાર થવામાં કેટલા દિવસ?", "Annual renewal કે hidden charges?", "વેબસાઇટ પછી support કેટલા સમય?", "Payment પહેલાં scope/termsની લેખિત પુષ્ટિ", "WhatsApp પર quote મોકલવાનો નંબર"],
    contactKicker: "જૂનાં કપડાં વેચવાની પૂછપરછ", contactBarText: "ચકાસેલો WhatsApp અને Call નંબર મળ્યા પછી આ બટનો સીધા જોડાશે.",
    callCta: "Call કરો", whatsappCta: "WhatsApp કરો",
    footerNote: "જૂનાં કપડાં અને અન્ય જૂની વસ્તુઓ માટે Mumbaiમાં ખરીદનાર. pickup, ભાવ અને ઉપલબ્ધતાની પહેલાં પુષ્ટિ કરો.",
    demoStamp: "DEMO · માહિતીની પુષ્ટિ બાકી", footerLine: "કપડાંને બીજી તક આપો.",
    toast: "આ demoમાં businessનો સાચો નંબર ઉમેરેલો નથી. સીધો WhatsApp/Call ચાલુ કરવા માલિકનો નંબર ઉમેરો.",
  },
  bn: {
    htmlLang: "bn", title: "Banshree Mumbai | পুরোনো জামাকাপড়ের ক্রেতা",
    description: "মুম্বাইয়ে পুরোনো শাড়ি, পোশাক, কুর্তি, মোবাইল ও অন্যান্য ব্যবহৃত জিনিস বিক্রির তথ্য নিন। বাড়ি থেকে pickup পাওয়া যাবে কি না জিজ্ঞেস করুন।",
    skip: "মূল বিষয়বস্তুতে যান", announcement: "পুরোনো জিনিস, নতুন শুরু — মুম্বাইয়ে", brandSub: "Old Clothes Buyer · Mumbai",
    navBuy: "আমরা কী কিনি", navPickup: "বাড়ি থেকে pickup", navLocation: "ঠিকানা", languageLabel: "ভাষা বেছে নিন", navCta: "কথা বলুন",
    heroEyebrow: "পুরোনো জিনিসের নতুন পথ · মুম্বাই", heroTitle: "পোশাক পুরোনো।<br>কাজ এখনো বাকি।",
    heroLead: "শাড়ি, প্যান্ট, শার্ট, T-shirt, কুর্তি, পুরোনো মোবাইল এবং অন্য ব্যবহৃত জিনিস কেনার বিষয়ে জিজ্ঞাসা করুন।",
    heroCta: "WhatsApp-এ জিজ্ঞাসা করুন", heroSecondary: "কী কী কিনি", contactStatus: "যোগাযোগের নম্বর এখনো যোগ হয়নি — এটি demo",
    heroImageLabel: "প্রতিটি কাপড়ের আরেকটি সুযোগ", heroImageCaption: "রং, সুতো আর নতুন করে কাজে লাগার গল্প।",
    ticker: ["শাড়ি", "দৈনন্দিন পোশাক", "কুর্তি ও পোশাক", "পুরোনো মোবাইল"],
    serviceEyebrow: "জায়গা করুন, আগে জেনে নিন", serviceTitle: "আপনার কাছে কী আছে?",
    serviceIntro: "জিনিসের ছবি ও আনুমানিক পরিমাণ পাঠিয়ে আগে জিজ্ঞাসা করুন। অবস্থা দেখে কেনার দাম এবং গ্রহণযোগ্যতা নিশ্চিত করা হবে।",
    serviceCards: [
      ["শাড়ি ও ঐতিহ্যবাহী পোশাক", "পুরোনো শাড়ি ও অন্যান্য ভারতীয় পোশাক — অবস্থা জানিয়ে জিজ্ঞাসা করুন।", "◌"],
      ["প্যান্ট, শার্ট ও T-shirt", "দৈনন্দিন ব্যবহৃত পোশাক — ছবি ও আনুমানিক পরিমাণ পাঠান।", "⌁"],
      ["কুর্তি ও অন্যান্য পোশাক", "কুর্তি এবং বাড়িতে রাখা অন্য ব্যবহৃত পোশাক।", "✳"],
      ["পুরোনো মোবাইল ও অন্যান্য জিনিস", "পুরোনো/নষ্ট মোবাইল ও অন্য পুরোনো জিনিসের জন্য আলাদা করে জিজ্ঞাসা করুন।", "⌑"]
    ],
    serviceFoot: "দাম বা pickup নিশ্চিত করার আগে ফোনে যাচাই করে নিন।", serviceCta: "আগে জিজ্ঞাসা করুন <span aria-hidden=\"true\">↗</span>",
    pickupEyebrow: "আপনার দরজায় — আগে উপলভ্যতা জানুন", pickupTitle: "বাড়ি থেকে pickup.<br>কথা সহজ।",
    pickupLead: "Mumbai-তে আপনার এলাকা, জিনিসপত্র ও সময় অনুযায়ী বাড়ি থেকে pickup পাওয়া যাবে কি না জিজ্ঞাসা করুন। আগে ছবি পাঠান, তারপর সময় ঠিক করুন।",
    pickupCta: "pickup নিয়ে কথা বলুন <span aria-hidden=\"true\">↗</span>", pickupRibbon: "সহজ · পরিষ্কার · আগে কথা",
    steps: [["ছবি পাঠান", "WhatsApp বা ফোনে জিনিসের ছবি ও আনুমানিক পরিমাণ জানান।"], ["বিস্তারিত মিলিয়ে নিন", "অবস্থা, ধরন, কেনার দাম এবং pickup এলাকার বিষয়টি নিশ্চিত করুন।"], ["সময় ঠিক করুন", "উপলভ্যতা নিশ্চিত হলে একসঙ্গে pickup-এর সময় ঠিক করুন।"]],
    galleryEyebrow: "কাপড়, রং ও বুনন", galleryTitle: "আবার কাজে লাগার<br>শুরু এখানেই।",
    galleryLead: "এগুলি বাস্তব textile উদাহরণের ছবি, Banshree-র দোকান বা দলের নয়। মালিকের কাছ থেকে আসল business-এর ছবি পেলে বদলে দিন।",
    photoCaption1: "রঙের আরেকটি পর্ব", photoCaption2: "বাছাই ও পুনর্ব্যবহার — উদাহরণ ছবি",
    imageCredit: "ছবি: Unsplash ও MS Group Textiles-এর প্রতিনিধিত্বমূলক উদাহরণ। এগুলি Banshree-র নিজস্ব ব্যবসার ছবি নয়।",
    locationEyebrow: "মুম্বাইয়ে পরিষেবা এলাকা", locationTitle: "আপনি যেখানে,<br>সেখান থেকেই শুরু।",
    locationLead: "এটি মুম্বাই শহরের সাধারণ মানচিত্র—Banshree-র যাচাই করা দোকানের pin নয়। মালিক নিশ্চিত করলে তবেই ঠিকানা ও location যোগ করুন।",
    mapCta: "Google Maps-এ মুম্বাই দেখুন", mapBadge: "সঠিক business pin নিশ্চিত নয়",
    profileTitle: "Google Business Profile", profileLead: "Banshree-র যাচাই করা listing-এর link পেলে এখানে যোগ করুন।",
    profileHelp: "Google Business Profile সহায়তা <span aria-hidden=\"true\">↗</span>",
    ownerEyebrow: "এই demo-র মালিকের জন্য", ownerTitle: "আগে সব পরিষ্কার।<br>তারপর এগোন।",
    ownerLead: "নিচে ওয়েবসাইট তৈরির শর্ত নিয়ে owner checklist আছে—এটি ক্রেতাদের জন্য business policy নয়। যাচাইয়ের পর সব উত্তর পূরণ করুন।",
    ownerSummary: "ওয়েবসাইটের দাম ও দায়িত্ব — নিশ্চিত হওয়া বাকি",
    ownerNote: "এই preview-তে কোনো final quote, deadline বা service contract ঠিক হয়নি। পুরো দাম ও শর্ত লিখিতভাবে বুঝে/অনুমোদন করার পরেই payment করুন।",
    ownerRows: ["ওয়েবসাইটের মোট চূড়ান্ত দাম", "Domain ও hosting-এর মেয়াদ", "SSL certificate পাওয়া যাবে কি না", "Login ID / password-এর তথ্য", "পরে নিজে photos ও তথ্য বদলাতে পারবেন?", "Backup ও security-র দায়িত্ব কার?", "Design ও SEO দামের মধ্যে, না আলাদা?", "তৈরি হতে কত দিন?", "Annual renewal বা hidden charges?", "ওয়েবসাইটের পর support কত দিন?", "Payment-এর আগে scope/terms লিখিতভাবে নিশ্চিত", "WhatsApp-এ quote পাঠানোর নম্বর"],
    contactKicker: "পুরোনো পোশাক বিক্রির খোঁজ", contactBarText: "যাচাই করা WhatsApp ও Call নম্বর পেলে এই বোতামগুলি সরাসরি যুক্ত হবে।",
    callCta: "Call করুন", whatsappCta: "WhatsApp করুন",
    footerNote: "পুরোনো পোশাক ও অন্য পুরোনো জিনিসের জন্য Mumbai-র ক্রেতা। pickup, দাম ও উপলভ্যতা আগে নিশ্চিত করুন।",
    demoStamp: "DEMO · তথ্য নিশ্চিত হওয়া বাকি", footerLine: "পোশাককে আরেকটি সুযোগ দিন।",
    toast: "এই demo-তে business-এর আসল নম্বর যোগ করা নেই। সরাসরি WhatsApp/Call চালু করতে মালিকের নম্বর যোগ করুন।",
  },
  en: {
    htmlLang: "en", title: "Banshree Mumbai | Old Clothes Buyer",
    description: "Ask about selling old sarees, clothes, kurtis, mobiles and other used items in Mumbai. Check home-pickup availability.",
    skip: "Skip to main content", announcement: "Old things, a fresh start — in Mumbai", brandSub: "Old Clothes Buyer · Mumbai",
    navBuy: "What we buy", navPickup: "Home pickup", navLocation: "Location", languageLabel: "Choose language", navCta: "Get in touch",
    heroEyebrow: "A new path for pre-loved things · Mumbai", heroTitle: "Clothes get older.<br>Their story doesn’t.",
    heroLead: "Ask about selling sarees, pants, shirts, T-shirts, kurtis, old mobiles and other used items.",
    heroCta: "Ask on WhatsApp", heroSecondary: "What we buy", contactStatus: "Contact number not added yet — this is a demo",
    heroImageLabel: "Every fabric gets another chance", heroImageCaption: "Colour, texture and the possibility of reuse.",
    ticker: ["Sarees", "Everyday clothes", "Kurtis & garments", "Old mobiles"],
    serviceEyebrow: "Make room. Start with a conversation.", serviceTitle: "What do you have?",
    serviceIntro: "Send a photo and an approximate quantity to ask first. The purchase price and acceptance will be confirmed after the item's condition is reviewed.",
    serviceCards: [
      ["Sarees & traditional wear", "Old sarees and other Indian garments — tell us their condition when you enquire.", "◌"],
      ["Pants, shirts & T-shirts", "Everyday pre-worn clothes — share photos and an approximate quantity.", "⌁"],
      ["Kurtis & other clothes", "Kurtis and other used clothes kept at home.", "✳"],
      ["Old mobiles & other items", "Ask separately about old/broken mobiles and other pre-owned items.", "⌑"]
    ],
    serviceFoot: "Please confirm the price and pickup before making a plan.", serviceCta: "Ask first <span aria-hidden=\"true\">↗</span>",
    pickupEyebrow: "At your door — ask about availability", pickupTitle: "Home pickup.<br>Simply discussed.",
    pickupLead: "Ask whether home pickup is available for your area, items and preferred time in Mumbai. Share photos first; arrange a pickup only after availability is confirmed.",
    pickupCta: "Ask about pickup <span aria-hidden=\"true\">↗</span>", pickupRibbon: "Simple · Clear · Ask first",
    steps: [["Share a photo", "Send item photos and an approximate quantity by WhatsApp or phone."], ["Confirm the details", "Check the condition, category, purchase price and pickup area."], ["Choose a time", "Arrange pickup together once availability is confirmed."]],
    galleryEyebrow: "Fabric, colour & texture", galleryTitle: "A second life<br>starts with a first chat.",
    galleryLead: "These are real textile reference photos, not Banshree's shop or team. Replace them with genuine business photos when the owner provides them.",
    photoCaption1: "Another turn for colour", photoCaption2: "Sorting & reuse — representative image",
    imageCredit: "Photos: representative examples from Unsplash and MS Group Textiles. These are not photos of Banshree's own business.",
    locationEyebrow: "Service area · Mumbai", locationTitle: "Where you are<br>is where we start.",
    locationLead: "This is a general Mumbai city map—not a verified Banshree shop pin. Add the exact address and location only after the owner confirms them.",
    mapCta: "View Mumbai on Google Maps", mapBadge: "Exact business pin pending",
    profileTitle: "Google Business Profile", profileLead: "Add Banshree's verified listing link here once the owner confirms it.",
    profileHelp: "Google Business Profile help <span aria-hidden=\"true\">↗</span>",
    ownerEyebrow: "For the owner of this demo", ownerTitle: "Get it all clear.<br>Then move ahead.",
    ownerLead: "The owner checklist below is about website-build terms, not a policy for clothing buyers. Fill in each answer after it is confirmed.",
    ownerSummary: "Website price & responsibilities — pending confirmation",
    ownerNote: "This preview does not set a final quote, deadline or service contract. Understand and approve the complete written price and terms before paying.",
    ownerRows: ["Final total website price", "Domain and hosting term", "Whether SSL certificate is included", "Login ID / password details", "Can I edit photos and information myself later?", "Who handles backups and security?", "Is design and SEO included or separate?", "How many days to finish?", "Annual renewal or hidden charges?", "How long is post-launch support?", "Written scope/terms confirmed before payment", "Recipient number for the WhatsApp quote"],
    contactKicker: "Enquire about selling pre-loved clothes", contactBarText: "These buttons will open direct WhatsApp and phone links after the right business number is added.",
    callCta: "Call", whatsappCta: "WhatsApp",
    footerNote: "A Mumbai buyer of old clothes and other used items. Confirm pickup, price and availability first.",
    demoStamp: "DEMO · DETAILS TO BE CONFIRMED", footerLine: "Give your clothes another chance.",
    toast: "This demo does not yet have the verified business number. Add the owner's number to activate direct WhatsApp/Call.",
  },
};

const LANGUAGE_NAMES = { hi: "हिन्दी", mr: "मराठी", gu: "ગુજરાતી", bn: "বাংলা", en: "English" };
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
let activeLanguage = "hi";
let toastTimer;

function renderServiceCards(copy) {
  const grid = $("#service-grid");
  grid.innerHTML = copy.serviceCards.map(([title, description, icon], index) => `
    <article class="service-card reveal">
      <div class="service-card-number"><span>0${index + 1}</span><span aria-hidden="true">↗</span></div>
      <span class="service-icon" aria-hidden="true">${icon}</span>
      <h3>${title}</h3><p>${description}</p>
    </article>`).join("");
}

function renderSteps(copy) {
  $("#pickup-steps").innerHTML = copy.steps.map(([title, description], index) => `
    <article class="pickup-step reveal"><span class="pickup-step-num">0${index + 1}</span><div><h3>${title}</h3><p>${description}</p></div></article>`).join("");
}

function renderOwnerRows(copy) {
  $("#owner-grid").innerHTML = copy.ownerRows.map((question) => `<div class="owner-row"><strong>${question}</strong><span>${activeLanguage === "en" ? "Pending confirmation" : (activeLanguage === "mr" ? "पुष्टी बाकी" : activeLanguage === "gu" ? "પુષ્ટિ બાકી" : activeLanguage === "bn" ? "নিশ্চিত হওয়া বাকি" : "पुष्टि लंबित")}</span></div>`).join("");
}

function animateReveals() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!window.gsap || reduceMotion || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      window.gsap.fromTo(entry.target, { autoAlpha: 0, y: 17 }, { autoAlpha: 1, y: 0, duration: 0.62, ease: "power2.out", clearProps: "all" });
    });
  }, { threshold: 0.11 });
  $$(".reveal").forEach((element) => observer.observe(element));
}

function applyContactLinks(copy) {
  const verifiedPhone = SITE_DETAILS.phone.trim();
  const verifiedWhatsApp = SITE_DETAILS.whatsapp.replace(/\D/g, "");
  $$('[data-contact="call"]').forEach((element) => {
    if (verifiedPhone) {
      element.href = `tel:${verifiedPhone}`;
      element.removeAttribute("aria-disabled");
      element.title = copy.callCta;
    } else {
      element.href = "#contact";
      element.setAttribute("aria-disabled", "true");
      element.title = copy.contactStatus;
    }
  });
  $$('[data-contact="whatsapp"]').forEach((element) => {
    if (verifiedWhatsApp) {
      const text = activeLanguage === "en"
        ? "Hello, I have old clothes or used items. Please share purchase and home-pickup details."
        : activeLanguage === "mr"
          ? "नमस्कार, माझ्याकडे जुने कपडे किंवा वस्तू आहेत. खरेदी व घरून pickup बद्दल माहिती द्या."
          : activeLanguage === "gu"
            ? "નમસ્તે, મારી પાસે જૂનાં કપડાં અથવા વસ્તુઓ છે. ખરીદી અને ઘરેથી pickupની માહિતી આપશો."
            : activeLanguage === "bn"
              ? "নমস্কার, আমার কাছে পুরোনো পোশাক বা জিনিস আছে। কেনা ও বাড়ি থেকে pickup-এর তথ্য দিন।"
              : "नमस्ते, मेरे पास पुराने कपड़े या सामान हैं। खरीदी और घर से pickup की जानकारी दें।";
      element.href = `https://wa.me/${verifiedWhatsApp}?text=${encodeURIComponent(text)}`;
      element.removeAttribute("aria-disabled");
      element.title = copy.whatsappCta;
    } else {
      element.href = "#contact";
      element.setAttribute("aria-disabled", "true");
      element.title = copy.contactStatus;
    }
  });
  const profile = $("#profile-url");
  if (profile && SITE_DETAILS.businessProfileUrl.trim()) {
    profile.href = SITE_DETAILS.businessProfileUrl.trim();
    profile.textContent = copy.profileVerified;
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

function setLanguage(language, save = true) {
  const copy = COPY[language] ? COPY[language] : COPY.hi;
  activeLanguage = COPY[language] ? language : "hi";
  document.documentElement.lang = copy.htmlLang;
  document.title = copy.title;
  const mapFrame = document.querySelector(".map-frame iframe");
  if (mapFrame) mapFrame.title = copy.locationLead;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = copy.description;
  $$('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (typeof value === "string") element.innerHTML = value;
  });
  const languageSelect = $("#language-select");
  if (languageSelect) {
    languageSelect.setAttribute("aria-label", copy.languageLabel);
    if (languageSelect.value !== activeLanguage) languageSelect.value = activeLanguage;
  }
  $$(".ticker-track span").forEach((element, index) => { element.textContent = copy.ticker[index % copy.ticker.length]; });
  renderServiceCards(copy);
  renderSteps(copy);
  renderOwnerRows(copy);
  applyContactLinks(copy);
  if (save) {
    try { localStorage.setItem("banshree-language", activeLanguage); } catch (_) { /* Storage can be unavailable in private browsing. */ }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = String(new Date().getFullYear());
  let preferred = "hi";
  try { preferred = localStorage.getItem("banshree-language") || "hi"; } catch (_) { /* Keep Hindi as the safe default. */ }
  setLanguage(preferred, false);
  $("#language-select").addEventListener("change", (event) => setLanguage(event.target.value));
  document.addEventListener("click", (event) => {
    const contact = event.target.closest('[data-contact]');
    if (!contact || contact.getAttribute("aria-disabled") !== "true") return;
    event.preventDefault();
    showToast(COPY[activeLanguage].toast);
  });
  animateReveals();
});
