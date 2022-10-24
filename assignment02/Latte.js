import Cofee from "./Cofee";

class Latte extends Cofee {
    #cofeeName = "latte";
    #milk = false;
    #cream = false;
    #latte = false;
    #amount = 0;

    constructor() {
        let milk = 100;
        let cream = 125;
        let latte = 150;
        super(milk, cream, latte);
    }

    get cofeeName() {
        return this.cofeeName;
    }

 // here arguments are boolena nature 
    makeACofee(milk, cream, latte) {

        if (typeof milk === "boolean" && typeof cream === "boolean" && typeof latte === "boolean") {
            this.#milk = milk;
            this.#cream = cream;
            this.#latte = latte;
            
            this.#amount += milk ? this.milkCost : 0;
            this.#amount += cream ? this.creamCost : 0;
            this.#amount += latte ? this.latteCost : 0;
        }

        return this.#amount;
    }
}


export default Latte;


