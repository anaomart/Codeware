function solution(nums) {
    return nums != null ? nums.sort((a, b) => a - b) : []
}

let arr = null
console.log(solution(arr))