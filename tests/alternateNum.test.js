import alternateIt from "../assignment01/alternateNum";


test('check on sorted array even number of elements', () => { 

    expect(alternateIt([2, 4, 6, 8, 10, 12])).toEqual([12, 2, 10, 4, 8, 6]);
 })

 test('check on sorted array odd number of elements', () => { 

    expect(alternateIt([2, 4, 6, 8, 10])).toEqual([10, 2, 8, 4, 6]);
 })

 test('check on empty array', () => { 

    expect(alternateIt([])).toEqual("enter valid array");
 })

 test('check on non array', () => { 

    expect(alternateIt(12)).toEqual("enter valid array");
 })

 test('check on non sorted array', () => { 

    expect(alternateIt([2, 4, 6, 8, 10, 1])).toEqual("not sorted array can't move forward");
 })


