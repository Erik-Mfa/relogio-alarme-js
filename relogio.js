var divRelogio = document.getElementById("divRelogio");
var divAlarme = document.getElementById("divAlarme");
var divCronometro = document.getElementById("divCronometro");
var chamaAlarme = document.getElementById("botaoDoAlarme");
var refresh = setInterval(Relogio,500)
Relogio()

chamaAlarme.addEventListener("click", function(){
    Alarme()
}, {once : true})

//função do relógio
function Relogio(){
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    var tempoTotal = horas + ":" + minutos + ":" + segundos; //number <------
    divRelogio.innerHTML = tempoTotal;

    ContarAlarme(horas, minutos, segundos)
}

//função para criar menu do alarme
function Alarme(){
    //cria os selects com os horários
    var secsSelect = document.createElement("select");
    secsSelect.setAttribute("id", "segundoSelect") 
    for(var i = 0; i <= 59; i++){
        var segundosOpt = document.createElement("option");
        segundosOpt.value = i;
        segundosOpt.innerHTML = i;
        secsSelect.appendChild(segundosOpt);
    }

    var minsSelect = document.createElement("select");
    minsSelect.setAttribute("id", "minutoSelect")
    for(var i = 0; i <= 59; i++){
        var minutosOpt = document.createElement("option");
        minutosOpt.value = i;
        minutosOpt.innerHTML = i;
        minsSelect.appendChild(minutosOpt);
    }

    var hrsSelect = document.createElement("select");
    hrsSelect.setAttribute("id", "horaSelect")
    for(var i = 0; i <= 23; i++){
        var horasOpt = document.createElement("option");
        horasOpt.value = i;
        horasOpt.innerHTML = i;
        hrsSelect.appendChild(horasOpt);
        
    }

    let defineAlarm = document.createElement("button");
    defineAlarm.textContent = "Definir"
    defineAlarm.name = "definir"
    defineAlarm.setAttribute("id", "define")

    divAlarme.appendChild(hrsSelect);
    divAlarme.appendChild(minsSelect);
    divAlarme.appendChild(secsSelect);
    divAlarme.appendChild(defineAlarm);

    defineAlarm.addEventListener("click", function(){
        Define()
    })
}

//função para definir o alarme
function Define(){
    horaAlarme = document.getElementById("horaSelect").value
    minutoAlarme = document.getElementById("minutoSelect").value
    segundoAlarme = document.getElementById("segundoSelect").value

    
    var paragrafo = document.createElement("p")
    var div = document.createElement("div")
    paragrafo.textContent = "Alarme definido para: " + horaAlarme + " : " + minutoAlarme + " : " + segundoAlarme //string <-----
    div.appendChild(paragrafo)
    divAlarme.appendChild(div)

    ContarAlarme(horaAlarme, minutoAlarme, segundoAlarme)
    
}

function ContarAlarme(horas, minutos, segundos, horaAlarme, minutoAlarme, segundoAlarme){
    stringHoraRelogio = horas.toString();
    stringMinutoRelogio = minutos.toString();
    stringSegundoRelogio = segundos.toString();

    tempoContador = stringHoraRelogio + stringMinutoRelogio + stringSegundoRelogio
    tempoAlarme = horaAlarme + minutoAlarme + segundoAlarme

    console.log(tempoContador)

}





