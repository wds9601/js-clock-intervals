let secondInterval = 0
let minuteInterval = 0
let hourInterval = 0
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

const secondRotation = () => {
    second.style.transform = "rotate(" + secondInterval + "deg)"
    secondInterval += 6
}

const minuteRotation = () => {
    minute.style.transform = "rotate(" + minuteInterval + "deg)"
    minuteInterval += 6
}

const hourRotation = () => {
    hour.style.transform = "rotate(" + hourInterval + "deg)"
    hourInterval += 30
}

setInterval(secondRotation, 1000);
setInterval(minuteRotation, 60000);
setInterval(hourRotation, 600000);