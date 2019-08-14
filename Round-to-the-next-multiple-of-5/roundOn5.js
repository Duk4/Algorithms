function roundToNext5(n) {
    if (n >= 0) {
        return (n % 5 == 0) ? n : n + (5 - (n % 5));
    } else {
        return (n % 5 == 0) ? n : n + (-(n % 5));
    }
}