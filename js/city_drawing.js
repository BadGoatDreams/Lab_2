function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  let startColor = color("blue");
  let endColor = color("gold");

  // Create gradient background
  for (let y = 0; y < height; y += 1) {
    let amt = map(y, 0, height, 0, 1);
    let gradColor = lerpColor(startColor, endColor, amt);
    stroke(gradColor);
    line(0, y, width, y);
  }
  fill("gold")
  circle(720, 60, 100);

  beginShape();
  fill("#1ee12a");
  vertex(0, height);  // Start at the bottom-left corner
  bezierVertex(50, 500, 200, 10, 400, 400); // Bézier curve
  vertex(800, height);  // End at the bottom-right corner
  endShape(CLOSE);
  beginShape();
  fill("rgb(64,126,64)");
  vertex(0, height);  // Start at the bottom-left corner
  bezierVertex(400, 300, 400, 10, 600, 500, 400, 800, 800); // Bézier curve
  vertex(800, height);  // End at the bottom-right corner
  endShape(CLOSE);
  textSize(12)
  fill("")
  textSize(50)
  text('🏘', 40, 795);
  text('🏘', 90, 795);
  text('🏘', 140, 795);
  text('🏘', 190, 795);
  fill("grey")
  text('🏙', 240, 795);
  text('🏙', 290, 795);
  text('🏙', 340, 795);
  text('🏙', 390, 795);
  text('🌲', 390, 600);
  text('🌲', 30, 600);
  text('🌲', 300, 500);
  text('🌲', 400, 450);
  fill("white");
  rect(350, 400, 25,70);
  rect(350, 470, 70,25);
  
  textSize(30);
  text("Missoula MT had a bad wildfire recently... ", 20, 40 )
  text("Mount Jumbo needs replanting! can you help? ", 20, 70 )
  text("Click anywhere to plant! ", 20, 100 )
  
  
  
}
function mousePressed() {
  // Place the tree emoji at the mouse's x and y position
  textSize(48);
  text('🌲', mouseX, mouseY);
}

function draw() {
  
// There's no need to continuously draw anything here unless you want to animate or update.
}
