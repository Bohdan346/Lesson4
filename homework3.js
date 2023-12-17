function convertUnits(unit, value) {
    let result;

    switch (unit) {
        case 'км':
            result = value * 1000;
            console.log(`${value} км це ${result} м.`);
            break;
        case 'год':
            result = value * 60;
            console.log(`${value} год це ${result} хв.`);
            break;
        case 'кг':
            result = value * 1000;
            console.log(`${value} кг це ${result} г.`);
            break;
        default:
            console.log('Невідома одиниця виміру');
            break;
    }
}

//Перевірка
convertUnits('км', 10);

