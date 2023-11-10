const inputsColor = [...document.querySelectorAll("input[type=color]")];

const colors = [
  "#5f3dc4",
  "#7048e8",
  "#7950f2",
  "#845ef7",
  "#212529",
  "#495057",
  "#ced4da",
  "#f1f3f5",
  "#c92a2a",
  "#087f5b",
  "#f08c00",
  "#c6c7cd",
];

colors.forEach((style, index) => {
  inputsColor[index].value = style;
});

const changeColor = () => {
  colors.forEach((styles, index) => {
    inputsColor[index].addEventListener("input", (e) => {
      colors[index] = e.target.value
    })
  });
  return colors;
}

const createColorVariable = (info) => {
  const variables = [
    `--color-brand-100: ${info[0]};`,
    `--color-brand-200: ${info[1]};`,
    `--color-brand-300: ${info[2]};`,
    `--color-brand-400: ${info[3]};`,
    `--color-grey-100: ${info[4]};`,
    `--color-grey-200: ${info[5]};`,
    `--color-grey-300: ${info[6]};`,
    `--color-grey-400: ${info[7]};`,
    `--color-feedback-alert: ${info[8]};`,
    `--color-feedback-success: ${info[9]};`,
    `--color-feedback-warning: ${info[10]};`,
    `--color-feedback-disable: ${info[11]};`,
  ]
  return variables;
}

const createFontVariable = () => {
  const inputFont = document.querySelector("#font-scale")
  const arrFont = inputFont.value.split(/\s*,\s*/);
  const fontFormated = [];
  arrFont.forEach((value, index) => {
    fontFormated.push(
      `--font-size-${index + 1}: ${value}rem;`
    )
  })
  return fontFormated;
}

const allVariables = (color, font) => {
  const varInfo = color.concat(font);
  const formatedVar =  varInfo.join("\n");
  return formatedVar;
}

const copyStyles = () =>{
  const btnCopy = document.querySelector(".form__buttons--copy");
  btnCopy.addEventListener("click", (e) =>{
    event.preventDefault();
    console.log(allVariables(createColorVariable(changeColor()), createFontVariable()))
    navigator.clipboard.writeText(allVariables(createColorVariable(changeColor()), createFontVariable()))
  })
}

changeColor()
copyStyles();

