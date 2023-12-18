let sum = 0;
let number = 1;

while (number <= 100) {
    if (number % 3 !== 0) {
        sum += number;
    }
    number++;
}

//Перевірка
console.log(sum);