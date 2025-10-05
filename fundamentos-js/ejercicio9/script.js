function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");

}

const boton = document.getElementById("Invertir");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let texto = document.getElementById("texto").value;
    let invertida = invertirCadena(texto);
    resultado.textContent = "Resultado: " + invertida;
});