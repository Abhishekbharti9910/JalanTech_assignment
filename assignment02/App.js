import Espresso from "./Espresso";
import Latte from "./Latte";
import Cappuccino from "./Cappuccino";
import Bill from "./Bill";

// to test the function, I have to pass arguments otherwise i have used prompt to take input
// please check my tests file
// here "cofee" is array of 1, 2 and 3 to choose cofee
// here "times" is number of cofee
// here "addOns" is 2d array of booleans each cofee has 3 addons

let listOfCofee = new Array();
let listOfBills = new Array();

const addOns = (milk, cream, latte, aCofee) => {
    aCofee.printAddonsPrise();
    let costOfMaking = aCofee.makeACofee(milk, cream, latte);
    listOfCofee.push(listOfCofee);
    return costOfMaking; 
}

const Machine = (name, cofee, addOnsArr, times) => {
    let addOnsIndex = 0;
    let cofeeIndex = 0;
    let espressoQty = 0;
    let latteQty = 0;
    let cappuccinoQty = 0;
    let amountCa = 0; //total amount of cappucino
    let amountEs = 0; // total amount of espresso
    let amountLa = 0; //total amount of latte
    let bill = new Bill(name);
    
    while (times > 0) {
        
        console.log("choose cofee of your liking by typing number it corresponds ");
        console.log("1. Espresso");
        console.log("2. Cappuccino");
        console.log("3. Latte");

        // here taking value of choice from cofee array
        if (cofee[cofeeIndex] === 1) {
            let aCoffe = new Espresso();
            amountEs += addOns(...addOnsArr[addOnsIndex], aCoffe);
            espressoQty += 1;
        }
        else if (cofee[cofeeIndex] === 2) {
            let aCofee = new Cappuccino();
            amountCa += addOns(...addOnsArr[addOnsIndex], aCofee);
            cappuccinoQty += 1;
        }
        else if (cofee[cofeeIndex] === 3) {
            let aCofee = new Latte();
            amountLa += addOns(...addOnsArr[addOnsIndex], aCofee);
            latteQty += 1;
        }
        cofeeIndex += 1;
        addOnsIndex += 1;       
        times -= 1;
    }

    bill.setLatteAmount = amountLa;
    bill.setEspressoAmount = amountEs;
    bill.setCappuccinoAmount = amountCa;

    bill.setCappuccinoQty = cappuccinoQty;
    bill.setEspressoQty = espressoQty;
    bill.setLatteQty = latteQty;
    listOfBills.push(bill);
    bill.printBill();
    return bill.getAmount();
}


export default Machine;