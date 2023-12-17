var year = prompt("Введіть кількість років:");

if (!isNaN(year) && year >= 0) {
    var lastDigit = year % 10;
    var ending;

    if (lastDigit === 1 && year % 100 !== 11) {
        ending = "рік";
    } else if ((lastDigit === 2 || lastDigit === 3 || lastDigit === 4) && (year % 100 !== 12 && year % 100 !== 13 && year % 100 !== 14)) {
        ending = "роки";
    } else {
        ending = "років";
    }

    console.log(year + " " + ending);
} else {
    console.log("Будь ласка, введіть додатнє число.");
}