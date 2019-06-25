/*document.addEventListener("DOMContentLoaded",function (event) {
var arr_h2 = document.querySelectorAll('#ul1 li');
for (var i=0;i<arr_h2.length;i++){
    arr_h2[i].style.fontFamily='Arial';
    arr_h2[i].style.color='red';
    arr_h2[i].style.fontSize='50px';

}
arr_h2[1].style.color='Yellow';
arr_h2[2].style.color='green';


var newLi = document.createElement('li');
var ul1=document.querySelector('#ul1');
newLi.innerHTML = 'Привет, мир!';
newLi.style.fontSize='50px';
newLi.style.color='blue';
ul1.appendChild(newLi);


var ul=document.querySelector('#lio');
ul.innerHTML='';



for(var i=0;i<=100;i++){
    var newLi=document.createElement('li');
    newLi.innerHTML=i;
    newLi.style.color='white';
    ul.appendChild(newLi);

}
*/
document.addEventListener("DOMContentLoaded",function (event) {
var h1=document.querySelector('h1');
var counter=0;
h1.onclick=function() {

if (h1.style.color=='blue'){ h1.style.color='red';}
    else {
    h1.style.color='blue';
}
counter++;
h1.innerHTML=('Part') + counter;

}
});