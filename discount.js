const PRODUCT_PRICE = 100;
const DISCOUNT_RATE = 0.2; // 20% discount
let ismember = true; 
if (ismember) {
    let finalPrice = PRODUCT_PRICE * DISCOUNT_RATE;
    console.log(`$${finalPrice} is the final price after applying the discount.`);
} else {
    console.log(`$${PRODUCT_PRICE} is the final price without any discount.`);
}
    