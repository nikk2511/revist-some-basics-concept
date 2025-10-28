// Array - non primitive data type
// An array is considered a non-primitive data type because it is a reference type, meaning it stores the memory address of a collection of elements rather than the actual values themselves. In contrast, primitive data types (like int, char, boolean, etc.) directly store the value.

// reference type - array, object, function.

// -> program are stored in STACK and HEAP memory

// let fruit = ["apple", "banana", "orange"]

// console.log(fruit[0]);
// fruit[1] = "mango"

// console.log(fruit[1])

// let obj = {
//     name: "nikhil",
//     // "full Name": "nihkil singh"
//     age: 25,
//     weight: 82,
//     hight: "6 ft",
//     greet: function() {
//         console.log("hey, how are you!");
//     }
// };

// console.log(obj)
// obj.greet()
// console.log(typeof(obj))


// let arr = [1,2,3,4,5]

// let brr = new Array("nihkil",1,true);
// console.log(brr[0])

// build in methods in javascript are 
// push, pop, shift, unshift, slice, splice, map, filter, reduce, short, indexof, find;

// let arr = [1,2,3,4,5]

// let brr = new Array("nikhil",1,true);
// console.log(brr[0])

// brr.push('singh')


// console.log(brr)

// brr.pop("nikhil")

// brr.shift()

// brr.unshift('nihkil singh')
// brr.push(29) 
// brr.push(40)
// brr.push(50)

// brr.splice(1,2,'ram')
// console.log(brr)

// map, filter, reduce


// let arr = [10,20,30]

// let answerArr = arr.map((number) => {
//     return number*number;
// })

// console.log(answerArr)

// let arr = [10,20,30]

// arr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })

// console.log(answerArr)


// filter methods


// let arr = [10,20,30,40,54,67,93,76,43,91]
//  let evenArray = arr.filter((number) => {
//      if(number%2 != 0) {
//          return true;
//      }
//      else {
//          return false;
//      }
//  });
 
//  console.log(evenArray)

// let arr = [1,2,'nikhil', 'singh', null, true]

// let amrit = arr.filter((value) => {
//     if(typeof(value) === "string") {
//         return true
//     } else {
//         false;
//     }
// })

// console.log(amrit)


// reduce methods

// let arr = [10,20,30,40]
 
// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;
// }, 0);

// // console.log(ans);
// let arr = [3,2,8,5,9,4,3,7]

// arr.sort((a,b)=> a-b);
// // how to do shorting in decending order
// // arr.sort((a,b) => b-a);

// console.log(arr);


// for each methods

// let arr = [10,20,30,40]

// let length = arr.length;
// console.log("Length :", length)

// for (let index = 0; index<length; index++) {
//     console.log(arr[index])
// }

// arr.forEach((value, index) => {
//     console.log("number :", value, "Index :", index );
// });

// for in methods


// let fullName = "nikhil";
// for (let val of fullName) {
//     console.log(val);
// }

// Array with functions

// let arr = [10,20,30,40]

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for (let i =0; i<len; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum)

// let arr = [10,20,30,40]

// function getSum(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum + value;
//     })
//     return sum;
// }
// console.log(getSum(arr))

//  let arr = [10,20,30,40]

// function getSum(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum + value;
//     })
//     return sum;
// }
// console.log(getSum(arr))

