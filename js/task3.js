// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
function invert(array) {
    //Gauti skaiciu masiva -> pakeisti reiksme -> grazinti masiva
    let reverse = [];
    for (let i = 0; i < array.length; i++) {
        reverse.push(array[i] * -1);
        console.log(reverse);
    }
    return reverse ;
 }
 console.log(invert([-5,-3,-5,-10, 5]));