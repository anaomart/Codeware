function reverseWords(str) {
    return str
        .split(" ")
        .map((e) => e.split("").reverse().join(""))
        .join(" ");
}
console.log(reverseWords("omar ashraf"));