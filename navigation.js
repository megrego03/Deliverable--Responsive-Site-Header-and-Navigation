const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

document.documentElement.classList.add("js");
button.hidden = false;
function setMenuState(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    list.dataset.open = String(isOpen);
}
setMenuState(false);

button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setMenuState(false);
        button.focus();
    }
});