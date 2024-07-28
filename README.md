# Emoji Guessing Game

## Overview
The Emoji Guessing Game is a simple and interactive web-based game where players guess the descriptions of various emojis. The game provides immediate feedback on the player's guesses and tracks their score over a timed session.

## Features
- Display of random emojis for players to guess.
- Real-time feedback on correct or incorrect guesses.
- Score tracking.
- 30-second countdown timer.
- Simple and clean user interface.

## How to Play
1. **Start the Game**: Open the game in a web browser. The game starts automatically with a 30-second timer.
2. **Display Emoji**: An emoji is displayed on the screen.
3. **Enter Guess**: Type your guess for the emoji's description in the input field.
4. **Submit Guess**: Press the "Enter" key to submit your guess.
5. **Feedback**: 
   - If the guess is correct, "Correct!" is displayed, and your score increases by 1.
   - If the guess is incorrect, "Wrong!" is displayed.
6. **Next Emoji**: The game automatically shows the next emoji after each guess.
7. **Game Over**: The game ends when the timer reaches zero. Your final score is displayed.

## File Structure
- **index.html**: Contains the structure of the game.
- **styles.css**: Contains the styles for the game elements.
- **script.js**: Contains the game logic including emoji display, guess checking, score updating, and timer management.

## Installation
1. Clone the repository or download the zip file.
2. Extract the files to your desired location.
3. Open `index.html` in your web browser.

## Usage
- Open `index.html` in a web browser to start the game.
- Enter your guesses in the provided input field and press "Enter" to submit.

## Customization
You can customize the list of emojis and their descriptions by modifying the `emojiDetails` array in `script.js`. Each entry in the array should be an object with `description` and `emoji` properties.

Example:
```javascript
const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: '😎' },
    { description: "Thumbs up", emoji: '👍' },
    { description: "Heart eyes", emoji: '😍' },
    { description: "Crying face", emoji: '🥲' },
    { description: "Party popper", emoji: '🎉' }
];
