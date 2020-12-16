import printMe from "./print";
import _ from 'lodash';

const box = document.getElementById("box");
const btn = document.createElement("button");

box.innerHTML = _.join(["Hello", "World", " "]);
btn.innerHTML = "Click me and check the console!";
btn.onclick = printMe;
box.appendChild(btn);
