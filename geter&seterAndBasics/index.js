//https://www.youtube.com/watch?v=2ZphE5HcQPQ
class Rectangle {
    //Setup
    constructor(_width, _height, _color) {
        console.log('The rectangle is being created');

        this.width = _width
        this.height = _height
        this.color = _color
    }

    getArea() {
        return this.width * this.height;
    }

    getDescription() {
        console.log(`I am a rectangle of ${this.width}
        and ${this.height} and i am ${this.color}`);
    }
}

let myRectangle1 = new Rectangle(5, 3, 'blue');
let myRectangle2 = new Rectangle(10, 2, 'red');

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

myRectangle1.getDescription();
myRectangle2.getDescription();
//////////////////////////////////////////////////////////////
class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
        this.numOfRequestForArea = 0;
    }

    get area() {
        this.numOfRequestForArea++;
        return this.width * this.height;
    }

    set area (area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
    //Static Methods
    static equals (a, b) {
        return a.width * a.height === b.width * b.height
    }

    static isValidDimensions (obj1, obj2) {
        return obj1.width === obj2.width && obj1.height === obj2.height;
    }
}

let square1 = new Square(4);
square1.area = 25;// => Math.sqrt(area) = 5
console.log(square1.area);// 5*5 => 25
console.log(square1.width);// 5
console.log(square1.height);// 5

// console.log("quantidade de requisições a área");
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.numOfRequestForArea);

module.exports = Square;
