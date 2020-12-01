// https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript
function balancedNum(number) {
    const str = Array.from(String(number), Number); // Skaiciaus pavertimas i objekta skaiciu 
    let balanced1 = [];
    let balanced2 = [];
    let index = Math.round(str.length / 2); // Math.round - suapvalina skaiciu pagal matematika( 4.4 = 4// 4.5 = 5)
    for (let i = 0; i < index - 1; i++) {
        balanced1.push(str[i]);
    }
    let reversed = str.reverse(); // Masivo eiliskumo pakeitimas  pvz ( [1, 2, 3] ->> [3, 2, 1])
    for(let i = 0 ; i < index - 1; i++) {
        balanced2.push(reversed[i])
    }
    let result1 = balanced1.reduce(function(sum, elem) { // reduce faktiskai yra ciklas, kuris iskviecia funkcija kiekvienam masivo
        //elementui. Sita funkcija priima pirma argumenta, praeitos funkcijos reiksme(rezulatat) YRA KAUPIAMASIS. Antrasis argumentas
        //priima masivo elementa.
        return sum + elem;
    }, 0);
    let result2 = balanced2.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);

    if(result1 === result2) {
        return 'Balanced'
    } else {
        return 'Not Balanced'

    }
}
balancedNum(23); // 2 = 3 