import Drawable from "./Drawable";

export default class Circle extends Drawable {

    get radius(){
        return this.opts.radius
    }
    
    set radius(value){
        this.opts.radius = value
    }

    setRadius(value){
        this.radius = value
        return this
    }

    _draw(ctx){
        ctx.beginPath()
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI)
        ctx.stroke()
        ctx.fill()
    }
    setRadius(radius){
        this.radius = radius
        return this
    }
}