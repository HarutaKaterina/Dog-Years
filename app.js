const myAge = 33; // am setat variabila const cu varsta mea
let earlyYears = 2; // am setat variabila let cu primii 2 ani
earlyYears *= 10.5; // inmultim primii 2 ani la 10.5
let laterYears = myAge - 2; //am setat variabila din care aflam anii urmatori
laterYears *= 4;// inmultim anii (31) la 4
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;// aflam anii mei dog years
let myName = 'Katerina'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`);
