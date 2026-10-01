const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Mark the document as JavaScript-enhanced so CSS can safely apply the collapsible menu behavior.
document.documentElement.classList.add("js");

// Reveal the menu button because JavaScript is available to control the narrow navigation.
button.hidden = false;

// Keep aria-expanded and the navigation's visible state synchronized in one named function.
function setMenuState(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    list.dataset.open = String(isOpen);
}

// Initialize the enhanced narrow navigation in the closed state.
setMenuState(false);

// Use the native button click event to toggle between the open and closed states.
button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

// Close an open menu with Escape and return keyboard focus to the menu button.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setMenuState(false);
        button.focus();
    }
});