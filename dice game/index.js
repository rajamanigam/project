var randonNumber1=Math.floor(Math.random()*6)+1;
var randomImageSource = "images/dice" + randonNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randonNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource = "images/dice" + randonNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);

if(randonNumber1>randonNumber2){
    document.querySelector("h1").innerHTML=" 🚩Player 1 wins";
}

else if(randonNumber1<randonNumber2){
    document.querySelector("h1").innerHTML=" 🚩Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML=" Draw!";
}

