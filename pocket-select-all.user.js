// ==UserScript==
// @name     Pocket Select All
// @version  1
// @grant    none
// @match    https://app.getpocket.com/*
// ==/UserScript==

// click every check box
function selectAll() {
    [...document.querySelectorAll(".css-janlmo")].forEach(item => item.click());
}

// create a button
let button = document.createElement("button");
button.innerText = "Select All";
// always visible top right
button.style.zIndex = 6;
button.style.position = "absolute";
button.style.right = 0;
button.style.top = 0;
// transparent
button.style.opacity = .5;
button.addEventListener("click", selectAll);

document.body.appendChild(button);
