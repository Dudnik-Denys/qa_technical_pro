function sum_exclude_number(start, finish, exclude) {
    let result = 0
    for (start; start <= finish; start++) {
        result += start % exclude ? start : 0
    }
    return result
}


let solution = sum_exclude_number(0, 100, 3)
console.log(solution)
