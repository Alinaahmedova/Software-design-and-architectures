import { BaseBurgerDecorator } from "./baseBurgerDecorator.js";

export class BurgerWithGarlicDecorator extends BaseBurgerDecorator{
    constructor(burger){
        burger.addSauce("garlic");
        super(burger);
    }
}