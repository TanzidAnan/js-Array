const numbers = [25, 68, 45, 98, 78, 45, 65, 78, 45];
// numbers.reverse();
// console.log(numbers)


let rev_number = [];
for(const num of numbers){
    // console.log(num);
    rev_number.unshift(num)
}
console.log(rev_number)
console.log(numbers)