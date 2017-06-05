/**
 * Created by LS on 2017/6/3.
 */

function Bird(option) {
    this.ctx = option.ctx;
    this.image = option.image;
    this.y = option.y;
    this.x = option.x;

    this.picW = this.image.width / 3;
    this.picH = this.image.height;
    this.index = 0;
    this.acc = 0.0002;
    this.v = 0;
    this.maxV = .428;
    this.maxAngle = 60;
    this.lastTime = new Date();
}

Bird.prototype = {
    constructor: Bird,
    draw: function () {
        //todo 1 小鸟的加速下落
        //获取图片加载后的 时间
        var currentTime = new Date();
        //计算加载图片所需的时间
        var duration = currentTime - this.lastTime;
        //更换当前的时间
        this.lastTime = currentTime;

        //计算小鸟的位移
        //计算公式 s = v * t + a * t * t / 2;
        var s = this.v * duration + this.acc * duration * duration / 2;
        //更换初速度
        this.v = this.v + this.acc * duration;
        this.y += s;

        //todo 2 小鸟落下时的旋转

        //计算每次旋转的角度
        var angle = this.maxAngle / this.maxV * this.v;

        this.ctx.save();
        //移动画布
        this.ctx.translate(this.x + this.picW / 2, this.y + this.picH / 2);
        //旋转
        this.ctx.rotate(convertAngle(angle));
        //小鸟
                this.ctx.drawImage(this.image,
            this.picW * this.index, 0, this.picW, this.picH,
            -this.picW / 2, -this.picH / 2, this.picW, this.picH);

        this.ctx.restore();

        this.index++;
        if (this.index >= 3) {
            this.index = 0;
        }
    }
};