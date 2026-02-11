let monthlyallowance = 100;
let itemCost = 45;
let difference = monthlyallowance - itemCost;

console.log(`Monthly Allowance: $${monthlyallowance}`);
console.log(`Item Cost: $${itemCost}`);
if (itemCost <= monthlyallowance) {
    console.log("You can afford this item.");
 } else {
    console.log("You cannot afford this item.");
    console.log(`You need an additional $${-difference} to afford this item.`);
}