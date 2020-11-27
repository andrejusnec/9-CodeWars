/* https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript */
const flip=(d, a)=>{
    const sorted = a.sort((num1,num2) => num1 - num2); // Sortiravimo funkcija  - reikia moketi/zinoti mintinai
    if (d === 'L') { // nuo didziausio iki maziausio
        return sorted.reverse();
    }
    if(d === 'R') { 
        return sorted; // nuo maziausio iki didziausio
    }
    return 
  }

  console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
  console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
/*
  function sum(a, b) {
      return a + b;
  }
  const atimtis = function (a, b) {
      return a - b;
  }
  const dalmuo = (a, b) => {
      return a / b;
  }
  const sandauga = (a, b) =>  a * b;

   const kvadratu = x => x * x;
   */
/**
 * Isrikioja sarase zmones pagal amziu, nuo jauniausio iki vyriausio
 * @param {Object[]} people  Sarasas zmoniu, kurie pateikti kaip objektai
 * @param {string} people[].name Vardas
 * @param {number} people[].ages Amzius
 * @returns {array<object} Sarasas zmoniu, kurie pateikti kaip objektai isrikioti pagal Age
 */
   function peopleByAge(people) {
       return people.sort((p1,p2) => p1.ages - p2.ages);
   }
const peopleList = [
    {
        name: 'Petras',
        ages: 87
    },
    {
        name: 'Maryte',
        ages: 55
    },
    {
        name: 'Tomas',
        ages: 22
    },
]
const sortedPeople = peopleByAge(peopleList);
const reverseSort = [...sortedPeople].reverse();   // <---- kopija viename lygije

 console.log(peopleList);
 console.log(sortedPeople);
 console.log(reverseSort);

   