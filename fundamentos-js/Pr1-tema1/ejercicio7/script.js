function contarVocales(palabra) {
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }

    return contador;

}

let palabra = prompt("Escribe una palabra:");
let cantidad = contarVocales(palabra);

console.log("La palabra", palabra, "tiene", cantidad, "vocales");

let salida = document.getElementById("resultado");
if (salida) {
    salida.textContent = `La palabra "${palabra}" tiene ${cantidad} vocales.`;
}