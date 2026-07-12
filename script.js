document.getElementById("continueBtn").addEventListener("click", function () {

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
        },3000);
    }
}

typeTitle();

});
