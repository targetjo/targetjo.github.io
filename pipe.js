/**
 * Created by LS on 2017/6/3.
 */
function Pipe(option) {
    this.ctx = option.ctx;
    this.x = option.x;
    this.topImage = option.topImage;
    this.bottomImage = option.bottomImage;

    //设置 上管道的 y坐标（y在150~300）
    this.y = -(150 + Math.random() * 150);

    //创建上下管道之间的距离
    this.ttb = 120;

    //设置 下管道的 y坐标
    this.bottomY = this.y + this.topImage.height + this.ttb;

    this.step = 2;

}

Pipe.prototype = {
    constructor: Pipe,
    draw: function () {
        //判断的路径
        this.ctx.rect(this.x - 10,this.y + 3,this.topImage.width + 10,this.topImage.height + 10);
        this.ctx.rect(this.x - 10,this.bottomY - 10,this.bottomImage.width+ 10,this.bottomImage.height+ 10);
        //this.ctx.stroke();

        this.ctx.drawImage(this.topImage, this.x, this.y);
        this.ctx.drawImage(this.bottomImage, this.x, this.bottomY);

        this.x -= this.step;
        if(this.x < -this.topImage.width) {
            this.x += 6 * 200;

            this.y = -(150 + Math.random() * 150);
            this.bottomY = this.y + this.topImage.height + this.ttb;
        }

    }
};