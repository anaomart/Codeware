    // function valueOfX(eq) {
    //     let parts = eq.split(' ');

    //     let equals = parts.indexOf('=');

    //     let theX = parts.indexOf('x');

    //     let noX = parts.filter(e => e != 'x');

    //     let part1 = noX.slice(0, equals - 1).join('')

    //     part1 = eval(`${part1}+0`)

    //     let part2 = noX.slice(equals, noX.length).join('');

    //     part2 = eval(`${part2}+0`) + 0;

    //     let x;

    //     if (part1 == undefined) {
    //         part1 = 0
    //     } else if (part2 == undefined) {
    //         part2 = 0;
    //     }
    //     if (theX < equals) {
    //         x = part2 - part1
    //     } else {
    //         x = part1 - part2;
    //     }
    //     return +x;
    // }
    // works fine but when  X is negative return error 

    // 'x - 2 + 3 = 2'
    function valueOfX(eq) {
        let [LHS, RHS] = eq.split('=')
        if (RHS.includes('x')) {
            [LHS, RHS] = [RHS, LHS];
            RHS;
        }
        return (LHS.includes("- x") ? -1 : 1) * (eval(RHS) - eval(LHS.replace("x", "0")))
    }

    let eq = ' x  + 1  = - 12'
    console.log(valueOfX(eq))