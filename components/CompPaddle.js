class CompPaddle {
    constructor() {
        this.w = 20;
        this.h = 100;
        this.y = height / 2;
        this.x = this.w;
        this.speed = 3;
    }

    update(ball_y) {
        if(ball_y < this.y){
            this.y -= this.speed;
        }
        else if(ball_y > this.y){
            this.y += this.speed;
        }
        else {
            this.y += 0;
        }
        this.y = constrain(this.y, this.h / 2, height - this.h / 2);
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h)
    }

    reset() {
        this.y = height / 2;
        this.x = this.w;
    }
}
