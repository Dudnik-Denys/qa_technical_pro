function myIsNaN(value) {
    if (typeof(value) === Boolean || value === null) {
        return false}
    return +value != value
}
