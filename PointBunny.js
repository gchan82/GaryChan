// game: gambling system
// Welcome to Point Bunny... where everyone is a winner.
// Please place 50 points into the slot machine.

function gamblingSystem(points) {
    console.log("Welcome to Point Bunny...where everyone is a winner. Please place 50 points into the slot machine.");
    //randomize win or lose
    // const rand = Boolean(Math.round(Math.random())); //rand is 0 or 1.

    const rand = (Math.round(Math.random())); //rand is between 0 or 1.
    if (rand <= 0.2) {
        const win = Math.floor(((Math.random() * Math.floor(points * 2))) + 50);
        console.log("You won: " + win + " points.");
    } else if (rand > 0.2 && rand <= 0.4) {
        const win = Math.floor(((Math.random() * Math.floor(points))) + 50);
        console.log("You won: " + win + " points.");
    } else {
        const lose = Math.floor(((Math.random() * Math.floor(points))));
        console.log("You won: " + lose + " points.");


    }
}

gamblingSystem(50);

