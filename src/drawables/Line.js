import Vector2 from "../libs/Vector2";
import Drawable from "./Drawable";

export default class Line extends Drawable {
    constructor(opts={}){
        super(opts)
        if(this.opts.end) this.end = this.opts.end
        else {
            this.length = Vector2.right.multiplyBy(this.opts.length||0).rotate(this.angle)
            this.end = this.pos.clone().add(this.length)
        }
    }

    setEnd(value){
        this.end = value
        return this
    }


    _draw(ctx){
        const end = this.end
        ctx.beginPath()
        ctx.moveTo(this.pos.x, this.pos.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
    }

    rotate(radian){
        this.length.rotate(radian)
        return this
    }
}
