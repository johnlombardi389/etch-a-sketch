# Pixel Sketch App

![Screenshot](/images/pixelGridImg.png)

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Tools](#tools)
  - [What I learned](#what-i-learned)
  - [Example Code](#example-code)
- [Author](#author)

## Overview

Pixel Sketch is a web-based application inspired by the classic etch-a-sketch toy. The app allows users to create drawings on a digital canvas by manipulating pixels, similar to the way one would use a physical etch-a-sketch. The app is built using a combination of technologies, including vanilla JavaScript, CSS, and HTML. The project was managed and version controlled using Git, and the design of the app was created using Figma.

The main feature of Pixel Sketch is its customizable canvas, which allows users to adjust the size of the canvas and the color of the pixels. Additionally, the app includes a toggle function that allows users to turn on and off a grid overlay on the canvas, giving them more precise control over their drawings. The app is designed with a simple and intuitive user interface, making it easy for anyone to start creating their own digital etch-a-sketches.

![Screenshot](/images/pixelNoGridImg.png)

### Links

- Live Site URL: [Pixel Sketch App](https://johnlombardi389.github.io/pixel-sketch/)

---

## My process

### Tools

- JavaScript
- CSS
- HTML
- Git
- Figma

### What I learned

- Better understanding of manipulating elements in the DOM with JavaScript
- Adding and removing classes, as well as changing style properties of individual elements through JavaScript
- Click and mousedown event listeners
- Arrow functions

### Example Code

The logic behind drawing on the canvas when you click and/or drag your mouse:

```javascript
let mouseDown = 0;
document.body.onmousedown = () => (mouseDown = 1);
document.body.onmouseup = () => (mouseDown = 0);

container_div.addEventListener("mouseover", function (e) {
  if (mouseDown === 1) {
    if (e.target.matches(".defaultGridBlock")) {
      e.target.style.backgroundColor = currentColor;
    }
  }
});

container_div.addEventListener("click", function (e) {
  if (e.target.matches(".defaultGridBlock")) {
    e.target.style.backgroundColor = currentColor;
  }
});
```

---

## Author

John Lombardi

- [Portfolio](https://johnlombardi389.github.io/portfolio/)
- [LinkedIn](https://www.linkedin.com/in/johnlombardi389/)
- [GitHub](https://github.com/johnlombardi389)
