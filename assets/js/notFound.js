const stayButton = document.querySelector("#happy");

stayButton.addEventListener("click", (event) => {
   const face = document.querySelector("#container header");
   face.innerHTML = ":)";

   const text = document.querySelector("#container text");
   text.innerHTML = "Page found";

   stayButton.parentNode.removeChild(stayButton);
});

let face = 0;

setInterval(function(){
   const faces = [":O", ": |"];

   if (face === faces.length - 1) face = 0;
   else face++;

   document.title = faces[face];

}, 500);