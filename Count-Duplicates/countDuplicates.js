// first we use the method to lower or upper cases, so all characters can be compared properly
// then we use split to get an array of characters
// then we use filter(element, index, array), and we check if our element isn't same index as we are
// and if the last index of our element is the same as the index
// filter returns a new array which is stored in text, so we can return the length of an array of duplicates

function duplicateCount(text) {
    return text.toLowerCase().split('').filter((val, i, arr) => {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}