import { ClassicBurger } from "./burgers/classicBurger.js";
import { KingBurger } from "./burgers/kingBurger.js";
import { VeggieBurger } from "./burgers/veggieBurger.js";

export class BurgerFactor {
    makeBurger(type) {
        switch (type) {
            case 'veggie':
                return new VeggieBurger();
            case 'classic':
                return new ClassicBurger();
            case 'king':
                return new KingBurger();
            default:
                return new VeggieBurger();
        }
    }
}