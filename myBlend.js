function myBlend(list) {
    for (let i = 0; i < list.length; i++) {
        let now = list[i]
        let random_index = Math.floor(Math.random() * list.length)

        list[i] = list[random_index]
        list[random_index] = now
    }
}
