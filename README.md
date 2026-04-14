
# 🛡️ XSS-Shield-Node
### A Framework-less Node.js XSS Security Sandbox

A raw Node.js application that serves a static frontend, accepts JSON payloads, sanitizes submitted content with `sanitize-html`, and saves cleaned payloads locally.


## 🚀 What the Code Actually Implements
This repo uses plain Node.js and minimal dependencies:
* **Manual Routing:** `server.js` routes POST `/api/upload/` to a custom handler and serves static files otherwise.
* **Static File Serving:** `serveStatic.js` reads files from `public/` and returns them with the correct MIME type.
* **Input Sanitization:** `utils/sanitizeData.js` uses `sanitize-html` to strip disallowed HTML tags.
* **Data Storage:** `utils/uploadToDb.js` appends sanitized payloads to `data/data.json`.


## 🧩 Actual Features
| Feature | Description |
| :--- | :--- |
| **Static frontend** | Serves the dashboard UI from `public/index.html` and asset files. |
| **API upload endpoint** | Accepts POST requests at `/api/upload/` with JSON body content. |
| **HTML sanitization** | Uses `sanitize-html` to clean incoming data before saving. |
| **Local data persistence** | Stores submissions in `data/data.json`. |



## 🛠️ Technical Stack
* **Backend:** Node.js (`http`, `fs`, `path`)
* **Frontend:** Vanilla JavaScript, HTML, CSS
* **Dependencies:** `sanitize-html`, `nodemon`


## 📋 Quality Checklist
* [x] **Clean Code:** Small, single-responsibility functions.
* [x] **Static serving:** Minimal custom router without framework abstractions.
* [x] **Sanitization:** Uses a dedicated sanitization utility.


## 📖 Getting Started
1. **Clone the repo:**
   ```bash
   git clone https://github.com/Ugochukwu111/XSS-SHIELD-NODE.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the server:**
   ```bash
   node server.js
   ```
4. **Open the app:**
   Visit `http://localhost:5000` in your browser.
