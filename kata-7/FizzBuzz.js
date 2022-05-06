<<<<<<< HEAD
function solution(number) {
    let res = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            res += i;
        }
    }
    return res;
}

=======
function solution(number) {
    let res = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            res += i;
        }
    }
    return res;
}

>>>>>>> 35517b688a992cc46cae7612a9c7788f3ed294a9
console.log(solution(10));