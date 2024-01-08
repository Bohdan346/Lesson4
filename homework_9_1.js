function isValidString(s) {
    const text = /^(?!.*[Aa]).{6,}$/;
    return text.test(s);
}


//перевірка
console.log(isValidString("qwerty")); 
console.log(isValidString("123A45"));
console.log(isValidString("123"));