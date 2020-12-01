//https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

function maxMultiple(divisor, bound) {
    let rez = [];
     let max = -Infinity; let min = +Infinity;
    for (let i = 1; i <= bound; i++) {
        if (i % divisor === 0) {
            rez.push(i)
        }
    }
    for(let i = 0; i < rez.length; i++) {
        if(rez[i] > max) {
            max = rez[i];
        }
        if(rez[i] < min) {
            min = rez[i];
        }
    }
    return max;
}

console.log(maxMultiple(2, 7)); // 6