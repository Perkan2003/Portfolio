const textBox = document.querySelector('.list-text');
const addBtn = document.querySelector('.list-btn');
const checkBtn = function () {
  document.querySelectorAll('.list-item').forEach(el =>
    el.addEventListener('click', function () {
      el.classList.toggle('done');
    })
  );
};

const closeBtn = function () {
  document.querySelectorAll('.close').forEach(el =>
    el.addEventListener('click', function () {
      el.parentElement.remove();
    })
  );
};

const list = document.querySelector('ul');

const update = function () {
  checkBtn();
  closeBtn();
};

addBtn.addEventListener('click', function () {
  if (!textBox.value) return;
  else
    list.insertAdjacentHTML(
      'beforeend',
      `<li class="list-item">${textBox.value} <span class="close">x</span></li>`
    );

  update();
});

update();
