import Drawable from "./Drawable";

export default class Rectangle extends Drawable {
    get width(){
        return this.opts.width
    }
    get height(){
        return this.opts.height
    }
    _draw(ctx){
        ctx.translate(this.pos.x, this.pos.y)
        ctx.rotate(this.opts.angle)
        if(this.opts.strokeStyle && this.opts.strokeStyle != "transparent")
            ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height)
        if(this.opts.fillStyle && this.opts.fillStyle != "transparent")
            ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height)
        ctx.rotate(-this.opts.angle)
        ctx.translate(-this.pos.x, -this.pos.y)
    }
}