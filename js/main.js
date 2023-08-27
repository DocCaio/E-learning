const changeThemeBtn = document.querySelector("#change-theme");
const changeLogo = document.querySelector("#light-mode-btn");

// Togle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

//Light or dark mode 

function loadTheme() {
    const darkMode = localStorage.getItem("dark");

if(darkMode) {
    toggleDarkMode();
}

}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
    toggleDarkMode();

    // Save or remove dark mode
    localStorage.removeItem("dark");


    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark , 1");
    }
});






