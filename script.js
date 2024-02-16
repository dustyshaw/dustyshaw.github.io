let changeThemeBtn = document.getElementById("changeThemeBtn");
let darkTheme = false;

const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';

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

// Function that fades in sections when they are in view of user
const observer = new intersectionCallback((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-show');
        }
    });
  });
  
const hiddenele = document.querySelectorAll(".fade-hidden");
hiddenele.forEach((ele) => observer.observe(ele));


function obfuscateEmail(email) {
    var obfuscatedEmail = "";
    for (var i = 0; i < email.length; i++) {
        obfuscatedEmail += "&#" + email.charCodeAt(i) + ";";
    }
    return obfuscatedEmail;
}

var email = "shustydaw@gmail.com";
var obfuscatedEmail = obfuscateEmail(email);
document.getElementById("obfuscated-email").innerHTML = obfuscatedEmail;
 