import { BlendMode } from "./BlendMode"
import Layer from "./components/Layer"
import Circle from "./drawables/Circle"
import LinearGradient from "./drawables/LinearGradient"
import Time from "./libs/Time"
import Rectangle from "./drawables/Rectangle"
import Vector2 from "./libs/Vector2"


document.addEventListener('DOMContentLoaded', ()=>{
    const layer = new Layer({
        width: 600,
        height: 600
    })
    const shape = new Layer()
    shape
    .add(
        new Rectangle({
            width: 100,
            height: 100,
            fillStyle: "blue"
        })
    )
    .add(
        new LinearGradient({
            length: 100, 
            radius: 100,
            fillStyle: "white",
            strokeStyle: "transparent"
        })
    )

    shape.render()
    layer.add(shape)
    layer.render()

    document.body.append(layer.element)
})