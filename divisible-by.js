//from 1 to 50 which number is  divisible by 3 and 5 show foo and bar respectively. if divisible by both show foobar and show the rest of numbers

for (var i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    } else if (i % 3 == 0) {
        console.log('foo');
    } else if (i % 5 == 0) {
        console.log('bar');
    } else {
        console.log(i);
    }
}