
export abstract class Vehicle{
    abstract getNumberOfSeats():number;    
    
    // getNumberOfSeats() : number {
    //     return this.numberOfSeats;
    // }

}
export class Tesla extends Vehicle{
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }


}

export class Audi extends Vehicle {
    constructor( private numberOfSeats: number ) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

}

export class Toyota extends Vehicle {
    constructor( private numberOfSeats: number ) {
        super();
    }
    
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
    

}

export class Honda extends Vehicle {
    constructor( private numberOfSeats: number ) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }



}



