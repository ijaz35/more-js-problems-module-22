//find the cheapest phone
const phones = [
    { name: 'Samsung A20', price: 15000, camera: 28, storage: 128 },
    { name: 'iphone7', price: 50000, camera: 8, storage: 256 },
    { name: 'iphone8', price: 60000, camera: 8.5, storage: 32 },
    { name: 'iphone5', price: 10000, camera: 7.5, storage: 16 }
];
/* let cheapestPhone = phones[0];
for (let phone of phones) {
    if (phone.price < cheapestPhone.price) {
        cheapestPhone = phone;
    }
}
console.log(cheapestPhone); */

//function to find cheapest phone
function findCheapest(array) {
    let cheapest = array[0];
    for (const phone of array) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const cheapestPhone = findCheapest(phones);
console.log(cheapestPhone);