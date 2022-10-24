import cofeeMachine from '../assignment02/App'


// ordering Espresso
test('test for one order', () => { 
    expect(cofeeMachine("Abhishek Bharti", [1], [[true, false, true]], 1)).toBe(160);
 })


// ordering Espresso and Cappucino
 test('test for one order', () => { 
    expect(cofeeMachine("Abhishek Bharti", [1, 2], [[true, false, true], [true, true, false]], 2)).toBe(330);
 })

 // ordering Espresso, Cappucino and Latte
 test('test for one order', () => { 
    expect(cofeeMachine("Abhishek Bharti", [1, 2, 3], [[true, false, true], [true, true, false], [false, true, true]], 3)).toBe(605);
 })

