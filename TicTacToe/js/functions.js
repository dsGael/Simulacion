// var player = "X";
var next=false;
var win=false;
var winner=" ";

function turn(button) {
    console.log(button);
    button.disabled = true;
    button.value = next ? "O" : "X";
    var verify=verificar();
    if(verify){
        finished();
    }

    next = !next;
   

}

function reset() {
    document.querySelectorAll("input[type='button']").forEach(btn => {
    btn.disabled = false;
    btn.value = "";
    });
    document.getElementById("Reset").value = "Reset";
    document.getElementById("player").innerHTML = "Player X";
}

function finished(){
    botones=document.querySelectorAll("input[type='button']");
    document.querySelectorAll("input[type='button']").forEach(btn => {
        btn.disabled = true; });
    document.getElementById("Reset").disabled = false;
    
   
}

function verificar(){
    var botones=document.querySelectorAll("input[type='button']")
    if(botones[0].value==botones[1].value && botones[1].value==botones[2].value && botones[2].value!=""){
        win=true;
        winner=botones[0].value;
        document.getElementById("player").innerHTML = "Player "+winner+" wins";
        

    }else if(botones[3].value==botones[4].value && botones[4].value==botones[5].value && botones[5].value!=""){
        win=true;
        winner=botones[3].value;
        document.getElementById("player").innerHTML = "Player "+winner+" wins";
        

    }else if(botones[6].value==botones[7].value && botones[7].value==botones[8].value && botones[8].value!=""){
        win=true;
        winner=botones[6].value;
        document.getElementById("player").innerHTML = "Player "+winner+" wins";
        

    }else if(botones[0].value==botones[3].value && botones[3].value==botones[6].value && botones[6].value!=""){
        win=true;
        winner=botones[0].value;
        document.getElementById("player").innerHTML = "Player "+winner+" wins";
        

    }else if(botones[1].value==botones[4].value && botones[4].value==botones[7].value && botones[7].value!=""){
        win=true;
        winner=botones[1].value;
        document.getElementById("player").innerHTML = "Player "+winner+" wins";
        
    }else if(botones[2].value==botones[5].value && botones[5].value==botones[8].value && botones[8].value!=""){
        win=true;
        winner=botones[2].value;
        document.getElementById("player").innerHTML = "Player "+winner+" wins";
        
    }
    else if(botones[0].value==botones[4].value && botones[4].value==botones[8].value && botones[8].value!=""){
        win=true;
        winner=botones[0].value;
        document.getElementById("player").innerHTML = "Player "+winner+" wins";
        
    }
    else if(botones[2].value==botones[4].value && botones[4].value==botones[6].value && botones[6].value!=""){
        win=true;
        winner=botones[2].value;
        document.getElementById("player").innerHTML = "Player "+winner+" wins";
        
    }

    return win;


}