function amountOfPages(summary) {
    let result = "";
    let i = 1;
    while (result.length < summary) {
        result += i;
        i++;
    }

    return i - 1;
}

console.log(amountOfPages(660));