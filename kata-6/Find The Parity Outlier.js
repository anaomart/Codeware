function findOutlier(arr) {
    console.log(arr)
    let tester = 0; // 3
    for (let i = 0; i < 3; i++) (arr[i] % 2 == 0) && tester++;
    let even = tester >=2 ? true : false;
    for(let i = 0; i < arr.length; i++){
        if(Math.abs(arr[i] % 2) == +even){
            return arr[i];
        }
    }
}
