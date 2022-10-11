let bg;
let sprite;

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

function preloader() {
  bug = new Jitter();
  bg = loadImage("./assets/bg.jpg");
  sprite = loadImage("./assets/sprite.png");
}

function setup() {
  createCanvas(WIDTH - WIDTH / 4, HEIGHT - HEIGHT / 5);
  preloader();
}

function draw() {
  background(bg);

  bug.display();
  if (mouseIsPressed) {
    bug.move(mouseX, mouseY);
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = WIDTH / 2;
    this.y = HEIGHT / 2;
    this.diameter = 30;
    this.speed = 1;
  }

  move(mouseX, mouseY) {
    this.x = mouseX;
    this.y = mouseY;
  }

  display() {
    image(sprite, this.x, this.y, 35, 45);

    // ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
