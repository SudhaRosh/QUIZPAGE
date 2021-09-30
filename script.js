const QuizDB = [{
        question: "Q1. Which actor debuted with a double role in Kaho Naa Pyaar Hai?",
        a: "Akshay Kumar",
        b: "Shahrukh Khan",
        c: "Hrithik Roshan",
        d: "Abhishek Bachchan",

        ans: "ans3"
    },
    {
        question: "Q2. What was the name of the alien in Koi Mil Gaya?",
        a: "E.T.",
        b: "Jadoo",
        c: "Baloo",
        d: "Roy",

        ans: "ans2"
    },
    {
        question: "Q3.Kabhi Khushi Kabhie Gham' released in 2001 was a big box office hit and starred many top actors of Bollywood. Who among the following did NOT act in the movie?",
        a: "Shah Rukh Khan",
        b: "Hrithik Roshan",
        c: "Amitabh Bachchan",
        d: "Salman Khan",

        ans: "ans4"
    },
    {
        question: "Q4.This movie was nominated for the Best Foreign Film at the Oscars (in 2001) - it was based on a cricket match! Name this movie.",
        a: "Tendulkar",
        b: "Ashoka",
        c: "Lagaan",
        d: "Last Emperor",

        ans: "ans3"

    },
    // {
    //     question: "Name Karan Johar's second directorial film utilising a cast of Amitabh Bachhan, Jaya, Shahrukh, Hritik, Kareena, Kajol and Rani.",

    //     a: "Love You... Hamesha",
    //     b: "Aap Mujhe Achhe lage",
    //     c: "Kabhi Khushi Kabhie Gham",
    //     d: "Pyaar Tune Kya Kiya",


    //     ans: "ans3"


];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;


const loadQuestion = () => {
    // console.log(QuizDB[0].question);
    const questionList = QuizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer
};

const deSselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)

    if (checkedAnswer == QuizDB[questionCount].ans) {
        score++;

    };
    questionCount++;
    deSselectAll();

    if (questionCount < QuizDB.length) {
        loadQuestion();
    } else {

        showScore.innerHTML = `
        <h3> You scored ${score}/${QuizDB.length} ✌ </h3>
        <button class = "btn" onclick ="location.reload()"> Play Again </button>

        `;
        showScore.classList.remove('scoreArea');

    }
});