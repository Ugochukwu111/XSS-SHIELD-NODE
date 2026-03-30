
# 🛡️ XSS-Shield-Node
###  An Interactive Security Sandbox & Backend Engine

A framework-less Node.js application designed to detect, neutralize, and log malicious XSS (Cross-Site Scripting) payloads in real-time.



## 🚀 The Engineering Challenge
Most developers jump straight to frameworks. I built this using **Raw Node.js** to master:
* **Manual Routing:** Handling requests without middleware abstractions.
* **Buffer Streams:** Parsing `POST` request data chunks manually.
* **Event-Driven Architecture:** Using the `EventEmitter` for internal security alerts.
* **Security First:** Custom HTML sanitization to protect user data.



## 🕹️ Interactive Features
| Feature | Description |
| :--- | :--- |
| **Bouncer Mode** | The server detects a threat and **rejects** the input entirely (400 Bad Request). |
| **Filter Mode** | The server **neutralizes** the threat, strips the code, and saves only clean text. |
| **Security Logs** | Real-time terminal feedback via `EventEmitter` when an intrusion is detected. |


## 🛠️ Technical Stack
* **Backend:** Node.js (Core `http`, `fs`, `events` modules)
* **Frontend:** Vanilla JavaScript, Semantic HTML5, CSS3



## 📋 Quality Checklist
* [cite_start][x] **Clean Code:** Small, single-responsibility functions[cite: 33].
* [cite_start][x] **Accessibility:** Semantic HTML and ARIA labels[cite: 37].
* [cite_start][x] **Professional Git:** Atomic commits with `feat`, `fix`, and `refactor` prefixes[cite: 36].



## 📖 Getting Started
1. **Clone the repo:**
   ```bash
   git clone [https://github.com/Ugochukwu111/XSS-SHIELD-NODE.git](https://github.com/Ugochukwu111/XSS-SHIELD-NODE.git)