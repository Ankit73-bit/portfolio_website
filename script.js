"use strict";

const menu = document.querySelector(".menubar");
const btnMenu = document.querySelector(".btn-menu");
const btnMenu1 = document.querySelector(".side-nav__link");
const menuicon2 = document.querySelector(".side-nav__icon");

const lightTheme = document.getElementById("light");
const darkTheme = document.getElementById("dark");
const body = document.body;

function toggleMenuVisibility(e) {
  e.preventDefault();
  menu.classList.toggle("menu-visible");
}

btnMenu.addEventListener("click", toggleMenuVisibility);
btnMenu1.addEventListener("click", toggleMenuVisibility);
menuicon2.addEventListener("click", toggleMenuVisibility);

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

darkTheme.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};

lightTheme.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};
