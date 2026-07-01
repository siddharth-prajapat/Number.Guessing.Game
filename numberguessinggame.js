let number=62;
let Attempts=1;
let maxattempt=3;
let checkbtn = document.getElementById("checkbtn");
let message = document.getElementById("message");
let attemptsdisplay = document.getElementById("attemptsdisplay");
let winsound = document.getElementById("winsound");
let guesswrong = document.getElementById("guesswrong");
let attmfins = document.getElementById("attmfins");
checkbtn.addEventListener("click",function(){
    clksouncd.play();
     let Usernumber = Number(document.getElementById("guess").value);
     if(Usernumber === number){
message.textContent = "Congratulation You Win The Game 🏆🏆 !! Total Attempts Used " + Attempts;
checkbtn.disabled = true;
winsound.play();
// console.log("Total Attempts Used "+ Attempts);
}
else if(Attempts >= maxattempt){
message.textContent = "Your Attempts are finished🥲🥲!! ";
checkbtn.disabled = true;
attmfins.play();
}
else{
    message.textContent = "Wrong Guess😫😫!! Attempts Left: " +(maxattempt - Attempts);
    Attempts++;
    attemptsdisplay.textContent = "Attempts ==>" + Attempts;
    guesswrong.play();
}
});
restart.addEventListener("click",function(){
     clksouncd.play();
    Attempts=1;
     attemptsdisplay.textContent = "Attempts ==>" + Attempts;
     message.textContent = "Message Box";
     checkbtn.disabled = false;
    //  Attempts++;
     document.getElementById("guess").value = "";
})
// while( Usernumber != number ){
//      if(Attempts == 3){
//         console.log(" Your Attempts is Finished ");
//         console.log("Total Attempts Used "+ Attempts);
//         break;
//     }
//     Usernumber= Number(prompt("Your Guess is wrong! Please Try Again"));
//     Attempts++;
   
// }
// // if(Usernumber === number){
// // console.log("Congratulation You are Win The Game");
// // console.log("Total Attempts Used "+ Attempts);
// // }