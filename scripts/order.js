let preview = document.getElementById("preview");
let desiredText = document.getElementById("desiredText");
desiredText.addEventListener("keyup", previewText);
function previewText() {
    preview.innerHTML = desiredText.value;
}