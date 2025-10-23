function palabraMasLarga(frase) {
    let palabras = frase.split(" ");
    let masLarga = "";

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > masLarga.length) {
            masLarga = palabras[i];
        }
    }

    return masLarga;
}

const boton = document.getElementById("bBuscar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let frase = document.getElementById("frase").value;
    let palabra = palabraMasLarga(frase);
    resultado.textContent = "La palabra más larga es: " + palabra;
});