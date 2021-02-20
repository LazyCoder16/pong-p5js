let leftscore = 0;
let rightscore = 0;
let img;
let isPause = false;
let started = false;

function setup() {
    createCanvas(600, 500);
    ding = loadSound("assets/ding.mp3");
    hit = loadSound("assets/hit.ogg");
    ball = new Ball();
    compPaddle = new CompPaddle();
    humanPaddle = new HumanPaddle();
    pause = new Pause();
}

function draw() {
    background(0);
    strokeWeight(1);
    ball.checkPaddle(compPaddle);
    ball.checkPaddle(humanPaddle);

    compPaddle.show();
    humanPaddle.show();
    ball.show();

    if(isPause === false && started === true) {
        compPaddle.update(ball.y);
        humanPaddle.update();
        ball.edges(compPaddle, humanPaddle);
        ball.update();
    }

    fill(255);
    textSize(32);
    text(leftscore, 32, 40);
    text(rightscore, width-64, 40);
    textSize(16);
    if(started===false){
        text("Press Enter to Start", width/2-70, height/2+30);
    }
    pause.show();

    checkWin();
}

function mouseClicked() {
    if(mouseX > pause.x-pause.r && mouseX < pause.x+pause.r && started) {
        if(mouseY > pause.y-pause.r && mouseY < pause.x+pause.r) {
            isPause = isPause === false;
        }
    }
}

function keyPressed() {
    if(keyCode === ENTER) {
        started = true;
    }
}

function checkWin() {
    if(leftscore === 10 || rightscore === 10) {
        started = false;
        leftscore = 0;
        rightscore = 0;
    }
}
