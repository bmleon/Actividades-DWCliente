function numeroMasGrande(array) {
    return Math.max(...array);

}

const boton = document.getElementById("bCalcular");
const resultado = document.getElementById("resultado");

let numeros = [12, 45, 7, 89, 23, 56];

boton.addEventListener("click", function() {
    let max = numeroMasGrande(numeros);
    resultado.textContent = "El número más grande en [" + numeros + "] es: " + max;
});