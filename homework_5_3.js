function pow(x, y) {
    let result = 1;
    let exponent = y;

    while (exponent > 0) {
        result *= x;
        exponent--;
    }

    return result;
}

//перевірка
let result = pow(-2, 3);
console.log(result); 