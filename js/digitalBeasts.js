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

    if (inputTryton.checked) {
        alert("Seleccionaste a Tryton")
    } else if (inputAtlas.checked) {
        alert("Seleccionaste a Atlas")
    } else if (inputIfrith.checked) {
        alert("Seleccionaste a Ifrith")
    } else if (inputTyphon.checked) {
        alert("Seleccionaste a Typhon")
    } else if (inputGaia.checked) {
        alert("Seleccionaste a Gaia")
    } else if (inputVulkan.checked) {
        alert("Seleccionaste a Vulkan")
    } else {
        alert("Selecciona una Digital Beast")
    }
}

window.addEventListener("load", iniciarJuego)