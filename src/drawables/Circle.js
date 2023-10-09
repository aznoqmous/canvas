import Drawable from "./Drawable";

export default class Circle extends Drawable {

    constructor(opts={}) {
        super(Object.assign({
            radius: 10,
            startAngle: 0,
            endAngle: 2 * Math.PI,
        }, opts));
    }
    get radius(){
        return this.opts.radius
    }
    
    set radius(value){
        this.opts.radius = value
    }

    get startAngle(){
        return this.opts.startAngle
    }

    set startAngle(value){
        this.opts.startAngle = value
    }

    get endAngle(){
        return this.opts.endAngle
    }

    set endAngle(value){
        this.opts.endAngle = value
    }

    _draw(ctx){
        ctx.beginPath()
        ctx.arc(this.pos.x, this.pos.y, this.radius, this.startAngle, this.endAngle)
        ctx.stroke()
        ctx.fill()
    }
    setRadius(radius){
        this.radius = radius
        return this
    }
    setStartAngle(startAngle){
        this.startAngle = startAngle
        return this
    }
    setEndAngle(endAngle){
        this.endAngle = endAngle
        return this
    }
}