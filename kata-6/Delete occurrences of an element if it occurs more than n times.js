function deleteNth(arr, n) {
    let obj = {}
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1;
        }
    }
    for (let [i, k] of Object.entries(obj)) obj[i] = k > n ? n : k
        //
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] > 0) {
            array.push(arr[i])
            obj[arr[i]]--
        }
    }
    return array
}
