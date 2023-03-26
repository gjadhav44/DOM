import "./styles.css";

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
  list[i].style.backgroundColor = "#ccc";
}
var li2 = document.querySelector(".list-group-item:nth-child(2)");
li2.style.backgroundColor = "yellow";
var li3 = document.querySelector(".list-group-item:nth-child(3)");
li3.style.display = "none";
var parentC = document.querySelector("#header-title");
parentC.parentElement.textContent = "HEllo";
var parentb = document.querySelector(".items");
parentb.childElement.textContent = "HEllo";
