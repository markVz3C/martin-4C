// Función para mostrar notificaciones en la página
function mostrarNotificacion(mensaje) {
    const contenedor = document.getElementById("notificaciones");
    contenedor.textContent = mensaje;
}

// Problema 2: Evaluación de Temperatura
function ejercicioTemperatura() {
    let temperatura = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    if (temperatura < 0) {
        mostrarNotificacion("Hace frío");
    } else if (temperatura >= 0 && temperatura < 25) {
        mostrarNotificacion("La temperatura es agradable");
    } else {
        mostrarNotificacion("Hace calor");
    }
}

// Problema 3: Verificación de Usuario y Contraseña
function ejercicioUsuario() {
    let nombreUsuario = prompt("Ingresa el nombre de usuario:");
    let contraseña = prompt("Ingresa la contraseña:");
    if (nombreUsuario === "usuario123" && contraseña === "secreto") {
        mostrarNotificacion("Acceso concedido");
    } else {
        mostrarNotificacion("Acceso denegado");
    }
}

// Problema 4: Determinar el Signo de un Número
function ejercicioSigno() {
    let numero = parseFloat(prompt("Ingresa un número:"));
    if (numero > 0) {
        mostrarNotificacion("El número es positivo");
    } else if (numero < 0) {
        mostrarNotificacion("El número es negativo");
    } else {
        mostrarNotificacion("El número es cero");
    }
}

// Problema 5: Evaluación de Puntuación en un Juego
function ejercicioPuntuacion() {
    let puntuacion = parseFloat(prompt("Ingresa la puntuación del juego:"));
    if (puntuacion >= 90) {
        mostrarNotificacion("Excelente");
    } else if (puntuacion >= 70 && puntuacion < 90) {
        mostrarNotificacion("Buen trabajo");
    } else {
        mostrarNotificacion("Necesitas mejorar");
    }
}

// Asegurar que el DOM esté cargado antes de vincular los botones
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnTemperatura").addEventListener("click", ejercicioTemperatura);
    document.getElementById("btnUsuario").addEventListener("click", ejercicioUsuario);
    document.getElementById("btnSigno").addEventListener("click", ejercicioSigno);
    document.getElementById("btnPuntuacion").addEventListener("click", ejercicioPuntuacion);
});