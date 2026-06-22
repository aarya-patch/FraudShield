import React from 'react';
import { translations } from '../utils/analyzer';

const SCAM_ITEMS = [
  {
    icon: (
      <svg style={{width:'24px', height:'24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    titleEn: "Digital Arrest Scam",
    titleHi: "डिजिटल अरेस्ट स्कैम",
    descEn: "Fraudsters pose as CBI/ED officers and threaten arrest via continuous Skype video calls, demanding cash to clear your name.",
    descHi: "धोखेबाज सीबीआई/ईडी अधिकारी बनकर वीडियो कॉल पर गिरफ्तारी की धमकी देते हैं और नाम साफ करने के लिए पैसे मांगते हैं।"
  },
  {
    icon: (
      <svg style={{width:'24px', height:'24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    titleEn: "KYC / SIM Suspension",
    titleHi: "केवाईसी / सिम निलंबन घोटाला",
    descEn: "Fake calls claiming your SIM card or bank KYC is expired. They ask for an OTP or prompt you to download screen sharing apps.",
    descHi: "सिम या बैंक केवाईसी एक्सपायर होने का दावा करने वाले कॉल। वे ओटीपी मांगते हैं या रिमोट स्क्रीन शेयरिंग ऐप डाउनलोड कराते हैं।"
  },
  {
    icon: (
      <svg style={{width:'24px', height:'24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    titleEn: "Fake UPI Refund",
    titleHi: "फर्जी यूपीआई रिफंड घोटाला",
    descEn: "Scammers request payments disguised as refunds or cashback. Approving it with your UPI PIN withdraws money instead of receiving it.",
    descHi: "धोखेबाज रिफंड या कैशबैक के बहाने पैसे का अनुरोध भेजते हैं। यूपीआई पिन डालते ही आपके अकाउंट से पैसे कट जाते हैं।"
  },
  {
    icon: (
      <svg style={{width:'24px', height:'24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    titleEn: "Lottery / Prize Scam",
    titleHi: "लॉटरी / इनाम घोटाला",
    descEn: "Messages claiming you won a car, lucky draw, or KBC lottery. They demand upfront 'processing fees' or GST deposits to claim it.",
    descHi: "संदेश जिसमें दावा होता है कि आपने कोई कार या केबीसी लॉटरी जीती है। दावा करने के लिए वे अग्रिम फीस या टैक्स मांगते हैं।"
  },
  {
    icon: (
      <svg style={{width:'24px', height:'24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    titleEn: "Fake Courier / MDMA",
    titleHi: "फर्जी कूरियर / ड्रग्स घोटाला",
    descEn: "Calls warning that an outbound international package containing drugs was seized in your name, threatening police actions.",
    descHi: "कॉल जिसमें चेतावनी दी जाती है कि आपके नाम पर भेजा गया ड्रग्स वाला पार्सल हवाई अड्डे पर पकड़ा गया है, और पुलिस कार्रवाई का डर दिखाते हैं।"
  },
  {
    icon: (
      <svg style={{width:'24px', height:'24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    titleEn: "Investment / Trading Scam",
    titleHi: "निवेश / ट्रेडिंग घोटाला",
    descEn: "WhatsApp/Telegram groups with fake SEBI tips. They show fake profits on dummy trading apps but lock your funds from withdrawal.",
    descHi: "फर्जी टिप्स वाले व्हाट्सएप ग्रुप। वे डमी ऐप्स पर नकली मुनाफा दिखाते हैं लेकिन आपकी जमा राशि को निकालने से रोक देते हैं।"
  }
];

export default function ScamGrid({ lang }) {
  const t = translations[lang];

  return (
    <section className="scams-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.scamTitle}</h2>
          <p style={{color: 'var(--text-secondary)'}}>{t.scamSubtitle}</p>
        </div>
        
        <div className="scam-grid">
          {SCAM_ITEMS.map((item, index) => (
            <div className="scam-card" key={index}>
              <div className="scam-icon-container">
                {item.icon}
              </div>
              <h3 className="scam-card-title">
                {lang === 'en' ? item.titleEn : item.titleHi}
              </h3>
              <p className="scam-card-desc">
                {lang === 'en' ? item.descEn : item.descHi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
