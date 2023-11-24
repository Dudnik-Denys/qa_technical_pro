var prompt = require('prompt-sync')()

var age = prompt('Вкажіть свій вік: ')

age = !isNaN(age) && age >= 0 ? Number(age) : 'Введіть будь-ласка невід\ʼємне число'

if (!isNaN(age)) {
    var suffix = age >= 10 && age <= 20 ? 'років' : [2, 3, 4].indexOf(age % 10) !== -1 ? 'роки' : age % 10 === 1 ? 'рік' : 'років'
    console.log(`Вам ${age} ${suffix}!`) } 
else {
    console.log(age) 
}
