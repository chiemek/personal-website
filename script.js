"use strict";

const currentTime = document.querySelector("#time");
const currentDate = document.getElementById("date");
const tog = document.querySelector(".open");
const sideBar = document.querySelector(".sideBar");
const darkBtn = document.querySelector(".button");
const darkMode = document.querySelector("body");

// days of the week array
const DOW = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednestday",
  "Thursday",
  "Friday",
  "saturady",
];

const today = new Date();

// day and time array
currentTime.textContent = new Date().toLocaleTimeString();
currentDate.textContent = DOW[today.getDay()];

const toggleSideBar = () => {
  sideBar.classList.toggle("hidden");
};

// sideBar click event
tog.addEventListener("click", toggleSideBar);

// dark mode click event
const handleDarkMode = () => {
  darkMode.classList.toggle("darkMode");
};
darkBtn.addEventListener("click", handleDarkMode);
