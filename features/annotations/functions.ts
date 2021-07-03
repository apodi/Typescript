//function annotation
const add = (a:number ,b:number): number => {
  return a + b;
}


//variable way to annotate function
const add1: (a: number, b:number) => number = (a ,b) => {
  return a + b;
}

//Note: we should always avoid type inference for function

//Normal named function
function divide(a:number, b: number): number{
  return a/b;
}

//Anonymonous functions 
const divide1 = function(a: number, b: number): number {
  return a/b;
}

// type void
const logger = (message: string): void => {
  console.log(message);
}

// type never
const throwError = (message: string) => {
  throw new Error(message);
}


// type never
const throwError1 = (message: string): string => {
  if(!message){
    throw new Error(message);
  }
  return message
}

//Destructuring with Annotations
const foreCast = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (foreCast : {date: Date, weather: string}): void => {
//   console.log(foreCast.date);
// }
// logWeather(foreCast)

const logWeather = ({date, weather} : {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}
logWeather(foreCast)