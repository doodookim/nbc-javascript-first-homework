//for문을 이용해서 class이름이 같은 div 태그 3개의 값에 각각 10을 더해 브라우저에 띄우자..

const numberElements = document.querySelectorAll('.number');

for (let i = 0; i < numberElements.length; i++) {
  const currentValue = parseInt(numberElements[i].innerText, 10);
  const newValue = currentValue + 10;
  numberElements[i].innerText = newValue.toString();
}
