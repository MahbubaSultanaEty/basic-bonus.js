// You have the sales numbers of 4 employees in a shop. Find who sold the most items and print their name(s) and the number sold.

// Employee	Items Sold
// Ali	120
// Sara	95
// Tanvir	140
// Nabila	140

// Hint: There might be a tie for the highest sales.

const sales = {
    Ali: 120,
    Sara: 95,
    Tanvir: 140,
    Nabila: 140
};

let maxSales = -Infinity; // start with a very small number

// Step 1: find max while looping
for (let employee in sales) {
    if (sales[employee] > maxSales) {
        maxSales = sales[employee];
    }
}

// Step 2: loop again to find who has max
for (let employee in sales) {
    if (sales[employee] === maxSales) {
        console.log(employee + " sold the most items: " + maxSales);
    }
}