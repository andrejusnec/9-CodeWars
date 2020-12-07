// https://www.codewars.com/kata/5bd776533a7e2720c40000e5/train/javascript
function pendulum(values) {
    let newArr = [];
    values.sort(function(a, b) {
        return a - b;
      }); // -100 // 3 5 10      10 5 /-100\ 3 5 
      newArr.push(values[0])
      for(let i = 1; i < values.length; i+=2) {  
        newArr.push(values[i]);
        newArr.unshift(values[i+1])
      }
      if(values.length % 2 === 0) {
          newArr.shift();
      }

    return newArr
}
console.log(pendulum([3, 10, 5, -100]))