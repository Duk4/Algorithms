function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let days = 0;
    let growth = 0;
    while (growth < desiredHeight) {
        growth += upSpeed;
        days++;
        if (growth >= desiredHeight) {
            return days;
        }
        growth -= downSpeed;
    }
}