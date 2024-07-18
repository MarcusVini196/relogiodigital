const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')


function newTime(){
    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()

    hoursElement.textContent = hours
    minutesElement.textContent = minutes
}

function fixTime(time){
    return time < 10 ? '0'+time: time
}

newTime()
setInterval(newTime, 1000)