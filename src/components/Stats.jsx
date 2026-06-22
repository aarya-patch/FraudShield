import React from 'react';
import { translations } from '../utils/analyzer';

export default function Stats({ lang }) {
  const t = translations[lang];

  const statItems = [
    {
      number: "₹22,495 Cr",
      labelEn: "Lost to Cyber Fraud in India",
      labelHi: "भारत में साइबर धोखाधड़ी में कुल नुकसान",
      subEn: "Reported financial loss in 2025",
      subHi: "2025 में दर्ज वित्तीय नुकसान"
    },
    {
      number: "2.81 Million",
      labelEn: "Cybercrime Cases Filed",
      labelHi: "दर्ज की गईं साइबर अपराध शिकायतें",
      subEn: "National Cybercrime Portal (2025)",
      subHi: "राष्ट्रीय साइबर अपराध पोर्टल (2025)"
    },
    {
      number: "24% Rise",
      labelEn: "Increase in Reported Cases",
      labelHi: "दर्ज मामलों में वृद्धि दर",
      subEn: "Year-on-year growth (2024 vs 2025)",
      subHi: "साल-दर-साल वृद्धि (2024 बनाम 2025)"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statItems.map((item, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-number">{item.number}</div>
              <div className="stat-label">
                {lang === 'en' ? item.labelEn : item.labelHi}
              </div>
              <div className="stat-sub">
                {lang === 'en' ? item.subEn : item.subHi}
              </div>
            </div>
          ))}
        </div>
        <div className="stats-source">
          {t.statSource}
        </div>
      </div>
    </section>
  );
}
