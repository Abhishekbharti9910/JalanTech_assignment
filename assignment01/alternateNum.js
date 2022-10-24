const alternateIt = (arr) => {
    try {
        if (!Array.isArray(arr) || arr.length === 0) throw "enter valid array";
        else if(!checkIsItSorted(arr)) throw "not sorted array can't move forward";
        
        // now real work start
        let left = 0;
        let right = arr.length - 1;
        let i = 0;
        let resultArr = new Array(arr.length);

        while (left < right) {
            resultArr[i] = arr[right];
            right -= 1;
            i++;
            if (left === right) continue;
            resultArr[i] = arr[left]
            left += 1;
            i++;
        }

        if (resultArr[i] === undefined) resultArr[i] = arr[left];

        console.log(resultArr);
        return resultArr; // returning for testing purposes only

    } catch (error) {
        console.log(error);
        return error;
    }
    
}




// to check is the array is really sorted or not

const checkIsItSorted = (arr) => {
    let prevInd = 0;

    for (let index = 1; index < arr.length; index++) {
        if (arr[index - 1] > arr[index]) return false;
    }

    return true;
}

// exporting it for testing only
export default alternateIt;