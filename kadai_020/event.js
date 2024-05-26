const changeText = document.getElementById("btn");
const buttonText = document.getElementById("text");
changeText.addEventListener("click", () => {
    buttonText.textContent = "ボタンをクリックしました";
})