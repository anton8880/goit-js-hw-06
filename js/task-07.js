const textElement = document.getElementById("text");

const inputElement = document.getElementById("font-size-control");

inputElement.addEventListener("input", (e) => {
  const size = inputElement.value;

  textElement.style.fontSize = size + "px";
});