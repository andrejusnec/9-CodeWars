// https://www.codewars.com/kata/5a4b16435f08299c7000274f
const sumSquareEvenRootOdd = ns => {
    let result = [];
    for(let i = 0; i < ns.length; i++) {
      if(ns[i] % 2 === 0){
        result.push(ns[i]*ns[i])
      } else {
        result.push(Math.sqrt(ns[i]));
      }
    }
    console.log(result);
    let sum = 0;
    for(let x = 0; x < result.length; x++) {
        sum += result[x];
    }
    console.log(sum);
    return sum = +(sum.toFixed(2));
  }
  console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]));