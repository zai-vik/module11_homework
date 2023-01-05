let str;
let number = prompt('Введите число');

function primeOrDifficultNumber(number) {
  let res = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      res++;
    }
  }
  if (number > 1000) {
    str = 'Данные неверны';
  } else if (res <= 2) {
    str = ` Число ${number} простое`;
  } else if (res > 2) {
    str = ` Число ${number} непростое`;
  }
  return str;
}
    
console.log(primeOrDifficultNumber(number));
