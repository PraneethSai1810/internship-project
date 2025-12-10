# Codex Internship – Slab 1
## Text Translator & Random String Generator (React + Tailwind)

This project is developed as part of the Codex Internship (Front-End – Slab 1).  
It includes two main tools:

1. Text Translator (English to Indian languages)
2. Random String Generator (secure password/string generator)

The project uses React, Tailwind CSS, React Router, and RapidAPI.

---

## Features

### 1. Text Translator
- Translates English text to multiple Indian languages:
  Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Gujarati, Marathi.
- Uses Free Google Translator API from RapidAPI.
- Output shown in a styled glowing text box.
- Handles invalid inputs and API errors.
- Fully supports Dark/Light theme.

### 2. Random String Generator
- Generates random strings based on the length entered by the user.
- Supports uppercase, lowercase, numbers, and symbols.
- Shows error message for invalid lengths.
- Styled output box with glowing UI.
- Uses React hooks (useState, useCallback).

### 3. UI and Routing
- Dark/Light mode toggle using a custom switch.
- Active navbar link is underlined.
- Clean glowing modern UI using Tailwind CSS.
- Routing using React Router DOM:
  - /translator
  - /random
- Default route automatically opens Translator.

---

## Tech Stack

- React (Create React App)
- Tailwind CSS
- React Router DOM
- RapidAPI (Free Google Translator)
- JavaScript (ES6+)

---

## Installation and Setup

1. Clone the repository
  git clone https://github.com/PraneethSai1810/internship-project

2. Navigate to project folder
cd codex-slab1

3. Install dependencies
npm install

4. Start the development server
npm start

Application runs at:
http://localhost:3000

---

## Environment Variables (IMPORTANT)

To use the Translator API, you must provide your own RapidAPI key.

1. Create a `.env` file in the project root.
2. Add the following line:
REACT_APP_RAPID_KEY=your_api_key_here

3. Restart the development server:
npm start

4. The API key is accessed inside the code using:

Note:
The `.env` file is ignored by GitHub, so your key stays private.

---

## Folder Structure
src/
components/
Navbar.jsx
pages/
Translator.jsx
RandomString.jsx
App.js
index.js
index.css


---

## Internship Requirements Covered

- Text Translator using an API.
- Random string/password generator using JavaScript and React hooks.
- Two-page navigation with React Router.
- Dark/Light mode implementation.
- Fully responsive glowing UI using Tailwind CSS.

---

## License

This project is created for educational and internship purposes.
