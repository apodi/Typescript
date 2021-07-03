class Vehicle {
  color: string;
  constructor(color: string){
    this.color = color;
  }

  protected honk(): void {
    console.log('po po po');
  }
}

class Car extends Vehicle {
  wheels : number;
  constructor(wheels: number,color: string) {
      super(color);
      this.wheels = wheels;
  }
  // override drive method
  private drive(): void {
    console.log('broom broom');
  }
  
 public startDrivingProcess(): void {
   this.drive();
   this.honk();
 } 
}

const vehicle = new Vehicle('green');
console.log(vehicle.color);

const car = new Car(4,'red');
console.log(car.startDrivingProcess());
console.log(vehicle.color);