'use strict';

const nameInput = document.querySelector('.name');
const surname = document.querySelector('.surname');
const number = document.querySelector('.number');
const btnAdd = document.querySelector('.add-btn');
const btnDeleteAll = document.querySelector('.delete-all-btn');
const contacts = document.querySelector('.contacts');

const btnDelete = function () {
  document.querySelectorAll('.delete').forEach(e =>
    e.addEventListener('click', function () {
      e.parentElement.remove();
    })
  );
};

const update = function () {
  btnDelete();
};

btnAdd.addEventListener('click', function () {
  if (!nameInput.value || !surname.value || !number.value)
    alert('Fill all the fields');
  else {
    let fullName = nameInput.value + ' ' + surname.value;

    contacts.insertAdjacentHTML(
      'afterbegin',
      `
  <div class="contact">
    <span class="delete">x</span>
    <p>${fullName}</p>
    <p>${number.value}</p>
  </div>
    `
    );
    nameInput.value = '';
    surname.value = '';
    number.value = '';

    update();
  }
});

btnDeleteAll.addEventListener('click', function () {
  contacts.innerHTML = '';
});
