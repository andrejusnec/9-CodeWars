function replaceAll(seq, find, replace) { //seq array
    let flag = false;
    if (typeof seq === 'string') {
        flag = true;
    }
    let smth = []
    let isInaString = '';
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === find) {
            if (!flag) {  // false
                smth.push(replace)
            }
        }
        else {
            smth.push(seq[i])
        }
        if (flag) {
            if (seq[i] === find) {
                isInaString += replace;
            }
            else {
                isInaString += seq[i]
            }
        }
    }
    if (typeof seq !== 'string') {
        return smth
    }
    else {
        return isInaString;
    }
}
console.log(replaceAll([2, 1, 2], 1, 2))