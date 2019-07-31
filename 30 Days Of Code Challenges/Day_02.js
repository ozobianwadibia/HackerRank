// working with operators.

function totalMealCost(mealCost, tipPercent, taxPercent) {
    /* mealCost is a double or float
       tipPercent is an integer
       taxPercent is an integer
    */
    
    let tipPercentValue = (tipPercent / 100) * mealCost;
    let taxPercentValue = (taxPercent / 100) * mealCost; 

    let totalCost = tipPercentValue + taxPercentValue + mealCost;
    totalCost = Math.round(totalCost);
    
    return totalCost;

    // process.stdout.write(`${totalCost}`);
}

console.log(totalMealCost(50, 10, 8));

