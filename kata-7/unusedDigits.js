<<<<<<< HEAD
function solution(number, n, m) {
    let res = 0;
    for (let i = 0; i < number; i++) {
        if (i % n == 0 || i % m == 0) {
            res += i;
        }
    }
    return res;
=======
function solution(number, n, m) {
    let res = 0;
    for (let i = 0; i < number; i++) {
        if (i % n == 0 || i % m == 0) {
            res += i;
        }
    }
    return res;
>>>>>>> 35517b688a992cc46cae7612a9c7788f3ed294a9
}