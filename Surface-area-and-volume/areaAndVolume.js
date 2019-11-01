function getSize(width, height, depth) {
    let array = [];

    // box area formula
    let boxArea = 2 * (width * height) + 2 * (width * depth) + 2 * (height * depth);
    array.push(boxArea);

    // box volume formula
    let boxVolume = width * height * depth;
    array.push(boxVolume);

    return array;
}

// You can write in shorter

function getSize(width, height, depth) {
    return [2 * (width * height) + 2 * (width * depth) + 2 * (height * depth), width * height * depth];
}

// or

function getSize(width, height, depth) {
    return [2 * (width * height + width * depth + height * depth), width * height * depth];
}