function verificarNumero() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    if (numero % 2 === 0) {
        resultado.textContent = "El número es par.";
    } else {
        resultado.textContent = "El número es impar.";
    }
}


// Cálculo del IMC
const peso = 70; // Peso en kg
const altura = 1.75; // Altura en metros
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Bajo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else {
    console.log("Sobrepeso");
}

// Calculadora de notas
const nota1 = 5.5; // Nota entre 1 y 7
const nota2 = 6.0; // Nota entre 1 y 7
const nota3 = 4.5; // Nota entre 1 y 7
const promedio = (nota1 + nota2 + nota3) / 3;

if (promedio < 4.0) {
    console.log("Reprobado");
} else {
    console.log("Aprobado");
}