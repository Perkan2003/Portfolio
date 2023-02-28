'use strict';

const display = document.querySelector('.display');
const btn = document.querySelectorAll('.btn');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');

btn.forEach(e =>
  e.addEventListener('click', function () {
    display.value += e.value;
  })
);

btnEqual.addEventListener('click', function () {
  display.value = eval(display.value);
});

btnClear.addEventListener('click', function () {
  display.value = '';
});
