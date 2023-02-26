'use strict';

const input = document.querySelector('.message-box');
const submitBtn = document.querySelector('.submit-btn');
const noteList = document.querySelector('.note-list');
const emptyNote = document.querySelector('.empty-note');
const btnClose = document.querySelector('.btn-close');

submitBtn.addEventListener('click', function () {
  if (!input.value) return;
  else {
    const date = new Date();
    const day = date.getDate();
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = `${date.getFullYear()}`.padStart(2, 0);
    const now = `${day}.${month}.${year}`;
    emptyNote.remove();
    noteList.insertAdjacentHTML(
      'beforeend',
      `<div class="note-style">
      <p>${now}<p>
      <p>${input.value}</p>
    </div>`
    );
  }
});
