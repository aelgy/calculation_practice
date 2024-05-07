const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const number = document.querySelector('#number')
const resetBtn = document.querySelector('.reset')
let a = 0;
number.innerHTML = a;

const plus = () => {
  a++;
  number.innerHTML = a;
}

const minus = () => {
  a--;
  number.innerHTML = a;
}

const reset = () => {
  a = 0;
  number.innerHTML = a
}

plusBtn.onclick = plus;
minusBtn.onclick = minus;
resetBtn.onclick = reset;

const cal = document.querySelector('.cal')

const calBtn = () => {
  const first = parseInt(document.querySelector('.firNum').value);
  const second = parseInt(document.querySelector('.secNum').value);
  if (isNaN(first) || isNaN(second)) {
    alert('請輸入正確的值');
  } else {
    const plus = first + second;
    alert("相加等於：" + plus);
    const minus = first - second;
    alert("相減等於：" + minus);
    const multi = first * second;
    alert("相乘等於：" + multi);
    const division = first / second;
    alert("相除等於：" + division);
  }
}

cal.onclick = calBtn;