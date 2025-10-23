function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let max = Number(prompt("Ingresa un número máximo;"));

let primos = [];
for (let i = 1; i <= max; i++) {
    if (esPrimo(i)) {
        primos.push(i);
    }
}

console.log("Números primos entre 1 y " + max + ":", primos); 