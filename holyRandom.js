function getRandomNumbers(count, start=100, finish=1000) {
    let odd = 0
    let even = 0
    for (let i = 0; i < count; i++) {
        let randomNuber = Math.floor(Math.random() * (finish - start + 1)) + start
        randomNuber % 2 == 0 ? even += 1 : odd += 1
    }
    return `Кількість згенерованих чисел: ${odd + even}\n` + 
    `Кількість парних чисел: ${even}\n` + 
    `Кількість непарних чисел: ${odd}\n` +
    `У відсотковому співвідношенні парних чисел: ${(even / (count / 100)).toFixed(2)}%, а непраних: ${(odd / (count / 100)).toFixed(2)}%`
}
