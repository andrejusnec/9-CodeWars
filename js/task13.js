// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
function tidyNumber(n){
    let rez = true;
const str = Array.from(String(n), Number)
    for(let i = 0; i < str.length - 1;i++) {
        if(str[i] > str[i+1]) {
            rez = false;
        }
    }
    return rez;
}
console.log(tidyNumber(1645));