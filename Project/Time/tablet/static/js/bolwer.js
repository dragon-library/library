/*
  Blowing Text
  Johan Karlsson 
  2016-04-06
*/


class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.vx = Math.random() * 2 * settings.speed;
    this.vy = (Math.random() - 0.5) * settings.speed;
    this.delay = Math.random() * 200;
  };

  move(tick) {
    if (tick > this.delay) {
      //tick -= this.delay;
      this.x += this.vx + (settings.gravity * tick * tick) / 20000;
      this.y += this.vy + (settings.gravity * tick * tick) / 10000;
    }
  }
}

class Writer {
  constructor(canvasId) {
    var canvas = document.getElementById(canvasId);
    this.ctx = canvas.getContext("2d");
    this.w = canvas.width = window.innerWidth;
    this.h = canvas.height = window.innerHeight;
    // A list of all the particles that forms the text
    this.particles = [];
    this.tick = 0;
  }

  init(text, size) {
    WebFont.load({
      google: {
        families: ["Niconne"]
      }
    });

    this.ctx.fillStyle = "#1f7";
    this.ctx.shadowColor = "#264";
    this.ctx.font = `${size}px Niconne`;
    this.ctx.save();
    this.ctx.shadowOffsetX = 4;
    this.ctx.shadowOffsetY = 4;
    this.ctx.shadowBlur = 5;

    // Draw text on the canvas temporarily
    var textWidth = this.ctx.measureText(text).width;
    var startX = (this.w - textWidth) * 0.1;
    var startY = (this.h - size) * 0.25;
    this.ctx.fillText(text, 10, size);
    this.ctx.restore();

    var image = this.ctx.getImageData(0, 0, this.w, this.h);
    this.ctx.clearRect(0, 0, this.w, this.h);
    var buffer32 = new Uint32Array(image.data.buffer);
    for (var x = 0; x < this.w; x++) {
      for (var y = 0; y < this.h; y++) {
        // The buffer is linear, y*w+x is a trick
        // to calculate the linear index.
        var color = buffer32[y * this.w + x];
        if (color) {
          // There is a pixel here, add a particle
          this.particles.push(new Particle(startX + x, startY + y, color));
        }
      }
    }

    this.ctx.textAlign = "right";
    this.ctx.font = "20px serif";
    console.log(`Number of particles: ${this.particles.length}`);
  }

  draw() {
    // Start every frame with an empty image
    var imageData = this.ctx.createImageData(this.w, this.h);
    // We will set individual pixels in this array
    // They are off screen
    var pixels = new Uint32Array(imageData.data.buffer);

    this.particles.forEach(p=> {
      var x = Math.round(p.x);
      var y = Math.round(p.y);
      if (x >= 0 && x < this.w && y >= 0 && y < this.h) {
        pixels[x + this.w * y] = p.color;
      }
      if (this.tick > settings.startDelay) {
        // Start explosion after delay
        p.move(this.tick - settings.startDelay);
      }
    });

    // This puts all the pre-drawn pixel on the screen
    this.ctx.putImageData(imageData, 0, 0);

    this.tick++;
    requestAnimationFrame(()=> this.draw());
  }
}  
function my_bolwer() {       
var writer = new Writer("canvas");
writer.init(settings.text, settings.textSize);
writer.draw();     
var settings = {
  startDelay: 60,
  text: "Welcome",
  textSize: 120,
  gravity: 0.15,
  speed: 3
}}
