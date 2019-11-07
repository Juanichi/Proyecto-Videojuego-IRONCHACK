class Bullet {
    constructor(ctx, x, y, ) {
        this.ctx = ctx
        this.posX = x;
        this.posY = y;

        this.width = 50;
        this.height = 30;
        this.image = new Image();
        this.image.src = 'img/alien21.png';
        this.vy = 5;


    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height); // 30, 20);
    }

    move() {
        // this.posX += this.vx;
        this.posY -= this.vy;



    }


}