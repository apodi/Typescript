// type annotation
const carMakers : string[] = ['as','asd','asdasd'];

// type inference
const carMakers1 = ['asd','asdasd']

//mutli dimensional array
const mArray = [
  ['asdad'],
  ['asdasdad']
];
 
//or
const mArray1: string[][] = [
  ['asdad'],
  ['asdasdad']
];

//Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

//preventing incompatible values
carMakers.push(100);

// Help with map
carMakers.map((car: string): string=> {
 return car.toUpperCase();
})

// Flexible types
const importantDates : (string | Date)[] = [new Date()];
importantDates.push('12-12-2030');
importantDates.push(new Date());
importantDates.push(3)   // not allowed 