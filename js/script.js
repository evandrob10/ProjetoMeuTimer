// select elements

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let segund = document.querySelector("#segund");

let tempo = document.querySelectorAll(".tempo div p");

let iniciar = document.querySelector("#start");
let pausar = document.querySelector("#stop");
let zerar = document.querySelector("#zerar");

let zeroAEsquerda = numero => numero < 10 ? `0${numero}` : numero;

// Variaveis temp

let houra = 0;
let minutos = 0;
let segundos = 0;

let timer;

//incrementação dos botoes:
    iniciar.addEventListener("click",()=>{
       timer = setInterval(()=>{
            if(segundos < 60){
                segundos++;
                segund.innerHTML = zeroAEsquerda(segundos);
            }else if(minutos < 60){
                segundos = 0;
                minutos++;
                minute.innerHTML = zeroAEsquerda(minutos);
            }else{
                minutos = 0;
                segundos = 0;
                houra++;
                hour.innerHTML = zeroAEsquerda(houra);
            }
        },1000)
        mudarCorTempo(false);        
    })
    pausar.addEventListener("click",()=>{
        clearInterval(timer);
        mudarCorTempo(true);
    })
    zerar.addEventListener("click",()=>{
        houra,minutos,segundos = 0;
        hour.innerHTML  = "00";
        minute.innerHTML = "00";
        segund.innerHTML = "00";
        clearInterval(timer)
    })

    let mudarCorTempo = (valida) => {
        tempo.forEach((elementos)=> {
            valida ? elementos.setAttribute("class","tempo-parado") : elementos.classList.remove("tempo-parado");
        })
    }