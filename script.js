const container = document.querySelector("div");
const btn = document.querySelector("button");

for (let x=0; x<256; x++){
    let pix = document.createElement("div")
    pix.setAttribute("id", "pix"+x);
    pix.setAttribute("class", "pix");
    container.appendChild(pix);
    // console.log(x);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let pixels = document.querySelectorAll(".pix");

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.style.background = getRandomColor();
        console.log(pixel.style.opacity);
        if (pixel.style.opacity==="") {
            pixel.style.opacity=0.1;
        }        
        else if (pixel.style.opacity>0&&pixel.style.opacity<=1){
            pixel.style.opacity=parseFloat(pixel.style.opacity)+0.1;
        }
               
    });
});

btn.addEventListener("click", () => {
    let selectSize = parseInt(prompt("Introduce the number of squares per side:"));
    
    if (selectSize>0&&selectSize<=100) {
        container.textContent = '';
        
        for (let y=0; y<(selectSize*selectSize); y++){
            let pix = document.createElement("div")
            pix.setAttribute("id", "pix"+y);
            pix.setAttribute("class", "pix");
            pix.style.width = 640/selectSize+"px";
            pix.style.height = 640/selectSize+"px";
            container.appendChild(pix);
            pixels = document.querySelectorAll(".pix");

            pixels.forEach((pixels) => {
                pixels.addEventListener("mouseover", () => {
                    pixels.style.background = getRandomColor();
                });
            });
        }
        
    }
    else {
        alert ("Not a valid grid size. A minimum size of 4 and a maximum size of 100, only even numbers allowed.");
    }
});


