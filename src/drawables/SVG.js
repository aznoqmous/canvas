import Drawable from "./Drawable";

export default class SVG extends Drawable {
    constructor(opts={}){
        super(opts)
        this.load()
    }
    get html(){
        return this.opts.html
    }
    set html(value){
        this.opts.html = value
    }

    load(){
        this.element = document.createRange().createContextualFragment(this.html).children[0];
        this.viewBox = this.element.getAttribute('viewBox').split(' ')
        this.width = this.viewBox[2] - this.viewBox[0]
        this.height = this.viewBox[3] - this.viewBox[1]        
        this.paths = Array.from(this.element.querySelectorAll('path')).map(p => {
            return new Path2D(p.getAttribute('d'))
        })
    }

    _draw(ctx){
        ctx.translate(this.pos.x, this.pos.y)
        ctx.rotate(this.opts.angle)
        ctx.translate(-this.width/2,-this.height/2)
        this.paths.map(p => {
            if(this.opts.strokeStyle && this.opts.strokeStyle != "transparent")
                ctx.stroke(p)
            if(this.opts.fillStyle && this.opts.fillStyle != "transparent")
                ctx.fill(p)
        })
        ctx.translate(this.width/2,this.height/2)
        ctx.rotate(-this.opts.angle)
        ctx.translate(-this.pos.x, -this.pos.y)
    }
}