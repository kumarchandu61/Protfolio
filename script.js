const hamburger = document.querySelector(".hamburger-menu");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animationbar1");
  bar2.classList.toggle("animationbar2");
  bar3.classList.toggle("animationbar3");
  menu.classList.toggle("openMobileNav");
});

// accessbile tabs
const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content .content-box");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[index].classList.add("active");
  });
});