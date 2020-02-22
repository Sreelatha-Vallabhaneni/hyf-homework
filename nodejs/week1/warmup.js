// Circle calculator
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return this.radius * 2;
  }
  getCircumference(){
      return this.radius * 2 * Math.PI;
  }
  getArea(){
      return Math.PI * Math.pow(this.radius, 2);
  }
}
const circle = new Circle(10);
console.log(circle.getDiameter()); //20
console.log(circle.getCircumference());// 62.83185307179586
console.log(circle.getArea()); // 314.1592653589793