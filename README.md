Memory Card Matching Game
This project implements a Memory Card Matching Game using JavaScript, HTML, and CSS. Players can test their memory skills by flipping cards to find matching pairs.

Features
Dynamic Card Setup: The game dynamically generates and shuffles cards.
Responsive Matching Logic: Cards are selected in pairs, and matches are visually highlighted.
Customizable: Add or modify cards easily by updating the cardsArray.
Interactive UI: Flip animations and match indicators enhance the user experience.



How It Works
Card Setup:
Cards are created dynamically using the cardsArray data structure, which contains information about card names and images.
The game duplicates and shuffles the cards to create a randomized grid.
Gameplay:

Players click on cards to flip them.
If two selected cards match, their borders change color to indicate a successful match.
If the cards don't match, they reset after a short delay.
Reset Mechanism:

The game resets selections after each attempt, allowing players to continue matching until all pairs are found.

