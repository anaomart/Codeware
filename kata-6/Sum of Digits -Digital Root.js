function digital_root(n) {
    while (n.length != 1) {
        n = n
            .toString()
            .split("")
            .reduce((acc, curr) => Number(acc) + Number(curr));
    }
    return Number(n);
}

console.log(digital_root(132189));

// n.toString()
//     .split("")
//     .reduce((acc, curr) => Number(acc) + Number(curr));