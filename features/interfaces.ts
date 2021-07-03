// long type annotations not using interface

const oldCivic = {
  name : 'civic',
  year: 2000,
  broken: true
} 

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
  console.log(`
     name is ${vehicle.name}
     year is ${vehicle.year}
     is broken ${vehicle.broken}
  `);
}
printVehicle(oldCivic);

// with interface we can avoid long annotations and repeatetive code
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic1 = {
  name : 'civic',
  year: 2000,
  broken: true
} 

const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(`
     name is ${vehicle.name}
     year is ${vehicle.year}
     is broken ${vehicle.broken}
  `);
}
printVehicle1(oldCivic1);

// interfaces with functions part 1
interface Vehicle1 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic2 = {
  name : 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `summary is ${this.name}`
  }
} 

const printVehicle2 = (vehicle: Vehicle1): void => {
  console.log(vehicle.summary());
}
printVehicle2(oldCivic2);

// interfaces with functions part 2
interface Vehicle2 {
  summary(): string;
}

const oldCivic3 = {
  name : 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `summary is ${this.name}`
  }
} 

const printVehicle3 = (vehicle: Vehicle2): void => {
  console.log(vehicle.summary());
}
printVehicle2(oldCivic3);

// interfaces with functions part 2  interfaces more generic and reusable
interface Reportable {
  summary(): string;
}

const oldCivic4 = {
  name : 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `summary is ${this.name}`
  }
} 

const drink = {
  name: 'coke',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `summary is ${this.name}`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}
printVehicle2(oldCivic4);
printSummary(drink)