function solve(s, g) {
    let x = s - g;          // x is a difference between the numbers
    if (x % g == 0) {       // we check if difference is dividable by gcd
        return [g, x];      // we return array which elements sum is equal to s
    } else { return -1; }
}