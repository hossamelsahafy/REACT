const nestedList = document.getElementById("nestedList");
const margin = document.getElementById("Margin");
const menuIcon = document.getElementById("MenuIcon");
const overlay = document.getElementById("Overlay");
const mainList = document.getElementById("MainList");
const exitIcon = document.getElementById("ExitIcon");

margin.addEventListener("click", (event) => {
    event.stopPropagation();
    // Check if the screen is small (based on your media query)
    if (window.innerWidth <= 769) {
        nestedList.style.display = (nestedList.style.display === "block") ? "none" : "block"; // Use 'block' for small screens
    } else {
        nestedList.style.display = (nestedList.style.display === "inline-block") ? "none" : "inline-block"; // Use 'inline-block' for large screens
    }
});

menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    mainList.classList.toggle('active');
    overlay.classList.toggle('active');
    exitIcon.style.display = mainList.classList.contains('active') ? "block" : "none"; // Show/hide ExitIcon
});

document.addEventListener("click", () => {
    nestedList.style.display = "none";
});

exitIcon.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
    mainList.classList.remove('active');
    overlay.classList.remove('active');
    exitIcon.style.display = "none";

    const mainListItems = document.querySelectorAll('nav ul li');
    mainListItems.forEach(item => {
        item.classList.remove('active');
    });
    nestedList.style.display = "none";
}
