function Suma_indices() {
    let array = [1, 2, 3, 4, 5, 6, 7];
    let suma = array[array.length - 1] + array[array.length - 2] + array[0];
    alert("Los números son: " + array + "\nEl resultado es: " + suma);
}

function pares() {
    let arrelo = [2, 4, 6, 8, 10, 12];
}

function Producto_pares() {
    let array = [2, 4, 6, 7, 10, 12];
    let producto = array.filter(num => num % 2 === 0).reduce((acc, num) => acc * num, 1);
    alert("Los números son: " + array + "\nEl producto de los valores pares es: " + producto);
}