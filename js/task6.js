// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
function rowWeights(array) {
    // Reikia sukurti du array, ir gauta array isdelioti duomenis pirmas i viena, sekantis i kita
    // is gautu dvieju array reikia apskaicioti elementu vidurki
    let arr1 = [];
    let arr2 = [];
    let rez = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (let i = 0; i < array.length; i += 2) {
        arr1.push(array[i]);
    }
    if (array.length === 1) { rez[1] = 0 }
    else {
        for (let i = 1; i < array.length; i += 2) {
            arr2.push(array[i]);
        }
        let sum2 = arr2.reduce(reducer);
        rez[1] = sum2;
    }
    let sum1 = arr1.reduce(reducer);
    rez[0] = sum1;

    return rez;
}
console.log(rowWeights([80]));
console.log(rowWeights([70, 58, 75, 34, 91]));