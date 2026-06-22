# FraudShield AI 🛡️
**Track:** PS-6: AI for Digital Public Safety: Defeating Counterfeiting, Fraud & Digital Arrest Scams
**Target:** ET AI Hackathon 2026 Submission
**Status:** Working Prototype Verified (Mobile-First React UI)

FraudShield AI is a citizen-first digital defense application designed to protect Indian citizens from real-time cyber fraud, high-pressure utility disconnection threats, and psychological "Digital Arrest" operations.

## The Scale of the Crisis
* **The Reality:** Cybercrime in India has escalated to an unprecedented **2.81 Million reported cases**, causing over **₹22,495 Crore in total financial losses**.
* **The Weapon:** Organized fraud networks isolate victims via video calls (CBI, ED, or TRAI impersonations), accounting for **₹1,776 Crore lost** in a single 9-month window.
* **The Shield:** FraudShield AI intercepts the fraud pipeline at the exact point of contact, giving citizens clear, authoritative, and instantaneous verdicts before financial harm occurs.

##  Core Features
* **Bilingual UI (English / हिंदी):** One-click translation toggle designed for non-technical users and regional access.
* **Space-Padded Exact Word Matching Engine:** A client-side text analytics parser engineered to defeat substring boundary traps (preventing regular marketing words like `themed` from misfiring as government agency acronyms like `ed`).
* **Promotional Ad Overrides:** Safely identifies and screens out legitimate real-estate or retail marketing communications.
* **Color-Coded Verdict Badges:** Instant clarity through clear risk profiles (`🚨 SCAM`, `⚠️ SUSPICIOUS`, `✅ LEGITIMATE`).
* **Actionable Emergency Playbooks:** Tells the user exactly what to do right now, with automated deep-linking to the National Cybercrime Helpline (**1930**) and portal links.

## 🛠️ Technical Implementation
The system interface uses highly scannable, minimal styling tailored to mirror a trustworthy, government-grade safety utility.
### Key Components Architecture
* `src/utils/analyzer.js`: Core deterministic keyword tracking token architecture. Handles lexical normalization, punctuation extraction, and space-padding.
* `src/components/FraudShieldApp.jsx`: Main interface wrapper handling dynamic client routing, state manipulation, and seamless transition animations.
