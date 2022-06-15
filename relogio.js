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
    var secs = document.createElement("select");
    secs.setAttribute("id", "segundoSelect") 
    for(var i = 0; i <= 59; i++){
        var segundosOpt = document.createElement("option");
        segundosOpt.value = i;
        segundosOpt.innerHTML = i;
        secs.appendChild(segundosOpt);
    }

    var mins = document.createElement("select");
    mins.setAttribute("id", "minutoSelect")
    for(var i = 0; i <= 59; i++){
        var minutosOpt = document.createElement("option");
        minutosOpt.value = i;
        minutosOpt.innerHTML = i;
        mins.appendChild(minutosOpt);
    }

    var hrs = document.createElement("select");
    hrs.setAttribute("id", "horaSelect")
    for(var i = 0; i <= 23; i++){
        var horasOpt = document.createElement("option");
        horasOpt.value = i;
        horasOpt.innerHTML = i;
        hrs.appendChild(horasOpt);
    }

    let defineAlarm = document.createElement("button");
    defineAlarm.textContent = "Definir"
    defineAlarm.name = "definir"
    defineAlarm.setAttribute("id", "define")

    alarme.appendChild(hrs);
    alarme.appendChild(mins);
    alarme.appendChild(secs);
    alarme.appendChild(defineAlarm);

    defineAlarm.addEventListener("click", function(){
        Define()
    })
    
}

function Define(){
    horaAlarme = document.getElementById("horaSelect").value
    minutoAlarme = document.getElementById("minutoSelect").value
    segundoAlarme = document.getElementById("segundoSelect").value

    var paragrafo = document.createElement("p")
    var div = document.createElement("div")
    paragrafo.textContent = "Alarme definido para: " + horaAlarme + " : " + minutoAlarme + " : " + segundoAlarme
    div.appendChild(paragrafo)
    divAlarme.appendChild(div)
    
    console.log(horaAlarme, minutoAlarme, segundoAlarme)
}
