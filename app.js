// Duracion
// Verde: 10 seg
// Verde-Parpadeo: 3 seg
// Amarillo: 3 seg
// Rojo: 2 seg
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
    conteo = 0;
    semaforoEste.querySelector(".luz-roja").style.filter = "opacity(1)";
    semaforoOeste.querySelector(".luz-roja").style.filter = "opacity(1)";
    PeriodoVerde(semaforoNorte, semaforoSur);

};

const Intermitentes = () => {
    contador.style.color = "white";
    intervaloAmarillo = setInterval(() => {
        contador.style.color = contador.style.color == "white" ? "yellow" : "white";
        semaforoNorte.querySelector(".luz-amarilla").style.filter = semaforoNorte.querySelector(".luz-amarilla").style.filter == "opacity(1)" ? "opacity(0.2)" : "opacity(1)";
        semaforoSur.querySelector(".luz-amarilla").style.filter = semaforoSur.querySelector(".luz-amarilla").style.filter == "opacity(1)" ? "opacity(0.2)" : "opacity(1)";
        semaforoEste.querySelector(".luz-amarilla").style.filter = semaforoEste.querySelector(".luz-amarilla").style.filter == "opacity(1)" ? "opacity(0.2)" : "opacity(1)";
        semaforoOeste.querySelector(".luz-amarilla").style.filter = semaforoOeste.querySelector(".luz-amarilla").style.filter == "opacity(1)" ? "opacity(0.2)" : "opacity(1)";
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

    semaforoNorte.querySelector(".luz-amarilla").style.filter = "opacity(0.2)";
    semaforoSur.querySelector(".luz-amarilla").style.filter = "opacity(0.2)";
    semaforoEste.querySelector(".luz-amarilla").style.filter = "opacity(0.2)";
    semaforoOeste.querySelector(".luz-amarilla").style.filter = "opacity(0.2)";
    semaforoEste.querySelector(".luz-verde").style.filter = "opacity(0.2)";
    semaforoNorte.querySelector(".luz-verde").style.filter = "opacity(0.2)";
    semaforoOeste.querySelector(".luz-verde").style.filter = "opacity(0.2)";
    semaforoSur.querySelector(".luz-verde").style.filter = "opacity(0.2)";
    semaforoNorte.querySelector(".luz-roja").style.filter = "opacity(0.2)";
    semaforoSur.querySelector(".luz-roja").style.filter = "opacity(0.2)";
    semaforoEste.querySelector(".luz-roja").style.filter = "opacity(0.2)";
    semaforoOeste.querySelector(".luz-roja").style.filter = "opacity(0.2)";
    contador.style.color = "white";
    conteo = 0
    contador.innerHTML = conteo.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
}

const PeriodoVerde = (semaforoA, semaforoB,) => {
    contador.style.color = "green";
    contador.innerHTML = conteo.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    semaforoA.querySelector(".luz-roja").style.filter = "opacity(0.2)";
    semaforoB.querySelector(".luz-roja").style.filter = "opacity(0.2)";
    semaforoA.querySelector(".luz-verde").style.filter = "opacity(1)";
    semaforoB.querySelector(".luz-verde").style.filter = "opacity(1)";
    conteo = 0;
    intervaloVerde = setInterval(() => {
        contador.innerHTML = conteo.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        conteo++;
    }, 1000);

    setTimeout(() => {
        if (intervaloVerde == null) {
            clearInterval(intervaloVerde);
            return
        }
        else
        {
        clearInterval(intervaloVerde);
        intervaloVerde = setInterval(() => {
            contador.style.color = contador.style.color == "white" ? "green" : "white";
            semaforoA.querySelector(".luz-verde").style.filter = semaforoA.querySelector(".luz-verde").style.filter == "opacity(1)" ? "opacity(0.2)" : "opacity(1)";
            semaforoB.querySelector(".luz-verde").style.filter = semaforoB.querySelector(".luz-verde").style.filter == "opacity(1)" ? "opacity(0.2)" : "opacity(1)";
            contador.innerHTML = Math.floor(conteo).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
            conteo += .5;
        }, 500)
    }
    }, 10000);

    setTimeout(() => {
        conteo=0;
        if (intervaloVerde == null) {
            clearInterval(intervaloVerde);
        }
        else
        {
        clearInterval(intervaloVerde);
        semaforoA.querySelector(".luz-verde").style.filter = "opacity(0.2)";
        semaforoB.querySelector(".luz-verde").style.filter = "opacity(0.2)";
        PeriodoAmarillo(semaforoA, semaforoB);
        }
    }, 13500);
};

const PeriodoAmarillo = (semaforoA, semaforoB) => {
   
    contador.style.color = "yellow";
    contador.innerHTML = conteo.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    semaforoA.querySelector(".luz-amarilla").style.filter = "opacity(1)";
    semaforoB.querySelector(".luz-amarilla").style.filter = "opacity(1)";
   intervaloAmarillo = setInterval(() => {
    contador.innerHTML = conteo.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    conteo++;
}, 1000);

    setTimeout(() => {
        conteo = 0;
        if (intervaloAmarillo == null) {
            clearInterval(intervaloAmarillo);
        }
        else
        {
        clearInterval(intervaloAmarillo);
        semaforoA.querySelector(".luz-amarilla").style.filter = "opacity(0.2)";
        semaforoB.querySelector(".luz-amarilla").style.filter = "opacity(0.2)";
        PeriodoRojo(semaforoA, semaforoB);
        }
    }, 4000);
};

const PeriodoRojo = (semaforoA, semaforoB) => {
    contador.style.color = "red";
    contador.innerHTML = conteo.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    semaforoA.querySelector(".luz-roja").style.filter = "opacity(1)";
    semaforoB.querySelector(".luz-roja").style.filter = "opacity(1)";
    intervaloRojo = setInterval(() => {
        contador.innerHTML = conteo.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        conteo++;
    }, 1000);

    setTimeout(() => {  
        conteo = 0
        clearInterval(intervaloRojo);
        sentido = sentido == "norte-sur"? "este-oeste" : "norte-sur";

        if(sentido == "norte-sur")
        {
            PeriodoVerde(semaforoNorte, semaforoSur);
        }
        else
        {
            PeriodoVerde(semaforoEste, semaforoOeste);
        }
    }, 4000);

   
};


