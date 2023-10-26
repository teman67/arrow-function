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

/* Destructining assignment */

let age =[23, 34,65];
let [john,anna,max] = age;
console.log('john age:', john);
console.log(anna);

let lang=["eng","ger","fre","jpan"];
let [first,second]=lang;
console.log(first);
console.log(second);

lang[2]="pers" ;
console.log(lang)

for (i in lang) {
    console.log(i,lang[i]);
}

/* Map method  */

let nums = [1,2,3,4];
let result3 = [];
for (let i of nums){
    result3.push(i*2)
}

console.log(result3)


const multi = nums.map(i => i *2)
console.log(multi)

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const studentIds = students.map(student => [student.name, student.id])
console.log(studentIds)



const addAges = students.map(student => ({
...student,
age: [32, 43, 54]
}));
console.log(addAges)



const ages = [32, 43, 54];

const addAges2 = students.map((student, index) => ({...student, age: ages[index]}));
console.log(addAges2)