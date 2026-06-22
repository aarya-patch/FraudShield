import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Analyzer from './components/Analyzer';
import ScamGrid from './components/ScamGrid';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main style={{ flex: 1 }}>
        <Hero lang={lang} />
        <Analyzer lang={lang} />
        <ScamGrid lang={lang} />
        <Stats lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

export default App;
