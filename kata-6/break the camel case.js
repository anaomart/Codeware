// complete the function
function solution(string) {
    return string.split('').map((letter) => {
        if (letter == letter.toUpperCase()) return ` ${letter}`
        return letter;}).join('')

}


console.log(solution("omarAshrafTest"))
