function isNotNumber(value) {
    return Number(value) !== Number(value);
  }


//перевірка
console.log(isNotNumber(5)); 
console.log(isNotNumber('1111')); 
console.log(isNotNumber(NaN)); 
console.log(isNotNumber(undefined)); 
