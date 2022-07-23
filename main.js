let firstCounter = document.querySelector('.counter1')

var counter1 = Counter();
var counter2 = Counter();
var counter3 = Counter();
let secondCounter = document.querySelector('.counter2')
let thirdCounter = document.querySelector('.counter3')
let firstButton = document.querySelector('.button1');
let secondButton = document.querySelector('.button2');
let thirdButton = document.querySelector('.button3');
firstButton.addEventListener('click', function(){
   firstCounter.value = counter1();
});

secondButton.addEventListener('click', function(){
   secondCounter.value = counter2();
});

thirdButton.addEventListener('click', function(){
   thirdCounter.value = counter3();
});
function Counter(){
   var count = 0;
   return function(){
      count++;
      return count;
   }
}

