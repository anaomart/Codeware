function duplicateCount(text) {
    text = Array.from(text).map(ele => ele.toLowerCase());
    textSet = new Set(text);
    let answer = [];
    textSet.forEach(function(ele) { text.indexOf(ele) != text.lastIndexOf(ele) ? answer.push(ele) : ""; })
    return answer.length;
}

let text = 'Indivisibilities';

console.log(duplicateCount(text));