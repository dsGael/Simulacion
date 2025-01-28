// var player = "X";
var next=false;
var win=false;
var winner=" ";

function turn(button) {
    console.log(button);
    button.disabled = true;
    button.value = next ? "O" : "X";
    var check=checkWinner();
    if(check===false){
        next = !next;
        document.getElementById("player").innerHTML = "Player " + (next ? "O" : "X") + " turn";
    }else{
        document.getElementById("player").innerHTML = "Player " + winner + " wins";
    }

}

function checkWinner() {
    
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;

    if (b1 === b2 && b2 === b3 && b1 !== "") {
        winner = b1;
        win=true;
        alert("Player " + b1 + " wins");
        reset();
    } else if (b4 === b5 && b5 === b6 && b4 !== "") {
        winner = b4;
        win=true;
        alert("Player " + b4 + " wins");
        reset();
    } else if (b7 === b8 && b8 === b9 && b7 !== "") {
        winner = b7;
        win=true;

        alert("Player " + b7 + " wins");
        reset();
    } else if (b1 === b4 && b4 === b7 && b1 !== "") {
        winner = b1;
        win=true;
        alert("Player " + b1 + " wins");
        reset();
    } else if (b2 === b5 && b5 === b8 && b2 !== "") {
        winner = b2;
        win=true;
        alert("Player " + b2 + " wins");
        reset();
    } else if (b3 === b6 && b6 === b9 && b3 !== "") {
        winner = b3;
        win=true;
        alert("Player " + b3 + " wins");
        reset();
    } else if (b1 === b5 && b5 === b9 && b1 !== "") {
        winner = b1;
        win=true;
        alert("Player " + b1 + " wins");
        reset();
    } else if (b3 === b5 && b5 === b7 && b3 !== "") {
        winner = b3;
        win=true;
        alert("Player " + b3 + " wins");
        reset();
    }

    return win;
    
}