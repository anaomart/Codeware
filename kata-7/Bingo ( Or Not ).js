function bingo(a) {
    let x = [2, 9, 14, 7, 15];
    return x.every(num => {
        return a.includes(num)
    }) ? "WIN" : "LOSE";
}

// B-2 , I - 9 ,N-14 ,G -7 ,15
console.log(bingo([2, 9, 14, 7, 15, 4]))