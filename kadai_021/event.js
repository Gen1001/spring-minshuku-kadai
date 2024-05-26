const changeText = document.getElementById("btn");
const btnText = document.getElementById("text");
changeText.addEventListener("click", () => {
    setTimeout(() => {
        btnText.textContent = "ボタンをクリックしました";
    }, 2000);
})