function intUser(a, b) {
  let i = setInterval(function() {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

intUser(prompt('Введите число, с которого начнётся отсчёт'), 
       prompt('Введите число, на котором закончится отсчёт'));
