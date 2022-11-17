// Wait for the DOM to finish loading  
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "generate") {
                checkGame();
            } else {
                let lotteryType = this.getAttribute("data-type");
                lotteryGame(lotteryType);
            }
        })
    }
})

/**
 * Sets the text of the generate numbers button to the lottery game chosen and sets the button colour  
 * as follows: green for euromillions, red for lotto and blue for dailymillions
 * Sets the minimun number of lines per game, e.g. the lotto game requires a minimum of 2 lines  
 */
function lotteryGame(lotteryType) {

    // Set the generate numbers button text
    document.getElementById("generate").innerText = `Generate ${lotteryType} Numbers`;

    // Set the generate numbers button colour
    if (lotteryType === "euromillions") {
        document.getElementById("generate").style.color = '#008000'; // green
        document.getElementById("num-lines").value = "1";
    } else if (lotteryType === "lotto") {
        document.getElementById("generate").style.color = '#FF0000'; // red
        document.getElementById("num-lines").value = "2"; // mimimum of 2 lines
    } else if (lotteryType === "dailymillions") {
        document.getElementById("generate").style.color = '#0000FF'; // blue
        document.getElementById("num-lines").value = "1";
    } else {
        alert(`Unknown lottery game type: ${lotteryType}`)
        throw `Unknown lottery game type: ${lotteryType}. Aborting!`;
    }
}

/**
 * Check which lottery game the user has chosen, then define the 
 * game rules: Total number of lottery balls in the draw, 
 * number of balls to be chosen and are lucky stars included    
 */
function checkGame() {

    // Store the text of the chosen lottery game
    let chosenGame = document.getElementById("generate").innerText;
    
    // Default to Euromillions: 50 numbers in total, 5 numbers to be generated, lucky stars included
    let totalNumbers = 50;
    let chosenNumbers = 5;
    let luckyStars = true;

    // Check what the chosen lottery game is
    if (chosenGame.includes("EUROMILLIONS")) {
        totalNumbers = 50;
        chosenNumbers = 5;
        luckyStars = true;
    } else if (chosenGame.includes("LOTTO")) {
        totalNumbers = 47;
        chosenNumbers = 6;
        luckyStars = false;
    } else if (chosenGame.includes("DAILYMILLIONS")) {
        totalNumbers = 39;
        chosenNumbers = 6;
        luckyStars = false;
    } else {
        alert("Unknown lottery game chosen");
        throw "Unknown lottery game chosen. Aborting!";
    }

    // Generte the random lottery numbers
    generateNumbers(totalNumbers, chosenNumbers, luckyStars);
}

/**
 * This function generates the random lottery numbers based
 * on the total number of lottery balls in the draw, 
 * number of balls to be chosen and are lucky stars included 
 */
function generateNumbers(totalNumbers, chosenNumbers, luckyStars) {

    // Store the number of lines chosen
    let numLines = parseInt(document.getElementById("num-lines").value);
    
    // Array of lottery game random numbers
    let randomNumbers = [];

    // Continue until there is a full set of numbers for the game
    do {
        // Creates a random number between 1 and total number in the lottery game
        let num = Math.floor(Math.random() * totalNumbers) + 1;

        // Only store unique numbers
        if (!randomNumbers.includes(num)) {
            // Add to the array
            randomNumbers.push(num);
        }
            
    } while (randomNumbers.length <  chosenNumbers);
        
    // numeric sort function discovered on www.w3schools.com 
    randomNumbers.sort(function(a, b){return a-b});
    alert(randomNumbers);
}     