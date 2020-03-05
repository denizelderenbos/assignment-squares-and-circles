const array_x = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
const array_y = [100, 200, 300, 400, 500, 600];

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const viewbox = document.createAttribute("viewbox");
const width = document.createAttribute("width");
const height = document.createAttribute("height");
const x = document.createAttribute("x");
const y = document.createAttribute("y");
const style = document.createAttribute("style");
viewbox.value = "0 0 700 700";
width.value = "600";
height.value = "700";
style.value = "background: white;";
svg.setAttributeNode(viewbox);
svg.setAttributeNode(width);
svg.setAttributeNode(height);
svg.setAttributeNode(style);

let count = 0;
let increment = 255 / (array_x.length * array_y.length);
for (j = 0; j < array_y.length; j++) {
  for (i = 0; i < array_x.length; i++) {
    if (i == 0) {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      const width = document.createAttribute("width");
      const height = document.createAttribute("height");
      const x = document.createAttribute("x");
      const y = document.createAttribute("y");
      const fill = document.createAttribute("fill");
      const stroke = document.createAttribute("stroke");
      width.value = 20;
      height.value = 20;
      x.value = (array_x[i] - 10);
      y.value = (array_y[j] - 10);
      fill.value = `rgb(${255 - (increment * count)},0,0)`;
      stroke.value = 'black';

      rect.setAttributeNode(width);
      rect.setAttributeNode(height);
      rect.setAttributeNode(x);
      rect.setAttributeNode(y);
      rect.setAttributeNode(fill);
      rect.setAttributeNode(stroke);

      svg.appendChild(rect);
    } else {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      const cx = document.createAttribute("cx");
      const cy = document.createAttribute("cy");
      const r = document.createAttribute("r");
      const fill = document.createAttribute("fill");
      const stroke = document.createAttribute("stroke");


      r.value = 10;
      cx.value = array_x[i];
      cy.value = array_y[j];
      fill.value = `rgb(${255 - (increment * count)},0,0)`;
      stroke.value = 'black';

      circle.setAttributeNode(cx);
      circle.setAttributeNode(cy);
      circle.setAttributeNode(r);
      circle.setAttributeNode(fill);
      circle.setAttributeNode(stroke);

      svg.appendChild(circle);
    }

    count++;
  }
}

document.body.appendChild(svg);