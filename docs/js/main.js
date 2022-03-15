const ratingContainer = document.querySelector(".rating");
let currentValue = 0;
const limit = 10;

const html = Array.from(Array(limit)).map((_, i) => {
  return `<div class="item item-${i}" data-pos=${i}></div>`;
});

ratingContainer.innerHTML = html.join("");

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const post = item.getAttribute("data-pos");

    if (currentValue === parseInt(post) + 1) {
      return;
    }

    document.querySelectorAll(".item").forEach((it) => {
      if (it.classList.contains("item-full")) {
        it.classList.remove("item-full");
      }
    });
    for (let i = 0; i <= post; i++) {
      const square = document.querySelector(`.item-${i}`);
      if (!square.classList.contains("item-full")) {
        square.classList.add("item-full");
      }
    }
    currentValue = parseInt(post) + 1;
  });
  item.addEventListener("click", (e) => {
    const post = item.getAttribute("data-pos");
    currentValue = parseInt(post) + 1;
    console.log(currentValue);
  });
});
