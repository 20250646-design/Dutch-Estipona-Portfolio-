let mode = "dark";

function toggleMode() {
    const page = document.getElementById("page");
    const button = document.getElementById("modeButton");

    if (mode == "dark") {
        page.style.backgroundColor = "#e9edf2";
        page.style.color = "#1b2430";
        button.innerHTML = "Dark Mode";
        mode = "light";
    } else {
        page.style.backgroundColor = "#12161c";
        page.style.color = "#e6ebf0";
        button.innerHTML = "Light Mode";
        mode = "dark";
    }
}
function sayHello() {
    window.alert("Hello! Thank you for visiting my portfolio. Please see my contact details at the bottom of the page.");
}
function showMotto() {
    const text = "As long as I keep moving, my story is far from over. - Dutch Estipona";
    document.getElementById("motto").innerHTML = text;
}

