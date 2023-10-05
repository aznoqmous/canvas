import Drawable from "./Drawable";

export default class RadialGradient extends Drawable {
    
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
        if(this.radius <= 0) return;
        ctx.fillStyle = ctx.createRadialGradient(this.pos.x , this.pos.y , 0, this.pos.x, this.pos.y , this.radius*2)
        ctx.fillStyle.addColorStop(0, this.opts.fillStyle)
        ctx.fillStyle.addColorStop(0.5, this.opts.strokeStyle)
        ctx.fillRect(this.pos.x-this.radius, this.pos.y-this.radius, this.radius*2, this.radius*2)
    }
}