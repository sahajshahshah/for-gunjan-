const stars = document.querySelector(".stars");

for (let i = 0; i < 200; i++) {
    const star = document.createElement("span");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.opacity = Math.random();
    stars.appendChild(star);
}

const container = document.querySelector(".container");

function scene1() {

container.innerHTML = `

<h1 class="title" id="typing"></h1>

<p class="subtitle" id="sub"></p>

`;

const title = "Every great story...";
const subtitle = "starts with a single moment.";

let i = 0;

function type(){

if(i < title.length){

document.getElementById("typing").innerHTML += title.charAt(i);

i++;

setTimeout(type,60);

}else{

document.getElementById("sub").innerHTML = subtitle;

setTimeout(()=>{

document.getElementById("sub").innerHTML += "<br><br>...";

},700);

setTimeout(scene2,2500);

}

}

type();

}

function scene2(){

container.innerHTML = `

<h1 class="title">

I don't know exactly when it happened...

</h1>

<p class="subtitle">

But somewhere between ordinary conversations...

you became someone very special to me.

</p>

<button id="next1">

Continue 🤍

</button>

`;

document.getElementById("next1").onclick = scene3;

}

function scene3(){

container.innerHTML = `

<h1 class="title">

Every moment with you...

</h1>

<p class="subtitle">

Made life feel a little brighter.

</p>

<button id="next2">

Continue 🤍

</button>

`;

document.getElementById("next2").onclick = scene4;

}
function scene4(){

container.innerHTML = `

<h1 class="title">

I tried to find the perfect words...

</h1>

<p class="subtitle">

But every sentence somehow felt too small
to describe what I truly feel.

</p>

<button id="next3">

Continue 🤍

</button>

`;

document.getElementById("next3").onclick = scene5;

}

function scene5(){

container.innerHTML = `

<h1 class="title">

If you've made it this far...

</h1>

<p class="subtitle">

Maybe my words were worth your time.<br><br>

There is just one last thing
I want to ask you...

</p>

<button id="next4">

Continue 🤍

</button>

`;

document.getElementById("next4").onclick = proposal;

}

function proposal(){
document.body.classList.add("proposal");
container.innerHTML = `

<h1 class="title">

Gunjan... 🤍

</h1>

<p class="subtitle">

I don't know what tomorrow holds.

But I know I'd regret
never telling you how I feel.

</p>

<h2 style="margin-top:25px;line-height:1.7;">

Would you give me a chance? 🤍

</h2>

<div style="margin-top:35px;">

<button id="yesBtn">

🤍 Yes

</button>

<button id="timeBtn" style="margin-left:12px;">

💭 I Need More Time

</button>

</div>

`;

document.getElementById("yesBtn").onclick = yesEnding;

document.getElementById("timeBtn").onclick = timeEnding;

}
function yesEnding(){

container.innerHTML = `

<h1 class="title">

Thank you... 🤍

</h1>

<p class="subtitle">

You just made this one of
the happiest moments of my life.<br><br>

Thank you for giving me
a chance. ❤️

</p>

`;

}

function timeEnding(){

container.innerHTML = `

<h1 class="title">

Take your time... 🤍

</h1>

<p class="subtitle">

You never have to rush
your feelings.<br><br>

Whatever your answer is...

I'll always respect it.

Thank you for reading
my story. ✨

</p>

<button id="restart">

Return to the stars ✨

</button>

`;

document.getElementById("restart").onclick = startStory;

}

function startStory(){
    document.body.classList.remove("proposal");

    scene1();

}

scene1();

}

document.getElementById("continueBtn").onclick = startStory;

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="🤍";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(16+Math.random()*12)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},5000);

