//Potato chip calculator
//Q: How many potato chips do you eat every day?
//A: You will gain X pounds in a year.

//152 calories in 18 potato chips
//2500 calories in a pound
//401 calories in a slice of cheesecake

function calcWtGainChips(chips) {
    poundsGain = Math.floor(((chips * (152 / 18)) / 2500) * (365 / 4));
    console.log('With ' + chips + ' potato chips you eat every day, you will gain ' + poundsGain + ' pounds in 3 months.');
}
function calcWtGainCake(cake) {
    poundsGain = Math.floor(((cake * 401) / 2500) * (365 / 4));
    console.log('With ' + cake + ' cheesecake slices you eat for dinner, you will gain ' + poundsGain + ' pounds in 3 months.');
}

calcWtGainChips(25);
calcWtGainChips(50);
calcWtGainCake(1);
calcWtGainCake(2);
