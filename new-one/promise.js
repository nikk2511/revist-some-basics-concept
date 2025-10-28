// const promiseOne = new Promise(function(resolve, reject){

//     // do an async task
//     //DB calls, Crypography, network

//     setTimeout(function() {
//         console.log('Async task is complete')
//         resolve()
//     }, 3000)

// })

// promiseOne.then(function() {
//     console.log("Promise consumed")
// })


// new Promise(function(resolve, reject){
//     setTimeout(function() {
//         console.log("Async task2")
//         resolve()
//     },1000)
// }).then(function() {
//     console.log("Async 2 resolved")
// })


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "nikhil", age:24, email: "nikhil@gmail.com"})

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)


})