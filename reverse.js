function reverseString(text) {
    let reverse = '';
    for (var string of text) {
        reverse = string + reverse;
    }
    return reverse;
}
const reverseStringResult = reverseString('Hello! How are you?');
console.log(reverseStringResult);