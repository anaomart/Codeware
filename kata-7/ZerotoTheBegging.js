function zerosToTheBeginning(num, zeros) {
    for (let i = 0; i < zeros; i++) {
        num = [...num]
        num.unshift(0)
    }
    return num.join('');
}



console.log(zerosToTheBeginning('33245', 2))