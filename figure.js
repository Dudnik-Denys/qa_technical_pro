function drawTrinagle(counter, symbol) {
    let result = ``
    for (let i = 0; i <= counter; i++) {
        let temp = '';
        for (let j = 0; j < i; j++) {
            temp += symbol
        }
        result += i < counter ? `${temp}\n` : `${temp}`
    }
    return result
}


let solution = drawTrinagle(5, '*')
console.log(solution)
