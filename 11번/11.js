const now = new Date();
const hours = now.getHours();
console.log('현재 :', now);
console.log('시간 :', hours);

const time = function () {
  if (hours < 10) {
    console.log('good morning');
  } else if (hours >= 10 && hours <= 18) {
    console.log('good afternoon');
  } else {
    console.log('good evening');
  }
};

console.log(time());
