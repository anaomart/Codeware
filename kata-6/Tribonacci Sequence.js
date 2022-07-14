function tribonacci(signature, n) {
    a = signature[0];
    b = signature[1];
    c = signature[2];
    let answer = [a, b, c];
    for (let i = 3; i < n; i++) {
        result = a + b + c;
        answer.push(result);
        a = b;
        b = c;
        c = result;
    }
    return answer.slice(0, n)
}



let test = [3, 2, 1, ]
console.log(tribonacci(test, 10))