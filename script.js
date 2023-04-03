const toogleBtnEle = document.getElementById("toogleBtn");
const dropMenuEle = document.getElementById("dropMenu");
const chToggleEle = document.getElementById("chToggle");
const expandDropBtn1Ele = document.getElementById("expandBtn1");
const expandDropBtn2Ele = document.getElementById("expandBtn2");
const expandDropBtn3Ele = document.getElementById("expandBtn3");
const expandDropBtn4Ele = document.getElementById("expandBtn4");
const expandDropDown1Ele = document.getElementById("expandDropDown1");
const expandDropDown2Ele = document.getElementById("expandDropDown2");
const expandDropDown3Ele = document.getElementById("expandDropDown3");
const expandDropDown4Ele = document.getElementById("expandDropDown4");
function f(){
   let m = dropMenuEle.classList.toggle("open");
   if(m){
      chToggleEle.classList.remove('fa-solid','fa-bars');
      chToggleEle.classList.add('fa-solid','fa-xmark');
   }
   else{
      chToggleEle.classList.remove('fa-solid','fa-xmark');
      chToggleEle.classList.add('fa-solid','fa-bars');
      expandDropDown1Ele.classList.remove("open");
      expandDropDown2Ele.classList.remove("open");
      expandDropDown3Ele.classList.remove("open");
      expandDropDown4Ele.classList.remove("open");
   }
}
toogleBtnEle.addEventListener('click',f);

function fun1(){
   expandDropDown1Ele.classList.toggle("open");
}
expandDropBtn1Ele.addEventListener('click',fun1);
function fun2(){
   expandDropDown2Ele.classList.toggle("open");
}
expandDropBtn2Ele.addEventListener('click',fun2);
function fun3(){
   expandDropDown3Ele.classList.toggle("open");
}
expandDropBtn3Ele.addEventListener('click',fun3);
function fun4(){
   expandDropDown4Ele.classList.toggle("open");
}
expandDropBtn4Ele.addEventListener('click',fun4);