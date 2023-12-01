function myIsNaN(value) {
    if (value.valueOf() === Number(value)) {
        return false
    }
    return +value != value
}
