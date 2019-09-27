
// fizz buzz
function fizzbuzz(fizz, buzz) {
    const arr = new Array(100);
    for (let i = 0; i < 100; i++) {
        arr[i] = i + 1;
    }
    for (let i = 1; i < arr.length + 1; i++) {
        if (i % fizz && i % buzz) {
            console.log(i);
        }
        else {
            if (i % fizz == 0) {
                console.log('fizz');
            }
            if (i % buzz == 0) {
                console.log('buzz');
            }
        }
    }
}
fizzbuzz(4, 12);