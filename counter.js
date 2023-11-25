function sum_exclude_number(start, finish, exclude) {
    let result = 0
    for (start; start <= finish; start++) {
        result += start % exclude ? start : 0
    }
    return result
}
