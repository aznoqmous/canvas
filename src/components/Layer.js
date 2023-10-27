import Drawable from "../drawables/Drawable"

export default class Layer extends Drawable {
    constructor(opts={}){
        super(Object.assign({
            width: 800,
            height: 600,
            scale: 1,
            background: null
        }, opts))
        this._build()
        this.drawables = []
    }

    get element(){
        return this.c
    }

    get width(){
        return this.c.width
    }

    set width(value){
        this.c.width = value 
    }

    get height(){
        return this.c.height
    }

    set height(value){
        this.c.height = value
    }

    get scale(){
        return this.opts.scale
    }
    set scale(value){
        this.opts.scale = value
    }

    _build(){
        this.c = document.createElement('canvas')
        this.ctx = this.c.getContext('2d')
        this.c.width = this.opts.width
        this.c.height = this.opts.height
        this.clear()
    }

    clear(){
        if(this.opts.background && this.opts.background != "transparent") {
            this.ctx.fillStyle = this.opts.background
            this.ctx.fillRect(0, 0, this.width, this.height)
        }
        else this.ctx.clearRect(0, 0, this.width, this.height)
        return this
    }

    add(...drawables){
        drawables.map(d => this.drawables.push(d))
        return this
    }

    remove(drawable){
        let i = this.drawables.indexOf(drawable)
        if(i < 0) return;
        this.drawables.splice(i, 1)
        return this
    }


    _draw(ctx){
        ctx.scale(this.opts.scale, this.opts.scale)
        ctx.rotate(-this.opts.angle)
        ctx.translate(-this.width/2, -this.height/2)
        ctx.drawImage(this.c, this.pos.x/this.scale, this.pos.y/this.scale, this.width, this.height)
        ctx.translate(this.width/2, this.height/2)
        ctx.rotate(this.opts.angle)
        ctx.scale(1/this.opts.scale, 1/this.opts.scale)
    }

    render(){
        this.clear()
        this.drawables.map(drawable => {
            drawable.draw(this)
        })
        return this
    }

    appendTo(element){
        element.append(this.element)
    }

    clone(){
        const clone = super.clone()
        clone._build()
        clone.draw(this)
        return clone
    }

}