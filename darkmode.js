function switchtheme() {
    var x = document.getElementById("button");
    if (x.innerHTML === "Hide") {
        x.innerHTML = "See";
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        x.innerHTML = "Hide";
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
window.onload = function() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    var x = document.getElementById("button");
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            x.innerHTML = "See";
        } else {
            x.innerHTML = "Hide";
        }
    }
}