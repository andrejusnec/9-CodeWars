// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a
function replaceAll(seq, find, replace) { 
    let flag = false;   // tikrinu ar gaunu array ar stringa
    if (typeof seq === 'string') {
        flag = true;
    }
    let smth = []
    let isInaString = '';
    for (let i = 0; i < seq.length; i++) { 
        if (seq[i] === find) { //ieskau FIND elementa
            if (!flag) {  // false // jeigu gavau array, tai pushinu i nauja array 
                smth.push(replace)  
            }
        }
        else {
            smth.push(seq[i]) // kai nerandu , tiesiog supushinu esama elementa i nauja masiva
        }
        if (flag) {  // Tas pats dalykas kaip pries tai, tik su string tipo kintamaisiais
            if (seq[i] === find) {
                isInaString += replace;
            }
            else {
                isInaString += seq[i]
            }
        }
    }
    if (typeof seq !== 'string') { // Jeigu gavau i funkcija argumenta, ne stringa, tai grazinu uzpildyta array
        return smth
    }
    else { // kitu atveju grazinu stringa nauja
        return isInaString;
    }
}
console.log(replaceAll([2, 1, 2], 1, 2))