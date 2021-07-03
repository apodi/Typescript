let apples = 10;   // type inference
apples = 5;

let speed: string = 'slow';
let done: boolean = true;

let nothing: null = null;
let noNothing: undefined = undefined;

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green'];
let numbers: number[] = [1,2,3];
let truths: Boolean[] = [true,false];

//Class
class Car {

}
let car: Car = new Car();

//Object literal
interface Point{
  x: number;
  y: String;
}
let point = {x: 10, y:'dsdf'} as Point ;

//or 

let secondPoint: {x: number; y:string} = {x:10, y:'20'}

//Function
const logNumber: (i:number)=>void = (i) => {
  console.log(i);
}

// When to use Annotations

// 1) Function that returns the 'any' type

const json = '{"x": 10,"y": 20}';
const coordinates: {x: number; y:number} = JSON.parse(json);
console.log(json);

// 2) When we declare a variable on one line
// and initiliaze it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (const word of words){
  if(word === 'green'){
    foundWord = true;
  }
}

//3) Variable whose type can not be inferred correctly
let numbers1 = [-1,-10,5];
let numberAboveZero: boolean | number = false;

for(const number of numbers1 ){
  if(number > 0){
    numberAboveZero = number
  }
}

