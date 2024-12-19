let dadoUm =  Math.floor(Math.random() * 6 ) + 1;  
let dadoDois = Math.floor(Math.random() * 6 ) + 1; 

let dadoUmSrc = "images/dice" + dadoUm + ".png";
let dadoDoisSrc = "images/dice" + dadoDois + ".png";

document.querySelector(".img1").setAttribute("src", dadoUmSrc);
document.querySelector(".img2").setAttribute("src", dadoDoisSrc);

if(dadoUm > dadoDois){
    document.querySelector("h1").textContent = " Player 1 Wins! 🚩";
    document.querySelector("footer").textContent = "Follow me on Instagram: @lucassss.n";
}else{
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }