let numeros = [33, 5, 12, 87, 23, 45, 9];

console.log("Array original: ", numeros);

numeros.sort(function(a, b) {
    return a - b;
});

console.log("Array ordenado de menor a mayor: ", numeros);
