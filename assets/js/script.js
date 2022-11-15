// Wait for the DOM to finish loading before running the lottery game  
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
 * This function generates the random lottery numbers
 */
function generateNumbers() {
   
}

/**
 * This function checks the lottery game type chosen
 */
function lotteryGame(lotteryType) {
    
}