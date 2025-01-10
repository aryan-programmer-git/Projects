console.log("Hello World")
let Time = document.getElementById("time-display")
let timer = document.getElementsByTagName("select")
let audio = document.getElementById("audio"),
    btn = document.querySelector("button")

ADDalarm()

let alarmTime = null
    
    function ampm() {
    for (let i = 0; i < 2; i++) {
        const e = i;
        let a = (e == 0) ? "AM" : "PM"
        let opt = ` <option value = "${a}">${a}</option>`
        timer[3].innerHTML += opt
    }
}
setInterval(() => {
    const d = new Date()
    Time.innerHTML = d.toLocaleTimeString()

    if(alarmTime && Time.innerHTML === alarmTime){
        triggerAlarm()
    }
}, 1000);

function contHour() {
    for (let i = 1; i <= 12; i++) {
        const e = i.toString();
        let opt = ` <option value = "${e}">${e}</option>`
        timer[0].innerHTML += opt
    }
}
function contMin() {
    for (let i = 0; i <= 59; i++) {
        const e = i.toString();
        let a = e.padStart(2, 0)
        let opt = ` <option value = "${a}">${a}</option>`
        timer[1].innerHTML += opt
    }
}
contHour(), contMin()


timer[2].innerHTML = ` <option value = "00" >00</option>`
ampm()

function gettimeout() {
    return `${timer[0].value}:${timer[1].value}:${timer[2].value} ${timer[3].value}`
}

function triggerAlarm(){
    alarmTime = null
    alert("Alarm Ringing......")
    audio.play()
}


function ADDalarm() {
    btn.addEventListener("click",()=>{
         alarmTime = gettimeout()
        alert(`Alarm is set for ${alarmTime}`)
    })
}