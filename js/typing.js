/*==========================================================
        typing.js
        Princekumar Giri Portfolio v3.0
==========================================================*/

const typingElement=document.getElementById("typing");

const roles=[

"Software Engineer",

"Python Developer",

"FastAPI Developer",

"Backend Developer",

"Artificial Intelligence Engineer",

"Full Stack Developer",

"Cloud Enthusiast",

"REST API Developer",

"Problem Solver",

"Tech Explorer"

];

let roleIndex=0;

let charIndex=0;

let deleting=false;

let typingSpeed=90;

let deletingSpeed=45;

let pauseTime=1800;

function typeEffect(){

const currentRole=roles[roleIndex];

if(!deleting){

typingElement.textContent=currentRole.substring(0,charIndex+1);

charIndex++;

if(charIndex===currentRole.length){

deleting=true;

setTimeout(typeEffect,pauseTime);

return;

}

setTimeout(typeEffect,typingSpeed);

}else{

typingElement.textContent=currentRole.substring(0,charIndex-1);

charIndex--;

if(charIndex===0){

deleting=false;

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

}

setTimeout(typeEffect,deletingSpeed);

}

}

document.addEventListener("DOMContentLoaded",()=>{

if(typingElement){

typeEffect();

}

});

/*==============================
                TEXT BLINK CURSOR
==============================*/

const typingCursor = document.createElement("span");

typingCursor.className = "typing-cursor";

typingCursor.innerHTML = "|";

if (typingElement) {
        typingElement.after(typingCursor);
}

/*==============================
        RANDOM TITLE EFFECT
==============================*/

const titles=[

"Building AI Systems",

"Designing Scalable APIs",

"Creating Cloud Solutions",

"Developing Enterprise Software"

];

let titleIndex=0;

setInterval(()=>{

document.title=titles[titleIndex]+" | Princekumar Giri";

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

},5000);

/*==============================
        CONSOLE MESSAGE
==============================*/

console.log("%cWelcome to Princekumar Giri's Portfolio",
"color:#3B82F6;font-size:18px;font-weight:bold;");

console.log("%cInterested in working together?",
"color:#06B6D4;font-size:14px;");

console.log("%c📧 giriprince711@gmail.com",
"color:#ffffff;font-size:14px;");

console.log("%cGitHub: https://github.com/Prince11-dev",
"color:#ffffff;font-size:14px;");

/*==============================
        PERFORMANCE LOG
==============================*/

window.addEventListener("load",()=>{

const loadTime=performance.now();

console.log(

`Portfolio Loaded Successfully in ${Math.round(loadTime)} ms`

);

});

/*==============================
        END OF typing.js
==========================================================*/

/*
============================================================
                🎉 PORTFOLIO V3.0 COMPLETE
============================================================

Files Generated:

✅ index.html
✅ css/style.css
✅ css/responsive.css
✅ css/animations.css
✅ js/main.js
✅ js/typing.js

============================================================
*/