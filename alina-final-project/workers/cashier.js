export class CashierCommand {
    execute(chef, type) {
        return chef.makeBurger(type);
    }
}