class Bill {
    // all billing private variables
    #espressoQty
    #cappuccinoQty
    #latteQty
    #espressoNetAmount
    #cappuccinoNetAmout
    #latteNetAmount
    #orderNumber = 0;
    #name

    constructor(name){
        this.#espressoQty = 0;
        this.#cappuccinoQty = 0;
        this.#latteQty = 0;
        this.#espressoNetAmount = 0;
        this.#cappuccinoNetAmout = 0;
        this.#latteNetAmount = 0;
        this.#orderNumber += 1;
        this.#name = name;  
    }

    /**
     * @param {number} qty -is number of cofee picked from same type
     */
    set setEspressoQty(qty) {
        if (typeof qty === "number" && qty >= 0) {
            this.#espressoQty = qty
        }
    } 

    /**
     * @param {number} qty -is number of cofee picked from same type
     */
    set setCappuccinoQty(qty) {
        if (typeof qty === "number" && qty >= 0) {
            this.#cappuccinoQty = qty
        }
    } 

    /**
     * @param {number} qty -is number of cofee picked from same type
     */
    set setLatteQty(qty) {
        if (typeof qty === "number" && qty >= 0) {
            this.#latteQty = qty
            }
    } 

    /**
     * @param {number} amount -amount incremented when coffe added in order
     */
    set setEspressoAmount(amount) {
        if (typeof amount === "number" && amount >= 0) {
            this.#espressoNetAmount = amount;
        } 
    }


    /**
     * @param {number} amount -amount incremented when coffe added in order
     */
    set setCappuccinoAmount(amount) {
        if (typeof amount === "number" && amount >= 0) {
            this.#cappuccinoNetAmout = amount;
        } 
    }


    /**
     * @param {number} amount -amount incremented when coffe added in order
     */
    set setLatteAmount(amount) {
            if (typeof amount === "number" && amount >= 0) {
                this.#latteNetAmount = amount;
            } 
    }
    
    printBill() {
        console.log("Hey,", this.#name);
        console.log("cofee type ", " qty ", " amount");
        console.log("Espresso_qty  ", this.#espressoQty,"  ",this.#espressoNetAmount);
        console.log("Cappuccino_qty  ", this.#cappuccinoQty ,"  ",this.#cappuccinoNetAmout );
        console.log("Latte_qty  ", this.#latteQty ,"  ",this.#latteNetAmount );
        const total = this.#espressoNetAmount + this.#cappuccinoNetAmout + this.#latteNetAmount;
        console.log("order id : ", this.#orderNumber);
        console.log("net Amount to be paid ", total);
        console.log("Have a good day ; ", this.#name);
    }

    getAmount() {
        return this.#espressoNetAmount + this.#cappuccinoNetAmout + this.#latteNetAmount;
    }
}

export default Bill;