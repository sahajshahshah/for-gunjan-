const stars = document.querySelector(".stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.opacity = Math.random();
    stars.appendChild(star);
}document.getElementById("continueBtn").addEventListener("click", function () {

document.querySelector(".container").innerHTML = `

<h1 class="title" id="typing"></h1>

<p class="subtitle" id="sub"></p>

`;

const title = "Every great story...";
const subtitle = "starts with a single moment.";

let i = 0;

function typeTitle() {
    if(i < title.length){
        document.getElementById("typing").innerHTML += title.charAt(i);
        i++;
        setTimeout(typeTitle,60);
    }else{
        document.getElementById("sub").innerHTML = subtitle;

        setTimeout(()=>{
            document.getElementById("sub").innerHTML += "<br><br>.";
        },500);

        setTimeout(()=>{
            document.getElementById("sub").innerHTML += ".";
        },1000);

        setTimeout(()=>{
            document.getElementById("sub").innerHTML += ".";
        },1500);

        setTimeout(()=>{
        document.querySelector(".container").innerHTML = `

<h1 class="title">I don't know how this story ends...</h1>

<p class="subtitle">
But I'm really happy that you're here reading this.
</p>

<button id="nextBtn">Continue 🤍</button>

`;
            document.getElementById("nextBtn").addEventListener("click", function () {

document.querySelector(".container").innerHTML = `
<h1 class="title">But there is something I need to tell you... 🤍</h1>

<p class="subtitle">
Ever since you came into my life,<br><br>
ordinary days started feeling a little more special.
</p>

<button id="finalBtn">Continue 🤍</button>
`;
document.getElementById("finalBtn").addEventListener("click", function () {

document.querySelector(".container").innerHTML = `
<h1 class="title">You make life brighter. 🤍</h1>

<p class="subtitle">
And this is only the beginning...
</p>
`;

});
});
        },3000);
    }
}

typeTitle();

});
document.getElementById("finalBtn").addEventListener("click", function () {

document.querySelector(".container").innerHTML = `
<h1 class="title">So... here's the truth. 🤍</h1>

<p class="subtitle">
Every page you just read had only one purpose.<br><br>

To tell you something I've been keeping in my heart for a long time... ✨
</p>

<button id="lastBtn">Continue 🤍</button>
`;

document.getElementById("lastBtn").addEventListener("click", function () {

document.querySelector(".container").innerHTML = `
<h1 class="title">Gunjan... 🤍</h1>

<p class="subtitle">
You make ordinary moments feel special.<br><br>

And there's one question I've wanted to ask... ❤️
</p>

<h2 style="margin-top:25px;line-height:1.6;">
Would you give me a chance... 🤍
</h2>
`;

document.querySelector(".container").innerHTML = `

<h1 class="title">
Thank you... 🤍
</h1>

<p class="subtitle">
No matter what your answer is,<br><br>

Thank you for taking the time
to read every word on this page.

It truly means a lot to me. ✨
</p>

`;});

});
setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🤍";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (16 + Math.random()*12) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

},5000);
