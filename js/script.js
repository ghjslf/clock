function convert() {
    let time = new Date();
    
    let hours = time.getHours().toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if (hours.length == 1) {
        hours = '0' + hours;
    }
    if (minutes.length == 1) {
        minutes = '0' + minutes;
    }
    if (seconds.length == 1) {
        seconds = '0' + seconds;
    }

    let clockString = hours + ':' + minutes + ':' + seconds;
    let colorString = '#' + hours + minutes + seconds;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.background = colorString;
}


let clock = document.getElementById('clock');
let color = document.getElementById('color');

convert();
setInterval(convert, 1000);
