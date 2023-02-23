function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
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
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Tryton"
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Atlas"
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ifrith"    
    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Typhon"
    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Gaia"
    } else {
        spanMascotaEnemigo.innerHTML = "Vulkan"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)