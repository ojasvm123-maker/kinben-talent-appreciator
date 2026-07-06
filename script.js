function animateValue(id, start, end, duration){

let obj = document.getElementById(id);

let range = end - start;

let current = start;

let increment = end > start ? 1 : -1;

let stepTime = Math.abs(Math.floor(duration / range));

let timer = setInterval(function(){

current += increment;

obj.textContent = current + "+";

if(current == end){

clearInterval(timer);

}

}, stepTime);

}

animateValue("players",0,10000,2000);

animateValue("villages",0,500,2000);

animateValue("academies",0,250,2000);

document.getElementById("accuracy").textContent="95%";
/* VIDEO PREVIEW */

const upload =
document.getElementById("videoUpload");

const preview =
document.getElementById("videoPreview");

if(upload){

upload.addEventListener("change",function(){

const file =
this.files[0];

if(file){

const url =
URL.createObjectURL(file);

preview.src = url;

preview.style.display =
"block";

}

});

}

/* PLAYER REGISTRATION */

const playerForm =
document.getElementById("playerForm");

if(playerForm){

playerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

let name =
document.getElementById(
"playerName").value;

alert(
"Player Registered Successfully: "
+ name
);

playerForm.reset();

}
);

}
/* AI ANALYSIS */

const analyzeBtn =
document.getElementById("analyzeBtn");

if(analyzeBtn){

analyzeBtn.addEventListener(
"click",
function(){

let speed =
Math.floor(Math.random()*21)+80;

let technique =
Math.floor(Math.random()*21)+75;

let fitness =
Math.floor(Math.random()*21)+70;

let overall =
Math.floor(
(speed+technique+fitness)/3
);

document.getElementById(
"overallScore"
).innerHTML =
"Overall Score: " +
overall +
"/100";

document.getElementById(
"speedBar"
).style.width =
speed + "%";

document.getElementById(
"speedBar"
).innerHTML =
speed + "%";

document.getElementById(
"techniqueBar"
).style.width =
technique + "%";

document.getElementById(
"techniqueBar"
).innerHTML =
technique + "%";

document.getElementById(
"fitnessBar"
).style.width =
fitness + "%";

document.getElementById(
"fitnessBar"
).innerHTML =
fitness + "%";

}
);

}

/* SEARCH PLAYER */

const searchInput =
document.getElementById(
"searchInput"
);

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){

let filter =
this.value.toLowerCase();

let rows =
document.querySelectorAll(
"#leaderboardTable tr"
);

rows.forEach((row,index)=>{

if(index===0) return;

let text =
row.innerText.toLowerCase();

row.style.display =
text.includes(filter)
? ""
: "none";

});

});

}
/* SPORT FILTER */

const sportFilter =
document.getElementById("sportFilter");

if(sportFilter){

sportFilter.addEventListener(
"change",
function(){

let value = this.value;

let cards =
document.querySelectorAll(
".filter-card"
);

cards.forEach(card=>{

if(value==="all"){

card.style.display="block";

}
else{

if(card.classList.contains(value)){

card.style.display="block";

}
else{

card.style.display="none";

}

}

});

});

}

/* CONTACT FORM */

const contactForm =
document.getElementById(
"contactForm"
);

if(contactForm){

contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Message Sent Successfully!"
);

contactForm.reset();

}
);

}
/* LOADER */

window.addEventListener(
"load",
function(){

setTimeout(function(){

document.getElementById(
"loader"
).style.display =
"none";

},1500);

});

/* DARK LIGHT MODE */

const themeBtn =
document.getElementById(
"themeBtn"
);

if(themeBtn){

themeBtn.addEventListener(
"click",
function(){

document.body.classList.toggle(
"light-mode"
);

if(
document.body.classList.contains(
"light-mode"
)
){

themeBtn.innerHTML="☀️";

}else{

themeBtn.innerHTML="🌙";

}

});

}

/* BACK TO TOP */

const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
function(){

if(window.scrollY>300){

topBtn.style.display=
"block";

}else{

topBtn.style.display=
"none";

}

});

topBtn.addEventListener(
"click",
function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* REVEAL EFFECT */

function reveal(){

const reveals =
document.querySelectorAll(
".reveal"
);

reveals.forEach(item=>{

const windowHeight =
window.innerHeight;

const revealTop =
item.getBoundingClientRect().top;

if(revealTop <
windowHeight-100){

item.classList.add(
"active"
);

}

});

}

window.addEventListener(
"scroll",
reveal
);

reveal();