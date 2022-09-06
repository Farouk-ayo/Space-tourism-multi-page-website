const navButton = document.querySelectorAll(`.toggle--items__each`);
const ahref = document.querySelectorAll(".ahref");

const local = window.location.href;
const str = local.split("/");
const knowStr = str[str.length - 1] + "#";

navButton.forEach((btn) => {
  btn.addEventListener("mouseover", function () {
    btn.classList.add("hover--nav");
  });
  btn.addEventListener("mouseout", function () {
    btn.classList.remove("hover--nav");
  });
});

ahref.forEach((ref) => {
  const refs = ref.href;
  const arrRefs = refs.split("/");
  const eachRefs = arrRefs[arrRefs.length - 1];
  // console.log(knowStr);
  // console.log(eachRefs);
  if (knowStr !== eachRefs) {
    return;
  } else {
    ref.parentElement.classList.remove("hover--nav");
    ref.parentElement.classList.add("active--nav");
  }
});

const dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
  dot.addEventListener("mouseover", function () {
    dot.classList.add("hovering");
  });
  dot.addEventListener("mouseout", function () {
    dot.classList.remove("hovering");
  });
  const dots = dot.href;
  const arrDots = dots.split("/");
  const eachDots = arrDots[arrDots.length - 1];
  if (knowStr !== eachDots) {
    return;
  } else {
    dot.classList.add("active");
  }
});

const circle = document.querySelectorAll(".circle");
circle.forEach((circle) => {
  circle.addEventListener("mouseover", function () {
    circle.classList.add("hovering--bg");
  });
  circle.addEventListener("mouseout", function () {
    circle.classList.remove("hovering--bg");
  });
  const circles = circle.href;
  const arrCircles = circles.split("/");
  const eachCircles = arrCircles[arrCircles.length - 1];
  if (knowStr !== eachCircles) {
    return;
  } else {
    circle.classList.add("active--bg");
  }
});
