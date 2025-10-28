// fetch is used to get the data over the internet

// let promise = fetch(url[options])
// without options, a get request is send

let p = fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((value1) =>{
    console.log(value1.status)
    console.log(value1.ok)
    console.log(Response.headers)
    return value1.json()
}).then((value2)=> {
    console.log(value2)
})

// console.log("nikhill")