img = "";
statuss = "";
objects = [];

function setup() {
    song = loadSound('mixit-electric-fence-alert-2969.wav');
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function preload()
{
 img = loadImage('BABY.avif');
}

function draw()
{ 
    image(video, 0, 0, 380, 380);

    if(statuss != "") 
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.dectect(video, gotResult);
        for (i = 0; i < objects.length; i++);
        {
            document.getElementById("status").innerHTML = "Status : Object  Dectected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects dectected are : " + objects.length;
            fill(r, g, b)
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].y + 15, objects[i].x, + 15);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);


        }
    }
    

}

function modelLoaded() {
    console.log("Model Loaded !!!");
    statuss = true;
   



}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}