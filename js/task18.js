// https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2/train/javascript
function smallEnough(a, limit) {
    function checknum(num) {
         return num <= limit;
    }
    let rez = a.every(checknum) // arr.every(funkcija) metodas () tikrina, ar visi masyvo elementai išlaiko testą (numatytą kaip funkciją).
    return rez;
}
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));