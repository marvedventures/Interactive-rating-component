// ---------------------- ELEMENTS ---------------------
const ratingContainer = document.querySelector('.rating');
const thanksContainer = document.querySelector('.thank-you');
const btn = document.querySelector('.btn');
const circle = document.querySelectorAll('.circle');
const rate = document.querySelector('.rate');

// ------------------- EVENT LISTENERS ------------------
btn.addEventListener('click', () => {
  ratingContainer.classList.add('hidden');
  thanksContainer.classList.remove('hidden');
  thanksContainer.classList.add('active');
});

circle.forEach(btn =>
  btn.addEventListener('click', () => {
    // rate set to the clicked score
    rate.innerHTML = btn.innerHTML;
    console.log(rate.innerHTML);
  })
);
