"use strict";
const modal = document.querySelector(".modal");
const overplay = document.querySelector(".overlay");
const btnsopen = document.querySelectorAll(".show-modal");
const btnsclose = document.querySelector(".close-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overplay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overplay.classList.add("hidden");
};

for (let i = 0; i < btnsopen.length; i++)
  btnsopen[i].addEventListener("click", openModal);

btnsclose.addEventListener("click", closeModal);
overplay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
