class Item {
    constructor(id, cost, name) {
        this.id = id;
        this.cost = cost;
        this.name = name;
    }
}

class ItemCollection {
    constructor() {
        this.clear();
    }
    addItem(item) {
        if (isItem(item)) {
            this.items.push(item);
        }
    }
    findByid(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                return this.items[i];
            }
        }
    }
    clear() {
        this.items = [];
    }
}

class Shop {
    constructor() {
        this.cart = new ItemCollection();
        this.catalog = new ItemCollection();
        this.refreshCounter();
    }
    addToCart(item) {
        this.cart.addItem(item);
    }
    addToCatalog(item) {
        this.catalog.addItem(item);
        this.presentItem(item);
    }
    presentItem(item) {
        let presenter = document.getElementById("shop_presenter");
        presenter.innerHTML += '<div class="item" onclick = "clickOnItem(' + Number(item.id.replace(/[^\d\+]/g, "")) + ')">' + item.name + "<br>" + item.cost + "$" + '</div>';
        this.refreshCounter();
    }
    clearCart() {
        this.cart.clear();
    }
    refreshCounter() {
        document.getElementById("counter").innerHTML = this.catalog.items.length;
    }
}

function isItem(item) {
    return typeof (item) === typeof (new Item());
}

function createItem(id, cost, name) {
    return new Item(id, cost, name)
}

function clickOnItem(index) {
    shop.cart.addItem(shop.catalog.items[index]);
    refreshAnswer();
}

function refreshAnswer() {
    let summ = 0;
    document.getElementById("cart").innerHTML = 'Товары в корзине: <br>'
    for (let i = 0; i < shop.cart.items.length; i++) {
        document.getElementById("cart").innerHTML += shop.cart.items[i].name + ': ' + shop.cart.items[i].cost + '<br>';
        summ += Number(shop.cart.items[i].cost);
    }
    document.getElementById("ex2_answer").innerHTML = summ.toFixed(2);
}

function clearCart() {
    shop.clearCart();
    refreshAnswer();
}

shop = new Shop();

for (let i = 0; i < 5; i++) {
    randVal = (Math.random() * 1000).toFixed(2);
    shop.addToCatalog(createItem("Item " + i, randVal, (i+1)+" good"));
}