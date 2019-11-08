function sumCubes(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum += Math.pow(i, 3); // adding a cube of the number
        i++;
    }
    return sum;
}