import React, { useState, useEffect, useRef } from 'react';
import { translations, analyzeMessage } from '../utils/analyzer';

export default function Analyzer({ lang }) {
  const t = translations[lang];
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    // Clear results/errors if language switches so they re-analyze
    if (inputText) {
      handleAnalyze(true);
    } else {
      setResult(null);
      setError('');
    }
  }, [lang]);

  const handleAnalyze = (isSilent = false) => {
    if (!inputText || inputText.trim().length === 0) {
      setError(t.emptyError);
      setResult(null);
      return;
    }
    setError('');

    if (isSilent) {
      const report = analyzeMessage(inputText, lang);
      setResult(report);
    } else {
      setLoading(true);
      setResult(null);
      setTimeout(() => {
        const report = analyzeMessage(inputText, lang);
        setResult(report);
        setLoading(false);
        // Scroll to results
        setTimeout(() => {
          if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 100);
      }, 750); // Simulated delay for AI feel
    }
  };

  const handleCopyReport = () => {
    if (!result) return;

    const copyText = `🚨 VERDICT: ${result.verdict}
📊 RISK LEVEL: ${result.riskLevel}
🎯 SCAM TYPE: ${result.scamType}

🚩 RED FLAGS DETECTED:
${result.redFlags.map(flag => `- ${flag}`).join('\n')}

🛡️ WHAT TO DO RIGHT NOW:
${result.actions.map(action => `- ${action}`).join('\n')}

📞 REPORT HERE:
- National Cybercrime Helpline: 1930
- Online: cybercrime.gov.in

💬 PLAIN ENGLISH EXPLANATION:
${result.explanation}`;

    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getVerdictClass = (verdict) => {
    if (!verdict) return '';
    const v = verdict.toUpperCase();
    if (v.includes('SCAM') && !v.includes('LIKELY')) return 'verdict-scam';
    if (v.includes('LIKELY')) return 'verdict-likely';
    if (v.includes('SUSPICIOUS')) return 'verdict-suspicious';
    return 'verdict-legitimate';
  };

  const getRiskClass = (risk) => {
    if (!risk) return '';
    const r = risk.toUpperCase();
    if (r.includes('HIGH')) return 'high';
    if (r.includes('MEDIUM')) return 'medium';
    return 'low';
  };

  return (
    <section className="analyzer-section" id="analyzer-block">
      <div className="container">
        <div className="analyzer-card">
          <h2 className="analyzer-title">
            {lang === 'en' ? 'Verify Suspicious Activity' : 'संदेहास्पद गतिविधि की जांच करें'}
          </h2>
          
          <div className="textarea-container">
            <textarea
              id="suspicious-text-input"
              className="analyzer-textarea"
              placeholder={t.placeholder}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          {error && (
            <div className="analyzer-error" id="analyzer-validation-error">
              <span>⚠️</span> {error}
            </div>
          )}

          <div className="analyzer-footer">
            <div className="char-counter">
              {inputText.length} {lang === 'en' ? 'characters' : 'वर्ण'}
            </div>
            
            <button
              onClick={() => handleAnalyze(false)}
              disabled={loading}
              className="analyze-button"
              id="analyze-now-btn"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  {t.analyzing}
                </>
              ) : (
                <>
                  <svg style={{width:'18px', height:'18px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {t.analyzeBtn}
                </>
              )}
            </button>
          </div>

          {/* Verdict Result Block */}
          {result && (
            <div className="result-card" ref={resultRef} id="analyzer-result-card">
              <div className="result-header">
                <div className="verdict-box">
                  <span className="label-mini">{t.verdict}</span>
                  <span className={`verdict-pill ${getVerdictClass(result.verdict)}`} id="verdict-status-badge">
                    {result.verdict === 'SCAM' ? t.scam : 
                     result.verdict === 'LIKELY SCAM' ? t.likelyScam : 
                     result.verdict === 'SUSPICIOUS' ? t.suspicious : t.legitimate}
                  </span>
                </div>
                
                <div className="risk-box">
                  <span className="label-mini">{t.riskLevel}</span>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <div className="risk-level-bar">
                      <div className={`risk-fill ${getRiskClass(result.riskLevel)}`}></div>
                    </div>
                    <span style={{fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)'}}>
                      {result.riskLevel.includes('HIGH') ? t.high : 
                       result.riskLevel.includes('MEDIUM') ? t.medium : t.low}
                    </span>
                  </div>
                </div>
              </div>

              <div className="result-grid">
                <div className="result-left">
                  <div className="scam-type-display">
                    <span className="label-mini">{t.scamType}</span>
                    <h3>{result.scamType}</h3>
                  </div>

                  <div className="card-section">
                    <span className="label-mini">{t.redFlags}</span>
                    <ul className="red-flags-list">
                      {result.redFlags.map((flag, idx) => (
                        <li key={idx}>{flag}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-section">
                    <span className="label-mini">{t.actions}</span>
                    <ul className="actions-list">
                      {result.actions.map((action, idx) => (
                        <li key={idx}>{action}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="result-right">
                  <div className="report-box">
                    <h4>
                      <svg style={{width:'18px', height:'18px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {t.report}
                    </h4>
                    <div className="report-items">
                      <div className="report-item">
                        <span className="report-title">{t.nationalHelpline}</span>
                        <a href="tel:1930" className="report-value report-value-link">1930</a>
                      </div>
                      <div className="report-item">
                        <span className="report-title">{t.onlinePortal}</span>
                        <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="report-value report-value-link">
                          {t.reportPortalText}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="explanation-box">
                    <span className="label-mini">{t.explanation}</span>
                    <p style={{marginTop: '8px'}}>{result.explanation}</p>
                  </div>
                </div>
              </div>

              <div className="result-actions-footer">
                <button 
                  onClick={handleCopyReport} 
                  className="copy-report-btn"
                  id="copy-verdict-btn"
                >
                  {copied ? (
                    <>
                      <svg style={{width:'16px', height:'16px', color:'var(--color-green)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      {t.copied}
                    </>
                  ) : (
                    <>
                      <svg style={{width:'16px', height:'16px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      {t.copyBtn}
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
