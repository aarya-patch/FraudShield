import React from 'react';
import { translations } from '../utils/analyzer';

export default function Header({ lang, setLang }) {
  const t = translations[lang];

  return (
    <header className="app-header">
      <div className="container header-content">
        <div className="logo-container">
          <svg className="logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="logo-text">FraudShield AI</span>
        </div>
        <div className="lang-toggle-container">
          <button 
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
            onClick={() => setLang('en')}
            id="lang-toggle-en"
          >
            {t.langEn}
          </button>
          <button 
            className={`lang-btn ${lang === 'hi' ? 'active' : ''}`} 
            onClick={() => setLang('hi')}
            id="lang-toggle-hi"
          >
            {t.langHi}
          </button>
        </div>
      </div>
    </header>
  );
}
