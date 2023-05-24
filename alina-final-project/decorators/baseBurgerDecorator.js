export class BaseBurgerDecorator {
    constructor(burger) {
        this.burger = burger;
    }
    getBurger() {
        return this.burger;
    }
}