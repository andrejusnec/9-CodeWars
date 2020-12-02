//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
function switchItUp(number) { //1
    const arr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    for (let i = 0; i <= arr.length; i++) {
        if (number === i) {
            return arr[i];
        }
    }
}