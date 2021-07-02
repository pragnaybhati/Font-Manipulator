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

function draw() {
    background("lightgrey");
}

function got_poses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}