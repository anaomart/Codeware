function add(a, b) {
    let i = 0;
    let result = '';
    let aLength = a.length;
    let bLength = b.length;
    bLength;
    aLength;

    let range = bLength - aLength > 0 ? bLength : aLength
    let zeros1 = aLength - bLength;


    if (bLength != aLength) {

        function zerosToTheBeginning(num, zeros) {
            for (let i = 0; i < zeros; i++) {
                console.log('')
                num = [...num]
                num.unshift(0)
            }
            return num.join('');
        }
        a = zeros1 > 0 ? a : zerosToTheBeginning(a, Math.abs(zeros1));
        b = zeros1 < 0 ? b : zerosToTheBeginning(b, Math.abs(zeros1));

    } else if (bLength == aLength) {
        a = a;
        b = b;
    }

    while (range > 0) {
        let AA = parseInt(a[i]);
        let BB = parseInt(b[i]);

        let pre = (parseInt(AA) + parseInt(BB));
        if (pre >= 10) {
            result = [...result];
            let x = result[result.length - 1]
            result.pop();
            result += (parseInt(x) + 1).toString() + pre.toString()[1];

        } else {
            result += pre;
        }

        bLength--;
        aLength--;
        range--;
        i++
    }
    return result.match(/\d+/g).join('');

}
//[8+6*10 , 7+9*1]
//91002328220491911630239667963
console.log(add('909', '2'))