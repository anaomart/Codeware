function vowelIndices(word) {
    let count = 0
    let arr = [];
    let vowel = ['a', 'e', 'i', 'o', 'u', 'y']; //  a e i o u y
    let answer = word.split('').map(function(e, index, array) {
        e.toLowerCase() == e ? e = e.toLowerCase() : e = e.toLowerCase();
        if (vowel.includes(e)) {
            arr.push(index + 1);
        }
    })
    return arr;
}
console.log(vowelIndices('UYQPWwSdAQroPwSCBNJBMV'));