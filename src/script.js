import { BlendMode } from "./BlendMode"
import Layer from "./components/Layer"
import Time from "./libs/Time"
import Vector2 from "./libs/Vector2"
import Circle from "./shapes/Circle"
import Line from "./shapes/Line"
import RadialGradient from "./shapes/RadialGradient"
import Rectangle from "./shapes/Rectangle"
import Picture from "./shapes/Picture"
import SVG from "./shapes/SVG"

document.addEventListener('DOMContentLoaded', ()=>{
    const layer = new Layer()

    const circle = new Circle({
        radius: 50,
        strokeStyle: "white",
        position: Vector2.left.multiplyBy(100)
    })
    const circle2 = circle.clone().move(Vector2.random.multiplyBy(100))
    const circle3 = circle2.clone().move(Vector2.random.multiplyBy(100))
    const rectangle = new Rectangle({position: circle2.position, width: 100, height: 100, strokeStyle: "white"})
    const betterave = new Picture({position: circle.position, src: "betterave.jpg", width: 400, height: 400, blendMode: BlendMode.SourceIn})
    circle.opts.strokeStyle = "yellow"
    const svg = new SVG({
        fillStyle: "white",
    html: `
    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="50px" height="8px" viewBox="0 0 50 8" enable-background="new 0 0 50 8" xml:space="preserve">
<g>
	<path fill="#CDCE00" d="M0,6.3V8h50V0.5C31.7,1.3,20.8,10,0,6.3z"/>
</g>
</svg>

`})
    const light = new RadialGradient({ radius: 200, fillStyle: "white", blendMode: BlendMode.SourceIn })
    layer
        .add(circle)
        .add(circle2)
        .add(circle3)
        .add(new Circle({radius: 50, strokeStyle: "white"}))
        .add(rectangle)
        .add(svg)
        .add(betterave)
        .add(
            new Line({
                position: circle.position,
                strokeStyle: "white"
            })
            .setEnd(circle2.position)
        )
        .add(
            new Line({
                position: circle2.position,
                strokeStyle: "white"
            })
            .setEnd(circle3.position)
        )
        .add(
            new Line({
                position: circle.position,
                strokeStyle: "white"
            })
            .setEnd(circle3.position)
        )
        .add(light)

        
    const loop = ()=>{
        Time.tick()
        layer.render()

        circle.position.x = Math.sin(Time.time) * 100
        circle.position.y = Math.cos(Time.time) * 100
        circle2.radius = Math.sin(Time.time) * 50 + 100
        circle2.position.x = Math.sin(Time.time/2) * 150

        rectangle.rotate(-Time.deltaTime)
        rectangle.opts.width = circle2.radius * 2
        rectangle.opts.height = circle2.radius * 2
        //betterave.rotate(Time.deltaTime*2)

        svg.rotate(Time.deltaTime)
        requestAnimationFrame(loop)
    }
    loop()

    document.body.appendChild(layer.element)

    const path = new Path2D(`M448,80v352c0,26.5-21.5,48-48,48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6,5.4-32.9,33.5-32.9H384V98.7
	c-6.2-0.8-27.4-2.7-52.2-2.7c-51.6,0-87,31.5-87,89.4v49.9H184v67.6h60.9V480H48c-26.5,0-48-21.5-48-48V80c0-26.5,21.5-48,48-48h352
	C426.5,32,448,53.5,448,80z`)
    console.log(path)

    layer.ctx.strokeStyle = "white"
    layer.ctx.fillStyle = "white"
    layer.ctx.stroke(path)
    layer.ctx.fill(path)
    /*window.addEventListener('mousemove', (e)=>{
        circle.position.x = e.pageX - layer.width / 2 
        circle.position.y = e.pageY - layer.height / 2 
    })*/
})