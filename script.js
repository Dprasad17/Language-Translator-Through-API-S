// 🚀 Google Translate API (you need API key)
const API_KEY = "AIzaSyCxy_gVRlEd3RMIFtE6OTg2ESwXLBJwKkk";

// Function to call Google Translate API
async function translateText(text, from, to) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: from,
      target: to,
      format: "text"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  console.log("API Response:", data);

  if (data.data && data.data.translations[0]) {
    return data.data.translations[0].translatedText;
  }
  return null;
}

// Translate Button
document.getElementById("translateBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const resultBox = document.getElementById("result");

  if (!text.trim()) {
    resultBox.innerText = "⚠ Please enter text!";
    return;
  }

  resultBox.innerText = "⏳ Translating...";

  try {
    const translated = await translateText(text, from, to);
    resultBox.innerText = translated || "⚠ Translation failed!";
  } catch (error) {
    resultBox.innerText = "❌ Error: Could not translate!";
    console.error(error);
  }
});

// Copy Translation
document.getElementById("copyResult").addEventListener("click", () => {
  const text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text);
  alert("📋 Translation copied!");
});

// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.innerText = document.body.classList.contains("dark") ? "☀ Light" : "🌙 Dark";
});
// Language Options
const languages = {
  "en": "English",
  "es": "Spanish",
  "fr": "French",
  "de": "German",
  "zh-CN": "Chinese (Simplified)",
  "ja": "Japanese",
  "ru": "Russian",
  "ar": "Arabic",
  // Add more languages as needed
};