function filtrarMayores(array, valor) {
    return array.filter(num => num > valor);
}

const boton = document.getElementById("bFiltrar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let input = document.getElementById("numeros").value;
    let array = input.split(",").map(Number);
    let valor = Number(document.getElementById("valor").value);

    let mayores = filtrarMayores(array, valor);
    resultado.textContent = "Números mayores que " + valor + ": " + mayores;
});
