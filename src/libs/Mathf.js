export default class Mathf {
    static lerp(a, b, t){
        return (1-t) * a + t * b
    }
}