<<<<<<< HEAD
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
=======
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
>>>>>>> 35517b688a992cc46cae7612a9c7788f3ed294a9
console.log(vowelIndices('UYQPWwSdAQroPwSCBNJBMV'));