
var computer;
var choices = ["rock", "paper", "scissors"];
var user;
var wins = 0;
var losses = 0;
var ties = 0;
var again;

computer = Math.floor(Math.random() * (choices.length)) + 0;
console.log(computer);

function choose() {
    var fighter = window.prompt("choose rock, paper,or scissors", "Who will win?");
    alert("the computer has chosen " + choices[computer]);
    if (!fighter) {
        return;
    }
    else if ((choices[computer]) === (fighter)) {
        ties++;
        window.alert("it is a tie!");

    } else if (
        (fighter === "rock" && choices === "scissors") ||
        (fighter === "paper" && choices === "rock") ||
        (fighter === "scissors" && choices === "paper")) {

        wins++;
        window.alert("You win!");

        // If above conditions failed, assume player lost
    } else {
        losses++;
        window.alert("You lost!");
    }

    // Print stats with line breaks
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    // Ask user to play again
    var again = window.confirm("Play again?");

    if (again) {
        choose();
    }
};

choose();


//function window.alert("the computer has choosen choices[computer]");
//document.getElementById("demo").innerHTML = "hello";
