const navItemContainer = document.querySelectorAll(".nav-item-container");

const header = document.querySelector("header");

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
