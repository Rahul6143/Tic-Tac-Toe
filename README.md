# 🎮 Tic-Tac-Toe  

A simple **Tic-Tac-Toe game** built with **React.js** and **Vite**, featuring modular components and custom hooks for game logic.  

## 🚀 Features  
- 🎲 **Classic Tic-Tac-Toe Gameplay** – Play with a friend  
- ⚡ **Fast and Lightweight** – Powered by **Vite**  
- 🧩 **Modular Component-Based Architecture**  
- 🎨 **Styled with CSS** for a responsive UI  
- ✅ **Linting with ESLint** for clean code  

## 📂 Project Structure  
tic-tac-toe/
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── O.png
│   │   ├── X.png
│   ├── components/
│   │   ├── hooks/
│   │   │   ├── useTictactoe.jsx
│   │   ├── TicTacToe.css
│   │   ├── TicTacToe.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── index.html
├── .gitignore
├── eslint.config.js
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
Markdown

# Tic-Tac-Toe Game

This project is a simple Tic-Tac-Toe game built using React and Vite.

## Table of Contents

- [Project Description](#project-description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project is a classic Tic-Tac-Toe game implemented using React and Vite. It allows two players to take turns marking spaces in a 3x3 grid. The goal is to get three of your marks in a row (horizontally, vertically, or diagonally) before your opponent does. The game detects a winner or a draw and provides a clean, user-friendly interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rahul6143/tic-tac-toe.git
   cd tic-tac-toe

2. Install dependencies using npm or Yarn:
    npm install
    # or
    yarn install
    Running the App
    To start the development server, run:

3. Start the Development Server
    npm run dev
    # or
    yarn dev
This will open your application in your default browser at http://localhost:5173.

### Project Structure
tic-tac-toe/
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── O.png
│   │   ├── X.png
│   ├── components/
│   │   ├── hooks/
│   │   │   ├── useTictactoe.jsx
│   │   ├── TicTacToe.css
│   │   ├── TicTacToe.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── index.html
├── .gitignore
├── eslint.config.js
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

- assets/: Contains image assets (O.png, X.png).
- components/: Contains React components, including the custom hook useTictactoe.jsx and the main TicTacToe.jsx component.
- src/: Contains the main application source code.
- App.jsx: The root component of the application.
- main.jsx: The entry point of the React application.
- index.css: Global styles for the application.
- index.html: The HTML template for the application.
- vite.config.js: Vite configuration file.
- package.json: Lists project dependencies and scripts.
- README.md: Project documentation.

### 🕹️ How to Play
1. Open the browser and navigate to the local development server.
2. Click on any square to place an 'X' or 'O'.
3. The game announces a winner when three marks align in a row, column, or diagonal.
4. Refresh the page to start a new game.