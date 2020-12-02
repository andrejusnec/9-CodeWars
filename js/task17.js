//https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript
function solve(arr) {
    let rez = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let flag = true;
        for (let x = i + 1; x < arr.length ; x++) {   // 0
            if (temp <= arr[x]) {
                flag = false;
                break;
            }
        }
        if(flag) {
            rez.push(temp);
        }
    }
    return rez;
}
console.log(solve([75, 47, 42, 56, 13, 55]));
    