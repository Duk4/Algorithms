function upArray(arr) {
    // returns null if array is empty or contains integers that are not 9 >= n >= 0
    if (arr.length < 1 || arr == undefined) return null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 9) {
            return null;
        }
    }
    // going from back to front, switching 9's into 0's and incrementing next element by 1
    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] >= 9) {
            arr[j] = 0;
            if (j == 0) {           // if we have all 9's we convert them into 0's and put 1 in front of other elements
                arr.unshift(1);
            } else {
                arr[j - 1]++;
            }
        } else {
            arr[j]++;
            break;
        }
        if (arr[j - 1] <= 9) break;
    }
    return arr;
}