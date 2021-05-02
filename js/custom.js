showAvatar();

async function showAvatar() {

    try {
            let data;
            let response = await fetch('https://api.jsonbin.io/b/608e6a2a8a409667ca02ef20');
            data = await response.json();



let localResults = {   // объект, где будут храниться ответы отвечающего 
    
};


const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');
const btnResult = document.getElementById('btn-result');
const btnClose = document.getElementById('btn-close');
const sectionInputName = document.querySelector('.section-input-name');
const sectionQuiz = document.querySelector('.section-quiz');
const inputName = document.querySelector('.input-name');
const btnInputName = document.querySelector('.btn-input-name');
const sectionResult = document.querySelector('.section-result');
const sectionResultName = document.querySelector('.section-result-name');
const sectionResultPoints = document.querySelector('.section-result-points');


let nameUser;

inputName.addEventListener('change', () => {
    nameUser = inputName.value;
    calcResult();
})


btnInputName.addEventListener('click', (event) => {
    if (event.target) {
        sectionInputName.classList.remove('active-block');
        sectionQuiz.classList.add('active-block');
    } 
})


const renderQuestions = (index) => { //функция рендер вопросов
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnawers = () => data[index].answers // рендер ответа к вопросу 
    .map((answer) => `
            <li>
            <label><input class="answer-input" type="radio" name=${index} value=${answer.id}>${answer.value}</label>
            </li>
    `)
    .join('');
    // рендер вопроса
    questions.innerHTML = `    
    <div class="quiz-questions-item">
                    <div class="quiz-questions-item-question">${data[index].questions}</div>
                    <ul class="quiz-questions-item-answers">${renderAnawers()}</ul>
              </div>
    `;
};

const renderResults = () => { //функция рендер ответов
    
    let content = '';

    const getClassname = (answer, questionIndex) => { // функция добавления цвета к правильным и неправильным ответам
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) { //если ответ неправильный и пользователь его выбрал
            classname = 'answer--invalid'; //неправильный вариант ответа
        } else if (answer.correct) { // если ответ правильный 
            classname = 'answer--valid'; //правильный вариант ответа
        }

        return classname;
    };  
    
    const getAnswers = (questionIndex) => data[questionIndex].answers 
      .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`) // функция перебора ответов 
      .join('');
    

    data.forEach((question, index) => { // добавление ответов 
        content +=  `
          <div class="quiz-results-item">
                <div class="quiz-results-item-question">${question.questions}</div> 
                <ul class="quiz-results-item-answers">${getAnswers(index)}</ul>
          </div>
        `; // вывод вопроса и выбранного ответа
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => { //функция рендер индикатора вопросов
    indicator.innerHTML = `${currentStep}/${data.length}`;
};

quiz.addEventListener('change', (event) => { //событие на отмечание ответа
    if(event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value; // передача данных ключ:значение в localResults
        btnNext.disabled = false;

        
    }
});

quiz.addEventListener('click', (event) => { //кнопки Вперед, Рестарт
    if(event.target.classList.contains('btn-next')) { // ивент на кнопку Вперед
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        document.body.style.backgroundImage = `url(source/img/${Math.floor((Math.random()*39)+1)}.jpg)`; 
        

        

        

        
        // проверка на переход к следующему вопросу

        if (data.length === nextQuestionIndex) {  //если вопросы закончились -- результат
            questions.classList.add('questions--hidden'); //добавляем классы к html элементам в results
            indicator.classList.add('indicator--hidden'); //добавляем классы к html элементам в results
            results.classList.add('indicator--visible'); //добавляем классы к html элементам в results
            btnNext.classList.add('btn-next--hidden'); //добавляем классы к html элементам в results
            btnRestart.classList.add('btn-restart--visible'); //добавляем классы к html элементам в results
            btnResult.classList.add('btn-restart--visible');//добавляем классы к html элементам в results
            document.body.style.backgroundImage = 'url(source/img/background/imgFinish.jpg)';
            renderResults();
        } else {
            renderQuestions(nextQuestionIndex); // если нет -- следующий вопрос 
        }

        btnNext.disabled = true;
    }

    if(event.target.classList.contains('btn-restart')) { // ивент на кнопку Рестарт

        let localResults = {}; // обнуляем результаты, раннее записанные в объект
        results.innerHTML = ''; //  обнуляем результаты в html

        questions.classList.remove('questions--hidden');  // удаляем классы у html элементов
        indicator.classList.remove('indicator--hidden'); // удаляем классы у html элементов
        results.classList.remove('indicator--visible'); // удаляем классы у html элементов
        btnNext.classList.remove('btn-next--hidden'); // удаляем классы у html элементов
        btnRestart.classList.remove('btn-restart--visible'); // удаляем классы у html элементов
        btnResult.classList.remove('btn-restart--visible'); // удаляем классы у html элементов
 
        renderQuestions(0); // возврат к первому вопросу
    }

    if(event.target.classList.contains('btn-result')) {
        sectionQuiz.classList.remove('active-block');
        sectionResult.classList.add('active-block');
    }

    
});

renderQuestions(0);

btnClose.addEventListener('click', () => {
    window.close();
})

function calcResult() {
    //let result = ; 
    sectionResultName.innerHTML = nameUser;
  }

}  catch(err) {
    console.log(err);
  }
}