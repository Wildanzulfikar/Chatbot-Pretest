# Simple AI Chatbot (Ollama Integration)

Project ini adalah **chatbot AI sederhana berbasis web** yang terintegrasi dengan **AI lokal menggunakan Ollama**.  
Chatbot dibuat menggunakan **HTML, CSS, JavaScript (frontend)** dan **Node.js + Express (backend)**.

Project ini cocok untuk:
- memenuhi pretest

---

## 🚀 Fitur
- Chatbot sederhana berbasis web
- Terintegrasi AI lokal (Ollama)
- Tanpa API key (gratis & offline)
- UI bebas dan ringan
- Mudah dikembangkan ke model lain (ChatGPT, Gemini, DeepSeek)

---

## 🧱 Teknologi yang Digunakan

### Frontend
- HTML
- CSS
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js
- CORS

### AI Engine
- Ollama
- Model: `gemma3:1b` (default)

---

## 📁 Struktur Folder
simple-ai-chatbot/
│
├── backend/
│ ├── node_modules/
│ ├── package.json
│ └── server.js
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── README.md


---

## ⚙️ Instalasi & Setup

### 1️⃣ Install Ollama

Download Ollama dari:
https://ollama.com/

Setelah install, download model:
ollama pull gemma3:1b

Cek model:
ollama list


## 2️⃣ Setup Backend

Masuk ke folder backend:
cd backend
npm install

Jalankan server:
npm start

Jika berhasil, akan muncul:
Backend jalan di http://localhost:3000

## 3️⃣ Jalankan Frontend

Buka file:
frontend/index.html

Disarankan menggunakan:
Live Server (VS Code)
atau langsung via browser

🧪 Cara Menggunakan

Pastikan Ollama sedang berjalan
Backend sudah aktif di port 3000
Buka frontend
Ketik pesan di chat
AI akan membalas pesan

🛠 Konfigurasi Model

Untuk mengganti model AI, edit file:
backend/server.js

Contoh:
model: "gemma3:1b"

Pastikan model sudah tersedia di Ollama:
ollama list

⚠️ Troubleshooting
❌ Balasan AI undefined

Model belum selesai di-download
Nama model di backend tidak sama dengan Ollama
Backend belum direstart

❌ AI tidak merespon
Ollama belum jalan
Port backend tidak aktif
Model belum tersedia

👨‍💻 Author

Dibuat untuk keperluan pretest web developer
