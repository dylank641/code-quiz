var seconds = 60;
let questionNumber = 0;
// var btnChoices = document.createElement("button");
// btnChoices.setAttribute("id", "btn-choices");
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
//hides start page then shows the question div
//starts timer 
//input question onto page
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
// document.getElementById("answer-choice1").innerHTML = "1. function myFunction()";
// document.getElementById("answer-choice2").innerHTML = "2. myFunction()";
// document.getElementById("answer-choice3").innerHTML = "3. function = myFunction()"
// document.getElementById("answer-choice4").innerHTML = "4. makeAFunctionPlease"

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
//     let currentQuestion = questions[questionNumber];
//     let q1 = document.getElementById("question");
//     q1.innerText = currentQuestion.question;
//     let choicesList= document.getElementById("choices");
//     choicesList.innerHTML = "";
//     currentQuestion.choices.map(choice=> {
//         let element = document.createElement('button');
//         element.classList.add("btn-choices");
//         element.setAttribute("id", "idChoices");
//         element.setAttribute("data-answer", choice.answer);
//         element.innerText = choice.text
//         //change to innerHTML to insert a button
//         //insert your choice text and choice answer
//         choicesList.appendChild(element) })
//     questionNumber++;
// }

function displayQuestion(){
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

document.getElementById("answer1").addEventListener("click", function(event) {
    
    if (event.target.tagName == "BUTTON") {
        let answer = questions[questionNumber].choices[0].answer;
        console.log(answer);
         if(answer){
             console.log("nice")
         }
         else{
             console.log("wrong")
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
             console.log("wrong")
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
             console.log("wrong")
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
             console.log("wrong")
         }
    }
    questionNumber++;
    displayQuestion();
})


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
    //         "answer": false
    //     }
    // ]
// }
