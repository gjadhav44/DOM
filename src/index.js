import "./styles.css";
var header_title = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(header_title);
header_title.textContent = "Helow";
header.style.borderBottom = "solid 3px #000";
var nodes = document.getElementsByClassName("title");
nodes[0].style.color = "green";
nodes[0].style.fontWeight = "bold";
var list = document.getElementsByClassName("list-group-item");
list[2].style.backgroundColor = "Yellow";
for (var i = 0; i < 4; i++) {
  list[i].style.color = "blue";
  list[i].style.fontWeight = "bold";
}
