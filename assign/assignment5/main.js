window.onload = change

function change(){
    let i = document.getElementById("top");
    i.innerHTML = "Welcome to the Forum";
}
let i= 1;
function postFunction() { 
    let message = document.getElementById("message").value;
    if(i == 1){
    document.getElementById("topic").innerText = message;
    console.log(message);
    i++;
    }else if(i == 2){
    document.getElementById("reply1").innerText = message;
    console.log(message);
    i++;
    }
    else if(i == 3){ 
    document.getElementById("reply2").innerText = message;
    console.log(message);
    i++;
    }
    document.getElementById("message").value = "";
}

function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
    i=1;
}