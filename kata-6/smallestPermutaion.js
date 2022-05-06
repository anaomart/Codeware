function minPermutation(num) {
    let sign = num > 0 ? true : false;
    num = Math.abs(num);
    num = num.toString().split('');
    let numberOfZeros = num.filter(e => e == 0).length;
    console.log(numberOfZeros)
    let zeros = num.indexOf('0');

    if (zeros == -1) {
        num = num.sort().join('');
    } else {
        num = num.sort();
        num = num.filter(e => e != 0)
        num.splice(1, 0, "0".repeat(numberOfZeros))
        num = num.join('')
    }

    if (sign) {
        return parseInt(num);
    } else {
        return parseInt(num) * -1
    }

}

console.log(minPermutation(-42330003));