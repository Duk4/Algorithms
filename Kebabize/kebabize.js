// My gibberish, and still doesn't work when there is a single character
function kebabize(str) {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let array = str.split('');
    let result = [];
    array = array.filter(el => {
        return lower.includes(el) || upper.includes(el);
    });
    let up = array;
    up = up.filter(el => {
        return upper.includes(el);
    });
    if (up == undefined || up.length == 0) { return array.join('') };
    let f = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (upper.includes(array[i])) {
            let string = array.join('').slice(f, i);
            if (array[i] != array[0]) result.push(string);
            f = i;
            array[i] = array[i].toLowerCase();
            if (array[i] === up[up.length - 1].toLowerCase() && !array.includes(array[i].toUpperCase())) {
                let l = array.length;
                let s = array.join('').slice(i, l);
                result.push(s);
                break;
            }
        }
    }
    result = result.join('-');
    if (result[0] === '-') { result = result.slice(1) }
    return result;
}

// How it should be done
function kebabize(str) {
    var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g); // replace removes numbers, split cuts where we have a capital letter
    return nonumber.join('-').toLowerCase();                   // merges all characters together and turns them to lowercase
}