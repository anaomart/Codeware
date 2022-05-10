function findChildren(str) {
    let result = [];
    let uppercase = str.match(/[A-Z]/g).sort();
    let lowercase = str.match(/[a-z]/g).sort();
    for (let i = 0; i < uppercase.length; i++) {
        let index = lowercase.lastIndexOf(uppercase[i].toLowerCase());
        result.push(uppercase[i] + lowercase.slice(0, index + 1));
        lowercase = lowercase.slice(index + 1);
    }
    return String(result)
        .match(/[A-Za-z0-9]/g)
        .join("");
}
let a = "3afo";
let b = "3afo";
console.log(a.localeCompare(b));
console.log(findChildren("AaaaaZazzz"));