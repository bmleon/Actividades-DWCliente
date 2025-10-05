const input = document.getElementById("numInput");
const btn = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", function() {
    const numero = Number(input.value);

    if(numero % 2 == 0) {
        resultado.textContent = "El número " + numero + " es par";
    } else {
        resultado.textContent = "El número " + numero + " es impar";
    }
});