//https://www.codewars.com/kata/5a55f04be6be383a50000187/train/javascript
function specialNumber(n) {
    let checknum = n.toString(); // 107 tekstas
    const skaiciai = '012345'; //pasirasau kas ieina i special number savoka
    let numberOfSpec = 0; //skaitliukas spec skaiciu
    for (let i = 0; i < checknum.length; i++) { // prasuku cikla, patikrinu kiekviena indexa
        let str = checknum[i];  
        let isInaString = skaiciai.indexOf(str) // tikrinu ar str yra tarp skaiciai stringo
        if (isInaString > -1) {  //jeigu  indexOf neranda sutapimo, jis grazina -1 . Todel as klausiu r grazinama reiksme, yra daugiau nei -1 ?
            numberOfSpec++; // jeigu yra pridedu 1 i skaitliuka
        }
    }
    if (numberOfSpec === checknum.length) { // klausiu ar mano skaitliuk0 rodmuo sutampa su saraso ilgiu
        return "Special!!"; // jei taip sakau Valio
    } 
    else {
        return "NOT!!"; //jei ne tai ne
    }
}