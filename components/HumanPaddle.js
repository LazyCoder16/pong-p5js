class HumanPaddle {
    constructor() {
        this.w = 20;
        this.h = 100;
        this.y = height / 2;
        this.x = width - this.w;
        this.speed = 4.5;
    }

    update() {
        if(keyIsDown(UP_ARROW)){
            this.y -= this.speed;
        }
        else if(keyIsDown(DOWN_ARROW)){
            this.y += this.speed;
        }
        else{
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
        this.x = width - this.w;
    }
}
