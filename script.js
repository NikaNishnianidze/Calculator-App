const display = document.getElementById("display-text");
const slider = document.getElementById("slider-value");
const body = document.querySelector("body");

slider.addEventListener("change", () => {
  let value = slider.value;
  const elementsToModify = [
    { selector: "h1", className: "h1-2" },
    { selector: "h2", className: "h2-2" },
    { selector: ".slider", className: "slider-2" },
    { selector: ".p-section", className: "p-section2" },
    { selector: ".display", className: "display2" },
    { selector: ".keys-container", className: "keys-container2" },
    { selector: ".delete", className: "delete2" },
    { selector: ".reset", className: "reset2" },
    { selector: ".calculate", className: "calculate2" },
  ];

  const elementsToModify2 = [
    { selector: ".display", className: "display3" },
    { selector: "h1", className: "h1-3" },
    { selector: "h2", className: "h2-3" },
    { selector: ".slider", className: "slider-3" },
    { selector: ".p-section", className: "p-section3" },
    { selector: ".keys-container", className: "keys-container3" },
    { selector: ".delete", className: "delete3" },
    { selector: ".reset", className: "reset3" },
    { selector: ".calculate", className: "calculate3" },
  ];

  if (value === "2") {
    body.classList.add("background-2");
    elementsToModify.forEach((element) => {
      body.querySelector(element.selector).classList.add(element.className);
    });
  } else {
    body.classList.remove("background-2");
    elementsToModify.forEach((element) => {
      body.querySelector(element.selector).classList.remove(element.className);
    });
  }

  if (value === "3") {
    body.classList.add("background-3");
    elementsToModify2.forEach((element) => {
      body.querySelector(element.selector).classList.add(element.className);
    });
  } else {
    body.classList.remove("background-3");
    elementsToModify2.forEach((element) => {
      body.querySelector(element.selector).classList.remove(element.className);
    });
  }
});

function appendToDisplay(input) {
  display.value += input;
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
