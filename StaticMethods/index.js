const Square = require('../geter&seterAndBasics/index.js')

let square1 = new Square(6)
let square2 = new Square(6)
console.log(Square.equals(square1, square2));

console.log(Square.isValidDimensions(square1,square2));

if
(Square.isValidDimensions(square1, square2)) {
    console.log('As dimensões são iguais.');
} else {
    console.log('As dimensões não são iguais.');
}