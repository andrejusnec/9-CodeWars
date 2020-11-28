//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
function cockroachSpeed(s) { //1km lygu = 100000cm  1s = 3600s
    let cm = s*100000/3600
    //Gaunam greiti km (val) -> paskaiciojam i cm (sekunde) -> 
    //grazinam suapvalinus iki artimiausio sveiko skaicio (floor)
    return Math.floor(cm);
  }
  console.log(cockroachSpeed(1.08));