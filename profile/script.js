let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "light-mode.css") {
    theme.href = "dark-mode.css";
  } else {
    theme.href = "light-mode.css";
  }
};

// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find("burger-menu_button");
//   let aside = menu.find("burger-menu_aside");

//   button.on("click", (e) => {
//     e.preventDefault();
//     toggleMenu();
//   });

//   aside.on("click", () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleClass("burger-menu_active");
//     if (menu.hasClass("burger-menu_active")) {
//       $("body").css("overflow ", "hidden");
//     } else {
//       $("body").css("overflow", "visible");
//     }
//   }
// }
