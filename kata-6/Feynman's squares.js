function countSquares(n) {
    let result = 0;
    for (let i = 0; i <= n; i++)
        result  += i * i;
    return result;
}

console.log(countSquares(15))
