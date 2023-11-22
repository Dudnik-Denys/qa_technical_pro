var prompt = require('prompt-sync')()

var user_number = prompt('Enter your number: ')

var result = isNaN(user_number) ? 'Type Error: Please, enter a number' : Number(user_number) % 2 === 0 ? 'even number' : 'odd number'

console.log(`Number "${user_number}" - ${result}`)
