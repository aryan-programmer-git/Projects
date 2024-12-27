let date = new Date()
console.log(typeof(date))

const display = document.getElementsByTagName("div")[0] 

let a_min = 0;
let a_hour = 0;

// let hours = 
// let minutes = 
let seconds = setInterval(() => {
    let a_sec = date.getSeconds();
    if (a_sec>59) {
        a_sec = 0
        date.setSeconds(0)
    } else {
        ++a_sec
        date.setSeconds(a_sec)
    }
    display.innerHTML = date.toLocaleTimeString()
}, 1000);

























// setInterval(() => {
//     if(a_min>=59){
//         a_min = 0
//     }
//     else{
//         date = new Date(`2024-12-24 , 11:${a_min}`)
//         display.innerHTML = date
//         a_min++
//     }
// }, 60000);


// setInterval(() => {
//         if(a_sec>=59){
//             a_sec = 0
//         }
//         else{
//             date = new Date(`2024-12-24 , 11:30:${a_sec}`)
//             display.innerHTML = date
//             a_sec++
//         }
//     }, 1000);