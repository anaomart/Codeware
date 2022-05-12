var maxZeroSequence = function(arr) {
    let arrOfsum = [];
    let result = 1;
    let x = 0;
    while (result != 0) {
        result = 0;
        for (let i = x; i < arr.length; i++) {
            result += arr[i];
            if (result == 0) {
                arrOfsum.push(arr.slice(x, i + 1));
            }
        }
        x++;
    }
    let longest = Math.max(
        ...arrOfsum.map((e) => {
            e.length;
        })
    );
    return longest < 0 ?
        [] :
        arrOfsum.reduce((a, b) => (a.length > b.length ? a : b));
};