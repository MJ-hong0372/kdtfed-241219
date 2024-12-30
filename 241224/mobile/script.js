const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;

for (let i = 0; i < slideCount; i++) {
  const clonSlide = slide[i].cloneNode(true);
  clonSlide.classList.add("clone");
  slides.append(clonSlide);
}

for (let i = slideCount - 1; i >= 0; i--) {
  const clonSlide = slide[i].cloneNode(true);
  clonSlide.classList.add("clone");
  slides.prepend(clonSlide);
}
