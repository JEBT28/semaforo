// Duracion
// Verde: 10 seg
// Verde-Parpadeo: 3 seg
// Amarillo: 3 seg
// Rojo: 3 seg
let conteo = 0;
var semaforoNorte = document.querySelector(".norte.semaforo");
var semaforoSur = document.querySelector(".sur.semaforo");
var semaforoEste = document.querySelector(".este.semaforo");
var semaforoOeste = document.querySelector(".oeste.semaforo");

var contador = document.getElementById("contador");

let intervaloVerde;
let intervaloAmarillo;
let intervaloRojo;

let sentido = "norte-sur";

window.onload = () => {
    document.getElementById("iniciar").addEventListener("click", IniciarConteo);
    document.getElementById("intermitentes").addEventListener("click", Intermitentes);
    document.getElementById("reset").addEventListener("click", Reset);
};

const IniciarConteo = () => {
    document.getElementById("intermitentes").disabled = true;
    document.getElementById("intermitentes").style.backgroundColor = "gray";
    conteo = 1;
    clearInterval(intervaloVerde);
    clearInterval(intervaloAmarillo);
    clearInterval(intervaloRojo);

    intervaloVerde = null;
    intervaloAmarillo = null;
    intervaloRojo = null;

    semaforoEste.querySelector(".luz-roja").style.backgroundColor = "red";
    semaforoOeste.querySelector(".luz-roja").style.backgroundColor = "red";
    PeriodoVerde(semaforoNorte, semaforoSur);

};

const Intermitentes = () => {
    document.getElementById("iniciar").disabled = true;
    document.getElementById("iniciar").style.backgroundColor = "gray";
    contador.style.color = "transparent";
    intervaloAmarillo = window.setInterval(() => {
        contador.style.color = contador.style.color == "transparent" ? "yellow" : "transparent";
        semaforoNorte.querySelector(".luz-amarilla").style.backgroundColor = semaforoNorte.querySelector(".luz-amarilla").style.backgroundColor == "yellow" ? "gainsboro": "yellow";
        semaforoSur.querySelector(".luz-amarilla").style.backgroundColor = semaforoSur.querySelector(".luz-amarilla").style.backgroundColor == "yellow" ? "gainsboro": "yellow";
        semaforoEste.querySelector(".luz-amarilla").style.backgroundColor = semaforoEste.querySelector(".luz-amarilla").style.backgroundColor == "yellow" ? "gainsboro": "yellow";
        semaforoOeste.querySelector(".luz-amarilla").style.backgroundColor = semaforoOeste.querySelector(".luz-amarilla").style.backgroundColor == "yellow" ? "gainsboro": "yellow";
        conteo += .5;
    }, 500)
}

const Reset = () => {

    clearInterval(intervaloVerde);
    clearInterval(intervaloAmarillo);
    clearInterval(intervaloRojo);

    intervaloVerde = null;
    intervaloAmarillo = null;
    intervaloRojo = null;

    semaforoNorte.querySelector(".luz-amarilla").style.backgroundColor = "gainsboro";
    semaforoSur.querySelector(".luz-amarilla").style.backgroundColor = "gainsboro";
    semaforoEste.querySelector(".luz-amarilla").style.backgroundColor = "gainsboro";
    semaforoOeste.querySelector(".luz-amarilla").style.backgroundColor = "gainsboro";
    semaforoEste.querySelector(".luz-verde").style.backgroundColor = "gainsboro";
    semaforoNorte.querySelector(".luz-verde").style.backgroundColor = "gainsboro";
    semaforoOeste.querySelector(".luz-verde").style.backgroundColor = "gainsboro";
    semaforoSur.querySelector(".luz-verde").style.backgroundColor = "gainsboro";
    semaforoNorte.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
    semaforoSur.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
    semaforoEste.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
    semaforoOeste.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
    contador.style.color = "transparent";
    conteo = 0
    contador.innerHTML = conteo;
    document.getElementById("iniciar").disabled = false;
    document.getElementById("intermitentes").disabled = false;
    document.getElementById("iniciar").style.backgroundColor = "#023e8a";
    document.getElementById("intermitentes").style.backgroundColor = "#023e8a";
    
}

const PeriodoVerde = (semaforoA, semaforoB,) => {
    contador.style.color = "green";
    contador.innerHTML = conteo;
    semaforoA.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
    semaforoB.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
    semaforoA.querySelector(".luz-verde").style.backgroundColor = "green";
    semaforoB.querySelector(".luz-verde").style.backgroundColor = "green";
    conteo = 1;
    intervaloVerde = window.setInterval(() => {
        contador.innerHTML = Math.floor(conteo);
        conteo += 0.5;
    }, 500);

    setTimeout(() => {
        if (intervaloVerde == null) {
            clearInterval(intervaloVerde);
            return
        }
        else {
            clearInterval(intervaloVerde);
            intervaloVerde = window.setInterval(() => {
                contador.style.color = contador.style.color == "green" ? "transparent" : "green";
                semaforoA.querySelector(".luz-verde").style.backgroundColor = semaforoA.querySelector(".luz-verde").style.backgroundColor == "green" ? "gainsboro" : "green";
                semaforoB.querySelector(".luz-verde").style.backgroundColor = semaforoB.querySelector(".luz-verde").style.backgroundColor == "green" ? "gainsboro" : "green";
                contador.innerHTML = Math.floor(conteo);
                conteo += .5;
            }, 500)
        }
    }, 9500);
    setTimeout(() => { conteo = 1; }, 10500);

    setTimeout(() => {
       
        if (intervaloVerde == null) {
            clearInterval(intervaloVerde);
        }
        else {
            clearInterval(intervaloVerde);
            semaforoA.querySelector(".luz-verde").style.backgroundColor = "gainsboro";
            semaforoB.querySelector(".luz-verde").style.backgroundColor = "gainsboro";
            PeriodoAmarillo(semaforoA, semaforoB);
        }
    }, 13500);
};

const PeriodoAmarillo = (semaforoA, semaforoB) => {

    intervaloAmarillo = window.setInterval(() => {
        contador.innerHTML = Math.floor(conteo);
        conteo+=.5;
    }, 500);
    contador.style.color = "yellow";
    conteo = 1.5;
    contador.innerHTML = Math.floor(conteo);
    semaforoA.querySelector(".luz-amarilla").style.backgroundColor = "yellow";
    semaforoB.querySelector(".luz-amarilla").style.backgroundColor = "yellow";
    setTimeout(() => {
        semaforoA.querySelector(".luz-amarilla").style.backgroundColor = "gainsboro";
        semaforoB.querySelector(".luz-amarilla").style.backgroundColor = "gainsboro";
        contador.style.color = "transparent";
    }, 2500)
   

    setTimeout(() => {

        if (intervaloAmarillo == null) {
            clearInterval(intervaloAmarillo);
        }
        else {
            clearInterval(intervaloAmarillo);
            conteo = 1.5;
            PeriodoRojo(semaforoA, semaforoB);
        }
    }, 3000);


};

const PeriodoRojo = (semaforoA, semaforoB) => {
    contador.style.color = "red";
    contador.innerHTML = Math.floor(conteo);
    semaforoA.querySelector(".luz-roja").style.backgroundColor = "red";
    semaforoB.querySelector(".luz-roja").style.backgroundColor = "red";
    intervaloRojo = window.setInterval(() => {
        contador.innerHTML = Math.floor(conteo);
        conteo+=.5;
    }, 500);
    setTimeout(()=>{

        if (sentido == "norte-sur") {
            
            semaforoEste.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
            semaforoOeste.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
        }
        else {
            semaforoNorte.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
            semaforoSur.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
        }
    },1500)

    setTimeout(() => {
        clearInterval(intervaloRojo);
        conteo = 1
        sentido = sentido == "norte-sur" ? "este-oeste" : "norte-sur";

        if (sentido == "norte-sur") {
            PeriodoVerde(semaforoNorte, semaforoSur);
        }
        else {
            PeriodoVerde(semaforoEste, semaforoOeste);
        }
    }, 2000);

};


