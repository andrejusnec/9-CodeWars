// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
function enough(cap, on, wait) {
    let sum = on + wait;
    if (sum > cap) { //10
        return sum - cap;
    }
    else {
        return 0;
    }

}
console.log(enough(3, 5, 3));