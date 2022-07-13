
export class Calculator{
    value : number;

    constructor(initial_value:number){
        this.value = initial_value;
    }

    add(x:number, y:number){
        return x + y;
    }

    subtract(x:number, y:number){
        return x - y;
    }

    multiply(x:number, y:number){
        return x * y;
    }

    divide(x:number, y:number){
        return x / y;
    }
}