function myIsNaN(value) {
    if (typeof(value) === Boolean || value === null) {
        return false
    }
    if (value.valueOf() === Number(value)) {
        return false
    }
    return +value != value
}
