let x = document.querySelector("img");
x.addEventListener("mouseover",  function() {
    x.src="images/image1_2.jpg";
}) 
x.addEventListener("mouseout", function(){
    x.src="images/image1.jpg";
});