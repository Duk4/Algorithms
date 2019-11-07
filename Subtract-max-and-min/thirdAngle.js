function subtract(arr) {
    if (arr.length <= 1) {
        return 0;
    }
    arr.sort((a, b) => b - a);  // this expression sorts numbers in descending order
    return arr[0] - arr[arr.length - 1];
}