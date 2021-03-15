//am setat constanta pentru kelvin
const kelvin = 293;
// am setat constanta pentru celsius
const celsius = kelvin - 273;
//am convertit in fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rotungesc
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);