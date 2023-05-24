export class BaseBurger  {

    constructor(price, type) {
        this.price = price;
        this.type = type;
        this.sauces = [];
    }

    //implementation
    addSauce(sauce) {
        this.sauces.push(sauce);
    }

}