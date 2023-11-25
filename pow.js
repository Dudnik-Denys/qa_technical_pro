function pow(x, y) {
    result = 1
    for (y; y > 0; y--) {
        result *= x
    }
    return result
}


let solution = pow(2, 3)
console.log(solution)
