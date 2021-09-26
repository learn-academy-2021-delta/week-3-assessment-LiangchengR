// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//JEST TEST to test a fibSeq function that takes in a num greater than 2 and returns an array of that length with fib seq numbers
describe("tests fibSeq function", () => {
    it("takes num and rtrns array of that length with fib sequence pattern", () => {

        // Example input: 6
        // Expected output: [1, 1, 2, 3, 5, 8]

        // Example input: 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

      expect(fibSeq(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibSeq(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })
//jest test fails because "ReferenceError: fibSeq is not defined"


// b) Create the function that makes the test pass.

//created function with num param
const fibSeq = (num) =>{
    //assuming input is greater than 2
    //initiate an empty array with first two values
    let fibArray = [1, 1];
    
    //for loop that builds array to the length of num input starting at index 2
    for (let i = 2; i < num; i++){
        //adds two previous values together before this index and pushes to fibArray
        fibArray.push(fibArray[i-1]+fibArray[i-2]); 
    }
    return fibArray;
}
//originally failed test trying to use a map method but realized it doesn't update array values until the function has completed. Switched to if/else and for loops and test passed


//I wanted to try recursion! ==========================  (it ended up being messier than most) (ノ• ◡•)ノ 彡┻━┻ 

//fibSeq function that takes in a num and returns an array of that length with fib seq numbers MINUS starting 0 (to pass tests)
//created function fibSeq that takes in a number called count which refers to the desired length
// const fibSeq = (count) =>{
//     //at the base case -> return an empty array 
//     if(count === 0){
//         return [];
//     } 

//     //for indexes 1 and 2, we should push 1 only
//     else if (count <= 2){
//         const array = fibSeq(count-1);
//         array.push(1);
//         return array;
//     }

//     //at each index afterwards, the function should push to a new array the sum of the previous two values  
//     else {
//         const array = fibSeq(count-1);
//         array.push(array[count-3] + array[count-2]);
//         // console.log(" This is the count: " + count);
//         // console.log(array);
//         return array;
//     }
    
// }

//notes mostly for myself
//basically the function will call on itself using the count. It does not know what fibSeq(6), fibSeq(5), ....fibSeq(1) will return until it hits the base case of an empty array
//example say input or count = 5, we expect => [1, 1, 2, 3, 5]
//fibSeq(5) is added to the call stack, and returns array = fibSeq(4) 
//fibSeq(4) is added to the call stack, and returns array = fibSeq(3)
//fibSeq(3) is added to the call stack, and returns array = fibSeq(2)
//fibSeq(2) is added to the call stack, since count = 2, we execute else if statement and returns array = fibSeq(1)
//fibSeq(1) is added to the call stack, since count = 2, we execute else if statement and returns array = fibSeq(0)
//this is where we hit the base case and where we find out fibSeq(0) returns []
//we now work last in first out on the call stack
//at fibSeq(1) we know array = [] so we push 1 into the array, it returns [1]
//at fibSeq(2) array = [1] so we push another 1 into the array, it returns [1, 1]
//at fibSeq(3) array = [1, 1] so we push the addition of (array[0] + array[1]) OR (1+1), returns [1, 1, 2]
//at fibSeq(4) array = [1, 1, 2] we push (array[1] + array[2]) OR (1+2), returns [1, 1, 2, 3]
//at fibSeq(5) array = [1, 1, 2, 3] we push (array[2] + array[3]) OR (2+3), returns [1, 1, 2, 3, 5]

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//JEST TEST to test an onlyOdd function that filters out odd nums in an array and sorts them least to great
describe("tests onlyOdd function", ()=>{
    it("takes in array and rtrns only odd nums from least to greatest", () =>{

        var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]

        var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]

        expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199]);
        expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23]);
    })
})
//jest test fails because "ReferenceError: onlyOdd is not defined"


// b) Create the function that makes the test pass.

//create fn onlyOdd that takes array param
const onlyOdd = (array) =>{
    //filters array to return only odd values AND only with typeof "number"
    let oddsArray = array.filter(value =>{ 
        return value % 2 !== 0 && typeof value === "number"
    });

    //returns the sorted oddsArray from smallest to largest where if a-b < 0 sort a before b
    return oddsArray.sort((a, b) => a-b);
}
//failed test because it seems filter does type coercion regardless of the strictly not equals and because sort fn will sort based on strings if no comparison is identified. Passed test after fixing it. Can't really think of a way this might need refactoring.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

//JEST TEST to test a sumOf fn that takes in an array and returns an array of accumulating sum based on inputs
describe("test sumOf function", () => {
    it("takes in an array, returns a new array where each element is a sum of the input array values up to that index", () =>{
        var numbersToAdd1 = [2, 4, 45, 9];
        // Excpected output: [2, 6, 51, 60]

        var numbersToAdd2 = [0, 7, -8, 12];
        // Expected output: [0, 7, -1, 11]

        var numbersToAdd3 = [];
        // Expected output: []

        expect(sumOf(numbersToAdd1)).toEqual([2, 6, 51, 60]);
        expect(sumOf(numbersToAdd2)).toEqual([0, 7, -1, 11]);
        expect(sumOf(numbersToAdd3)).toEqual([]);
    })
})
//failed test because ReferenceError: sumOf is not defined


// b) Create the function that makes the test pass.

//create a fn that takes array param
const sumOf = (inputArray) =>{
    //create a new array variable to push to
    let sumArray = [];
    //create variable to hold sum
    let sum = 0;

    //if array is empty return []
    if (inputArray.length === 0){
        return sumArray;
    } 
    
    //otherwise continue through code block to for loop to iterate through inputArray and push to new array with summed values
    for(let i = 0; i < inputArray.length; i++){
        sum += inputArray[i]; //tracks overall sum
        sumArray.push(sum); //pushes the compounding sum to each position in the array
    }
    return sumArray;
}
//test passed! couldn't really find anything that may need refactoring.