let formName = document.querySelector('.reserve-input-name');
let formMail = document.querySelector('.reserve-input-mail');
let formNumber = document.querySelector('.reserve-input-number');
let formDate = document.querySelector('.reserve-input-date');
let formAdults = document.querySelector('.reserve-input-adults');
let formTeen = document.querySelector('.reserve-input-teen');
let formKids = document.querySelector('.reserve-input-kids');
let formTextArea = document.querySelector('.reserve-input-textarea');
let formTimeSelect = document.querySelectorAll('.tour-time');
let formTime;
let data;
const formBtn = document.querySelector('.reserve-form-btn');

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Reserve form

formTimeSelect.forEach(e =>
  e.addEventListener('click', function () {
    formTime = e.value;
  })
);

formBtn.addEventListener('click', function () {
  if (
    !formName.value ||
    !formMail.value ||
    !formNumber.value ||
    !formTime ||
    !formDate.value ||
    !formAdults.value ||
    !formTeen.value ||
    !formKids.value
  )
    alert('Fill the form');
  else {
    data = `First Name: ${formName.value} \n
            Email: ${formMail.value} \n
            Phone Number: ${formNumber.value} \n
            Time of ATV Tour: ${formTime} \n
            Date: ${formDate.value} \n
            Adults: ${formAdults.value} \n
            Teens: ${formTeen.value} \n
            Childrens: ${formKids.value} \n
            Message: ${formTextArea.value}
    `;
  }
});
