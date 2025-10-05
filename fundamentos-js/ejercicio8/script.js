function azar(min,max) {
   
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

const boton = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let numero = azar(-5, 10);
    resultado.textContent = "azar(-5, 10). Salida: " + numero;
});