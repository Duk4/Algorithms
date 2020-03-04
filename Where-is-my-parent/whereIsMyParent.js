function findChildren(dancingBrigade) {
    dancingBrigade = dancingBrigade.split('');
    let upper = dancingBrigade.filter((el) => {
        return el === el.toUpperCase()
    }).sort();
    result = [];
    for (let x of upper) {
        result.push(x);
        for (let l of dancingBrigade) {
            if (l === x.toLowerCase()) {
                result.push(l);
            }
        }
    }
    return result.join('');
};

console.log(findChildren('eebbeEB'))