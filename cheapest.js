const phones = [
    { name: 'samsung s5', price: 45000, camere: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camere: 8, storage: 8 },
    { name: 'sahomi m5', price: 12000, camere: 8, storage: 16 },
    { name: 'appo a2', price: 17000, camere: 8, storage: 32 },
    { name: 'nokia n95', price: 8000, camere: 8, storage: 4 },
    { name: 'htc h82', price: 25000, camere: 10, storage: 16 },

];

let cheapest = phones[0];
for (const phone of phones) {
    // compare price only
    if (phone.price < cheapest.price);
    cheapest = phone;
}
console.log(cheapest);