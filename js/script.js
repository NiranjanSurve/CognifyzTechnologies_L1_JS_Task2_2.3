const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const clickSound = document.getElementById("clickSound");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();

        const value = button.textContent;

        if (value === "C") {
            expression = "";
            result.value = "";
        } 
        else if (value === "⌫") {
            expression = expression.slice(0, -1);
            result.value = expression;
        } 
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                result.value = expression;
            } catch {
                result.value = "Error";
                expression = "";
            }
        } 
        else {
            expression += value;
            result.value = expression;
        }
    });
});
