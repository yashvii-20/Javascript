class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a,b) {
        this.result = a+ b;
        return this.result;
    }

    subtract(a,b) {
        this.result =a-b;
        return this.result;
    }

    multiply(a,b) {
        this.result =a*b;
        return this.result;
    }

    operation(operation, a,b) {
        console.log(this);
        switch (operation) {
            case 'add':
                return this.add(a,b);
            case 'subtract':
                return this.subtract(a,b);
            case 'multiply':
                return this.multiply(a,b);
            default:
                throw new Error('Invalid operation');
        }
    }
}
calculator = new Calculator();
console.log(calculator.operation('add', 5,5 )); 
console.log(calculator.operation('multiply', 3,3));
console.log(calculator.operation('subtract', 2,2)); 
calculator1 = new Calculator();
console.log(calculator1.operation('add', 10,20));