# 📬 Frontend Mentor – Contact Form Challenge

![Design preview for the Contact form coding challenge](./design/desktop-preview.jpg)

## 👋 Welcome

A small accessibility-focused contact form built as a professional workflow exercise.
Deployed on **GitHub Pages**, linted with **ESLint**, and structured using **semantic HTML + BEM CSS**.

---

## 🧩 Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Setup & Local Run](#setup--local-run)
- [Features](#features)
- [Accessibility Notes](#accessibility-notes)
- [Screenshots](#screenshots)
- [Live Demo](#live-demo)
- [Reflection](#reflection)
- [Acknowledgements](#acknowledgements)

---

## 💡 Overview

- Challenge → [Frontend Mentor Contact Form](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj)
- Purpose → Practise **professional GitHub Flow**, **semantic markup**, and **accessible validation**.
- Timeframe → Week 1 of the November Professional Developer Sprint.

---

## 🛠️ Built With

- **HTML5** + **CSS3** (BEM naming pattern)
- **Vanilla JavaScript** for validation
- **ESLint** for code consistency
- **GitHub Pages** for deployment

Optional (dev tools)

```bash
npm install
npm run lint     # check for problems
npm run fix      # auto-fix style issues
```

---

## ⚙️ Setup & Local Run

```bash
git clone https://github.com/<yourname>/contact-form-pro.git
cd contact-form-pro
npm install
npm run lint
# open docs/index.html in your browser
```

Deployment:

- Static site hosted via **GitHub Pages**
- Settings → Pages → Deploy from `/docs` folder
- Live URL: ➡️ **[your-username.github.io/contact-form-pro](https://your-username.github.io/contact-form-pro/)**

---

## ✨ Features

- Semantic structure (`form`, `fieldset`, `legend`)
- Client-side validation (required fields + email check)
- Inline errors and summary region (`aria-live="polite"`)
- Keyboard-accessible focus order and visible focus ring
- CSS variables for spacing, colour, typography
- Deployed through GitHub Pages (no build tools required)

---

## ♿ Accessibility Notes

- Each input has a label (`for`/`id`) or `aria-label`.
- Invalid fields use `aria-invalid="true"` and link errors with `aria-describedby`.
- Validation summary announced via `aria-live="polite"`.
- Tab order matches visual order; focus visible on all interactive elements.

---

## 📸 Screenshots

_Add before/after screenshots or mobile/desktop views here._

---

## 🌐 Live Demo

➡️ [View on GitHub Pages](https://your-username.github.io/contact-form-pro/)

---

## 🪞 Reflection

| Date        | Topic  | Notes                                                |
| :---------- | :----- | :--------------------------------------------------- |
| 03 Nov 2025 | Setup  | Deployed blank form via GitHub Pages successfully 🎉 |
| 04 Nov 2025 | ESLint | Configured and learned rules for consistency         |
| 05 Nov 2025 | A11Y   | First aria-live region implemented                   |
| 08 Nov 2025 | Review | Feeling more confident using issues and PR flow      |

---

## 🙌 Acknowledgements

- [Frontend Mentor](https://www.frontendmentor.io) for the challenge brief.
- Accessibility references from [W3C ARIA Practices Guide](https://www.w3.org/TR/wai-aria-practices/).
