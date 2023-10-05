export default class Time {
    static get time(){
        return performance.now() / 1000
    }
    static tick(){
        this.deltaTime = (this.time - this.lastTime) || 0
        this.lastTime = this.time
    }
}
