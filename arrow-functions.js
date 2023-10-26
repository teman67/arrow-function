/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a,b) {
    return a+b
}

result=addTwoNumbers(4,5)
console.log(result)
// Arrow Function With Parameters

const addTwoNumbers2 = (a,b) => a+b;
result2=addTwoNumbers2(5,7)
console.log(result2)

// Single Line Arrow Function With Parameters

// Implicit Returns

// Returning Multiple Lines


let arr1=[1,2,3];
let arr2=arr1;
arr2.push(4)
console.log(arr2)
console.log(arr1)

let arr3=[4,5,6];
arr4=[...arr3];
arr4.push(7);
console.log(arr3)
console.log(arr4)

let obj1={a:1, b:2, c:3}
let obj2={...obj1, d:4}
console.log(obj1)
console.log(obj2)

let obj3={...obj1, b:6}
console.log(obj3)


/* rest operator */

const sumRest = (a,b,c,...rest) => {
    let sum = a + b + c;
    for (let i of rest){
        sum += i;
    }

    return sum
}

let sum = sumRest (1,2,3,4,5,6);
console.log(sum)