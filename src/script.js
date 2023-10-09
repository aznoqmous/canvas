import Layer from "./components/Layer"
import Vector2 from "./libs/Vector2.js";
import Circle from "./drawables/Circle.js";
import Picture from "./drawables/Picture.js";
import Rectangle from "./drawables/Rectangle.js";
import Time from "./libs/Time.js";

document.addEventListener('DOMContentLoaded', async ()=>{
    const layer = new Layer({
        width: 600,
        height: 400,
        background: "white"
    })
    layer.appendTo(document.body)
    layer.add(new Circle({fillStyle: "red"}))
    layer.render()
    return;
    const picture = new Picture({
        src: "image.jpg",
        objectFit: "cover",
        height: 100,
        width: 300
    })
    const rectangle = new Rectangle({
        width: picture.width,
        height: picture.height,
        lineWidth: 5,
        strokeStyle: "red"
    })

    layer
        .add(rectangle)
        .add(picture)

    await picture.load()

    const loop = ()=>{
        Time.tick()
        picture.width = Math.abs(Math.sin(Time.time/5*2*Math.PI) * 200) + 100
        picture.height = Math.abs(Math.cos(Time.time/5*2*Math.PI) * 200) + 100
        rectangle.width = picture.width
        rectangle.height = picture.height
        layer.render()
        requestAnimationFrame(loop)
    }
    loop()

    layer.appendTo(document.body)
})