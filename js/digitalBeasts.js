let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}

function seleccionarMascotaJugador() {
    let inputTryton = document.getElementById("tryton")
    let inputAtlas = document.getElementById("atlas")
    let inputIfrith = document.getElementById("ifrith")
    let inputTyphon = document.getElementById("typhon")
    let inputGaia = document.getElementById("gaia")
    let inputVulkan = document.getElementById("vulkan")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputTryton.checked) {
        spanMascotaJugador.innerHTML = "Tryton"
    } else if (inputAtlas.checked) {
        spanMascotaJugador.innerHTML = "Atlas"
    } else if (inputIfrith.checked) {
        spanMascotaJugador.innerHTML = "Ifrith"
    } else if (inputTyphon.checked) {
        spanMascotaJugador.innerHTML = "Typhon"
    } else if (inputGaia.checked) {
        spanMascotaJugador.innerHTML = "Gaia"
    } else if (inputVulkan.checked) {
        spanMascotaJugador.innerHTML = "Vulkan"
    } else {
        alert("Selecciona una Digital Beast")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Tryton"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Atlas"
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Ifrith"    
    } else if (mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = "Typhon"
    } else if (mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = "Gaia"
    } else {
        spanMascotaEnemigo.innerHTML = "Vulkan"
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

//Revisar Vidas

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 😁")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, Perdiste 😣")    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu beast atacó con " + ataqueJugador + ", la beast del enemigo atacó con " + ataqueEnemigo + " - " + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)