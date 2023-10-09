# aznoqmous/canvas
*an abstraction class for javascript `Canvas`*

## Get started 
### Creating a new Layer
To render your first shapes, create a ``Layer`` and append its element to the DOM :

```js  
const layer = new Layer({
    width: 300,
    height: 200,
    background: "white"
})
layer.appendTo(document.body)
```

This will create a 800 x 600 canvas with a white background

### Drawing to a Layer
To draw on a ``Layer``, create a new drawable like so :
````js 
const circle = new Circle({
    position: new Vector2(100, -50),
    radius: 50,
    fillStyle: "red"
})
````

Then draw to your previously created ``Layer`` :
````js
circle.draw(layer)
````

### Adding shapes to a Layer
For animation purpose you can also add multiple drawables to your ``Layer`` and then use the `render` method :  
````js
const layer = new Layer()
layer
    .add(new Circle({ radius: 50, strokeStyle: "red" }))
    .add(new Circle({ radius: 30, strokeStyle: "green" }))
    .add(new Circle({ radius: 10, strokeStyle: "blue" }))

layer.render()
````

## Drawables

### Layer
| Option     | Default       | Description                                           |
|------------|---------------|-------------------------------------------------------|
| width      | `800`           | Set the canvas width                                  |
| height     | `600`           | Set the canvas height                                 |
| background | `transparent` | Set the canvas background                             |

### Circle
| Option      | Default        | Description                                           |
|-------------|----------------|-------------------------------------------------------|
| position    | `Vector2.zero` | The position of this element when drawed on a `Layer` |
| radius      | `0`            | The radius of the circle                              |
| startAngle  | `0`            | The start angle of the circle                         |
| endAngle    | `2*Math.PI`    | The end angle of the circle                           |
| strokeStyle | `transparent`  | Set the circle strokeStyle                            |
| fillStyle   | `transparent`  | Set the circle fillStyle                              |
| lineWidth   | `1`            | Set the circle lineWidth                              |

### Line
| Option      | Default        | Description                                                   |
|-------------|----------------|---------------------------------------------------------------|
| position    | `Vector2.zero` | The starting point of the line                                |
| length      | `0`            | The length of the line (Use separately from ``end``)          |
| end         | `0`            | The ending point of the line (Use separately from ``length``) |
| strokeStyle | `transparent`  | Set the line strokeStyle                                      |
| lineWidth   | `1`            | Set the line lineWidth                                        |

### Rectangle
| Option      | Default        | Description                                           |
|-------------|----------------|-------------------------------------------------------|
| position    | `Vector2.zero` | The position of this element when drawed on a `Layer` |
| width       | `0`            | The radius of the circle                              |
| height      | `0`            | The start angle of the circle                         |
| strokeStyle | `transparent`  | Set the rectangle strokeStyle                         |
| fillStyle   | `transparent`  | Set the rectangle fillStyle                           |
| lineWidth   | `1`            | Set the rectangle lineWidth                           |

### LinearGradient
### RadialGradient
### Picture
### SVG