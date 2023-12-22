function isNotNumber(value) {
    return Number(value) !== Number(value);
  }


//перевірка
console.log(isNotNumber(5)); 
console.log(isNotNumber('1111')); 
console.log(isNotNumber(NaN)); 
console.log(isNotNumber(undefined)); 


function isNaN123(value) {
    return value !== NaN;
}

console.log(isNaN123(5)); 
console.log(isNaN123('1111')); 
console.log(isNaN123(NaN)); 
console.log(isNaN123(undefined)); 


console.log(isNaN(undefined)); 