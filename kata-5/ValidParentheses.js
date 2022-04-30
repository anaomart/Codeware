function validParentheses(parens) {
    parens = parens.split('');
    if (parens.length % 2 != 0) {
        return false;
    } else {

        let filtered = parens.filter(e => {
            return e === "(";
        })
        return filtered.length == 0.5 * parens.length ? true : false;
    }
}




let test = "()()";

console.log(validParentheses(test));