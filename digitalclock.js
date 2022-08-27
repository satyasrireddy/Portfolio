const hourEl = document.getElementById("hour")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")


function clock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
        if(hour > 12) {
            h = h-12
            ampm = "PM"
        }

        hourEl.innerText = h;
        minutesEl.innerText = m;
        secondsEl.innerText = s;
        ampmEl.innerText = ampm;

    setTimeout(() => {
       clock();
    }, 1000)
}

clock();
