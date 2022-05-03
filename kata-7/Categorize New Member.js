function openOrSenior(data) {
    let result = [];

    data.forEach(e => {
        if (e[0] >= 55 && e[1] > 7) {
            result.push('"Senior"')
        } else {
            result.push('Open')
        }
    })

    return result
}






let data = [
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9]
]
console.log(openOrSenior(data))