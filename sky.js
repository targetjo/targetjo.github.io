/**
 * Created by LS on 2017/6/3.
 */
function Sky(option) {
    //在构造函数获取 参数（接收材料）
    this.ctx = option.ctx;
    this.image = option.image;
    this.x = option.x;
    this.step = option.step;
}

Sky.prototype = {
    constructor:Sky,
    draw: function () {
        //当调用这个方法时，传入 保存的参数 实现功能（进行加工）
        this.ctx.drawImage(this.image, this.x, 0);
        if (this.x < -this.image.width) {
            this.x += 2 * this.image.width;
        }
        this.x -= this.step;
    }
};

