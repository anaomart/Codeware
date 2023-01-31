function incrementString(string) {
    let number = '';
    let counter = 0;
    for (counter = string.length - 1; counter >= 0; counter--) {
        if (!(string[counter] > -1)) {
            break;
        }
        number = number + string[counter]
    }
    number = number.split('').reverse().join('');;

    let strings = string.substring(0, counter + 1);
    let array = number.split('')
    if (number === '') {
        return string + 1
    }
    let num;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            continue;
        }
        num = (array.slice(i).join(''))
        num++;

        if (array[i] != 0) {
            if (array[i] == 9 && array[0] == '0') {
                array[0] = '';
            }
        }
        break;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            continue;
        }
        array[i] = num;
        array.length = i + 1;
        break;
    }
    if (number == 0) {
        array[array.length - 1] = 1;
    }
    let answer = strings + array.join('');
    return answer;
}
