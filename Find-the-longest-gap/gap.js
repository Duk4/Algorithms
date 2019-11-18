function gap(num) {
    num = num.toString(2);
    let i = num.lastIndexOf('1');                       // index of the last 1, because we only look at 0's between 1's
    num = num.slice(0, i + 1);                          // we remove all 0's
    num = num.split('1');                               // we split string into pieces by cutting out 1's
    let l = 0;
    for (let i = 0; i < num.length; i++) {
        if (l < num[i].length) { l = num[i].length };   // looking for the largest string of 0's -> biggest gap
    }
    return l;
}