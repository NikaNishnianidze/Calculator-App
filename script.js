const display = document.getElementById("display-text");
const slider = document.getElementById("slider-value");
const body = document.querySelector("body");

slider.addEventListener("change", () => {
  let value = slider.value;

  if (value === "2") {
    body.classList.add("theme-1");
  } else {
    body.classList.remove("theme-1");
  }

  if (value === "3") {
    body.classList.add("background-3");
    body.classList.add("theme-2");
  } else {
    body.classList.remove("theme-2");
    body.classList.remove("background-3");
  }
});

function appendToDisplay(input) {
  let ch = display.value;
  if (
    ch.length > 0 &&
    isOperator(ch.charAt(ch.length - 1)) &&
    isOperator(input)
  ) {
    return;
  }

  display.value += input;
}

function isOperator(character) {
  return (
    character === "*" ||
    character === "/" ||
    character === "-" ||
    character === "+" ||
    character === "."
  );
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
