var canvas = document.getElementById("main-canvas");
var context = canvas.getContext("2d");

window.onload = function () {
    var imageObj = new Image(canvas.width, canvas.height);
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
    };
    imageObj.src = "./assets/image/pic.jpg";
};
function addCaptionTop() {
    var input = document.getElementById("header-text");
    var input_text = input.value;
    if (input_text != "") {
        var item = document.getElementById("caption-top");
        item.innerHTML = input_text;
    }
}
function addCaptionBottom() {
    var input = document.getElementById("footer-text");
    var input_text = input.value;
    if (input_text != "") {
        var item = document.getElementById("caption-bottom");
        item.innerHTML = input_text;
    }
}

function textOnPicture() {
    context.font = "bold 30px sans-serif";
    context.fillStyle = "white";
    // context.textAlign="center";
    // context.textBaseline="middle";
    var input = document.getElementById("pic-text");
    var input_text = input.value;
    context.fillText(input_text, canvas.width / 5, canvas.height / 2);
}
function download() {
    var img = canvas.toDataURL();
    var link = document.createElement("a");
    link.href = img;
    link.download = "image.png";
    link.click();
}

document.querySelector('.download').addEventListener('click', download);

