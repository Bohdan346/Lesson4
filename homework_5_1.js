

//1 спосіб з циклом for
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
//перевірка 1
drawTriangle(5, '+');


//2 спосіб з циклом while+return
function drawTriangle2(height, symbol) {
    let triangle = '';
    let i = 1;
    while (i <= height) {
        let j = 0;
        while (j < i) {
            triangle += symbol;
            j++;
        }
        triangle += '\n';
        i++;
    }
    return triangle;
}
//перевірка 2
console.log(drawTriangle2(15, '*'));

