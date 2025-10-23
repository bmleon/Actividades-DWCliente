function calcularPromedio(array) {
    let suma = array.reduce((acum, valor) => acum + valor, 0);
    return suma / array.length;
}

const boton = document.getElementById("bCalcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
  
    let input = document.getElementById("numeros").value;
    let numeros = input.split(",").map(Number);

    let promedio = calcularPromedio(numeros);
    resultado.textContent = "El promedio es: " + promedio;
});