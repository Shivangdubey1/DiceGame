Dice Race — First to 50 (Dice Game)

A simple, responsive two-player dice game built with HTML, CSS, and vanilla JavaScript. Players take turns rolling a die — the first player to reach exactly 50 points wins. Rolling a 6 or a roll that would move a player past 50 ends that player's turn (no score change).

Live demo

If you host this repository (GitHub Pages or any static host), open index.html to play. Otherwise just open index.html locally in your browser.

Features

Two-player local gameplay (no backend required)

Animated dice roll effect and tactile visual feedback

Active-player highlight to show whose turn it is

Responsive layout for desktop and mobile

Winner banner and restart functionality

Small, well-documented codebase — easy to extend

Project structure
.
├─ index.html          # Main HTML file (game UI)
├─ style.css           # Styles / layout / animations
├─ script.js           # Game logic and interactivity
├─ images/             # Dice images (1.png ... 6.png)
└─ README.md           # (this file)


How to run locally

Download or copy the project folder to your machine.

Open index.html in your browser by double-clicking it or using right-click → Open with...

That's it — the game runs purely in the browser, no installation required.

Controls & Rules

Enter both player names and press Start.

Player 1 begins by default. Click Roll — P1 to roll the die for Player 1.

If a player rolls a 6, their turn ends immediately and the turn passes to the other player (no points awarded for that roll).

If a roll would make a player's score exceed 50, that roll is ignored and the turn passes.

The first player to reach exactly 50 points wins. A winner banner appears and the roll buttons disable.

Accessibility & Keyboard

Buttons are standard HTML <button> elements and support keyboard focus and activation (Enter/Space).

Inputs have labels for screen readers. If you want full keyboard-only play, I can add keyup handlers to let players use keys to roll.

Common issues & fixes

Roll buttons remain disabled after Start: Make sure script.js is present and functions are named startGame, restartGame, p1Play, p2Play. Also ensure <script src="script.js" defer></script> is included just before </body>.

Dice images not showing: Confirm files exist at ./images/1.png through ./images/6.png and paths are correct.

No winner banner or UI glitches: Open browser DevTools (F12) → Console to see errors. If you paste the error here I will debug.

How to customize

Change max score: Edit const MAX_SCORE = 50; in script.js to any value.

Change player start rules: Modify currentPlayer initialization in startGame().

Swap visuals: Replace images in images/ with your own dice art (keep names 1.png…6.png).

Theme: Update CSS variables at the top of style.css (color accents, radius, shadows).

