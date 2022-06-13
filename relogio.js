function Relogio(){
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    var tempoTotal = horas + ":" + minutos + ":" + segundos;
    var tempo = document.getElementById("divRelogio");
    tempo.innerHTML = tempoTotal;
}

var refresh = setInterval(Relogio,500)

function Alarme(){
    clearInterval(refresh);

    var div = document.getElementById("divRelogio")
    div.innerHTML = "";

    var hrs = dociment.createElement("div");
    var mins = dociment.createElement("div");
    var secs = dociment.createElement("div");

    var inputHoras = document.createElement("input");
    var inputMinutos = document.createElement("input");
    var inputSegundos = document.createElement("input"); 
    
    inputHoras.appendChild(hrs)
    inputMinutos.appendChild(mins)
    inputSegundos.appendChild(secs)

    
    
}