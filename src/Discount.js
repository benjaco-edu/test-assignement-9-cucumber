class Discount {
    /**
     *
     * @param {Number} units
     * @param {Boolean} cashOnDelivery
     * @param {Boolean} wholesale
     */
    static getDiscount(units, cashOnDelivery, wholesale) {
        let discount = 0;

        if (wholesale) {
            discount += 2;
        }

        if (cashOnDelivery) {
            discount += 2;
        }

        if (units >= 50) {
            discount += 2;
        }

        return discount;
    }
}

module.exports = Discount;