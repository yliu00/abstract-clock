// setup() is called once at page-load
function setup() {
    createCanvas(660,660); // make an HTML canvas element width x height pixels
}

var lastMin = null;
var maxSize = 300;
var borderX = 30;
var borderY = 30;

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();
    if (lastMin == null || lastMin != min) {
        lastMin = min;
        console.log(min);
    }
  
    background('#e0d2b4');
  
    //squares
    noStroke();
    fill('#5b2952');
    rect(borderX,borderY,maxSize);
    fill('#7a3d64');
    let hrSize = map(hr, 0, 24, 0, maxSize);
    rect(borderX+maxSize+(maxSize-hrSize)/2,borderY+(maxSize-hrSize)/2,hrSize);
    fill('#ba6d81');
    let minSize = map(min, 0, 60, 0, maxSize);
    rect(borderX+(maxSize-minSize)/2,borderY+maxSize+(maxSize-minSize)/2,minSize);
    fill('#da898e');
    let secSize = map(sec, 0, 60, 0, maxSize);
    rect(borderX+maxSize+(maxSize-secSize)/2,borderY+maxSize+(maxSize-secSize)/2,secSize);
  
}