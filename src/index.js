import printMe from "./print";

const box = document.getElementById("box");
const btn = document.createElement("button");

box.innerHTML = "Hello World";
btn.innerHTML = "Click me and check the console!";
btn.onclick = printMe;
box.appendChild(btn);
