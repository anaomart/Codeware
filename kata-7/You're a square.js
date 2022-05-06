var isSquare = function(n) {
    return Math.pow(n, 1 / 2) % 1 == 0 ? true : false;
}

console.log(isSquare(4));