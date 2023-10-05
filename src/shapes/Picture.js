import Drawable from "./Drawable"

export default class Picture extends Drawable {
    get src(){
        return this.opts.src
    }
    get width(){
        return this.opts.width
    }
    get height(){
        return this.opts.height
    }
    _draw(ctx){
        if(!this.loaded) return this.load()
        ctx.translate(this.pos.x, this.pos.y)
        ctx.rotate(this.opts.angle)
        ctx.drawImage(this.image, -this.width/2, -this.height/2, this.width, this.height)
        ctx.rotate(-this.opts.angle)
        ctx.translate(-this.pos.x, -this.pos.y)
    }
    
    async load(){
        this.loaded = false
        this.image = new Image()
        await new Promise(res => {
            this.image.onload = ()=> res()
            this.image.src = this.src
        })
        this.loaded = true
        this.naturalWidth = this.image.naturalWidth
        this.naturalHeight = this.image.naturalHeight
    }
}