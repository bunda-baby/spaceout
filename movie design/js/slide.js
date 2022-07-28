
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 280);
    clickCounter++;
    if (itemNumber - ( 5 + clickCounter) + (5 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 290
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 280));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const shadow = document.querySelectorAll(
  ".cont,.movie-list-title,.navbar,.sidebar,.side-icon,.toggle,.up-cont"
);

ball.addEventListener("click", () => {
    shadow.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});






























