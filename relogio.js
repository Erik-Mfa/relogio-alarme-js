//função do relógio
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
    //remove o relogio
    clearInterval(refresh);
    var tempo = document.getElementById("divRelogio");
    tempo.remove();

    var alarme = document.getElementById("divAlarme");

    //cria os selects com os horários
    var hrs = document.createElement("select");
    for(var i = 0; i < 25; i++){
        var horasOpt = document.createElement("option");
        horasOpt.value = i;
        horasOpt.innerHTML = i;
        hrs.appendChild(horasOpt);
    }

    var mins = document.createElement("select");
    for(var i = 0; i < 25; i++){
        var minutosOpt = document.createElement("option");
        minutosOpt.value = i;
        minutosOpt.innerHTML = i;
        mins.appendChild(minutosOpt);
    }

    var secs = document.createElement("select");
    for(var i = 0; i < 25; i++){
        var segundosOpt = document.createElement("option");
        segundosOpt.value = i;
        segundosOpt.innerHTML = i;
        secs.appendChild(segundosOpt);
    }

    var defineAlarme = document.createElement("button");
    defineAlarme.textContent = "Definir"

    alarme.appendChild(hrs);
    alarme.appendChild(mins);
    alarme.appendChild(secs);
    alarme.appendChild(defineAlarme);


}