var prompt = require('prompt-sync')()

var measure = prompt('Вкажіть одиницю вмиіру яку треба перевести, це можуть бути "кілометри", "години", "кілограми": ')
var count = prompt('Вкажіть значення: ')
console.log(measure)

switch (measure) {
    case 'години':
        console.log(`${count * 60} хвилин`);
        break;
    case 'кілограми':
    case 'кілометри':
        var suffix = measure === 'кілограми' ? 'грамів' : 'метрів'
        console.log(`${count * 1000} ${suffix}`);
        break;
    default:
        console.log('Вкажіть одну з представлених одиниць вимірювання!');
}