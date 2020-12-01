//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript
const reverseSeq = n => {
    let rez = [];
    for (let i = n; i > 0; i--) {
        rez.push(i);
    }
    return rez;
}
console.log(reverseSeq(5));