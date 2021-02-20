class Pause {
    constructor() {
        this.r = 13;
        this.x = width/2;
        this.y = 20;
    }

    show() {
        strokeWeight(4);
        stroke(255);
        fill(0);
        ellipse(this.x, this.y, this.r*2);

        if(isPause) {
            fill(255);
            line(this.x-5, this.y-5, this.x-5, this.y+5);
            line(this.x-5, this.y-5, this.x+5, this.y);
            line(this.x-5, this.y+5, this.x+5, this.y);
        }

        else {
            fill(255);
            line(this.x-5, this.y-5, this.x-5, this.y+5);
            line(this.x+5, this.y-5, this.x+5, this.y+5);
        }
    }
}
