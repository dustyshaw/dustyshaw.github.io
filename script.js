let changeThemeBtn = document.getElementById("changeThemeBtn");
let darkTheme = false;

changeThemeBtn.addEventListener("click", function () {
    if (darkTheme == false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "#4AF626";
        darkTheme = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkTheme = false;
    }
});