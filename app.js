import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

let index = 0;
let pages = [];

const title = document.querySelector("h1");
const btnContainer = document.querySelector(".btn-container");

async function showFollowers() {
  const followers = await fetchFollowers();
  title.innerText = "Pagination";
  pages = paginate(followers);
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
}

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("page-btn")) {
    index = Number(e.target.dataset.index);
    displayFollowers(pages[index]);
    displayButtons(btnContainer, pages, index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
});

window.addEventListener("load", showFollowers);
