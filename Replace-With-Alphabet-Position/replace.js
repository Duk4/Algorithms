function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let array = text.toLowerCase().split('');
    let numbers = [];
    let clean = array.filter((el) => {
        return alphabet.includes(el);                               // filters elements that are not letters
    });
    for (let i = 0; i < clean.length; i++) {
        numbers.push(alphabet.indexOf(clean[i]) + 1);               // pushes letter places into the new array
    }
    return numbers.join(' ');
}

// Cleaner way

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i)                 // charCodeAt() returns a utf-16 character value
        if (code > 64 && code < 91) result += (code - 64) + " ";    // checking if character value is equivalent to the letter values
    }

    return result.slice(0, result.length - 1);                      // removing last space appended to the string
}