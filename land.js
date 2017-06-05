/**
 * Created by LS on 2017/6/3.
 */

function Land(option) {
    this.ctx = option.ctx;
    this.x = option.x;
    this.y = option.y;
    this.image = option.image;

    this.picW = this.image.width;
    this.step = 2;
}

Land.prototype = {
    constructor:Land,
    draw: function () {
        this.ctx.drawImage(this.image,this.x,this.y);
        this.x -= this.step;
        if(this.x < -this.picW) {
            this.x += this.picW * 4;
        }
    }
};


