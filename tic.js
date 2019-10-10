var b=document.querySelector("#bt")

var v1=document.querySelector("#one")
v1.addEventListener('click',function() {
	v1.textContent="X";
	v1.style.color='black';
})
v1.addEventListener('dblclick',function(){
	v1.textContent="O";
	v1.style.color='black';
	v1.addEventListener('click',function() {
		v1.textContent="#";
	})
})
var v2=document.querySelector("#two")
v2.addEventListener('click',function() {
	v2.textContent="X";
	v2.style.color='black';
})
v2.addEventListener('dblclick',function(){
	v2.textContent="O";
	v2.style.color='black';
	v2.addEventListener('click',function() {
		v2.textContent="#";
	})
})
var v3=document.querySelector("#three")
v3.addEventListener('click',function() {
	v3.textContent="X";
	v3.style.color='black';
})
v3.addEventListener('dblclick',function(){
	v3.textContent="O";
	v3.style.color='black';
	v3.addEventListener('click',function() {
		v3.textContent="#";
	})
})
var v4=document.querySelector("#four")
v4.addEventListener('click',function() {
	v4.textContent="X";
	v4.style.color='black';
})
v4.addEventListener('dblclick',function(){
	v4.textContent="O";
	v4.style.color='black';
	v4.addEventListener('click',function() {
		v4.textContent="#";
	})
})
var v5=document.querySelector("#five")
v5.addEventListener('click',function() {
	v5.textContent="X";
	v5.style.color='black';
})
v5.addEventListener('dblclick',function(){
	v5.textContent="O";
	v5.style.color='black';
	v5.addEventListener('click',function() {
		v5.textContent="#";
	})
})
var v6=document.querySelector("#six")
v6.addEventListener('click',function() {
	v6.textContent="X";
	v6.style.color='black';
})
v6.addEventListener('dblclick',function(){
	v6.textContent="O";
	v6.style.color='black';
	v6.addEventListener('click',function() {
		v6.textContent="#";
	})
})
var v7=document.querySelector("#seven")
v7.addEventListener('click',function() {
	v7.textContent="X";
	v7.style.color='black';
})
v7.addEventListener('dblclick',function(){
	v7.textContent="O";
	v7.style.color='black';
	v7.addEventListener('click',function() {
		v7.textContent="#";
	})
})
var v8=document.querySelector("#eight")
v8.addEventListener('click',function() {
	v8.textContent="X";
	v8.style.color='black';
})
v8.addEventListener('dblclick',function(){
	v8.textContent="O";
	v8.style.color='black';
	v8.addEventListener('click',function() {
		v8.textContent="#";
	})
})
var v9=document.querySelector("#nine")
v9.addEventListener('click',function() {
	v9.textContent="X";
	v9.style.color='black';
})
v9.addEventListener('dblclick',function(){
	v9.textContent="O";
	v9.style.color='black';
	v9.addEventListener('click',function() {
		v9.textContent="#";
	})
})
b.addEventListener('click',function(){
	v1.textContent="#";
	v2.textContent="#";
	v3.textContent="#";
	v4.textContent="#";
	v5.textContent="#";
	v6.textContent="#";
	v7.textContent="#";
	v8.textContent="#";
	v9.textContent="#";
})