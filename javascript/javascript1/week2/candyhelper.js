// ****************************** Candy helper *************************
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
    if (candyType === 'sweet') {
        return boughtCandyPrices.push(0.5 * weight);
    }
    if (candyType === 'chocolate') {
        return boughtCandyPrices.push(0.7 * weight);
    }
    if (candyType === 'toffe') {
        return boughtCandyPrices.push(1.1 * weight);
    }
    if (candyType === 'chewing-gum') {
        return boughtCandyPrices.push(0.03 * weight);
    }
}
addCandy('sweet', 25);
addCandy('chocolate', 10);
addCandy('toffe', 10);
addCandy('chewing-gum', 20);
console.log(boughtCandyPrices);

//************ Can i buy more? ***************
function canBuyMoreCandy(moreCandies) {
    const amountToSpend = Math.random() * 100;
    let totalPrice = 0;
    for (let i = 0; i < moreCandies.length; i++) {
        totalPrice += moreCandies[i];
    }
    console.log(`Amount to spend ${amountToSpend}`);
    console.log(`Total price ${totalPrice}`);
    if (totalPrice < amountToSpend) {
        buyMoreCandy = true;
    } else {
        buyMoreCandy = false;
    }
    return buyMoreCandy;
}
if (canBuyMoreCandy(boughtCandyPrices)) {
    console.log('You can buy more, so please do!');
} else {
    console.log('Enough candy for you!');
}
