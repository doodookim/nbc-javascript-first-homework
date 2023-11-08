const timer = document.querySelector('.timer');
let count = Number(timer.textContent);
let intervalId;
setInterval(() => {
  if (count >= 0 && count < 10) {
    count = count + 1;
    timer.innerHTML = count;
    clearInterval(intervalId);
  }
}, 1000);
