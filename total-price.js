var cart = [
    { name: 'laptop', price: 45000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'iphone', price: 55000, quantity: 1 },
    { name: 'pant', price: 500, quantity: 5 }
];
function totalPrice(array) {
    var totalCost = 0;
    for (let item of array) {
        var itemCost = item.price * item.quantity;
        totalCost = totalCost + itemCost;
    }
    return totalCost;
}
var total = totalPrice(cart);
console.log(total);