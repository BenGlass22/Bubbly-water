function setup() {
  createCanvas(600, 400)
  let blue = random(0, 255) 

}
function draw() {

  let count = 0
if(frameCount %60  == 0)
{background(175, 216, 230)
 while (count < 300) {
    let x = random(600)
    let y = random(400)
    let blue = random(255)
    let size = random(25, 100)


    if (random() > 0.25) {
      fill(255, 255, 255)
      ellipse(x, y, size / 4, size / 4)
    } else {
      fill( 174, 215, 235)
      ellipse(x, y, size)
    }

    count++
  }
}
 while (count < 300) {
    let x = random(600)
    let y = random(400)
    let blue = random(255)
    let size = random(25, 100)


    if (random() > 0.25) {
      fill(255, 255, 255)
      ellipse(x, y, size / 4, size / 4)
    } else {
      fill( 174, 215, 235)
      ellipse(x, y, size)
    }

    count++
  }
}