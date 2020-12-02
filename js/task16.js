// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
function firstNonConsecutive(arr) {
    let notCon = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        const first = arr[i] + 1
        if (first === arr[i + 1]) {
        }
        else {
            notCon = arr[i + 1];
            return notCon

        }
    }
    return null
}