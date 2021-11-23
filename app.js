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
    contador.style.color = "transparent";
    intervaloAmarillo = setInterval(() => {
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
}

const PeriodoVerde = (semaforoA, semaforoB,) => {
    contador.style.color = "green";
    contador.innerHTML = conteo;
    semaforoA.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
    semaforoB.querySelector(".luz-roja").style.backgroundColor = "gainsboro";
    semaforoA.querySelector(".luz-verde").style.backgroundColor = "green";
    semaforoB.querySelector(".luz-verde").style.backgroundColor = "green";
    conteo = 1;
    intervaloVerde = setInterval(() => {
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
            intervaloVerde = setInterval(() => {
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
        conteo = 1;
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

    contador.style.color = "yellow";
    contador.innerHTML = conteo;
    semaforoA.querySelector(".luz-amarilla").style.backgroundColor = "yellow";
    semaforoB.querySelector(".luz-amarilla").style.backgroundColor = "yellow";
    intervaloAmarillo = setInterval(() => {
        contador.innerHTML = conteo;
        conteo++;
    }, 1000);
    setTimeout(() => {
        semaforoA.querySelector(".luz-amarilla").style.backgroundColor = "gainsboro";
        semaforoB.querySelector(".luz-amarilla").style.backgroundColor = "gainsboro";
        contador.style.color = "transparent";
    }, 3500)

    setTimeout(() => {

        if (intervaloAmarillo == null) {
            clearInterval(intervaloAmarillo);
        }
        else {
            clearInterval(intervaloAmarillo);
            conteo = 1;
            PeriodoRojo(semaforoA, semaforoB);
        }
    }, 4000);
};

const PeriodoRojo = (semaforoA, semaforoB) => {
    contador.style.color = "red";
    contador.innerHTML = conteo;
    semaforoA.querySelector(".luz-roja").style.backgroundColor = "red";
    semaforoB.querySelector(".luz-roja").style.backgroundColor = "red";
    intervaloRojo = setInterval(() => {
        contador.innerHTML = conteo;
        conteo++;
    }, 1000);

    setTimeout(() => {
        conteo = 1
        clearInterval(intervaloRojo);
        sentido = sentido == "norte-sur" ? "este-oeste" : "norte-sur";

        if (sentido == "norte-sur") {
            PeriodoVerde(semaforoNorte, semaforoSur);
        }
        else {
            PeriodoVerde(semaforoEste, semaforoOeste);
        }
    }, 3000);

};


