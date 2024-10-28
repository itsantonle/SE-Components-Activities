interface ShapeProtoype {
  clone(): ShapeProtoype
  getName(): string
  display(): void
}

class Circle implements ShapeProtoype {
  private name: string = 'Circle'
  public radius: number
  public color: string

  constructor(radius: number = 1, color: string = 'transparent') {
    this.radius = radius
    this.color = color
  }

  public clone(): Circle {
    return new Circle(this.radius, this.color)
  }

  public getName(): string {
    return this.name
  }

  public display(): void {
    console.log(
      `${this.name} \n --- \n\t radius: ${this.radius} \n\t color: ${this.color}`
    )
  }
}

class Rectangle implements ShapeProtoype {
  private name: string = 'Rectangle'
  public length: number
  public width: number
  public color: string

  constructor(
    length: number = 1,
    width: number = 1,
    color: string = 'transparent'
  ) {
    this.length = length
    this.width = width
    this.color = color
  }

  public clone(): Rectangle {
    return new Rectangle(this.length, this.width, this.color)
  }
  public getName(): string {
    return this.name
  }
  public display(): void {
    console.log(
      `${this.name} \n --- \n\t length: ${this.length} \n\t width: ${this.width} \n\t color: ${this.color}`
    )
  }
}

const circle1 = new Circle() // circle with default value
circle1.display()
const circle1clone = circle1.clone()
circle1clone.display() // show that it is a clone
// modify the attributes of the clone
circle1clone.color = 'red'
circle1clone.radius = 2
// the original should remain the same even if circle1clone is changed
circle1clone.display()
circle1.display()

const rectangle1 = new Rectangle() // rectangle with default values
rectangle1.display()
const rectangle1clone = rectangle1.clone()
rectangle1clone.display() // show that it is a clone
// modify attributes of the clone
rectangle1clone.length = 2
rectangle1clone.width = 2
rectangle1clone.color = 'red'

//the original should remain the same even if the rectangle1clone is changed
rectangle1clone.display()
rectangle1.display()
