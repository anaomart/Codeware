function comp(array1, array2) {
    if (array1 == null || array2 == null) {
        return false;
    } else if (array1 == 0 || array2 == 0) {
        return true;
    } else {
        // let arr1 = array1.map((e) => e * e);
        //     arr1;
        //     array2;
        //     let x =
        //         arr1.every((e) => array2.includes(e)) &&
        //         array2.every((e) => arr1.includes(e));

        //     return x;
        array1 = array1.sort((a, b) => a - b).map((e) => e * e);
        array2 = array2.sort((a, b) => a - b);
        array1;
        array2;
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] == array2[i]) {} else {
                return false;
            }
        }
        return true;
    }
}

console.log(comp(0, 0));