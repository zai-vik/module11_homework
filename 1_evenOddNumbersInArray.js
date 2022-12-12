let array = [1, 2, 4, 4, 0];

function evenOddNumbersInArray() {
  let evenNumbers = [];
  let oddNumbers = [];
  array.forEach(function(item, index, array) {
       if (typeof(item) === 'number') {
         if (item % 2 === 0) {
           evenNumbers.push(item);
         } else {
           oddNumbers.push(item);
         }
       } 
  })
  console.log(`Кол-во чётных чисел: ${evenNumbers.length} \n Кол-во нечётных чисел: ${oddNumbers.length}`);
}

evenOddNumbersInArray();
