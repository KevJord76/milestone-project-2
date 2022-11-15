// Wait for the DOM to finish loading  
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "generate") {
                generateNumbers();
            } else {
                let lotteryType = this.getAttribute("data-type");
                lotteryGame(lotteryType);
            }
        })
    }
})

/**
 * Sets the text of the generate button to the lottery game chosen and sets the button colour as follows:
 * green for euromillions, red for lotto and blue for dailymillions 
 */
function lotteryGame(lotteryType) {

    // Set the generate numbers button text
    document.getElementById("generate-numbers").innerText = `Generate ${lotteryType} Numbers`;

    // Set the generate numbers button colour
    if (lotteryType === "euromillions") {
        document.getElementById("generate-numbers").style.color = '#008000'; // green
    } else if (lotteryType === "lotto") {
        document.getElementById("generate-numbers").style.color = '#FF0000'; // red
    } else if (lotteryType === "dailymillions") {
        document.getElementById("generate-numbers").style.color = '#0000FF'; // blue
    } else {
        alert(`Unknown lottery game type: ${lotteryType}`)
        throw `Unknown lottery game type: ${lotteryType}. Aborting!`;
    }
}

/**
 * This function generates the random lottery numbers
 */
function generateNumbers() {

}