//GET THE OLD CART WHEN ITS CREATED. FIRST TIME IT WILL BE AN EMPTY JS OBJECT. AFTER THAT WE WILL ASSIGN THE VALUE OF THE OLD CART
module.exports = function Cart(oldCart) {
    //THIS IS A CONSTRUCTOR
    this.items = oldCart.items;
    this.totalQty = oldCart.totalQty;
    this.totalPrice = oldCart.totalPrice;


    //ADD NEW ITEM TO THE CART FROM ID 
    this.add = (item, id) => {
        let storedItem = this.items;

        if (!storedItem) {
            storedItem = this.items[id] = {
                item: item,
                qty: 0,
                price: 0
            }
        }
        //CALCULATING PRICE AND QUENTATY
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;

        //UPDATE TOTAL QUENTATY AND PRICE
        this.totalQty++;
        this.totalPrice += storedItem.price;
    }

    //GENEREATE ARRAY FOR STORE CART ITEM AS ARRAY
    this.generateArray = () => {
        let arr = [];
        for (let id in this.items) {
            arr.push(this.items[id]);
        }
        return add;
    }
}