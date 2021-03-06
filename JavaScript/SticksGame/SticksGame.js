
// alert(`players will take turns choosing at least 1 and no more than 3 of the remaining sticks until the sticks are gone.  The player that takes the last stick loses.`);

let SticksLeft = 20;
let i = 0;
let turns = 0;

//---------------------Loop that repeats game until someone wins -----------
while (i < 1000) {
    SticksLeft = PlayerTurn(SticksLeft, turns);
    i++;
}

//---------------------Functions--------------------------------------------
function PlayerTurn(SticksLeft) {

    // Begins turn by checking to see if someone won
    CheckWin(SticksLeft, turns);

    /*
    This if statement decides which players turn it is by finding if the number 
    of successful plays is even (player one) or odd(player two)
    */
    let playerName;
    if (turns % 2 == 0) {
        playerName = "Player One";
    }
    else {
        playerName = "Player Two";
    }

    //let SticksChosen = prompt(`${playerName}, choose how many sticks.  There are ${SticksLeft} left`);

    document.getElementById("button1").onclick = function () { Minus1Stick(SticksLeft); }


    if (SticksLeft > 3) {
        if (SticksChosen < 1 || SticksChosen > 3) {
            alert(`You can only chose 1 to 3 sticks.  Moving to next players turn`);
            return SticksLeft;
        }
        else {
            turns = turns + 1;
            return (SticksLeft - SticksChosen);
        }
    }

    if (SticksLeft <= 3) {
        if (SticksChosen > SticksLeft) {
            alert(`You can only chose less sticks then there are sticks left.`);
            return SticksLeft;
        }
        else {
            turns = turns + 1;
            return (SticksLeft - SticksChosen);
        }
    }

    function Minus1Stick (SticksLeft)
    {
        SticksLeft = (SticksLeft -1);
        let sticksLeftDisplay = document.getElementById("SticksLeftDisplay");
        sticksLeftDisplay.innerText = SticksLeft;
    }


}


// Checks if sticks is zero, then determines which player won.  If neither, returns nothing
function CheckWin(SticksLeft, turns) {
    let WhichPlayer = (turns % 2);
    if (SticksLeft == 0) {
        if (WhichPlayer == 0) {
            let winningmessage = alert(`Player2 lost!`);
            return winningmessage;
        }
        else {
            let winningmessage = alert(`Player1 lost!`);
            return winningmessage;
        }
    }
    return "";
}