// Fraud Detection Logic for FraudShield AI

// Translations for UI and static content
export const translations = {
  en: {
    title: "FraudShield AI",
    subtitle: "Protect yourself from digital fraud — get an instant AI verdict",
    statsHeader: "2.81 million cybercrime cases in India in 2025. Don't become a statistic.",
    placeholder: "Paste the suspicious SMS, WhatsApp message, describe what the caller said, or tell us what happened...",
    checkBtn: "Check a Suspicious Message →",
    analyzeBtn: "Analyze Now",
    analyzing: "Analyzing...",
    emptyError: "Please enter some text to analyze.",
    langEn: "English",
    langHi: "हिंदी",
    verdict: "VERDICT",
    riskLevel: "RISK LEVEL",
    scamType: "SCAM TYPE",
    redFlags: "RED FLAGS DETECTED",
    actions: "WHAT TO DO RIGHT NOW",
    report: "REPORT HERE",
    explanation: "PLAIN ENGLISH EXPLANATION",
    nationalHelpline: "National Cybercrime Helpline",
    onlinePortal: "Online Reporting Portal",
    reportPortalText: "cybercrime.gov.in",
    disclaimer: "Disclaimer: FraudShield AI is an awareness tool based on common fraud patterns. Always verify independently and report any suspicious activity to the official authorities.",
    scamTitle: "Common Scams in India",
    scamSubtitle: "Learn how these scams work to protect yourself and your family.",
    statSource: "Source: Ministry of Home Affairs & Cybercrime Reports",
    copyBtn: "Copy Verdict Report",
    copied: "Copied!",
    legitimateMsg: "This message/scenario does not match any known scam patterns. However, please remain cautious and never share OTPs or click unverified links.",
    high: "HIGH",
    medium: "MEDIUM",
    low: "LOW",
    scam: "SCAM",
    likelyScam: "LIKELY SCAM",
    suspicious: "SUSPICIOUS",
    legitimate: "LEGITIMATE",
  },
  hi: {
    title: "FraudShield AI (फ्रॉडशील्ड एआई)",
    subtitle: "डिजिटल धोखाधड़ी से खुद को बचाएं — तुरंत एआई फैसला पाएं",
    statsHeader: "2025 में भारत में 28.1 लाख साइबर अपराध के मामले दर्ज किए गए। इसका शिकार न बनें।",
    placeholder: "संदेहास्पद एसएमएस, व्हाट्सऐप मैसेज पेस्ट करें, या कॉलर ने जो कहा वह लिखें...",
    checkBtn: "संदेहास्पद मैसेज की जांच करें →",
    analyzeBtn: "अभी विश्लेषण करें",
    analyzing: "विश्लेषण किया जा रहा है...",
    emptyError: "कृपया विश्लेषण करने के लिए कुछ टेक्स्ट लिखें।",
    langEn: "English",
    langHi: "हिंदी",
    verdict: "फैसला (VERDICT)",
    riskLevel: "जोखिम का स्तर (RISK LEVEL)",
    scamType: "घोटाले का प्रकार (SCAM TYPE)",
    redFlags: "संदेहास्पद संकेत (RED FLAGS DETECTED)",
    actions: "अभी तुरंत क्या करें (WHAT TO DO RIGHT NOW)",
    report: "यहाँ रिपोर्ट करें (REPORT HERE)",
    explanation: "आसान शब्दों में व्याख्या (EXPLANATION)",
    nationalHelpline: "राष्ट्रीय साइबर अपराध हेल्पलाइन",
    onlinePortal: "ऑनलाइन रिपोर्टिंग पोर्टल",
    reportPortalText: "cybercrime.gov.in",
    disclaimer: "अस्वीकरण: फ्रॉडशील्ड एआई सामान्य धोखाधड़ी पैटर्न पर आधारित एक जागरूकता उपकरण है। हमेशा स्वतंत्र रूप से जांच करें और किसी भी संदेहास्पद गतिविधि की रिपोर्ट आधिकारिक अधिकारियों को करें।",
    scamTitle: "भारत में आम घोटाले",
    scamSubtitle: "अपने और अपने परिवार की सुरक्षा के लिए जानें कि ये घोटाले कैसे काम करते हैं।",
    statSource: "स्रोत: गृह मंत्रालय और साइबर अपराध रिपोर्ट",
    copyBtn: "रिपोर्ट कॉपी करें",
    copied: "कॉपी हो गया!",
    legitimateMsg: "यह संदेश/परिस्थिति किसी भी ज्ञात घोटाले के पैटर्न से मेल नहीं खाती है। फिर भी, कृपया सतर्क रहें और कभी भी ओटीपी साझा न करें या असत्यापित लिंक पर क्लिक न करें।",
    high: "उच्च (HIGH)",
    medium: "मध्यम (MEDIUM)",
    low: "निम्न (LOW)",
    scam: "स्कैम (SCAM)",
    likelyScam: "स्कैम की संभावना (LIKELY SCAM)",
    suspicious: "संदेहास्पद (SUSPICIOUS)",
    legitimate: "सुरक्षित (LEGITIMATE)",
  }
};

// Dictionaries of keywords for matching
const SCAM_PATTERNS = {
  digital_arrest: {
    id: "digital_arrest",
    nameEn: "Digital Arrest Scam",
    nameHi: "डिजिटल अरेस्ट स्कैम",
    keywords: [
      "digital arrest", "cbi", "ed", "customs", "trai", "police", "aadhaar", 
      "sim blocked", "illegal activities", "illegal package", "crime", "skype", 
      "video call", "stay on call", "clear name", "cops", "arrest", "narcotics", 
      "ncb", "dcp", "mumbai police", "cyber cell", "arrest warrant", "money laundering",
      "डिजिटल अरेस्ट", "पुलिस", "सिम ब्लॉक", "गैरकानूनी", "ड्रग्स", "नार्कोटिक्स", 
      "स्काइप", "कॉल पर बने रहें", "आधार कार्ड", "मनी लॉन्ड्रिंग", "गिरफ्तारी"
    ]
  },
  kyc_suspension: {
    id: "kyc_suspension",
    nameEn: "KYC / SIM Suspension Scam",
    nameHi: "केवाईसी / सिम निलंबन घोटाला",
    keywords: [
      "kyc", "suspension", "suspended", "sim blocked", "sim card block", "expire", 
      "verification", "update kyc", "otp", "anydesk", "teamviewer", "remote access", 
      "verification code", "document update", "jio kyc", "airtel kyc", "bsp kyc",
      "केवाईसी", "सस्पेंड", "सिम बंद", "ओटीपी", "रिमोट ऐप", "दस्तावेज़ अपडेट", "सत्यापन"
    ]
  },
  fake_upi_refund: {
    id: "fake_upi_refund",
    nameEn: "Fake UPI Refund Scam",
    nameHi: "फर्जी यूपीआई रिफंड घोटाला",
    keywords: [
      "refund", "upi refund", "gpay refund", "phonepe refund", "paytm refund", 
      "request", "approve request", "enter pin", "send money to receive", "received cash", 
      "cashback", "pay request", "receive cashback", "scan qr", "collect request",
      "रिफंड", "पैसे वापस", "पिन डालें", "रिक्वेस्ट एक्सेप्ट", "कैशबैक", "क्यूआर कोड", "पिन दर्ज करें"
    ]
  },
  lottery_prize: {
    id: "lottery_prize",
    nameEn: "Lottery / Prize Scam",
    nameHi: "लॉटरी / इनाम घोटाला",
    keywords: [
      "lottery", "prize", "won", "iphone", "kbc", "lucky draw", "gst fee", 
      "processing fee", "claim fee", "crore", "winner", "congratulations won",
      "car prize", "kaun banega crorepati",
      "लॉटरी", "इनाम", "जीता", "आईफोन", "केबीसी", "प्रोसेसिंग फीस", "जीएसटी", "विजेता", "लकी ड्रा"
    ]
  },
  fake_courier: {
    id: "fake_courier",
    nameEn: "Fake Courier Scam",
    nameHi: "फर्जी कूरियर घोटाला",
    keywords: [
      "courier", "parcel", "package", "drugs", "contraband", "fedex", "dhl", 
      "customs department", "illegal parcel", "mumbai customs", "mdma", "passport confiscated",
      "पार्सल", "कूरियर", "फेडएक्स", "ड्रग्स", "सीमा शुल्क", "कस्टम्स", "अवैध पार्सल", "पासपोर्ट"
    ]
  },
  investment_trading: {
    id: "investment_trading",
    nameEn: "Investment / Trading Scam",
    nameHi: "निवेश / ट्रेडिंग घोटाला",
    keywords: [
      "investment", "trading", "whatsapp group", "stock tip", "guaranteed return", 
      "double money", "crypto trading", "fake app", "withdraw block", "ipo allotment", 
      "profits", "unregistered broker", "daily 10%", "institutional account",
      "इन्वेस्टमेंट", "ट्रेडिंग", "व्हाट्सएप ग्रुप", "मुनाफा", "गारंटी रिटर्न", "शेयर बाजार", "क्रिप्टो"
    ]
  },
  electricity_gas: {
    id: "electricity_gas",
    nameEn: "Electricity / Gas Disconnection Scam",
    nameHi: "बिजली / गैस कनेक्शन कटने का घोटाला",
    keywords: [
      "electricity", "disconnection", "mseb", "bses", "discom", "light bill", 
      "power cut", "gas connection", "bill overdue", "immediate disconnection", "update officer",
      "बिजली", "बिल बकाया", "लाइट कट", "बिजली कनेक्शन", "डिस्कनेक्शन", "पावर कट"
    ]
  },
  fake_bank_officer: {
    id: "fake_bank_officer",
    nameEn: "Fake Bank Officer Scam",
    nameHi: "फर्जी बैंक अधिकारी घोटाला",
    keywords: [
      "bank officer", "sbi", "hdfc", "icici", "otp", "unauthorized transaction", 
      "card blocked", "reverse transaction", "cvv", "credit card department", "manager",
      "revert charge", "verification department",
      "बैंक अधिकारी", "मैनेजर", "कार्ड ब्लॉक", "ओटीपी", "संदेहास्पद लेनदेन", "सीवीवी", "क्रेडिट कार्ड"
    ]
  }
};

// Scam details and recommendations
const SCAM_DETAILS = {
  digital_arrest: {
    en: {
      scamType: "Digital Arrest Scam",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "Callers pretending to be senior CBI, ED, TRAI, or police officials.",
        "Accusations that your identity (Aadhaar or SIM) is linked to serious crimes like money laundering or drug trafficking.",
        "Demand to stay on video calls (Skype/Zoom) for continuous surveillance (called 'digital arrest').",
        "Demanding money transfer into a secure government account to 'verify' or 'clear' your name."
      ],
      actions: [
        "Hang up immediately. No legitimate official will ever perform an investigation or make arrests via Skype or video call.",
        "Do NOT transfer any money. Government authorities never ask you to transfer funds to 'verify' your innocence.",
        "Do NOT share images of your Aadhaar card, bank cards, or other identity proofs."
      ],
      report: [
        "Report the incident on the National Cybercrime Portal: cybercrime.gov.in",
        "Report the fraud caller's phone number on the Chakshu Portal (Sanchar Saathi)."
      ],
      explanation: "This is a serious intimidation tactic. Fraudsters use fake IDs, uniforms, and mock offices to make you panic and transfer your life savings under the threat of immediate arrest. Real police will never arrest you online or ask you for money to clear your name."
    },
    hi: {
      scamType: "डिजिटल अरेस्ट घोटाला (Digital Arrest Scam)",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "खुद को सीबीआई, ईडी, ट्राई या वरिष्ठ पुलिस अधिकारी बताने वाले नकली फोन कॉल्स।",
        "दावा करना कि आपका आधार या सिम कार्ड मनी लॉन्ड्रिंग या ड्रग्स जैसे गंभीर अपराधों से जुड़ा है।",
        "आपको लगातार वीडियो कॉल (Skype/Zoom) पर बने रहने के लिए कहना (जिसे ये 'डिजिटल अरेस्ट' कहते हैं)।",
        "नाम साफ करने या जांच के नाम पर सरकारी खातों में पैसे ट्रांसफर करने की मांग करना।"
      ],
      actions: [
        "फोन तुरंत काट दें। कोई भी असली पुलिस अधिकारी वीडियो कॉल या व्हाट्सएप पर जांच नहीं करता है।",
        "कोई भी पैसा ट्रांसफर न करें। सरकारी एजेंसियां पैसे लेकर ऑनलाइन मामला रफा-दफा नहीं करती हैं।",
        "अपने आधार कार्ड, बैंक कार्ड या किसी अन्य दस्तावेज की फोटो शेयर न करें।"
      ],
      report: [
        "राष्ट्रीय साइबर अपराध पोर्टल पर शिकायत करें: cybercrime.gov.in",
        "संचार साथी के 'चक्षु' पोर्टल पर फ्रॉड करने वाले नंबर को रिपोर्ट करें।"
      ],
      explanation: "यह डराने-धमकाने का एक तरीका है। धोखेबाज फर्जी पुलिस की वर्दी या दस्तावेज दिखाकर आपको जेल भेजने की धमकी देते हैं और आपकी मेहनत की कमाई हड़प लेते हैं। असली कानून लागू करने वाली संस्थाएं कभी भी डिजिटल रूप से किसी को गिरफ्तार नहीं करती हैं।"
    }
  },
  kyc_suspension: {
    en: {
      scamType: "KYC / SIM Suspension Scam",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "Claims that your SIM card, bank account, or e-wallet will be blocked within hours.",
        "Demand to share a one-time password (OTP) or install an app like AnyDesk or TeamViewer.",
        "Threatening tone forcing you to do the verification immediately."
      ],
      actions: [
        "Do NOT share any OTP under any circumstances.",
        "Never install remote access applications like AnyDesk, TeamViewer, or RustDesk on your phone.",
        "Call your bank or telecom operator directly using the official helpline from their official website."
      ],
      report: [
        "National Cybercrime Helpline: 1930",
        "Report on the Chakshu Portal (sancharsaathi.gov.in) to get the scammer's number blocked."
      ],
      explanation: "Fraudsters call you claiming to be telecom agents or bank officers to get your credentials. Once you share OTP or download a remote access app, they gain control of your phone and empty your bank accounts."
    },
    hi: {
      scamType: "केवाईसी / सिम निलंबन घोटाला (KYC / SIM Suspension)",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "दावा करना कि आपका सिम कार्ड या बैंक खाता कुछ ही घंटों में बंद कर दिया जाएगा।",
        "केवाईसी अपडेट करने के बहाने ओटीपी मांगने या AnyDesk/TeamViewer जैसी ऐप इंस्टॉल करने के लिए कहना।",
        "डराकर तुरंत कार्रवाई करने के लिए दबाव बनाना।"
      ],
      actions: [
        "किसी भी परिस्थिति में किसी के साथ ओटीपी (OTP) साझा न करें।",
        "अपने मोबाइल पर AnyDesk, RustDesk या TeamViewer जैसी स्क्रीन शेयरिंग ऐप्स डाउनलोड न करें।",
        "आधिकारिक वेबसाइट से नंबर लेकर सीधे अपने टेलीकॉम ऑपरेटर या बैंक से संपर्क करें।"
      ],
      report: [
        "राष्ट्रीय साइबर अपराध हेल्पलाइन: 1930",
        "संदेहास्पद नंबरों की रिपोर्ट संचार साथी के चक्षु पोर्टल पर करें।"
      ],
      explanation: "धोखेबाज टेलीकॉम कर्मचारी बनकर कॉल करते हैं। वे आपका विश्वास जीतने के लिए केवाईसी का बहाना बनाते हैं। यदि आप ओटीपी देते हैं या रिमोट स्क्रीन ऐप डाउनलोड करते हैं, तो वे आपके मोबाइल और बैंक खातों का नियंत्रण हासिल कर लेते हैं।"
    }
  },
  fake_upi_refund: {
    en: {
      scamType: "Fake UPI Refund Scam",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "Someone claiming they sent you money by mistake and asking you to return it.",
        "Receiving a payment notification where you are asked to 'Approve' or 'Enter UPI PIN'.",
        "The caller insisting that entering your PIN is necessary to receive or accept a refund."
      ],
      actions: [
        "Remember: You NEVER need to enter your UPI PIN to receive money. PIN is only for sending money.",
        "Decline any 'Pay' or 'Collect' request in your UPI apps (GPay, PhonePe, Paytm).",
        "Do NOT scan any QR codes sent by strangers to 'accept cash'."
      ],
      report: [
        "File a complaint with your UPI app support instantly.",
        "Report the incident at cybercrime.gov.in."
      ],
      explanation: "Scammers take advantage of the UPI interface by sending a money REQUEST instead of transferring money. They convince you that you are accepting a refund, but the moment you enter your PIN, the money is deducted from your account."
    },
    hi: {
      scamType: "फर्जी यूपीआई रिफंड घोटाला (Fake UPI Refund)",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "दावा करना कि गलती से आपके अकाउंट में पैसे भेज दिए गए हैं और उन्हें वापस करने के लिए कहना।",
        "यूपीआई ऐप पर भुगतान का अनुरोध (Request) प्राप्त होना जहाँ 'Approve' या 'UPI PIN' डालने के लिए कहा जाए।",
        "कॉलर का यह दावा करना कि पैसे प्राप्त करने के लिए भी आपको अपना पिन डालना होगा।"
      ],
      actions: [
        "याद रखें: पैसे प्राप्त करने के लिए कभी भी यूपीआई पिन (UPI PIN) दर्ज करने की आवश्यकता नहीं होती।",
        "GPay, PhonePe या Paytm पर आए किसी भी संदेहास्पद 'Pay' या 'Collect' रिक्वेस्ट को रिजेक्ट करें।",
        "पैसे पाने के लिए कभी भी किसी अनजान व्यक्ति द्वारा भेजा गया क्यूआर (QR) कोड स्कैन न करें।"
      ],
      report: [
        "अपने संबंधित यूपीआई ऐप और बैंक के कस्टमर सपोर्ट पर तुरंत शिकायत दर्ज करें।",
        "साइबर अपराध पोर्टल (cybercrime.gov.in) पर रिपोर्ट दर्ज करें।"
      ],
      explanation: "ठग यूपीआई ऐप की 'कलेक्ट मनी' सुविधा का गलत फायदा उठाते हैं। वे आपको पैसे भेजने के बजाय पैसे का अनुरोध भेजते हैं। जैसे ही आप इसे स्वीकार कर अपना पिन डालते हैं, आपके खाते से पैसे कट जाते हैं।"
    }
  },
  lottery_prize: {
    en: {
      scamType: "Lottery / Prize Scam",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "Unsolicited messages claiming you have won a lottery, lucky draw, or an iPhone (often naming KBC or large brands).",
        "Requirement to pay 'GST', 'Processing Fee', or 'Customs Duty' in advance before claiming the prize.",
        "The sender contacting you from a generic email domain or an unknown WhatsApp number."
      ],
      actions: [
        "Do NOT pay any money upfront. Legitimate contests never ask winners to pay fees to claim prizes.",
        "Ignore the message. Block the sender immediately.",
        "Do NOT share bank account details or photos of your identification documents."
      ],
      report: [
        "Report the WhatsApp number as spam.",
        "File a complaint on cybercrime.gov.in."
      ],
      explanation: "This is an advance-fee fraud. The scammers lure you with the excitement of winning a massive prize, and then disappear once you pay the fake taxes or registration fees they ask for."
    },
    hi: {
      scamType: "लॉटरी / इनाम घोटाला (Lottery / Prize)",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "दावा करना कि आपने केबीसी (KBC) लॉटरी, कोई बड़ा लकी ड्रा या कीमती आईफोन जीता है।",
        "इनाम का दावा करने के लिए अग्रिम रूप से 'जीएसटी', 'प्रोसेसिंग फीस' या 'फाइल चार्ज' जमा करने को कहना।",
        "अनजान व्हाट्सएप नंबर या संदिग्ध ईमेल से संदेश आना।"
      ],
      actions: [
        "कोई भी अग्रिम राशि (Upfront Fees) का भुगतान न करें। कोई भी असली कंपनी इनाम देने के लिए पैसे नहीं मांगती।",
        "संदेश को नजरअंदाज करें और उस नंबर को तुरंत ब्लॉक करें।",
        "अपना बैंक अकाउंट नंबर या आधार कार्ड की डिटेल्स साझा न करें।"
      ],
      report: [
        "व्हाट्सएप पर उस नंबर को स्पैम और ब्लॉक के रूप में रिपोर्ट करें।",
        "cybercrime.gov.in पर शिकायत दर्ज कराएं।"
      ],
      explanation: "यह एडवांस-फीस फ्रॉड है। ठग आपको बड़ा इनाम जीतने का लालच देते हैं और फिर जीएसटी या बैंक चार्ज के नाम पर आपसे किश्तों में पैसे वसूलते हैं। पैसे मिलते ही वे गायब हो जाते हैं।"
    }
  },
  fake_courier: {
    en: {
      scamType: "Fake Courier / Narcotics Scam",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "Calls claiming a parcel sent by you contains illegal substances (like MDMA, drugs, or fake passports).",
        "Impersonation of FedEx, DHL, or Mumbai Customs officers.",
        "Threatening that the police or NCB (Narcotics Control Bureau) has taken custody and you must clear your name by transferring funds."
      ],
      actions: [
        "Hang up immediately. Courier agencies never call to threaten you with police action.",
        "Do NOT share your passport details or bank details.",
        "If you actually sent a parcel, check the official tracking portal directly on the courier website."
      ],
      report: [
        "Report the calling number on the Chakshu Portal.",
        "Contact the nearest police station if threats continue."
      ],
      explanation: "Scammers frighten you with drug trafficking accusations to make you panic. They tell you that a parcel in your name was seized, and direct you to fake investigators who demand a security deposit to clear you of charges."
    },
    hi: {
      scamType: "फर्जी कूरियर / ड्रग्स घोटाला (Fake Courier / Narcotics)",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "कॉल पर कहना कि आपके द्वारा भेजा गया एक पार्सल पकड़ा गया है जिसमें अवैध ड्रग्स या नकली पासपोर्ट हैं।",
        "खुद को FedEx, DHL या कस्टम अधिकारी बताना।",
        "यह कहना कि पुलिस या नार्कोटिक्स विभाग (NCB) ने मामला दर्ज कर लिया है और आपको खुद को निर्दोष साबित करने के लिए सिक्योरिटी मनी देनी होगी।"
      ],
      actions: [
        "कॉल तुरंत काट दें। कूरियर कंपनियां पुलिस कार्रवाई की धमकी देने के लिए कॉल नहीं करती हैं।",
        "अपना पासपोर्ट नंबर या बैंक विवरण साझा न करें।",
        "यदि आपने वास्तव में कोई पार्सल भेजा है, तो कूरियर की आधिकारिक वेबसाइट पर जाकर ट्रैकिंग आईडी से जांच करें।"
      ],
      report: [
        "राष्ट्रीय साइबर अपराध हेल्पलाइन (1930) पर सूचना दें।",
        "चक्षु पोर्टल पर जाकर इस धोखाधड़ी वाले नंबर की रिपोर्ट करें।"
      ],
      explanation: "धोखेबाज आपको डराने के लिए ड्रग तस्करी का झूठा आरोप लगाते हैं। वे दावा करते हैं कि मुंबई या किसी अन्य हवाई अड्डे पर आपका पार्सल जब्त हुआ है, और फिर मामले को दबाने के लिए भारी रकम की मांग करते हैं।"
    }
  },
  investment_trading: {
    en: {
      scamType: "Investment & Stock Market Trading Scam",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "WhatsApp/Telegram groups promising 'insider stock tips' or 'guaranteed 200% returns'.",
        "Asking you to download a trading app or register on a portal that is not registered with SEBI.",
        "Initially showing massive paper profits on the app, but blocking any cash withdrawals unless you pay 'taxes' or 'withdrawal fees'."
      ],
      actions: [
        "Never invest money through apps recommended on WhatsApp/Telegram groups.",
        "Verify the broker's registration status on the SEBI official website.",
        "Do NOT transfer more money to 'withdraw' your existing profits."
      ],
      report: [
        "Report the group and the admins on Telegram/WhatsApp.",
        "Submit a complaint immediately to the cybercrime cell and SEBI."
      ],
      explanation: "Fraudsters lure you with dreams of quick wealth using simulated trading screens. The profits you see are completely fake; they block withdrawals and demand more money as taxes to loot you further."
    },
    hi: {
      scamType: "ट्रेडिंग और शेयर बाजार निवेश घोटाला (Investment Scam)",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "व्हाट्सएप/टेलीग्राम ग्रुप में शामिल कर 'इनसाइडर टिप्स' या 'गारंटीड 200% मुनाफे' का लालच देना।",
        "सेबी (SEBI) से अपंजीकृत किसी अज्ञात ऐप या वेबसाइट पर निवेश करने के लिए कहना।",
        "शुरुआत में ऐप पर भारी मुनाफा दिखाना, लेकिन पैसे निकालने (Withdraw) की कोशिश करने पर उसे ब्लॉक कर देना।"
      ],
      actions: [
        "व्हाट्सएप या टेलीग्राम ग्रुप में बताई गई अज्ञात वेबसाइटों या ऐप्स में कभी भी निवेश न करें।",
        "SEBI की आधिकारिक वेबसाइट पर जाकर संबंधित ब्रोकर का रजिस्ट्रेशन नंबर जरूर चेक करें।",
        "पैसे निकालने के लिए टैक्स या कमीशन के रूप में और पैसे ट्रांसफर न करें।"
      ],
      report: [
        "व्हाट्सएप/टेलीग्राम पर उस ग्रुप और एडमिन को स्पैम के तौर पर रिपोर्ट करें।",
        "cybercrime.gov.in पर तुरंत वित्तीय धोखाधड़ी की शिकायत दर्ज करें।"
      ],
      explanation: "ठग आपको अमीर बनाने का झांसा देकर नकली ट्रेडिंग सॉफ्टवेयर में निवेश करवाते हैं। स्क्रीन पर दिखने वाला मुनाफा केवल नंबर होते हैं, वास्तविक पैसा नहीं। जब आप निकासी करना चाहते हैं, तो वे आपका खाता ब्लॉक कर देते हैं।"
    }
  },
  electricity_gas: {
    en: {
      scamType: "Electricity & Utility Disconnection Scam",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "SMS threatening immediate power or gas cut within tonight (usually 9:30 PM) due to an unpaid bill.",
        "Instructions to call a specific personal mobile number to update the bill details.",
        "Demanding payment on a personal UPI ID rather than the official board billing portal."
      ],
      actions: [
        "Do NOT call the mobile number listed in the SMS.",
        "Pay your utility bills ONLY via the official utility board app, website, or authorized portals (like Bharat BillPay).",
        "Ignore the immediate threat; utility boards never send SMS alerts asking you to call personal numbers."
      ],
      report: [
        "Report the mobile number as scam to the local electricity board.",
        "Report on the National Cybercrime Portal."
      ],
      explanation: "Scammers capitalize on the fear of losing basic utilities. They send panic-inducing messages threatening disconnection and trick victims into paying money to private UPI IDs to 'stop' the disconnection."
    },
    hi: {
      scamType: "बिजली / गैस कनेक्शन कटने का घोटाला (Electricity/Utility Scam)",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "बिजली या गैस का बिल बकाया होने के कारण आज रात बिजली काटने की धमकी वाला मैसेज।",
        "बिल अपडेट करने के लिए किसी अज्ञात मोबाइल नंबर पर संपर्क करने को कहना।",
        "आधिकारिक पोर्टल के बजाय किसी व्यक्तिगत यूपीआई आईडी (UPI ID) पर भुगतान करने के लिए दबाव बनाना।"
      ],
      actions: [
        "मैसेज में दिए गए किसी भी व्यक्तिगत मोबाइल नंबर पर कॉल न करें।",
        "अपने बिजली/गैस बिल का भुगतान केवल बोर्ड की आधिकारिक वेबसाइट, ऐप या अधिकृत भारत बिलपे (BBPS) प्लेटफॉर्म से करें।",
        "घबराएं नहीं, बिजली विभाग व्यक्तिगत नंबरों से ऐसे धमकी भरे मैसेज नहीं भेजता।"
      ],
      report: [
        "राष्ट्रीय साइबर अपराध हेल्पलाइन: 1930",
        "धोखाधड़ी वाले मैसेज और नंबर की शिकायत cybercrime.gov.in पर करें।"
      ],
      explanation: "ठग बिजली कटने के डर का फायदा उठाते हैं। वे आपको डराने के लिए तुरंत कनेक्शन काटने का संदेश भेजते हैं और खुद को बिजली अधिकारी बताकर पैसे ऐंठ लेते हैं।"
    }
  },
  fake_bank_officer: {
    en: {
      scamType: "Fake Bank Officer & OTP Fraud",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "Caller claiming to be from your bank's card security department, warning about a fraudulent charge.",
        "Urgent requests to share card numbers, CVV, or the OTP sent to your phone to 'reverse' the transaction.",
        "Caller insisting that your card will be permanently blocked if you do not cooperate immediately."
      ],
      actions: [
        "Never share your CVV, PIN, or OTP with anyone. Bank employees NEVER ask for these details.",
        "Hang up and check your account balance directly via your banking app.",
        "Block the scammer's number immediately."
      ],
      report: [
        "Call your bank's dedicated toll-free fraud helpline immediately to block your cards.",
        "Report the incident on the National Cybercrime Portal."
      ],
      explanation: "Scammers impersonate bank officers to gain your trust during a fake security crisis. They use the credit card details and OTP you share to perform unauthorized transactions and drain your bank account."
    },
    hi: {
      scamType: "फर्जी बैंक अधिकारी और ओटीपी घोटाला (Fake Bank Officer)",
      verdict: "SCAM",
      riskLevel: "HIGH",
      redFlags: [
        "बैंक के फ्रॉड विभाग से बोलने का दावा करते हुए आपके खाते में फर्जी लेन-देन की चेतावनी देना।",
        "उस ट्रांजेक्शन को रद्द करने के बहाने आपके डेबिट/क्रेडिट कार्ड नंबर, सीवीवी या ओटीपी (OTP) मांगना।",
        "बात न मानने पर कार्ड तुरंत ब्लॉक करने की चेतावनी देना।"
      ],
      actions: [
        "कभी भी अपना सीवीवी, पिन या ओटीपी साझा न करें। बैंक अधिकारी कभी भी ये विवरण नहीं मांगते हैं।",
        "कॉल काटें और अपने बैंक के आधिकारिक ऐप पर लॉग इन करके बैलेंस चेक करें।",
        "धोखाधड़ी करने वाले नंबर को ब्लॉक करें।"
      ],
      report: [
        "अपने बैंक की ग्राहक सेवा टीम को तुरंत कॉल करके अपने कार्ड्स को ब्लॉक करवाएं।",
        "राष्ट्रीय साइबर अपराध पोर्टल पर शिकायत दर्ज करें।"
      ],
      explanation: "अपराधी बैंक मैनेजर बनकर कॉल करते हैं और सुरक्षा चिंताओं का नाटक करते हैं। जैसे ही आप घबराहट में ओटीपी या कार्ड विवरण देते हैं, वे आपके खाते से पैसे ट्रांसफर कर लेते हैं।"
    }
  }
};

// Main analysis function
export function analyzeMessage(text, lang = "en") {
  if (!text || text.trim().length === 0) {
    return { error: translations[lang].emptyError };
  }

  // Normalize text: replace all non-alphanumeric/non-Hindi characters with space and pad with spaces
  const normalizedText = " " + text.toLowerCase()
    .replace(/[^a-zA-Z0-9\u0900-\u097F\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim() + " ";
  
  let bestMatch = null;
  let maxMatches = 0;

  // Search through all scam patterns using word boundaries
  Object.keys(SCAM_PATTERNS).forEach(key => {
    const pattern = SCAM_PATTERNS[key];
    let matchCount = 0;
    
    pattern.keywords.forEach(keyword => {
      const target = " " + keyword.toLowerCase().trim() + " ";
      if (normalizedText.includes(target)) {
        matchCount++;
      }
    });

    if (matchCount > maxMatches) {
      maxMatches = matchCount;
      bestMatch = key;
    }
  });

  // If we found a specific scam match (at least 1 keyword matched)
  if (bestMatch && maxMatches >= 1) {
    const details = SCAM_DETAILS[bestMatch][lang];
    return {
      verdict: details.verdict,
      riskLevel: details.riskLevel,
      scamType: details.scamType,
      redFlags: details.redFlags,
      actions: details.actions,
      report: details.report,
      explanation: details.explanation,
      isDetected: true
    };
  }

  // Check for marketing / promotional advertisement signals
  const marketingKeywords = [
    "bhk", "sqft", "sq.ft", "flat", "flats", "villa", "villas", "apartment", "apartments",
    "real estate", "residence", "residences", "property", "properties", "booking", "showroom",
    "carpet area", "possession", "residential", "township", "commercial space", "office space",
    "developer", "builders", "presale", "pre-sale", "prelaunch", "pre-launch"
  ];

  let marketingMatches = 0;
  marketingKeywords.forEach(keyword => {
    const target = " " + keyword.toLowerCase().trim() + " ";
    if (normalizedText.includes(target)) {
      marketingMatches++;
    }
  });

  // If it has marketing terms and no fraud pattern match, override to LEGITIMATE (Promotional)
  if (marketingMatches >= 1) {
    return {
      verdict: "LEGITIMATE",
      riskLevel: "LOW",
      scamType: lang === "en" ? "Promotional / Marketing Ad" : "प्रचार संबंधी विज्ञापन (Promotional Ad)",
      redFlags: lang === "en" ? [
        "Contains marketing terminology (BHK, property, square feet).",
        "Includes a promotional link to contact the sales team or check details."
      ] : [
        "प्रचार संबंधी शब्दावली (BHK, संपत्ति, स्क्वायर फीट) शामिल है।",
        "बिक्री टीम से संपर्क करने या विवरण जांचने के लिए एक प्रचार लिंक शामिल है।"
      ],
      actions: lang === "en" ? [
        "This appears to be a real estate or commercial advertisement.",
        "You can ignore or delete it if you are not interested.",
        "Avoid sharing personal details unless you verify the developer's credentials."
      ] : [
        "यह एक रियल एस्टेट या व्यावसायिक विज्ञापन प्रतीत होता है।",
        "यदि आपकी रुचि नहीं है, तो आप इसे अनदेखा कर सकते हैं या हटा सकते हैं।",
        "जब तक आप डेवलपर की साख को सत्यापित नहीं कर लेते, तब तक व्यक्तिगत विवरण साझा करने से बचें।"
      ],
      report: lang === "en" ? [
        "No reporting required. Block the sender if they spam persistently."
      ] : [
        "रिपोर्ट करने की आवश्यकता नहीं है। यदि वे बार-बार स्पैम करते हैं तो प्रेषक को ब्लॉक करें।"
      ],
      explanation: lang === "en"
        ? "This message is a typical promotional advertisement or marketing text (likely for a property or housing project). It is not a financial or identity theft scam."
        : "यह संदेश एक सामान्य प्रचार संबंधी विज्ञापन या विपणन पाठ है (संभवतः किसी संपत्ति या आवास परियोजना के लिए)। यह कोई वित्तीय या पहचान की चोरी का घोटाला नहीं है।",
      isDetected: false
    };
  }

  // Check for general suspicious keywords using word boundaries
  const suspiciousKeywords = [
    "otp", "pin", "password", "cvv", "card number", "card details", "username",
    "urgent", "immediate", "click link", "click here", "http", "https", "link",
    "verification", "verify", "suspend", "block", "freeze", "limit", "pay",
    "winnings", "lottery", "cashback", "refund", "invest", "percent", "returns",
    "ओटीपी", "पिन", "पासवर्ड", "लिंक", "क्लिक करें", "तुरंत", "अति आवश्यक", "अपडेट"
  ];

  let suspiciousMatches = 0;
  suspiciousKeywords.forEach(keyword => {
    const target = " " + keyword.toLowerCase().trim() + " ";
    if (normalizedText.includes(target)) {
      suspiciousMatches++;
    }
  });

  if (suspiciousMatches >= 2) {
    return {
      verdict: "LIKELY SCAM",
      riskLevel: "MEDIUM",
      scamType: lang === "en" ? "Suspicious Request" : "संदेहास्पद अनुरोध (Suspicious Request)",
      redFlags: lang === "en" ? [
        "Urgent requests requesting personal information or action.",
        "Contains links or prompts to verify credentials.",
        "Involves terms related to financial transactions or accounts."
      ] : [
        "व्यक्तिगत जानकारी या त्वरित कार्रवाई का आग्रह करने वाले संदिग्ध संकेत।",
        "क्रेडेंशियल सत्यापित करने के लिए आए लिंक्स।",
        "वित्तीय लेनदेन या खातों से संबंधित शर्तों का उल्लेख।"
      ],
      actions: lang === "en" ? [
        "Do NOT click any link in the message.",
        "Never share OTPs, PINs, or credentials with anyone calling or messaging.",
        "Confirm directly with the service provider through official numbers."
      ] : [
        "मैसेज में दिए गए किसी भी लिंक पर क्लिक न करें।",
        "कॉल या मैसेज करने वाले किसी भी व्यक्ति के साथ कभी भी ओटीपी, पिन या क्रेडेंशियल साझा न करें।",
        "आधिकारिक नंबरों के माध्यम से सीधे संबंधित प्रदाता से पुष्टि करें।"
      ],
      report: [
        "Report on the National Cybercrime Portal: cybercrime.gov.in",
        "National Cybercrime Helpline: 1930"
      ],
      explanation: lang === "en" 
        ? "This message displays multiple security red flags, including urgent phrasing and requests for verification/action. Do not engage, share information, or follow links."
        : "यह संदेश तत्काल कार्रवाई का दबाव डालने और सत्यापन जैसे संदेहास्पद संकेतों को दर्शाता है। इससे दूर रहें, कोई जानकारी साझा न करें और न ही किसी लिंक पर क्लिक करें।",
      isDetected: true
    };
  } else if (suspiciousMatches === 1) {
    return {
      verdict: "SUSPICIOUS",
      riskLevel: "LOW",
      scamType: lang === "en" ? "Unverified Link/Sender" : "अपुष्ट लिंक या प्रेषक",
      redFlags: lang === "en" ? [
        "The sender is unknown or the request is unsolicited.",
        "Includes a hyperlink or request to check details."
      ] : [
        "प्रेषक अज्ञात है या यह बिना माँगे आया संदेश है।",
        "इसमें कोई हाइपरलिंक या विवरण जांचने का अनुरोध शामिल है।"
      ],
      actions: lang === "en" ? [
        "Avoid opening any attachments or clicking hyperlinks.",
        "Block the unknown sender on your messaging application.",
        "Do not reply or share personal identifiers."
      ] : [
        "किसी भी अटैचमेंट को खोलने या हाइपरलिंक पर क्लिक करने से बचें।",
        "अपने मैसेजिंग एप्लिकेशन पर अज्ञात प्रेषक को ब्लॉक करें।",
        "जवाब न दें या व्यक्तिगत विवरण साझा न करें।"
      ],
      report: [
        "Report spam on WhatsApp or SMS filters.",
        "If you encounter a financial loss, report instantly on Helpline 1930."
      ],
      explanation: lang === "en"
        ? "While this doesn't match an active major fraud script, it originates from an unverified source and prompts interaction. Treat it with caution and do not disclose personal information."
        : "हालांकि यह किसी बड़े फ्रॉड स्क्रिप्ट से मेल नहीं खाता है, फिर भी यह एक अज्ञात स्रोत से आया है। सावधानी बरतें और कोई भी व्यक्तिगत जानकारी साझा न करें।",
      isDetected: true
    };
  }

  // If text is safe
  return {
    verdict: "LEGITIMATE",
    riskLevel: "LOW",
    scamType: lang === "en" ? "Safe Content" : "सुरक्षित सामग्री",
    redFlags: lang === "en" ? [
      "No urgency, threats, or authority claims detected.",
      "No requests for financial transfers, PINs, OTPs, or credentials."
    ] : [
      "कोई तात्कालिकता, धमकी या सरकारी प्राधिकरण का दावा नहीं मिला।",
      "वित्तीय लेनदेन, पिन, ओटीपी या क्रेडेंशियल्स की कोई मांग नहीं है।"
    ],
    actions: lang === "en" ? [
      "You can safely respond, but maintain basic digital hygiene.",
      "Never share OTPs even with trusted contacts if they ask suddenly."
    ] : [
      "आप सुरक्षित रूप से उत्तर दे सकते हैं, लेकिन बुनियादी डिजिटल स्वच्छता बनाए रखें।",
      "यदि कोई अचानक पूछे तो अपने करीबी संपर्कों के साथ भी ओटीपी साझा न करें।"
    ],
    report: [
      "No reporting needed unless circumstances change."
    ],
    explanation: lang === "en"
      ? "The text does not show any signs of pressure, scam scripts, or requests for sensitive information. It appears to be normal communication."
      : "इस टेक्स्ट में कोई भी दबाव डालने, धोखाधड़ी करने या संवेदनशील जानकारी मांगने का संकेत नहीं मिला है। यह सामान्य बातचीत प्रतीत होती है।",
    isDetected: false
  };
}
