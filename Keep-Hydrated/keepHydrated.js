/*
1 hour = 0.5 litres
Math.floor() - rounds the number to the lower option, so 4.9 -> 4
To get litres we just need to multiply time with the water ration, which is 0.5 litres -> time * 0.5
*/

let time = 7.8;

function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(time));