export function fizzBuzz(start, end) {
    var numArr = [start];
    for (var i = 0; i < (end - start); i++) {
        numArr.push(numArr[i] + 1);
    }
    var seqArr = Array.from(numArr, x => x % 15 == 0 ? 'FizzBuzz' : x % 3 == 0 ? 'Fizz' : x % 5 == 0 ? 'Buzz' : x);

    return seqArr.join(',');
}
