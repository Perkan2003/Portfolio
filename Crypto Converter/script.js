const btnSubmit = document.querySelector('.btn');
const input = document.querySelector('.input-1');
const result = document.querySelector('.result');
let data2;

const getData = function () {
  let crypto = document.querySelector('.crypto-1');
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${crypto.value}&vs_currencies=eur`
  )
    .then(response => response.json())
    .then(data => {
      result.value = input.value * data[Object.keys(data)].eur;
    });
};

const getData2 = function () {
  let crypto2 = document.querySelector('.crypto-2');
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${crypto2.value}&vs_currencies=eur`
  )
    .then(response => response.json())
    .then(data => {
      result.value = result.value / data[Object.keys(data)].eur;
    });
};

btnSubmit.addEventListener('click', function () {
  getData();
  getData2();
});
