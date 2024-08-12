let randomNumber1=Math.floor(Math.random() * 6) + 1;
let randomDiceImage="dice"+ randomNumber1 + ".png";
let randomImageSource= "./dom_images/" + randomDiceImage; 
var image1= document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource);
let text1="Player"+ randomNumber1;
document.getElementsByClassName("player")[0].innerHTML=text1;

let randomNumber2= Math.floor(Math.random() * 6) + 1;
let randomImageSource2="./dom_images/dice" + randomNumber2 + ".png";
let randomimage2= document.querySelectorAll("img")[2].setAttribute("src",randomImageSource2);
randomimage2;
let text2="Player" + randomNumber2;
document.getElementsByClassName("player")[1].innerHTML=text2;

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins!";
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 Wins!";
}

else
{
    document.querySelector("h1").innerHTML="Draw!";
}