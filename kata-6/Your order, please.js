function order(words) {
    let result = [];
    let x = words.split(" ");
    let sorted = words.split("").filter((e) => e > 0);
    let obj = {...sorted };
    for (let i = 0; i < sorted.length; i++) {
        result[obj[Object.keys(obj)[i]]] = x[i];
    }
    return result.filter((e) => typeof e === "string").join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));