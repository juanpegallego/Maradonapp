# Maradona Quizz

## About the developer

Hello! I am Juan from Buenos Aires, Argentina. I created this game to practice React fundamentals and its communication with a database created in Firebase-Firestore.


## About the app

The game consists of guessing which year the photos that will appear will belong to. It's good to refresh your memory about Maradona's life!

The first thing we see when entering the app is a very simple form where all we ask for is a name, nickname and age. We will use this later to make a ranking of points.
For those who wonder why the age data, take it because I find it interesting to have a reference of how old you know Maradona more or less.

When entering this data, the first thing the app does is save it in a state (React UseState) that will help us to last in the session, since in all sections of the app it is checked that the user is 'logged in'

On the other hand, on the right side, we are going to show the Ranking of the best 5 players, where we show the name or nickname they entered, their age and the score achieved. That board uses real-time data so if a player entered the top5 at that time, the board will refresh.

By entering the data and clicking on Start, the game will start: the game is very simple, images of Diego Maradona will appear and the user has to choose between the 4 available options to guess the year of the photo. Once all the photos have passed, the user's results and their position in the score table will be displayed, if the player managed to enter the TOP 5

## Upcoming features

The next improvements to be made in the app are, in principle: add a timestamp next to the player in the leaderboard and improve the variety and number of photos so that the game lasts longer and is more varied.

