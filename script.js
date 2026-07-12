document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("continueBtn");

    button.addEventListener("click", () => {

        button.innerHTML = "Loading... 🤍";

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            alert("🌌 Welcome to Project Sunrise.\n\nOur story begins here...");

            button.innerHTML = "Continue 🤍";
            button.style.transform = "scale(1)";

        },1000);

    });

});
