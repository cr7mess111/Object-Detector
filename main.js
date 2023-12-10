img = "";
status = "";






function modelLoaded()
{
    console.log(modelLoaded);
    status = true;
    objectDetector.detect(img,gotResult);
}




function gotResult()
{
    if(error){
        console.log(error);
    }
    console.log(results);
}






function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Deteting Objects";
}


function preload()
{
    img = loadImage("dog_cat.jpg");
}


function draw()
{
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 280, 350);


    fill("red");
    text("Cat", 360, 140);
    noFill();
    stroke("red");
    rect(290, 50, 230, 350)
}