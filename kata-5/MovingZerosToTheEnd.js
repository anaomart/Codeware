// remove all the Zeros then add to the end 
function moveZeros(arr1) {
    let arr = Array.from(arr1);
    console.log(typeof arr)
    let len = arr.length;
    let res = [];

    res = arr.filter(e => {
        return (e !== 0);
    })
    let q = len - res.length

    while (q) {
        res.push(0);
        q--
    }

    return res;
}
//////////////////////////////////// Easier Way  ////////////////////////////////////////
//filter all zeros then filter all non-zeros then add together
function MoveZeros(arr) {
    return [...arr.filter(e => e !== 0), ...arr.filter(e => e === 0)]
}