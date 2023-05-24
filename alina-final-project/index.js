import { BurgerWithGarlicDecorator } from "./decorators/burgerWithGarlicDecorator.js";
import { BurgerWithKetchupDecorator } from "./decorators/burgerWithKetchupDecorator.js";
import { Restaurant } from "./restaurant.js";

const rest = Restaurant.getInstance();

let classicBurger = rest.makeBurger('classic');
// burger = new BurgerWithKetchupDecorator(burger).getBurger();
classicBurger = new BurgerWithGarlicDecorator(classicBurger).getBurger();
classicBurger = new BurgerWithKetchupDecorator(classicBurger).getBurger();

let kingBurger = rest.makeBurger('king');
kingBurger = new BurgerWithKetchupDecorator(kingBurger).getBurger();

let veggieBurger = rest.makeBurger('veggie');

serveBurger(veggieBurger);

serveBurger(classicBurger);
serveBurger(kingBurger);


function serveBurger(burger) {
    console.log(`Here you are... ${burger.type} burger${burger.sauces.length === 0 ? "" : ` with ${burger.sauces.join(", ")}`}.`);
}