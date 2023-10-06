import {BlendMode} from "../BlendMode"
import Vector2 from "../libs/Vector2"

export default class Drawable {
    constructor(opts={}){
        this.opts = Object.assign({
            position: Vector2.zero,
            lineWidth: 1,
            fillStyle: "transparent",
            strokeStyle: "transparent",
            opacity: 1,
            angle: 0,
            blendMode: BlendMode.SourceOver,
        }, opts)
    }

    get pos(){
        return this.opts.position
    }

    set pos(value){
        this.opts.position = value
    }

    get position(){
        return this.opts.position
    }

    set position(value){
        this.opts.position = value
    }

    draw(drawable){
        const ctx = drawable.ctx
        ctx.translate(drawable.width/2, drawable.height/2)
        ctx.fillStyle = this.opts.fillStyle
        ctx.strokeStyle = this.opts.strokeStyle
        ctx.globalAlpha = this.opts.opacity
        ctx.lineWidth = this.opts.lineWidth
        ctx.globalCompositeOperation = this.opts.blendMode
        this._draw(ctx)
        ctx.translate(-drawable.width/2, -drawable.height/2)
    }

    rotate(angle){
        this.opts.angle += angle
    }

    setBlendMode(blendMode){
        this.opts.blendMode = blendMode
        return this
    }

    clone(){
        const clone = new this.constructor()
        clone.opts = JSON.parse(JSON.stringify(this.opts))
        clone.pos = this.pos.clone()
        return clone
    }

    move(vector){
        this.pos.add(vector)
        return this
    }

    get angle(){
        return this.opts.angle || 0
    }
    set angle(value){
        this.opts.angle = value
    }
}