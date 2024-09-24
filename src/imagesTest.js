import odinImage from "./test.jpg";

const image = document.createElement("img");
image.src = odinImage;
const p= document.createElement("p");
p.textContent = 'Test image Loaded Successfully';

document.body.appendChild(p);
document.body.appendChild(image);