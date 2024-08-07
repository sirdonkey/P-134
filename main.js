let status = "";
let objects = [];
let video;
let objectDetector;
let alarmSound;
let personDetected = false;

function preload() {
    alarmSound = loadSound('alarm.mp3');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 420);
    video.hide();
    start();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
        return;
    }
    objects = results;
}

function draw() {
    image(video, 0, 0, 640, 420);
}
