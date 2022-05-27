function setup() {
    createCanvas(1080, 600);
}

let cs = 0;

let ballX = 540;
let ballY = 300;
let ballVx = 5;
let ballVy = 2;
let barX = 80;
let barY = 300;
let score = 0;

function draw() {
    switch (cs) {
        case 0:
            clear();
            fill(0);
            textAlign(CENTER);
            textSize(100);
            text("squash", 540, 300);
            textAlign(CENTER);
            textSize(50);
            text("click to start", 540, 400);
            if (mouseIsPressed) cs = 1;
            score = 0;
            break;
        case 1:
            //clear();
            background(0, 30);
            stroke(255);
            strokeWeight(4);
            line(60, 80, 1020, 80);
            line(60, 80, 60, 520);
            line(1020, 80, 1020, 520);
            line(60, 520, 1020, 520);
            ballX += ballVx;
            ballY += ballVy;
            if (ballX<80 || ballX>1000) ballVx *= -1;
            if (ballY<100 || ballY>500) ballVy *= -1;
            text("score: "+score, 400, 50);
            textSize(50);
            barY = mouseY;
            if (barY<100) barY = 100;
            if (barY>400) barY = 400;
            if (barX+20<ballX && barX+40>ballX && barY-20<ballY && barY+120>ballY) {
                ballVx *= -1;
                score += 100;
            } else if (ballX<80) {
                cs = 2;
            }
            ellipse(ballX, ballY, 40, 40);
            fill(230);
            noStroke();
            rect(barX, barY, 20, 100);
            break;
        case 2:
            clear();
            fill(0);
            textAlign(CENTER);
            textSize(100);
            text("GAME OVER", 540, 200);
            textSize(50);
            text("SCORE: "+score, 540, 300);
            textSize(50);
            text("click to back", 540, 400);
            if (mouseIsPressed) {
                mouseIsPressed = false;
                cs = 0;
            }
            break;
            break;
    }
}