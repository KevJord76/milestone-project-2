<!--- Application name -->
# Lottery Syndicate (Random Numbers Generator)

<!--- Application overview -->
Lottery Syndicate (Random Numbers Generator) is a game to allow the player to generate random lottery numbers. Many companies, organisations, families and friends have their own lottery syndicates set-up. This game allows those syndicates to create their own set of random numbers. There are three games available: Euromillions, Lotto and Dailymillions. The user selects the game they want to play and whether they want plus included. They then enter the number of lines required and the number of members in the syndicate. Once the generate button is activated, the random numbers are displayed on screen along with the costs involved.

<!--- Responsive design image -->
<p align="center">
  <img src="./assets/images/responsive.jpg"/>  
</p>

<!--- Outline the features of the application -->
# Features

The application contains a favicon of a selection of lottery balls. This is displayed in the document tab.

<!--- Favicon image -->
- __Favicon__
<p align="center">
  <img src="./assets/images/favicon.jpg"/>
</p>

The header displays the name of the application and again the logo of lottery balls. Under this the three lottery game options are outlined on three buttons. Green for Euromillions, Red for Lotto and Blue for Dailymillions. This is where the user chooses the lottery game that they want to play. The user can tab to the game buttons and hit the enter key or click on the game buttons to activate them. 

<!--- Header image -->
- __Header__
<p align="center">
  <img src="./assets/images/header.jpg"/>
</p>

When one of the game buttons gets the focus or is hovered over the colour changes. For example the Lotto game button turns dark red.  

<!--- Active image -->
- __Lotto Game Button__
<p align="center">
  <img src="./assets/images/hover.jpg"/>
</p>

When one of the game buttons is activated/chosen the generate numbers button text changes to the chosen game, e.g. Generate Lotto Numbers.  

<!--- Generate image -->
- __Generate Random Numbers__
<p align="center">
  <img src="./assets/images/generate.jpg"/>
</p>

The include plus draws check-box allows the user to choose if they want to include the extra plus draws in their lottery game selection. The final costs, then reflects their choice. The user can also hit the enter key to toggle their choice between checked and unchecked.   

<!--- Plus image -->
- __Lottery Plus Option__
<p align="center">
  <img src="./assets/images/plus.jpg"/>
</p>

The number of lines input box allows the user to enter the number of lottery lines that they want to create random numbers for. If the user enters 6, for example, then 6 random lines will be produced for the game type chosen. 

<!--- Number of lines image -->
- __Number of Lines__
<p align="center">
  <img src="./assets/images/num-lines.jpg"/>
</p>

The number of members input box allows the user to enter the number of lottery syndicate members. The calculated costs produced will then display the approximate cost per member of taking part in the syndicate.

<!--- Number of members image -->
- __Number of Members__
<p align="center">
  <img src="./assets/images/num-members.jpg"/>
</p>

Once the user is happy with their choices entered/chosen they can then activate the generate random numbers button. The random numbers for the chosen game will then be displayed on screen along with the associated costs. Again the results displayed are colour coded for each game, dark Green for Euromillions, dark Red for Lotto and dark Blue for Dailymillions. 

<!--- Results image -->
- __Results__
<p align="center">
  <img src="./assets/images/generate-euromillions.jpg"/>  
</p>
<p align="center">
  <img src="./assets/images/results.jpg"/>
</p>

The page footer displays the rules of the game. 

<!--- Footer image -->
- __Footer__
<p align="center">
  <img src="./assets/images/footer.jpg"/>
</p>

<!--- Future Features -->
- __Future Features__

  -   The inclusion of the chosen game's results for the last draw that took place to be displayed on screen 
  - The inclusion of the chosen game's jackpot for the next draw to be displayed on screen
  - Unlimited number of lines can be entered

<!--- Outline the application validation routines -->
# Data Entry Validation

The user must select a game before the generate numbers button is chosen. If no game has been chosen the following error message will display on screen. 

<!--- Select Error -->
- __Game Selection Error__
<p align="center">
  <img src="./assets/images/select-error.jpg"/>
</p>

The user must enter a number of lottery lines greater than zero (at least 2 for the Lotto game) and no greater than six. The following error messages will display on screen if this is not the case when the generate numbers button is activated. Focus will return to the number of lines input box after the error message is displayed.  

<!--- Number of lines errors -->
- __Number of Lines Errors__
<p align="center">
  <img src="./assets/images/lotto-error.jpg"/>
</p>

<p align="center">
  <img src="./assets/images/num-lines-error.jpg"/>
</p>

The user must enter a number of members greater than zero. The following error message will display on screen if this is not the case when the generate numbers button is activated. Focus will return to the number of members input box after the error message is displayed.  

<!--- Number of members error -->
- __Number of Members Error__
<p align="center">
  <img src="./assets/images/num-members-error.jpg"/>
</p>

<!--- Outline my testing -->
# Testing

- I tested that my application works in different browsers: Microsoft Edge, Google Chrome and Mozilla Firefox, see below. I had to make some adjustments to my screen layout after this testing was completed, as, for example, my header logo did not appear correctly in Firefox.

<!--- Google Chrome, Microsoft Edge and Mozilla Firefox screenshots -->
Microsoft Edge
<p align="center">
  <img src="./assets/images/edge.jpg"/>  
</p>

Google Chrome
<p align="center">
  <img src="./assets/images/chrome.jpg"/>  
</p>

Mozilla Firefox
<p align="center">
  <img src="./assets/images/firefox.jpg"/>
</p>

- I tested and confirmed that my application is responsive on different screen sizes using Chrome DevTools. I designed my application on a Laptop, therefore my lineups are best suited to that screen size. I would have liked to have done some more testing on smaller and larger screen sizes. I spent a lot of time on my JavaScript validation routines so I had less time then to test my media queries and screen's responsiveness. I did test the application on my mobile phone, and it worked well, see below.

Samsung Galaxy A22 5G
<!--- Phone image -->
<p align="center">
  <img src="./assets/images/samsung.jpg"/>
</p>

- I tested and confirmed that my application's text is readable and has a good contrast between the background and foreground colours. I have used three main colours for the foreground and background, white, grey and black. I also colour coded the games: green for Euromillions, red for Lotto and blue for Dailymillions. I did this to make the content stand out. I used one main font: Nunito Sans, the reason for this is that this font is a good font to display both text and numbers. I discovered this font on Google fonts.    

- I confirmed that my validation routines work, I activated the generate numbers button without choosing a game first. The expected alert message to choose a game appeared on screen. I tested the entry of too few, too many and blank game number of lines. The expected alert messages to enter a valid number of lines appeared on screen. I tested the entry of zero, a minus figure and blank syndicate members. The expected alert message to enter a valid number of members appeared on screen. It is not allowed to enter a float number into the number of lines and member input boxes. They are converted to an integer if a float number is entered. I confirmed that this worked.   

<!--- Outline the validator testing done -->
__Validator Testing__

- HTML
  - No errors were returned when passing index.html through the official [(W3C) validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkevjord76.github.io%2Fmilestone-project-2%2F)
- CSS
  - No errors were returned when passing style.css through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkevjord76.github.io%2Fmilestone-project-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) 
- JavaScript
  - One warning was returned when passing script.js through the JSHint JavaScript Validator

<!--- JSHint image -->
<p align="center">
  <img src="./assets/images/jshint.jpg"/>
</p>

- Accessibility
  - I confirmed that the colours and font chosen are easy to read and accessible by running it through lighthouse in Chrome DevTools. I do have room for improvement here.

<!--- Lighthouse image -->
<p align="center">
  <img src="./assets/images/lighthouse.jpg"/>
</p>