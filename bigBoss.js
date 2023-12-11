function findValueByKey(companyName, data=company['clients']) {
    for (let client of data) {
        if (client['name'] === companyName) {
            return Object.entries(client)
        }
    }
    for (let client of data) {
        if (Array.isArray(client['partners'])) {
            return findValueByKey(companyName, client['partners'])
        }
    }
}
