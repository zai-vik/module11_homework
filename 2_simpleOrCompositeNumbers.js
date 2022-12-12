let x = prompt('Введите цифру или число не больше 1000:');

simpleOrCompositeNumbers(x);

function simpleOrCompositeNumbers(x) {
  if (x > 1000) {
    alert('Данные неверны!');
  } else {
    if (x % 2 != 0) {
      alert('Число простое');
    } else if (x == 1 || x == 0) {
      alert('Ни составное, ни простое число');
    } else if (x == 2) {
      alert('Число простое');
    } else {
      alert('Число составное');
    }
  }
}
