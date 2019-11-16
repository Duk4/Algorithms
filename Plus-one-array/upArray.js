function upArray(arr) {
    arr = Number(arr.join(''));
    if (isNaN(arr)) {
        return null;
    }
    arr++;
    arr = arr.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    return arr;
}