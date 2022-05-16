function findUniq(arr) {
    let result;
    let uniq = Array.from(new Set(arr));
    for (let i = 0; i < uniq.length; i++) {
        if (arr.indexOf(uniq[i]) == arr.lastIndexOf(uniq[i])) result = uniq[i];
    }
    return result;
}