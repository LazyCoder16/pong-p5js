class Ball{
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.xspeed = 0;
        this.yspeed = 0;
        this.r = 10;

        this.reset();
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.xspeed = 5 * Math.cos(random(-PI/5, PI/5));
        this.yspeed = 5 * Math.sin(random(-PI/5, PI/5));

        //serve to different player randomly
        if (random(1) < 0.5) {
            this.xspeed *= -1;
        }
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.r * 2);
    }

    edges(p1, p2) {
        //ball bounces off when it hits the top or bottom edge
        if(this.y<=0 || this.y>=height){
            this.yspeed *= -1;
        }

        //update and restore score when the ball reaches the left or right edge
        if (this.x - this.r > width) {
            leftscore++;
            ding.play();
            p1.reset();
            p2.reset();
            this.reset();
        }

        if (this.x + this.r < 0) {
            rightscore++;
            ding.play();
            p1.reset();
            p2.reset();
            this.reset();
        }
    }

    checkPaddle(p) {
        //Left paddle
        if (
            this.y-this.r < p.y+p.h/2 &&
            this.y+this.r > p.y-p.h/2 &&
            this.x-this.r < p.x+p.w/2 &&
            this.x > p.x
        ){
            let diff = this.y - (p.y - p.h / 2);
            let rad = radians(45);
            let angle = map(diff, 0, p.h, -rad, rad);
            this.xspeed = 5 * Math.cos(angle);
            this.yspeed = 5 * Math.sin(angle);
            hit.play();
        }

        //Right paddle
        if (
            this.y-this.r < p.y+p.h/2 &&
            this.y+this.r > p.y-p.h/2 &&
            this.x+this.r > p.x-p.w/2 &&
            this.x < p.x
        ){
            let diff = this.y - (p.y - p.h / 2);
            let angle = map(diff, 0, p.h, radians(225), radians(135));
            this.xspeed = 5 * Math.cos(angle);
            this.yspeed = 5 * Math.sin(angle);
            hit.play();
        }
    }
}
