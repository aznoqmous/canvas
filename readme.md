# aznoqmous/canvas

## an abstraction class for javascript `canvas`

```js  
const layer = new Layer({
    width: 600,
    height: 600,
    background: "white"
})

const circle = new Circle({
    position: new Vector(100, 50),
    radius: 50,
    fillStyle: "white",
    strokeStyle: "black",
    lineWidth: 4
})

layer.add(circle)
layer.render()
```