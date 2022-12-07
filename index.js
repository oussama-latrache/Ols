let lftPoin = document.querySelector('.menu')
let nav = document.querySelector('nav')
let close = document.querySelector('.close')

lftPoin.onclick = function (){
    nav.classList.add("open")
}
close.onclick = function (){
    nav.classList.remove("open")
}
document.onkeyup = function (e) {
    if (e.Key === "Escape"){
        nav.classList.remove("open")
    }
}
let up = document.querySelector('.topbtn')
window.onscroll = function () {
    if(window.scrollY >= 700){
      up.style.cssText = 'display:block;'
    }else{
      up.style.cssText = 'display:none;'
    }
  }
  
  
  up.onclick = function (){
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }

//   cursor

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});
