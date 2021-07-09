noseX = "";
noseY = "";
leftWristX = "";
rightWristX = "";
difference = "";

function setup() {
    video = createCapture(VIDEO);
    video.size(370, 370);
    video.position(50, 150)
    canvas = createCanvas(370, 370);
    canvas.position(650, 150);

    posenet = ml5.poseNet(video, modal_loaded);
    posenet.on("pose", got_poses);
}

function modal_loaded() {
    console.log("Pose is Initialized");
}

function got_poses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Nose X = " + noseX + " Nose Y = " + noseY);
        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX);
        difference = floor(leftWristX - rightWristX);
    }
}
function draw() {
    background("grey");
    textSize(difference);
    fill("white");
    text(" Pragnay " , noseX , noseY);
}