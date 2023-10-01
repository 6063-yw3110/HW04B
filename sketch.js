function setup() {

  createCanvas(windowWidth, windowHeight); 
  background(230, 238, 176); 

}

function draw() {
  noStroke(); 
}

function mouseClicked() {

  let r = random(200, 255); 
  let g = random(180, 220); 
  let b = random(100, 150); 

  fill(r, g, b);

  let rectWidth = random(20, 200); 
  let rectHeight = random(20, 200); 

  rect(mouseX, mouseY, rectWidth, rectHeight);


  let lineThickness = random(1, 3); 
  
  stroke(255); 
  strokeWeight(lineThickness);
  line(random(width), 0, random(width), height);
  
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('canvas', 'jpg');
  } else if (key == 'r') {
    background(230, 238, 176); 
  }
}
