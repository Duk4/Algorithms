let str = 'world';

function solution(str) {
    // splits the string into an array of characters, you provide '' in parenthesis so it knows where to break the string
    // if you had a sentence "Joe is 30." and you wanted to make an array of words, you would write .split(' ')
    let string = str.split('');

    // reverse does exactly that to the array, and join() brings the characters together
    // same as in split(), you need to provide what will be between characters
    // if you don't provide anything, it will return characters joined with commas -> d,l,r,o,w
    return string.reverse().join('');
}