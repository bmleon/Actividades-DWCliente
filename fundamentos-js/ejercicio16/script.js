function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = Number(prompt("Ingresa los grados Celsius:"));
let fahrenheit = celsiusAFahrenheit(celsius);

console.log(celsius + "ºC equivalen a " + fahrenheit + "ºF");

let salida = document.getElementById("resultado");
if (salida) {
    salida.textContent = `${celsius}ºC equivalen a ${fahrenheit}ºF`;
}