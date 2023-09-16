const checkboxMenu = $("#check");
const headerTop = $(".header-top");
const headerMenuContainer = $(".header__menu-container");
const body = $("body");

checkboxMenu.on("change", function (e) {
  headerTop.slideToggle(300);
  body.toggleClass("overflow-hidden");
  $(document).width() > 640
    ? headerMenuContainer.toggleClass(["p-4", "sm:top-[60px]", "top-[124px]"])
    : headerMenuContainer.toggleClass(["p-4", "top-[124px]"]);
});