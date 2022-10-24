class Cofee {
    #milk
    #cream
    #latte
    constructor(milk, cream, latte) {
        this.#milk = milk;
        this.#cream = cream;
        this.#latte = latte;
    }

    get costOfTheAddons() {
        return {
                milk: this.#milk,
                cream: this.#cream,
                latte: this.#latte,
            }
    }

    get milkCost() {
        return this.#milk;
    }

    get creamCost() {
        return this.#cream;
    }

    get latteCost() {
        return this.#latte;
    }

    // in future if the cost need to be incremented or decremented 


    /**
     * @param {...number} milk - milk cost only positive integer entertained
     */
    set setMilkCost(milk) {
        if ( typeof milk === "number" && milk >= 0) {
            this.#milk = cost;
        }
    }

    /**
     * @param {...number} cream - cream cost only positive integer entertained
     */
    set setCreamCost(cream) {
        if ( typeof cream === "number" && cream >= 0) {
            this.#cream = cream;
        }
    }

    /**
     * @param {...number} latte - latte cost only positive integer entertained
     */
    set setLatteCost(latte) {
        if ( typeof latte === "number" && cost >= 0) {
            this.#latte = cost;
        }
    }

    printAddonsPrise() {
        console.log("add addons on your liking");
        console.log("1. milk cost = ", this.#milk);
        console.log("2. cream cost = ", this.#cream);
        console.log("3. latte cost = ", this.#latte);
    }
}

export default Cofee;