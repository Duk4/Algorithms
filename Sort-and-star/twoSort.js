function twoSort(s) {
    s.sort();
    let f = s[0];                       // first array element
    // splitting the string to array of characters and then concatenating characters with 3 starts in-between them
    return f.split('').join('***');
}