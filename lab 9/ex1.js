const shoppingCart = (function() {

    let basket = [];

    return {
        upsertItem: function(product) {
            for (let i = 0; i < basket.length; i++) {
                let temp = basket[i];
                if (temp.id === product.id) {
                    basket[i] = product;
                    return;
                }
            }
            basket.push(product);
        },
        getItemsCount: function() {
            return basket.length;
        },
        getTotalPrice() {
            return basket.reduce((total, p) => total + p.price * p.count, 0);
        },
        removeItemById(id) {
            basket = basket.filter(p => p.id !== id);
        }
    };

})();
const p1 = { id: 0, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5, count: 1 }
const p2 = { id: 1, name: 'Tea', description: 'Safari Eritrean Tea', price: 12, count: 4 }


shoppingCart.upsertItem(p1);
shoppingCart.upsertItem(p2);

console.log(shoppingCart.getTotalPrice());
p2.name = "Kenyan Tea";
p2.price = 8;
shoppingCart.upsertItem(p2);

console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());