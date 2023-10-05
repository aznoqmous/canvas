export default class Vector2 {
    constructor(x=0, y=0){
        this.x = x
        this.y = y
    }

    clone(){
        return new Vector2(this.x, this.y)
    }

    add(vector){
        this.x += vector.x
        this.y += vector.y
        return this
    }

    substract(vector){
        this.x -= vector.x
        this.y -= vector.y
        return this
    }

    multiply(vector){
        this.x *= vector.x
        this.y *= vector.y
        return this
    }

    divide(vector){
        this.x /= vector.x
        this.y /= vector.y
        return this
    }

    abs(){
        this.x = Math.abs(this.x)
        this.y = Math.abs(this.y)
        return this
    }

    multiplyBy(value){
        this.x *= value
        this.y *= value
        return this
    }

    divideBy(value){
        this.x /= value
        this.y /= value
        return this
    }

    normalize(){
        let magnitude = this.sqrMagnitude
        this.x /= magnitude
        this.y /= magnitude
        return this
    }

    floor(){
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)
        return this
    }

    round(){
        this.x = Math.round(this.x)
        this.y = Math.round(this.y)
        return this
    }

    ceil(){
        this.x = Math.ceil(this.x)
        this.y = Math.ceil(this.y)
        return this
    }

    lerp(v, t){
        this.x = (1-t) * this.x + t * v.x
        this.y = (1-t) * this.y + t * v.y
        return this
    }

    get normalized(){
        return this.clone().normalize()
    }

    get magnitude(){
        return Math.pow(this.x, 2) + Math.pow(this.y, 2)
    }

    get sqrMagnitude(){
        return Math.sqrt(this.magnitude)
    }

    rotate(radian){
        radian = radian || 0
        const x = this.x
        const y = this.y
        const sin = Math.sin(radian)
        const cos = Math.cos(radian)
        this.x = x * cos - y * sin
        this.y = x * sin + y * cos

        return this
    }

    get angle(){
        return Math.atan2(this.y, this.x)
    }

    static get up(){
        return new Vector2(0, -1)
    }
    static get down(){
        return new Vector2(0, 1)
    }
    static get left(){
        return new Vector2(-1, 0)
    }
    static get right(){
        return new Vector2(1, 0)
    }
    static get one(){
        return new Vector2(1, 1)
    }
    static get zero(){
        return new Vector2()
    }

    static get random(){
        return Vector2.left.rotate(2*Math.PI*Math.random())
    }
}