img="";

objects = [];

status = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
   console.log("Model Loaded");
   status = true;
   objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
   if(error)
   {
     console.log(error);
   }
     console.log(results);
     objects = results;
}

function preload()
{
  img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#ff1100");
    text("Dog", 45, 75);
    noFill();
    stroke("#ff1100");
    rect(30, 60, 450, 350);

    fill("#ff1100");
    text("Cat", 320, 120);
    noFill();
    stroke("#ff1100");
    rect(300,90,270,320);
}