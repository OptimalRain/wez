function bz(option) {
    //获取画布
    var cvs = document.querySelector("#cvs");
    //绘制2d图形
    var cvt = cvs.getContext("2d");
    //显示data数据的总和/起始角度/结束角度为零
    num = 0, starAngle = 0, endAngle = 0;
    for (var i = 0; i < option.data.length; i++) {
        //总和
        num += option.data[i];
    }
    //绘制扇形
    for (var i = 0; i < option.data.length; i++) {
        //每个扇形占的比例
        endAngle = option.data[i] / num * 2 * Math.PI + starAngle;
        //画扇形/开始
        cvt.beginPath();
        //每个对象的颜色
        cvt.fillStyle = option._color[i];
        //线的起点
        cvt.moveTo(200, 200);
        //弧形
        cvt.arc(200, 200, 150, starAngle, endAngle, false);
        //结束
        cvt.closePath();
        //填充颜色
        cvt.fill();
        //使每个扇形的结束角等于下一个扇形的开始角
        starAngle = endAngle;
    }
}