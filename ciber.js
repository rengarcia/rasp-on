const database = firebase.database();

function on(){
    console.log("Hemos pulsado en on");
    database.ref('/home').set({
        led: true
    })
}

function off(){
    console.log("Hemos pulsado en off");
    database.ref('/home').set({
        led: false
    })
}

var checkbox = document.getElementById('checkbox');

checkbox.addEventListener("change", comprueba, false);

function comprueba(){
if(checkbox.checked){
    on();
}else{
    off();
}
}