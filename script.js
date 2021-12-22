const secondsRef = document.getElementById('secondsRef');
const minutesRef = document.getElementById('minutesRef');
const hoursRef = document.getElementById('hoursRef');
const daysRef = document.getElementById('daysRef');

setInterval(function () {
    let start_time = new Date('09/13/2021');
    let now = new Date();
    let diff = Math.abs(now - start_time);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    secondsRef.innerText = seconds % minutes;
    minutesRef.innerText = minutes % hours;
    hoursRef.innerText = hours % days;
    daysRef.innerText = days
}, 1000);
