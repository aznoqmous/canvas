import Vector2 from "../libs/Vector2"
import Drawable from "./Drawable"

export default class LinearGradient extends Drawable {
    constructor(opts={}){
        super(opts)
        if(this.opts.end) this.end = this.opts.end
        else {
            this.length = Vector2.right.multiplyBy(this.opts.length||0).rotate(this.angle)
            this.end = this.pos.clone().add(this.length)
        }
    }

    get radius(){
        return this.opts.radius
    }

    set radius(value){
        this.opts.radius = value
    }

    _draw(ctx){
        const length = this.length.sqrMagnitude
        if(!this.radius || this.radius <= 0) return;

        ctx.translate(this.pos.x, this.pos.y)
        ctx.rotate(this.length.angle)
        ctx.translate(0, -this.radius/2)

        ctx.fillStyle = ctx.createLinearGradient(0, 0, 0, this.radius)
        ctx.fillStyle.addColorStop(0, this.opts.strokeStyle)
        ctx.fillStyle.addColorStop(0.5, this.opts.fillStyle)
        ctx.fillStyle.addColorStop(1, this.opts.strokeStyle)
        ctx.fillRect(0, 0, length, this.radius)

        ctx.translate(0, this.radius/2)
        ctx.rotate(-this.length.angle+Math.PI)
        ctx.translate(-this.pos.x, -this.pos.y)
    }
    rotate(radian){
        this.length.rotate(radian)
        return this
    }
}