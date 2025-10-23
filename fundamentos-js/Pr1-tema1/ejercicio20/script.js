function convertirMayusMinus(cadena) {
    let mayus = cadena.toUpperCase();
    let minus = cadena.toLowerCase();
    return { mayus, minus };
}

const boton = document.getElementById("bConvertir");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let texto = document.getElementById("texto").value;
    let conversion = convertirMayusMinus(texto);
    
    resultado.innerHTML = "Mayúsculas: " + conversion.mayus + "<br>" + "Minúsculas: " + conversion.minus;
});



