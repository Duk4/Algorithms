function isLochNessMonster(s) {
    // Using ternary operator I checked if string s contained one of these strings
    // And returned true if it did, or false if it didn't
    // As Monster uses these phrases when speaking
    return s.includes("tree fiddy" || "three fifty" || "3.50") ? true : false;
}