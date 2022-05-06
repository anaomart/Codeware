<<<<<<< HEAD
function findOdd(A) {

    let sorted = A.sort();

    for (let i = 0; i < A.length; i++) {

        let len = sorted.lastIndexOf(A[i]) - sorted.indexOf(A[i]);

        if (len % 2 == 0) {

            return A[i]
        }

    }

}

function findOdd2(A) {
    for (let i = 0; i < A.length; i++) {
        let len = A.lastIndexOf(A[i]) - A.indexOf(A[i]);
    }



}
console.log(findOdd([1, 1, 3, 7, 2, 3, 2, 4, 4, 7]))
=======
function findOdd(A) {

    let sorted = A.sort();

    for (let i = 0; i < A.length; i++) {

        let len = sorted.lastIndexOf(A[i]) - sorted.indexOf(A[i]);

        if (len % 2 == 0) {

            return A[i]
        }

    }

}

console.log(findOdd([1, 1, 3, 7, 2, 3, 2, 4, 4, 7]))
>>>>>>> 35517b688a992cc46cae7612a9c7788f3ed294a9
