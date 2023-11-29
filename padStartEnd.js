function pad(string, symbol, count, addToStart) {
    result = ''
    for (let i = 0; i < count - string.length; i++) {
        result += symbol
    }
    return addToStart ? result + string : string + result
}
