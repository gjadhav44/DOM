import "./styles.css";
var header_title = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(header_title);
header_title.textContent = "Helow";
header.style.borderBottom = "solid 3px #000";
var nodes = document.getElementsByClassName("title");
for (let i = 0; i < nodes.length; i++) {
  nodes[i].style.color = "green";
}
