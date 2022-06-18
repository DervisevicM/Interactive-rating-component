const submit_btn = document.querySelector(".submit-btn");
const card_content_1 = document.querySelector(".card-content-1");
const card_content_2 = document.querySelector(".card-content-2");
const ratingBtns = document.querySelectorAll(".rating-btn");
const score = document.querySelector('.score');
let star_score = 3;
console.log("ratingBtns");

submit_btn.addEventListener('click', onSubmit);
ratingBtns.forEach(btn => {
  btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit() {
  //console.log("submit click");
  card_content_1.classList.add('hide');
  score.textContent = star_score;
  card_content_2.classList.remove('hide');
}

function handleRatingBtnClick(event) {
  ratingBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  if (event.target.classList.contains('rating-btn')) {
    event.target.classList.add('active');
  } else {
    event.target.parentElement.classList.add('active');
  }
  //  stars score
  star_score = event.target.textContent;
  console.log(star_score);
}

