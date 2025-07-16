let footer = document.getElementsByTagName("footer");

let p = document.createElement("p");
p.textContent = "Te quiero mucho ";

let span = document.createElement("span");
span.textContent = "Luna ♥";

p.appendChild(span);

let button = document.createElement("button");

//button.click(window.location.href='../cd1.html');

button.addEventListener("click", ()=>{window.location.href='../cd1.html'});
button.textContent = "Volver a la Lista";

footer[0].appendChild(p);
footer[0].appendChild(button);