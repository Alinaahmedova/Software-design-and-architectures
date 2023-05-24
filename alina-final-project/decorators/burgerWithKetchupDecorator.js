import { BaseBurgerDecorator } from "./baseBurgerDecorator.js";

export class BurgerWithKetchupDecorator extends BaseBurgerDecorator {
    constructor(burger) {
        burger.addSauce("ketchup");
        super(burger);
    }

}