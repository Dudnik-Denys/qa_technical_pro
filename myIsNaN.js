function myIsNaN(value) {
    if (typeof(value) === Boolean || value === null || value.valueOf() === Number(value)) {
        return false
    }
    return +value != value
}
