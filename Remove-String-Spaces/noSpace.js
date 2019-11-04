function noSpace(x) {
    let array = x.split(" "); // creates array of strings, cutting where there is space
    return array.join("");    // concatenates array elements into one string 
}