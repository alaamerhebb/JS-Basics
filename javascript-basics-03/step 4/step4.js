var x = document.querySelector("#password"),
    y = document.querySelector("#confirmation"),
    z = document.querySelector("button");

z.onclick = function() {
    if (x.value != y.value) {
        x.style.border = "1px solid red";
        y.style.border = "1px solid red";
    }
}; 