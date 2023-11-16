let img = document.getElementById("img");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let imgdiv = document.getElementById("imgdiv");
let maindiv = document.getElementById("maindiv");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (text.value == "") {
        alert("Please paste a link or text to create QR code");
    } else {
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
        imgdiv.style.display = "flex";
        maindiv.style.height = "550px";
        text.style.opacity = "0.25";
    }
});

btn1.addEventListener("click", () => {
    if (text.value !== "") {
        if (confirm("Do yo really want to reset?")) {
            imgdiv.style.display = "none";
            maindiv.style.height = "350px";
            text.value = "";
            text.style.opacity = 1;
        }
    } else {
        alert("Please paste a link or text to create QR code");
    }
});