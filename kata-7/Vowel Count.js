function getCount(str) {
    let vowelsCount = 0;
    str.split('').forEach(e => ['a', 'e', 'i', 'o', 'u'].includes(e) ? vowelsCount++ : "")

    return vowelsCount;
}