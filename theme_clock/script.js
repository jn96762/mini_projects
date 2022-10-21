const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
        toggle.textContent = 'Light mode';
    } else {
        toggle.textContent = 'Dark mode';
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360) + scale(minutes, 0, 60, 0, 30) + (scale(seconds, 0, 60, 0, 6) / 60)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360) + scale(seconds, 0, 60, 0, 6)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock === 0 ? "12" : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} <span class="ampm"> ${ampm}</span>`
    
    // Thu Oct 20 2022 22:34:01 GMT-0500 (Central Daylight Time)
    dateEl.innerHTML = `${days[day]}, ${months[month - 1]} <span class="circle">${date}</span>`



}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 1000);