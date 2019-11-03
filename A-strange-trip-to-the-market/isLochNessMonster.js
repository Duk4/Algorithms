function isLochNessMonster(s) {
    // Using ternary operator I checked if string s contained one of these strings
    // And returned true if it did, or false if it didn't
    // As Monster uses these phrases when speaking
    let y;

    if (s.includes("tree fiddy")) {
        y = true;
    } else if (s.includes("3.50")) {
        y = true;
    } else if (s.includes("three fifty")) {
        y = true;
    } else {
        y = false;
    }
    return y;
}