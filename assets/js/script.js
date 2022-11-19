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

    // Make sure the required elements are displayed or not displayed
    document.getElementById("lottery-criteria").style.display = "initial";
    document.getElementById("pick-num-image").style.display = "initial";
    document.getElementById("results").style.display = "none";

    // Set the generate numbers button text
    document.getElementById("generate").innerText = `Generate ${lotteryType} Numbers`;

    // Set the required elements to their default values
    if (lotteryType === "euromillions") {
        document.getElementById("generate").style.color = '#008000'; // green
        document.getElementById("plus").checked = true;
        document.getElementById("num-lines").value = "1";
        document.getElementById("num-members").value = "1";
    } else if (lotteryType === "lotto") {
        document.getElementById("generate").style.color = '#FF0000'; // red
        document.getElementById("plus").checked = true;
        document.getElementById("num-lines").value = "2"; // mimimum of 2 lines
        document.getElementById("num-members").value = "1";
    } else if (lotteryType === "dailymillions") {
        document.getElementById("generate").style.color = '#0000FF'; // blue
        document.getElementById("plus").checked = true;
        document.getElementById("num-lines").value = "1";
        document.getElementById("num-members").value = "1";
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
    generateNumbers(chosenGame, totalNumbers, chosenNumbers, luckyStars);
}

/**
 * This function generates the random lottery numbers based
 * on the total number of lottery balls in the draw, 
 * number of balls to be chosen and are lucky stars included 
 */
function generateNumbers(chosenGame, totalNumbers, chosenNumbers, luckyStars) {

    // Store the number of lines entered
    let numLines = parseInt(document.getElementById("num-lines").value);

    // Store the number of members entered
    let numMembers = parseInt(document.getElementById("num-members").value);

    // Store the plus option chosen
    let includePlus = document.getElementById("plus").checked

    // Array of lottery game random numbers
    let randomNumbers = [];

    // Array of euromillions lucky stars random numbers
    let luckystarsNumbers = [];

    // Output text of lottery game random numbers header, each line and totals...
    let htmlResult = ""

    // Check the game chosen
    if (chosenGame.includes("EUROMILLIONS")) {
        if (numLines === 1) {
            htmlResult = `<br>(${chosenGame.substr(9)} GENERATED) - ${numLines} line of 5 Numbers (1-50) 2 Lucky Stars (1-12)`;
        } else {
            htmlResult = `<br>(${chosenGame.substr(9)} GENERATED) - ${numLines} lines of 5 Numbers (1-50) 2 Lucky Stars (1-12)`;
        }
    } else if (chosenGame.includes("LOTTO")) {
        if (numLines === 1) {
            htmlResult = `<br>(${chosenGame.substr(9)} GENERATED) - ${numLines} line of 6 Numbers (1-47)`;
        } else {
            htmlResult = `<br>(${chosenGame.substr(9)} GENERATED) - ${numLines} lines of 6 Numbers (1-47)`;
        }
    } else if (chosenGame.includes("DAILYMILLIONS")) {
        if (numLines === 1) {
            htmlResult = `<br>(${chosenGame.substr(9)} GENERATED) - ${numLines} line of 6 Numbers (1-39)`;
        } else {
            htmlResult = `<br>(${chosenGame.substr(9)} GENERATED) - ${numLines} lines of 6 Numbers (1-39)`;
        }
    }

    // Is the lottery game plus option included
    if (includePlus) {
        htmlResult += " (Plus Included)<br><br>"
    } else {
        htmlResult += " (No Plus Included)<br><br>"
    }

    // Loop for the number of lines chosen
    for (let i = 0; i < numLines; i++) {

        // Reset to empty
        randomNumbers = [];
        luckystarsNumbers = [];

        // Continue until there is a full set of numbers for the game
        do {
            // Creates a random number between 1 and the total number in the lottery game
            let num = Math.floor(Math.random() * totalNumbers) + 1;

            // Only store unique numbers
            if (!randomNumbers.includes(num)) {
                // Add to the array
                randomNumbers.push(num);
            }

        } while (randomNumbers.length < chosenNumbers);

        // Only done for euromillions game
        if (luckyStars) {
            // Continue until there is a full set of numbers for the lucky stars array
            do {
                // Creates a random number between 1 and 12
                let num1 = Math.floor(Math.random() * 12) + 1;

                // Only store unique numbers
                if (!luckystarsNumbers.includes(num1)) {
                    // Add to the array
                    luckystarsNumbers.push(num1);
                }

            } while (luckystarsNumbers.length < 2);
        }

        // Numeric sort function discovered on www.w3schools.com 
        randomNumbers.sort(function (a, b) {
            return a - b
        });
        luckystarsNumbers.sort(function (a, b) {
            return a - b
        });

        // Lucky stars are only included in the euromillions lottery game
        if (luckyStars) {
            htmlResult += `Line No.${i+1}:  (${randomNumbers}) Lucky Stars: (${luckystarsNumbers}) <br><br>`;
        } else {
            htmlResult += `Line No.${i+1}:  (${randomNumbers}) <br><br>`;
        }
    }

    // Make sure the requirements elements are displayed or not displayed
    document.getElementById("lottery-criteria").style.display = "none";
    document.getElementById("pick-num-image").style.display = "none";
    document.getElementById("results").style.display = "block";

    // Set the costs to zero
    let totCost = 0
    let costPerMember = 0
    let costPerLine = 0

    // Calculate the total cost
    if (includePlus) {
        if (chosenGame.includes("EUROMILLIONS")) {
            totCost = numLines * 3.50;
            costPerLine = 3.50
        } else if (chosenGame.includes("LOTTO")) {
            totCost = numLines * 3.00;
            costPerLine = 3.00
        } else if (chosenGame.includes("DAILYMILLIONS")) {
            totCost = numLines * 1.50;
            costPerLine = 1.50
        }
    } else {
        if (chosenGame.includes("EUROMILLIONS")) {
            totCost = numLines * 2.50;
            costPerLine = 2.50
        } else if (chosenGame.includes("LOTTO")) {
            totCost = numLines * 2.00;
            costPerLine = 2.00
        } else if (chosenGame.includes("DAILYMILLIONS")) {
            totCost = numLines * 1.00;
            costPerLine = 1.00
        }
    }

    // Set to 2 decimal places
    totCost = (totCost).toFixed(2);
    costPerLine = (costPerLine).toFixed(2);
    costPerMember = totCost / numMembers;
    costPerMember = parseFloat(costPerMember).toFixed(2);

    // Display the total cost
    htmlResult += `The total cost is €${totCost}  `

    // Check the number of lines entered
    if (numLines === 1) {
        htmlResult += `(${numLines} line @${costPerLine} per line)`
    } else {
        htmlResult += `(${numLines} lines @${costPerLine} per line)`
    }

    // Display the cost per member
    htmlResult += `<br>The cost per member is €${costPerMember}`

    // Check the number of members entered
    if (numMembers === 1) {
        htmlResult += ` (${numMembers} member)`
    } else {
        htmlResult += ` (${numMembers} members)`
    }

    // Set the results div to the required text
    document.getElementById("results").innerHTML = htmlResult;

}