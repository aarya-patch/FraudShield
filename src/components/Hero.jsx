import React from 'react';
import { translations } from '../utils/analyzer';

export default function Hero({ lang }) {
  const t = translations[lang];

  const handleScrollToAnalyzer = () => {
    const element = document.getElementById('analyzer-block');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Put focus on the text area for better keyboard accessibility
      const textarea = document.getElementById('suspicious-text-input');
      if (textarea) {
        setTimeout(() => textarea.focus(), 600);
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-pill">
          <svg className="hero-pill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{lang === 'en' ? 'Alert: Active Scams Rising' : 'चेतावनी: सक्रिय घोटाले बढ़ रहे हैं'}</span>
        </div>
        <h1 className="hero-title">{t.subtitle}</h1>
        <p className="hero-subtitle">
          {lang === 'en' 
            ? 'Our real-time analyzer identifies psychological pressure, fake official narratives, and scam patterns in seconds.' 
            : 'हमारा रीयल-टाइम विश्लेषक सेकंडों में मनोवैज्ञानिक दबाव, नकली आधिकारिक कहानियों और घोटाले के पैटर्न की पहचान करता है।'}
        </p>
        <div className="hero-stats-banner">
          {lang === 'en' ? (
            <>
              Reported: <strong>2.81 Million</strong> cybercrime cases in India in 2025. Don't become a statistic.
            </>
          ) : (
            <>
              दर्ज मामले: 2025 में भारत में <strong>28.1 लाख</strong> साइबर अपराध के मामले। इसका शिकार न बनें।
            </>
          )}
        </div>
        <div>
          <button 
            onClick={handleScrollToAnalyzer}
            className="cta-button-main"
            id="hero-cta-btn"
          >
            {t.checkBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
