/**
 * Created by LS on 2017/6/3.
 */

function Time(option) {
    this.ctx = option.ctx;

    //获取调用方法draw之前的时间
    this.startTime = new Date();
}

Time.prototype = {
    constructor: Time,
    draw: function () {
        //获取当前的时间与之前的时间之差
        var duration = (new Date() - this.startTime) / 1000;

        //计算 h m s
        var h = Math.floor(duration / 3600);
        var m = Math.floor(duration % 3600 / 60);
        var s = Math.floor(duration % 60);
        var ms = (duration - s).toFixed(3) * 1000;



        var text = "老司机,你坚持了" + h + "小时" + m + "分钟" + s + "秒" + ms + "毫秒";

        ctx.save();
        //添加到画布上
        ctx.fillStyle = "red";
        ctx.font = "20px microsoft yahei";
        ctx.textAlign = "right";
        ctx.textBaseline = "top";
        ctx.fillText(text, 780, 0);
        ctx.restore();
    }
};