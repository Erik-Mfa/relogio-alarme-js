var divRelogio = document.getElementById("divRelogio");
var divAlarme = document.getElementById("divAlarme");
var divCronometro = document.getElementById("divCronometro");
var chamaAlarme = document.getElementById("botaoDoAlarme");
var mostraAlarmes = document.getElementById("botaoMostraAlarmes")
var refresh = setInterval(relogio,500);
var alarmeDiv = 0;
var requestURL = "https://erik-mfa.github.io/alarmes.json/alarmes.json"
var request = new XMLHttpRequest();
var response;
relogio();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    response = request.response;
    console.log(response);
}

chamaAlarme.addEventListener("click", function(){
    divAlarme.innerHTML = "";
    alarme()
})

mostraAlarmes.addEventListener("click", function(){
    mostra()
})

function mostra(){      
    divAlarme.innerHTML = "";

    var dataAlarme = response.map(response => {return response.data + ": " + response.horario + " "})

    dataAlarme.forEach(element => {
        var div = document.createElement("div");
        
        div.innerHTML = element
        div.className = "alarmes"

        divAlarme.appendChild(div)
    });
    
    // var horaAlarme = response.map(response => {return response.horario})
}

//função do relógio
//é executada a todo o momento
function relogio(){
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    var tempoTotal = horas + ":" + minutos + ":" + segundos; //number <------
    divRelogio.innerHTML = tempoTotal;

}

//função para criar menu do alarme
function alarme(){
    divAlarme.style.display = "block"
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
        define(alarmeDiv)
    })
}

//função para definir o alarme

function define(alarmeDiv){
    var horaAlarme = document.getElementById("horaSelect").value
    var minutoAlarme = document.getElementById("minutoSelect").value
    var segundoAlarme = document.getElementById("segundoSelect").value //string <-----
    
    var paragrafo = document.createElement("p")
    var div = document.createElement("div")
    paragrafo.textContent = "Alarme definido para: " + horaAlarme + " : " + minutoAlarme + " : " + segundoAlarme
    div.appendChild(paragrafo)

    div.setAttribute("id", alarmeDiv)
    divAlarme.appendChild(div) 

    //envia uma vez o numero para ser comparado com a hora atual
    var alarme = horaAlarme + minutoAlarme + segundoAlarme
    
    envia(alarme, alarmeDiv)
}

//variavel que executa a função do alarme
var enviaAlarme 

function envia(alarme, alarmeDiv){
    
    if(alarme){
        enviaAlarme = setInterval(valor, 1000)
    }

    function valor(){
        comparar(alarme, alarmeDiv)
    }
}


function comparar(alarme, alarmeDiv){
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
            var div = document.getElementById(alarmeDiv)
 
            alarmes.splice(0, alarmes.length)
            clearInterval(enviaAlarme)
            enviaAlarme = undefined
            
            if(div != null){
                div.remove()
            }

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

    







