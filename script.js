const prompt = require("prompt-sync")();

const answer = prompt(
    "Would you like to play (y/n)? "
);

if (answer.toLowerCase() === "y") {
    const answer2 = prompt("Would you like to go left or right (left/right)? ");

    if (answer2 === "left") {
        console.log("Oh no! You walked left into a dark cave with a bear in it. Game Over.")
    } else {
        // right
        console.log(
            "Good Choice! You head right on to a bridge..."
        );
        const answer3 = prompt(
            "would you like to cross the bridge, or jump into the water below (cross/swim)? "
        );
    
    if (answer3 === "cross") {
        console.log(
            "You crossed the bridge and won the game."
        );
    } else {
        console.log(
            "The water is moving faster than you thought, Game Over."
        );
    }
}
} else {
    console.log("Your loss!");
}