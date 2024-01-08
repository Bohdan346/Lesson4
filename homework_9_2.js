var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


// ^[a-zA-Z0-9]+ перевіряє, що початок електронної адреси містить одну або декілька латинських літер/цифр.
// (\.[a-zA-Z0-9]+)? дозволяє наявність одного необов'язкового слова, розділеного крапкою, яке також складається з латинських літер/цифр.
// @(gmail\.com|yahoo\.com)$ перевіряє, що електронна адреса закінчується на 'gmail.com' або 'yahoo.com'.

const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

var trustedEmails = arr.filter(person => emailRegex.test(person.email)).map(person => person.email);

console.log(trustedEmails);