const navItemContainer = document.querySelectorAll(".nav-item-container");

const header = document.querySelector("header");
const hambugerMenu = document.querySelector(".menu-container");
const menuIcon = document.querySelector(".menu-container i");
const sidebar = document.querySelector("aside");

const sidebarNavContainer = document.querySelectorAll(".sidebar-nav-container");

//* show drop down once nav item is hovered
navItemContainer.forEach((navItem) => {
  navItem.addEventListener("mouseenter", () => {
    const dropDown = navItem.querySelector(".drop-down");

    dropDown.classList.add("visible");

    header.style.background =
      "linear-gradient(to right, #066399, #2f8fdf, #066399)";
  });

  //* hide drop down once nav item is not hovered
  navItem.addEventListener("mouseleave", () => {
    const dropDown = navItem.querySelector(".drop-down");
    dropDown.classList.remove("visible");
    header.style.background = "transparent";
  });
});

// ------------------------------------------------//

//* Hambuger/sidebar section

hambugerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    hambugerMenu.classList.add("active");
    menuIcon.classList.replace("fa-bars", "fa-x");
  } else {
    hambugerMenu.classList.remove("active");
    menuIcon.classList.replace("fa-x", "fa-bars");
  }
});

window.addEventListener("resize", () => {
  if (sidebar.classList.contains("active")) {
    hambugerMenu.classList.add("active");
    menuIcon.classList.replace("fa-bars", "fa-x");
  } else {
    hambugerMenu.classList.remove("active");
    menuIcon.classList.replace("fa-x", "fa-bars");
  }
});

//* removes active classes once page is reloaded

window.addEventListener("load", () => {
  const navType = performance.getEntriesByType("navigation")[0].type;

  if (navType === "reload") {
    hambugerMenu.classList.remove("active");
    menuIcon.classList.replace("fa-x", "fa-bars");
    hambugerMenu.classList.remove("active");
  }
});

// ------------------sidebar content section------------//

sidebarNavContainer.forEach((sidebarNav) => {
  sidebarNav.addEventListener("click", () => {
    const dropdown = sidebar.querySelector(".sidebar-dropdown");
    //? Make inner sidebar show
    dropdown.classList.add("active");
  });
});

const dropdowns = document.querySelectorAll(".sidebar-dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.remove("active");
  });
});
