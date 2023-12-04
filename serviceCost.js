var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    prices: function () {
        price_list = []
        for (let key in this) {
            if (typeof(this[key]) === 'string') {
                price_list.push(+this[key].split(' ')[0])
            }
        }
        return price_list
        },
    price: function () {
        total = 0
        for (let cost of this.prices()) {
            total += cost
        }
        return total
    },
    minPrice: function () {
        minimum = 2 ** 53 - 1
        for (let cost of this.prices()) {
            if (cost < minimum) {
                minimum = cost
            }
        }
        return this.prices().length > 0 ? minimum : 0
    },
    maxPrice: function () {
        maximum = 0
        for (let cost of this.prices()) {
            if (cost > maximum) {
                maximum = cost
            }
        }
        return maximum
    }
};
