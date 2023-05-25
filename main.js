noseX=0;
noseY=0;

difference = 0;
rightWristX = 0;
leftWristX = 0

function setup() {

    canvas = createCanvas(500, 500);
    canvas.position(882, 150)

    video = createCapture(VIDEO);
    video.position(100, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Inistialized');
}

function draw() {
    background('#000000')

    document.getElementById("square_side").innerHTML = "Width and Height of a Sqaure will be = " + difference + "px";
    fill('#34e1eb');
    stroke('#34e1eb');
    square(noseX, noseY, difference);   
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}