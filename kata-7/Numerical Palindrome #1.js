function palindrome(num) {
    if (typeof num != "number" || num < 0) return "Not valid";
    num = num.toString();
    num1 = [...num].reverse().join("");
    return num == num1;
}

console.log(palindrome(232));