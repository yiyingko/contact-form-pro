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
# open docs/index.html in your browser
```

### 🧹 Code Quality & Formatting

This project uses **ESLint** and **Prettier** to maintain clean, consistent code.

#### 🔧 Setup

After cloning the repo, install dependencies:

```bash
npm install
```

This will automatically set up the Git pre-commit hook (via the `prepare` script).

#### 🧩 Available Commands

| Command               | Description                                                                     |
| --------------------- | ------------------------------------------------------------------------------- |
| `npm run lint`        | Check all files for linting issues                                              |
| `npm run lint:fix`    | Automatically fix simple lint errors                                            |
| `npm run format`      | Format all files with Prettier                                                  |
| `npm run setup-hooks` | Re-enable the Git pre-commit hook manually (after cloning or resetting `.git/`) |

#### 🪶 Pre-commit Hook

Every time you commit, the following runs automatically:

1. **ESLint** – fixes common code issues (`npm run lint:fix`)
2. **Prettier** – formats code consistently (`npm run format`)

If either step fails, the commit is paused until issues are fixed — keeping the main branch clean and professional ✨

## Deployment:

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

- All form controls have explicit `<label>` elements connected via `for`/`id` (including the consent checkbox).
- The “Query Type” radios are grouped in a `role="radiogroup"` with `aria-labelledby` and `aria-describedby` for clear context and error association.
- Each field is linked to its inline error message via `aria-describedby`.
- Error messages use `aria-live="polite"` and are toggled with the `hidden` attribute so screen readers announce them when they appear.
- Validation state is tracked with `aria-invalid` on each control (or radiogroup) to indicate when a field is invalid.
- The form uses the natural DOM order for fields and submit button, so tab order matches visual order and works with default browser focus behavior.

---

## 📸 Screenshots

![alt text](<Screenshot from 2025-11-24 22-31-16.png>)

---

## 🌐 Live Demo

➡️ [View on GitHub Pages](https://yiyingko.github.io/contact-form-pro/)

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
