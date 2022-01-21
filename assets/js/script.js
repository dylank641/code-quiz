//hides start page then shows the question div
//starts timer 
//input question onto page
document.querySelector("#start-btn").addEventListener("click",function(){
    console.log("button clicked");
    document.querySelector(".start-page").style.display = "none"
    document.querySelector("#question-page").style.display = "block"
    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes
        function tick() {
            var timeLeft = document.getElementById("time-left");
            var current_minutes = mins-1
            seconds--;
            timeLeft.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if( seconds > 0 ) {
                setTimeout(tick, 1000);
            } else {
                
                if(mins > 1){
                    
                    countdown(mins-1);           
                        
                }
            }
        }
        tick();
    }
    
    countdown(1);
})
document.getElementById("answer-choice1").innerHTML = "1. function myfunction()";

//start button needs to ask first question
//questions need to be 4 answer choices
//clicking the incorrect answerneeds to deduct time
//clicking the the correct answeer will go to the next question
//timer need s to countdown
//game ends if time runs out
//game ends if all questions are answered correctly
//need page to shoe high score page
//create clear scored button
//create clear  scores button
//scores shoould be able to be seen
//after game to presented with score
//after game be able to input initials