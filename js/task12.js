//https://www.codewars.com/kata/5a55f04be6be383a50000187/train/javascript
function specialNumber(n) {
    let checknum = n.toString(); // 107 tekstas
    const skaiciai = '012345';
    let numberOfSpec = 0;
    for (let i = 0; i < checknum.length; i++) {
        let str = checknum[i];
        let isInaString = skaiciai.indexOf(str)
        if (isInaString > -1) {
            numberOfSpec++;
        }
    }
    if (numberOfSpec === checknum.length) {
        return "Special!!";
    } 
    else {
        return "NOT!!";
    }
}