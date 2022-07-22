function expandedForm(num) {

    num = `${num}`;
    len = num.length;
    return answer = num.split('').map((ele, i) => {
            if (ele != 0) {
                return ele * (10 ** (len - (i + 1)));
            }
        }


    }


    console.log(expandedForm(70304))