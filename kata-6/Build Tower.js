function towerBuilder(n) {
    let answer = []
    for (let i = 0; i < n; i++) {
        answer[i] = Array(2 * n - 1).fill("*", n - i - 1, n + i);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (answer[i][j] == undefined) {
                answer[i][j] = " "
            }
        }
        answer[i] = answer[i].join('');
    }
    return answer
}
console.log(towerBuilder(5));