function likes(names) {
    let result = "no one likes this";
    switch (names.length) {
        case 0:
            return result;
        case 1:
            return result = `${names[0]} likes this`;
        case 2:
            return result = `${names[0]} and ${names[1]} like this`;
        case 3:
            return result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return result = `${names[0]}, ${names[1]} and ${names.length -2} others like this`;
    }
}

let arr = ["Maaaax"]
console.log(likes(arr))