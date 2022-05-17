function findUnknowNumber(x, y, z) {
    let num = 1;
    while (true) {
        if (num % 3 == x && num % 5 == y && num % 7 == z) {
            return num;
        }
        num++;
    }
}

console.log(findUnknowNumber(1, 3, 5));