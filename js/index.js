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
let f =document.getElementById("first")
let s =document.getElementById("second")
let t =document.getElementById("third")

f.addEventListener("mouseover", function(){
  f.color = "red";
});
f.addEventListener("mouseout", function(){
    f.color = "black";
});

s.addEventListener("mouseover", function(){
  s.color = "red";
});
s.addEventListener("mouseout", function(){
    s.color = "black";
});

t.addEventListener("mouseover", function(){
  t.color = "red";
});
t.addEventListener("mouseout", function(){
    t.color = "black";
});


// 4) Ниже пример HTML-файла с кнопкой отправки. Напишите функцию JavaScript, чтобы получить значения атрибутов href, hreflang, rel, target и type указанной ссылки.

function getAttributes(){
  var x = document.getElementsByTagName("a")[0].getAttribute("href");
  var y = document.getElementsByTagName("a")[0].getAttribute("hreflang");
  var z = document.getElementsByTagName("a")[0].getAttribute("rel");
  var j = document.getElementsByTagName("a")[0].getAttribute("target");
  var i = document.getElementsByTagName("a")[0].getAttribute("type");

  document.getElementById("lis").innerHTML = x + "<br>" + y + "<br>" + z + "<br>" + j + "<br>" + i;
  // document.getElementById("lis").innerHTML = x + "\n" + y + "\n" + z + "\n" + j + "\n" + i;
//   document.getElementById("lis").innerHTML = x;
//   document.getElementById("lis").innerHTML += y;

}
