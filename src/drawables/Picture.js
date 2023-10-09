import Drawable from "./Drawable"

export default class Picture extends Drawable {

    constructor(opts = {}) {
        super(Object.assign({
            objectFit: null, // contain, cover
            width: 100,
            height: 100
        }, opts));
    }

    get src() {
        return this.opts.src
    }

    get width() {
        return this.opts.width
    }

    set width(value) {
        this.opts.width = value
    }

    get height() {
        return this.opts.height
    }

    set height(value) {
        this.opts.height = value
    }

    get objectFit() {
        return this.opts.objectFit
    }

    set objectFit(value) {
        this.opts.objectFit = value
    }


    _draw(ctx) {
        if (!this.loaded) return this.load()

        ctx.translate(this.pos.x, this.pos.y)
        ctx.rotate(this.opts.angle)
        if (this.objectFit) {
            let ratioX = 1
            let ratioY = 1
            if(this.objectFit === "contain") {
                if(this.naturalWidth / this.width > this.naturalHeight / this.height) {
                    ratioY = this.width / this.height / (this.naturalWidth / this.naturalHeight)
                }
                else {
                    ratioX = this.height / this.width / (this.naturalHeight / this.naturalWidth)
                }
                ctx.drawImage(
                    this.image,
                    -this.width / 2 * ratioX, -this.height / 2 * ratioY, this.width * ratioX, this.height * ratioY
                )
            }
            if(this.objectFit === "cover"){
                if(this.naturalWidth / this.width < this.naturalHeight / this.height) {
                    ratioY = this.width / this.height / (this.naturalWidth / this.naturalHeight)
                }
                else {
                    ratioX = this.height / this.width / (this.naturalHeight / this.naturalWidth)
                }

                ctx.drawImage(
                    this.image,
                    (this.naturalWidth - this.naturalWidth / ratioX)/2,
                    (this.naturalHeight - this.naturalHeight / ratioY)/2,
                    this.naturalWidth / ratioX,
                    this.naturalHeight / ratioY,
                    -this.width / 2,
                    -this.height / 2,
                    this.width,
                    this.height
                )
            }


        } else {
            ctx.drawImage(
                this.image,
                -this.width / 2, -this.height / 2, this.width, this.height
            )
        }

        ctx.rotate(-this.opts.angle)
        ctx.translate(-this.pos.x, -this.pos.y)
    }

    async load() {
        this.loaded = false
        this.image = new Image()
        await new Promise(res => {
            this.image.onload = () => res()
            this.image.src = this.src
        })
        this.loaded = true
        this.naturalWidth = this.image.naturalWidth
        this.naturalHeight = this.image.naturalHeight
    }
}