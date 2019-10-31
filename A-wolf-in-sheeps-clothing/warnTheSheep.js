function warnTheSheep(queue) {
    let wolfIndex = queue.indexOf("wolf");
    if (wolfIndex == queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    } else {
        let sheepInDanger = queue.length - 1 - wolfIndex;
        return "Oi! Sheep number " + sheepInDanger + "! You are about to be eaten by a wolf!";
    }
}