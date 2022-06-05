let count = 0;

const value = document.querySelector(".value");
console.log(value);
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        const buttonClass = e.currentTarget.classList;
        if (buttonClass.contains("increase-10")) {
            count += 10;
        } else if (buttonClass.contains("increase")) {
            count++;
        } else if (buttonClass.contains("decrease")) {
            count--;
        } else if (buttonClass.contains("decrease-10")) {
            count -= 10;
        } else {
            count = 0
        }
        value.textContent = count;

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }

    });
});