class Shape {
    calculateArea() {
        throw new Error("This method should be overridden in subclasses");
    }

    calculatePerimeter() {
        throw new Error("This method should be overridden in subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(a, b, c, base, height) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    calculatePerimeter() {
        return this.a + this.b + this.c;
    }
}

// Example usage
const circle = new Circle(5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);
// Circle - Area: 78.53981633974483, Perimeter: 31.41592653589793

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);
// Rectangle - Area: 24, Perimeter: 20

const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);
// Triangle - Area: 35, Perimeter: 19
