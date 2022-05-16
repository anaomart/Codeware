function findUniq(arr) {
    let uniq = Array.from(new Set(arr));
    for (let i = 0; i < uniq.length; i++) {
        if (arr.indexOf(uniq[i]) == arr.lastIndexOf(uniq[i])) return uniq[i];
    }
}