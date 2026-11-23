<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:0d9488&height=170&section=header&text=react-key-reconciliation-lab&fontColor=ffffff&fontSize=34)

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=21&pause=1000&center=true&vCenter=true&width=620&lines=Stable+keys+vs+array+indexes;See+React+state+identity+in+action" alt="Typing title"/>

[![License](https://img.shields.io/github/license/CyberLoop-dev/react-key-reconciliation-lab)](LICENSE)
![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/react-key-reconciliation-lab)
[![Stars](https://img.shields.io/github/stars/CyberLoop-dev/react-key-reconciliation-lab?style=social)](https://github.com/CyberLoop-dev/react-key-reconciliation-lab/stargazers)
![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/react-key-reconciliation-lab)

<img src="assets/mark.svg" width="520" alt="Key identity illustration"/>

</div>

## 🧭 Overview
A small React and TypeScript lab that demonstrates how list keys affect component identity. Increment local counters, then reorder items to compare stable IDs with array-index keys.

## ✨ Features
- 🧩 Toggle between stable item IDs and array indexes.
- 🔁 Prepend, reverse, shuffle, add, and remove list items.
- 🔢 Give each card local state and observe where it goes.
- 🧠 See a concise explanation of the active reconciliation mode.

## 🖥️ Demo
Run the Vite app locally; no hosted demo is configured.

## 🚀 Quick Start
```bash
npm install
npm start
```
Open the local URL printed by Vite (normally `http://127.0.0.1:5173`).

## 🧰 Tech Stack
- React 18
- TypeScript
- Vite
- CSS

## 🗂️ Folder Structure
```text
.
├── assets/mark.svg
├── src/App.tsx
├── src/main.tsx
├── src/styles.css
├── index.html
├── package.json
└── tsconfig.json
```

## 🗺️ Roadmap
- [ ] Add a no-key warning mode.
- [ ] Add a nested component example.
- [ ] Add a resettable state-preservation exercise.

## 🤝 Contributing
Please include a short reproduction and expected behavior in issues or pull requests. Keep examples focused on React key semantics.

## 📄 License
MIT. See [LICENSE](LICENSE).

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:0d9488,100:101827&height=100&section=footer)

</div>
