// Test script for FraudShield AI Analyzer
import { analyzeMessage } from './src/utils/analyzer.js';

const testCases = [
  {
    name: "TRAI SIM block threat",
    input: "Your SIM card will be blocked in 2 hours by TRAI because you did illegal activities. Press 1 to speak with police.",
    expectedVerdict: "SCAM",
    expectedType: "Digital Arrest Scam"
  },
  {
    name: "Hinglish lottery winner",
    input: "Congrats aapne 25 Lakh ki lottery jeeti hai. GST fees advance me pay karo claim karne ke liye.",
    expectedVerdict: "SCAM",
    expectedType: "Lottery / Prize Scam"
  },
  {
    name: "Electricity bill threat (Hindi)",
    input: "प्रिय उपभोक्ता आपकी बिजली आज रात 9:30 बजे काट दी जाएगी क्योंकि आपका बिल बकाया है। तुरंत इस नंबर पर संपर्क करें MSEB अधिकारी से।",
    expectedVerdict: "SCAM",
    expectedType: "बिजली / गैस कनेक्शन कटने का घोटाला"
  },
  {
    name: "Legitimate friendly message",
    input: "Hey, are we still meeting for lunch at 1 PM today? Let me know.",
    expectedVerdict: "LEGITIMATE",
    expectedType: "Safe Content"
  },
  {
    name: "Godrej Real Estate Ad (Promotional)",
    input: "EOI-PRICE-LAST-2-DAYS, Godrej-Brooklyn-Avenue, Kukatpally, Hyderabad, New-York-themed-3/4-BHK, 1579-3200sq.ft-frm-2.11Cr, -Info https://wa.link/godrej-authorised",
    expectedVerdict: "LEGITIMATE",
    expectedType: "Promotional / Marketing Ad"
  },
  {
    name: "Substring boundary trap",
    input: "I opened the red box and found a pen inside.",
    expectedVerdict: "LEGITIMATE",
    expectedType: "Safe Content"
  }
];

let failed = false;

console.log("Running FraudShield AI Analyzer Tests...\n");

testCases.forEach((tc, idx) => {
  const lang = tc.expectedType.includes("बिजली") ? "hi" : "en";
  const result = analyzeMessage(tc.input, lang);
  
  if (result.error) {
    console.error(`❌ Test ${idx + 1} ("${tc.name}") Failed with error: ${result.error}`);
    failed = true;
    return;
  }

  const verdictMatch = result.verdict === tc.expectedVerdict;
  const typeMatch = result.scamType.toLowerCase().includes(tc.expectedType.toLowerCase());

  if (verdictMatch && typeMatch) {
    console.log(`✅ Test ${idx + 1} ("${tc.name}") Passed!`);
    console.log(`   Verdict: ${result.verdict} | Type: ${result.scamType}`);
  } else {
    console.error(`❌ Test ${idx + 1} ("${tc.name}") Failed!`);
    console.error(`   Expected: Verdict="${tc.expectedVerdict}", Type containing "${tc.expectedType}"`);
    console.error(`   Got: Verdict="${result.verdict}", Type="${result.scamType}"`);
    failed = true;
  }
  console.log("");
});

if (failed) {
  console.error("Some tests failed! Check output details.");
  process.exit(1);
} else {
  console.log("All FraudShield AI analyzer tests passed successfully!");
  process.exit(0);
}
