var seconds = 60;
let questionNumber = 0;


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
    console.log("finished");
    let initials = document.getElementById("initials").value;
    console.log(initials);
    clearInterval(seconds);
    document.getElementById("question-page").style.display = "none";
    document.getElementById("end-page").style.display = "block";
    document.getElementById("your-score").textContent = "Your final score is " + seconds + ".";
    document.getElementById("submit-score").addEventListener("click", function(){
        scoreboard();
    })
}
function scoreboard(){
    document.getElementById("end-page").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    let initials = document.getElementById("initials").value;
    console.log(initials);
    for (i = 0; i < 5; i++){
        let scoresEl = document.createElement("li");
        scoresEl.innerHTML = initials + " - " + seconds;
        document.getElementById("scores").appendChild(scoresEl);

    }
}


 // {"key": 1,
    // "question": "What is the correct way to start a function?",
    // "choices": [
    //     {
    //         "text": "function myFunction()",
    //         "answer": true
    //     },
    //     {
    //         "text": "myFunction",
    //         "answer": false
    //     },
    //     {
    //         "text": "function = myFunction()",
    //         "answer": false
    //     },
    //     {
    //         "text": "makeAFunctionPlease",
    //         "answer": falsess
    //     }
    // ]
// }
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
// function displayQuestion() {

