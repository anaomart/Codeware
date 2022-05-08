function longestConsec(str, k) {
    if (str.length == 0 || k <= 0 || k > str.length) {
        return "";
    } else {
        let result = [];
        for (let i = 0; i < str.length; i++) {
            result.push(str.slice(i, k + i).join(""));
        }
        let biggest = "";
        result.forEach(function(e) {
            e.length > biggest.length ? (biggest = e) : "";
        });
        return biggest;
    }
}

let strarr = ["zone", "abigail", "theta", "form", "libe", "zas"];
console.log(longestConsec(strarr, 2));