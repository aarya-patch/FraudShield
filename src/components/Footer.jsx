import React from 'react';
import { translations } from '../utils/analyzer';

export default function Footer({ lang }) {
  const t = translations[lang];

  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg className="footer-logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="footer-logo-text">FraudShield AI</span>
            </div>
            <p className="footer-tagline">
              {lang === 'en' 
                ? "Empowering Indian citizens with real-time fraud defense." 
                : "भारतीय नागरिकों को रीयल-टाइम फ्रॉड डिफेंस के साथ सशक्त बनाना।"}
            </p>
          </div>
          
          <div className="footer-contacts">
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg style={{width:'20px', height:'20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="footer-contact-details">
                <span className="footer-contact-label">{lang === 'en' ? 'Helpline' : 'हेल्पलाइन'}</span>
                <a href="tel:1930" className="footer-contact-value" id="footer-call-link">1930</a>
              </div>
            </div>
            
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg style={{width:'20px', height:'20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="footer-contact-details">
                <span className="footer-contact-label">{lang === 'en' ? 'Report Online' : 'ऑनलाइन रिपोर्ट करें'}</span>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="footer-contact-value" id="footer-report-link">
                  cybercrime.gov.in
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            {t.disclaimer}
          </p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} FraudShield AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
