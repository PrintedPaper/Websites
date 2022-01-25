const div = document.querySelector("#myDiv");
const btn = document.querySelector("button")

div.addEventListener("click", e => {
    div.style.backgroundColor = "white";
    div.style.backgroundColor = "blue";
}) 
btn.addEventListener("click", e => {
    btn.style.backgroundColor = "blue";
})
btn.addEventListener("dblclick", e => {
    btn.style.backgroundColor = "red";
})