function verificarNumero() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
        alert("Por favor, ingresa un número válido.");
        return;
    }

    if (numero % 2 === 0) {
        resultado.textContent = "El número es par.";
        alert("El número es par.");
    } else {
        resultado.textContent = "El número es impar.";
        alert("El número es impar.");
    }
}

function calcularIMC() {
    const peso = 70; // Peso en kg
    const altura = 1.75; // Altura en metros
    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");

    if (imc < 18.5) {
        resultado.textContent = "Bajo peso";
        alert("Bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.textContent = "Peso normal";
        alert("Peso normal");
    } else {
        resultado.textContent = "Sobrepeso";
        alert("Sobrepeso");
    }
}

function calcularPromedio() {
    const nota1 = parseFloat(prompt("Ingresa la primera nota (entre 1 y 7):"));
    const nota2 = parseFloat(prompt("Ingresa la segunda nota (entre 1 y 7):"));
    const nota3 = parseFloat(prompt("Ingresa la tercera nota (entre 1 y 7):"));
    const resultado = document.getElementById("resultado");

    if (
        isNaN(nota1) || nota1 < 1 || nota1 > 7 ||
        isNaN(nota2) || nota2 < 1 || nota2 > 7 ||
        isNaN(nota3) || nota3 < 1 || nota3 > 7
    ) {
        resultado.textContent = "Por favor, ingresa notas válidas entre 1 y 7.";
        alert("Por favor, ingresa notas válidas entre 1 y 7.");
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio < 4.0) {
        resultado.textContent = `Reprobado (Promedio: ${promedio.toFixed(2)})`;
        alert(`Reprobado (Promedio: ${promedio.toFixed(2)})`);
    } else {
        resultado.textContent = `Aprobado (Promedio: ${promedio.toFixed(2)})`;
        alert(`Aprobado (Promedio: ${promedio.toFixed(2)})`);
    }
}