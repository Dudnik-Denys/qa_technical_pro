let employee = {
    'name': 'John',
    'salary': 2000,
    'position': 'engineer',
    getInfo: function () { 
        methods_list = []
        for (let key in this) {
            methods_list.push([key, this[key]])
        }
        return methods_list
    }
}
