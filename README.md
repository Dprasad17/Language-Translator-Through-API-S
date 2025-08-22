# 🌐 Multilingual Translator with Speech Support

A modern and stylish **language translator web app** that allows users to translate text between multiple **Indian and global languages**.  
It integrates with the **Google Translate API (or LibreTranslate as a fallback)** and includes **text-to-speech** functionality using the **Web Speech API**.

---

## ✨ Features

- 🔤 Translate text into 20+ languages (English, Hindi, Telugu, Tamil, Kannada, Bengali, Marathi, Gujarati, Malayalam, Urdu, etc.)  
- 🎙️ **Text-to-Speech (TTS)**: Hear translations spoken aloud  
- 🌓 **Dark / Light mode toggle** for a modern UI  
- 🎨 Smooth animations and clean interface  
- ⚡ **Fallback support** with LibreTranslate if no Google API key is set  
- 💻 100% frontend-only (no backend required)  

---

## 🚀 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **APIs:**  
  - Google Translate API (requires API key)  
  - LibreTranslate (free fallback)  
- **Speech Engine:** Web Speech API  

---

## 📂 Project Structure
translator-app/
│── index.html # Main HTML page
│── style.css # Styling (dark/light mode, animations)
│── script.js # Translation & speech logic
│── README.md # Project documentation


---

## 🛠️ Setup & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/translator-app.git
   cd translator-app
Open the app

Open index.html in your browser.

(Optional) Configure Google Translate API

Get an API key from Google Cloud Console
.

In script.js, replace:

const API_KEY = "YOUR_API_KEY";


with your actual API key.

Start translating 🚀


