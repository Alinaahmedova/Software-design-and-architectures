import { BurgerFactor } from "../burgerFactory.js";

export class Chef {
    constructor() {
        this.burgerFactory = new BurgerFactor();
    }
    makeBurger(type) {
        console.log(`Making ${type} burger...`);
        return this.burgerFactory.makeBurger(type);
    }
}