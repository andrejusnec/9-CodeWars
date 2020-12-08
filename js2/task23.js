// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
function menFromBoys(arr){ 

//1. Is gauto array noriu ispjaustyti dublicatus
    for(let i = 0; i < arr.length-1; i++) { 
        for(let x = [i+1]; x < arr.length ; x++) { // x + 1 turi daeiti iki galo
            if(arr[i] === arr[x]) {  //tikrinu kiekviena elementa su sekanciu
                console.log(arr[x])
                arr.splice(x, 1) // iskerpu dublicata naudodamas splice ( pirmas argumentas ka iskerpu, antras kiek elementu??)
            }
        } 
    }
    let newArr = []  //pasidarau 2 tuscius array 
    let newArr2 = []
    for(let i = 0; i< arr.length; i++) { //i viena sudedu skaicius kurie yra lyginiai , o i kita neliginius
      if(arr[i] % 2 === 0) {
          newArr.push(arr[i])
      } else { 
          newArr2.push(arr[i])
      }
    }
    newArr2.sort(function(a, b){return b-a}); // sugrupuoju naudodamas sort metoda // b - a : mazejimo tvarka
    newArr.sort(function(a, b){return a-b}); // a -b : didejimo
    
    return newArr.concat(newArr2) // sujungiu du array i viena
  }
  console.log(menFromBoys([7, 3, 17, 14, 17]));