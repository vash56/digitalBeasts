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
}

window.addEventListener("load", iniciarJuego)