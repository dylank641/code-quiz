var seconds = 60;
let questionNumber = 0;
let score = 0;
let number = 0;
let highScores = [];
let questions = [
    {
        key:1,
        question: "What is the correct way to start a function?",
        choices: [
            {
                text: "function myFunction()",
                answer: true
            },
            {
                text: "myFunction",
                answer: false
            },
            {
                text: "function = myFunction()",
                answer: false
            },
            {
                text: "makeAFunctionPlease",
                answer: false
            }
        ],
        
    },
    {
        key: 2,
        question: "How do you call a function named 'pizza'?",
        choices: [
            {
                text: "eatPizza",
                answer: false
            },
            {
                text: "eatMyPizza",
                answer: false
            },
            {
                text:"call pizza()",
                answer: false
            },
            {
                text:"pizza()",
                answer: true
            }
        ],
        
    },
    {
        key:3,
        question: "Where is the correct place on an HTML element to insert your Javascript",
        choices: [
            {
                text: "The top of the CSS sheet",
                answer: false
            },
            {
                text: "Top of the 'body' element",
                answer: false
            },
            {
                text: "Bottom of the 'body' element",
                answer: true
            },
            {
                text:"In the 'head' tag",
                answer: false
            }      
        ],  
    },
]

document.querySelector("#start-btn").addEventListener("click",function(){
    document.querySelector(".start-page").style.display = "none"
    document.querySelector("#question-page").style.display = "block"
    function countdown(minutes) {
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
    displayQuestion();
})

document.getElementById("viewHigh").addEventListener("click", function(){
    document.querySelector(".start-page").style.display = "none";
    document.getElementById("viewHigh").style.display = "none"; 
    scoreboard();
})

function displayQuestion(){
    if ((questionNumber < questions.length) && (seconds > 0)){
    let currentQuestion = questions[questionNumber];
    let q1 = document.getElementById("question");
    let a1 = document.getElementById("answer1");
    let a2 = document.getElementById("answer2");
    let a3 = document.getElementById("answer3");
    let a4 = document.getElementById("answer4");
    q1.innerText = currentQuestion.question;
    a1.innerText = currentQuestion.choices[questionNumber].text;
    a2.innerText = currentQuestion.choices[1].text;
    a3.innerText = currentQuestion.choices[2].text;
    a4.innerText = currentQuestion.choices[3].text;
    }
    else{
        endGame();
    }
    
}

document.getElementById("answer1").addEventListener("click", function(event) {
    
    if (event.target.tagName == "BUTTON") {
        let answer = questions[questionNumber].choices[0].answer;
        console.log(answer);
         if(answer){
             console.log("nice")
         }
         else{
             console.log("wrong");
             if (seconds > 10){
                 seconds = seconds - 10;
             }
             else{
                 seconds = 0;
             }
         }
    }
    questionNumber++;
    displayQuestion();
})
document.getElementById("answer2").addEventListener("click", function(event) {
    
    if (event.target.tagName == "BUTTON") {
        let answer = questions[questionNumber].choices[1].answer;
        console.log(answer);
         if(answer){
             console.log("nice")
         }
         else{
            console.log("wrong");
            if (seconds > 10){
                seconds = seconds - 10;
            }
            else{
                seconds = 0;
            }
        }
    }
    questionNumber++;
    displayQuestion();
})
document.getElementById("answer3").addEventListener("click", function(event) {
    
    if (event.target.tagName == "BUTTON") {
        let answer = questions[questionNumber].choices[2].answer;
        console.log(answer);
         if(answer){
             console.log("nice")
         }
         else{
            console.log("wrong");
            if (seconds > 10){
                seconds = seconds - 10;
            }
            else{
                seconds = 0;
            }
        }
    }
    questionNumber++;
    displayQuestion();
})
document.getElementById("answer4").addEventListener("click", function(event) {
    
    if (event.target.tagName == "BUTTON") {
        let answer = questions[questionNumber].choices[3].answer;
        console.log(answer);
         if(answer){
             console.log("nice")
         }
         else{
            console.log("wrong");
            if (seconds > 10){
                seconds = seconds - 10;
            }
            else{
                seconds = 0;
            }
        }
    }
    questionNumber++;
    displayQuestion();
})

function endGame(){
    document.getElementById("viewHigh").style.display = "none";
    document.getElementById("countdown-timer").style.display = "none";
    score = seconds;
    document.getElementById("question-page").style.display = "none";
    document.getElementById("end-page").style.display = "block";
    document.getElementById("your-score").textContent = "Your final score is " + score + ".";
    document.getElementById("submit-score").addEventListener("click", function(){
        document.getElementById("viewHigh").style.display = "none";
        let initials = document.getElementById("initials").value;
        let highScores = JSON.parse(localStorage.getItem("highscores"));
        if (highScores == null){
            highScores = [];
        }
        let newHighScores = {
            initials: initials,
            score: score
        }
        highScores.push(newHighScores);
        localStorage.setItem("highscores", JSON.stringify(highScores))
        scoreboard();
    })
}

function scoreboard(){
    document.getElementById("end-page").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    //let initials = document.getElementById("initials").value;
    let highScores = JSON.parse(localStorage.getItem("highscores"));
    for (i = 0; i < highScores.length; i++){
        let initials = highScores[i].initials;
        let score = highScores[i].score;
        let scoresEl = document.createElement("li");
        scoresEl.innerHTML = initials + " - " + score;
        document.getElementById("scores").appendChild(scoresEl);
    }
    document.getElementById("clear").addEventListener("click", function(){
        localStorage.clear("highscores");
        document.getElementById("scores").style.display = "none";
    })
}
