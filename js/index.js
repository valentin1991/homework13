// 1) Создайте переменную со значением 5, а также создайте программу, которая будет просить пользователя ввести число из всплывающего окна и сверять это число с числом в первой переменной. До тех пор, пока пользователь не введет число 5, просите пользователя это сделать и выдавайте ему всплывающее окно.
let v = 5;
while (prompt("Введите число",5) != v) {
  prompt("Введите число",5);
}
// 2) Напишите программу на JavaScript, которая будет получать ширину и высоту окна (при чем каждый раз, когда размер окна изменяется).
window.onresize = function(){

var w = window.innerWidth
  document.documentElement.clientWidth
  document.body.clientWidth;

var h = window.innerHeight
  document.documentElement.clientHeight
  document.body.clientHeight;

var x = document.getElementById("demo");
x.innerHTML = "Ширина окна: " + w + ", Высота: " + h + ".";
}


// 3) Напишите программу на JavaScript, которая найдет все жирные слова в абзаце, что представлен ниже. Жирные слова должны становиться красного цвета при наведении на сам абзац. Абзац:
// Простой пример небольшого текста, в котором есть выделенные жирным слова.
// При наведении жирные слова стают красного цвета, а когда курсор забирается, то их цвет возвращается обратно.
