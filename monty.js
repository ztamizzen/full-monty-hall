const getDoor = (doorCount) => Math.floor(Math.random() * doorCount);
const Monty = (changeMind = true, gamesCount = 1000, doorCount = 3) => {
    let i = 0, wins = 0;
    console.time('monty');
    do {
        let guess = getDoor(doorCount);
        let door = getDoor(doorCount);
        if ((guess === door && !changeMind) || (guess !== door && changeMind)) {
            wins++;
        }
        ++i;
    } while (i < gamesCount);
    console.timeEnd('monty');
    return wins;
};

module.exports = Monty;
