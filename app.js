$(document).ready(function(){

const colors = ['red','green','blue','navy','rgba(125,125,125,0.6)'];

const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
	let random = Math.floor(Math.random() * colors.length);
	const body = document.body;
	body.style.backgroundColor = colors[random];
	console.log(random);
});

});




