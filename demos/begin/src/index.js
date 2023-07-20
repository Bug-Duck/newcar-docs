import * as newcar from "../../newcar.js"
const { Car } = newcar;
const { Text } = newcar.object;
const { EaseInSine } = newcar.interpolator;
const { Translation } = newcar.animation;

const animation = new Car(document.getElementById("animation"), 60);

const text = new Text("Hello world!", {
  x: 200,
  y: 100,
  size: 30,
});

animation.addObject(text).addAnimationItem(
  new Translation({
    startAt: 0, // 动画在第0帧开始
    lastsFor: 30, // 持续300帧
    to: [200, 200], // 从原有的位置到坐标(200, 200)
    bindTo: text, // 将动画绑定在Text对象上
    by: EaseInSine, // 设定变速曲线
  })
);

animation.play();

document.getElementById("button").onclick = () => {
  animation.continue(0);
}
