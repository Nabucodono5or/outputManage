// import _ from 'lodash';

// const box = document.getElementById("box");
// const btn = document.createElement("button");

// box.innerHTML = _.join(["Hello", "World", " "]);
// btn.innerHTML = "Click me and check the console!";
// btn.onclick = printMe;
// box.appendChild(btn);

import Print from './print';

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");

  element.innerHTML = _.join(["Hello", "World"], " ");
  element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
