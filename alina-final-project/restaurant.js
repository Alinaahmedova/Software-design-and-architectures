import { CashierCommand } from "./workers/cashier.js";
import { Chef } from "./workers/chef.js";

export class Restaurant {
    static instance;

    constructor() {
        this.cashierCommand = new CashierCommand();
        this.make = new Chef();
    }

    makeBurger(type) {
        if (!["classic", "king", "veggie"].includes(type)) {
            console.log("Sorry, we don't have this type of burger");
            return null;
        }
        return this.cashierCommand.execute(this.make, type);

    }

    static getInstance() {

        if (!Restaurant.instance) {
            Restaurant.instance = new Restaurant();
        }
        return Restaurant.instance;

    }

}
