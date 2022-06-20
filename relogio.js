var divRelogio = document.getElementById("divRelogio");
var divAlarme = document.getElementById("divAlarme");
var divCronometro = document.getElementById("divCronometro");
var chamaAlarme = document.getElementById("botaoDoAlarme");
var refresh = setInterval(Relogio,500);
var alarmeDiv = 0;
Relogio();

chamaAlarme.addEventListener("click", function(){
    Alarme()
}, {once : true})

//função do relógio
//é executada a todo o momento
function Relogio(){
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    var tempoTotal = horas + ":" + minutos + ":" + segundos; //number <------
    divRelogio.innerHTML = tempoTotal;

}

//função para criar menu do alarme
function Alarme(){
    //cria os selects com os horários
    var secsSelect = document.createElement("select");
    secsSelect.setAttribute("id", "segundoSelect")
    secsSelect.className = "selectAlarme" 
    for(var i = 0; i <= 59; i++){
        var segundosOpt = document.createElement("option");
        segundosOpt.value = i;
        segundosOpt.innerHTML = i;
        secsSelect.appendChild(segundosOpt);
    }

    var minsSelect = document.createElement("select");
    minsSelect.setAttribute("id", "minutoSelect")
    minsSelect.classList.add("selectAlarme")
    for(var i = 0; i <= 59; i++){
        var minutosOpt = document.createElement("option");
        minutosOpt.value = i;
        minutosOpt.innerHTML = i;
        minsSelect.appendChild(minutosOpt);
    }

    var hrsSelect = document.createElement("select");
    hrsSelect.setAttribute("id", "horaSelect")
    hrsSelect.classList.add("selectAlarme")
    for(var i = 0; i <= 23; i++){
        var horasOpt = document.createElement("option");
        horasOpt.value = i;
        horasOpt.innerHTML = i;
        hrsSelect.appendChild(horasOpt);
        
    }

    let defineAlarm = document.createElement("button");
    defineAlarm.textContent = "Definir"
    defineAlarm.name = "definir"
    defineAlarm.className = "alarmButtonDefine" 
    defineAlarm.setAttribute("id", "define")

    divAlarme.appendChild(hrsSelect);
    divAlarme.appendChild(minsSelect);
    divAlarme.appendChild(secsSelect);
    divAlarme.appendChild(defineAlarm);

    //chama função do alarme
    defineAlarm.addEventListener("click", function(){
        ++alarmeDiv
        Define(alarmeDiv)
    })
}

//função para definir o alarme
function Define(alarmeDiv){
    var horaAlarme = document.getElementById("horaSelect").value
    var minutoAlarme = document.getElementById("minutoSelect").value
    var segundoAlarme = document.getElementById("segundoSelect").value //string <-----
    
    var paragrafo = document.createElement("p")
    var div = document.createElement("div")
    paragrafo.textContent = "Alarme: " + horaAlarme + " : " + minutoAlarme + " : " + segundoAlarme 
    div.appendChild(paragrafo)
    div.setAttribute("id", alarmeDiv)
    divAlarme.appendChild(div) 
    //se o alarme DIV alarme diminuir deleta a DIV

    //envia uma vez o numero para ser comparado com a hora atual
    var alarme = horaAlarme + minutoAlarme + segundoAlarme
    Envia(alarme, alarmeDiv)
}

//variavel que executa a função do alarme
var enviaAlarme 

function Envia(alarme, alarmeDiv){
    
    if(alarme){
        enviaAlarme = setInterval(valor, 1000)
    }

    function valor(){
        Comparar(alarme, alarmeDiv)
    }
}


function Comparar(alarme, alarmeDiv){
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    hora = horas.toString()
    minuto = minutos.toString()
    segundo = segundos.toString()

    var tempo = hora + minuto + segundo

    const alarmes = [];
    
    if(alarme){
        alarmes.push(alarme);

        if(alarmes[0] == tempo){
            var musica = document.getElementById("myAudio")
            alarmes.splice(0, alarmes.length)
            clearInterval(enviaAlarme)
            enviaAlarme = undefined
            var div = document.getElementById(alarmeDiv)
            div.remove();

            function tocar(){
                musica.play()
            }
            tocar();

        }

    }
    console.log(alarmes)
    console.log(tempo)
    console.log(alarmeDiv)
}

    







