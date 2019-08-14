const binaryArrayToNumber = arr => {
    const b = [1, 2, 4, 8, 16, 32, 64, 128];
    let count = 0;
    for (let i = arr.length - 1, j = 0; i >= 0; i-- , j++) {
        count += arr[i] * b[j];
    }
    return count;
};