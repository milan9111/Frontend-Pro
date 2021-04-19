const data = [
   {
       questions: 'Question 1',
       answers: [
           {
               id: '1',
               value: 'Answer 1',
               correct: true,
           },
         
           {
               id: '2',
               value: 'Answer 2',
               correct: false,
           },
 
           {
               id: '3',
               value: 'Answer 3',
               correct: false,
           },
 
       ]
   },
 
   {
         questions: 'Question 2',
         answers: [
             {
                 id: '4',
                 value: 'Answer 4',
                 correct: false,
             },
         
             {
                 id: '5',
                 value: 'Answer 5',
                 correct: true,
             },
 
             {
                 id: '6',
                 value: 'Answer 6',
                 correct: false,
             },
 
         ]
   },   
 
     {
         questions: 'Question 3',
         answers: [
             {
                 id: '7',
                 value: 'Answer 7',
                 correct: false,
             },
         
             {
                 id: '8',
                 value: 'Answer 8',
                 correct: true,
             },
 
             {
                 id: '9',
                 value: 'Answer 9',
                 correct: false,
             },
 
         ]
     },
     
     {
         questions: 'Question 4',
         answers: [
             {
                 id: '10',
                 value: 'Answer 10',
                 correct: false,
             },
         
             {
                 id: '11',
                 value: 'Answer 11',
                 correct: true,
             },
 
             {
                 id: '12',
                 value: 'Answer 12',
                 correct: false,
             },
 
         ]
    },
    
     {
         questions: 'Question 5',
         answers: [
             {
                 id: '13',
                 value: 'Answer 13',
                 correct: false,
             },
         
             {
                 id: '14',
                 value: 'Answer 14',
                 correct: true,
             },
 
             {
                 id: '15',
                 value: 'Answer 15',
                 correct: false,
             },
 
         ]
     },
     
     {
         questions: 'Question 6',
         answers: [
             {
                 id: '16',
                 value: 'Answer 16',
                 correct: false,
             },
         
             {
                 id: '17',
                 value: 'Answer 17',
                 correct: true,
             },
 
             {
                 id: '18',
                 value: 'Answer 18',
                 correct: false,
             },
 
         ]
     },   
 
     {
         questions: 'Question 7',
         answers: [
             {
                 id: '19',
                 value: 'Answer 19',
                 correct: false,
             },
         
             {
                 id: '20',
                 value: 'Answer 20',
                 correct: true,
             },
 
             {
                 id: '21',
                 value: 'Answer 21',
                 correct: false,
             },
 
         ]
     },  
 
     {
         questions: 'Question 8',
         answers: [
             {
                 id: '22',
                 value: 'Answer 22',
                 correct: false,
             },
         
             {
                 id: '23',
                 value: 'Answer 23',
                 correct: true,
             },
 
             {
                 id: '24',
                 value: 'Answer 24',
                 correct: false,
             },
 
         ]
     },   
 
     {
         questions: 'Question 9',
         answers: [
             {
                 id: '25',
                 value: 'Answer 25',
                 correct: false,
             },
         
             {
                 id: '26',
                 value: 'Answer 26',
                 correct: true,
             },
 
             {
                 id: '27',
                 value: 'Answer 27',
                 correct: false,
             },
 
         ]
     },   
 
     {
         questions: 'Question 10',
         answers: [
             {
                 id: '28',
                 value: 'Answer 28',
                 correct: false,
             },
         
             {
                 id: '29',
                 value: 'Answer 29',
                 correct: true,
             },
 
             {
                 id: '30',
                 value: 'Answer 30',
                 correct: false,
             },
 
         ]
     },   
 
     {
         questions: 'Question 11',
         answers: [
             {
                 id: '31',
                 value: 'Answer 31',
                 correct: false,
             },
         
             {
                 id: '32',
                 value: 'Answer 32',
                 correct: true,
             },
 
             {
                 id: '33',
                 value: 'Answer 33',
                 correct: false,
             },
 
         ]
     },   
 
     {
         questions: 'Question 12',
         answers: [
             {
                 id: '34',
                 value: 'Answer 34',
                 correct: false,
             },
         
             {
                 id: '35',
                 value: 'Answer 35',
                 correct: true,
             },
 
             {
                 id: '36',
                 value: 'Answer 36',
                 correct: false,
             },
 
         ]
     },   
 
     {
         questions: 'Question 13',
         answers: [
             {
                 id: '37',
                 value: 'Answer 37',
                 correct: false,
             },
         
             {
                 id: '38',
                 value: 'Answer 38',
                 correct: true,
             },
 
             {
                 id: '39',
                 value: 'Answer 39',
                 correct: false,
             },
 
         ]
     },   
 
     {
         questions: 'Question 14',
         answers: [
             {
                 id: '40',
                 value: 'Answer 40',
                 correct: false,
             },
         
             {
                 id: '41',
                 value: 'Answer 41',
                 correct: true,
             },
 
             {
                 id: '42',
                 value: 'Answer 42',
                 correct: false,
             },
 
         ]
     },   
 
     {
         questions: 'Question 15',
         answers: [
             {
                 id: '43',
                 value: 'Answer 43',
                 correct: false,
             },
         
             {
                 id: '44',
                 value: 'Answer 44',
                 correct: true,
             },
 
             {
                 id: '45',
                 value: 'Answer 45',
                 correct: false,
             },
 
         ]
     },   
 
 ];
 
 
 // наверное, сами вопросы лучше перенести в отдельный файл и подключить его к этому? будет норм, если я сделаю json формат?
 // я смогу туда потом поместить ссылки на изображение и музыку в каждый объект в массиве?
  
 let localResults = {   // объект, где будут храниться ответы отвечающего 
     
 }; 
 
 const quiz = document.getElementById('quiz');
 const questions = document.getElementById('questions');
 const indicator = document.getElementById('indicator');
 const results = document.getElementById('results');
 const btnNext = document.getElementById('btn-next');
 const btnRestart = document.getElementById('btn-restart');
 
 
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
         
         // проверка на переход к следующему вопросу
 
         if (data.length === nextQuestionIndex) {  //если вопросы закончились -- результат
             questions.classList.add('questions--hidden'); //добавляем классы к html элементам в results
             indicator.classList.add('indicator--hidden'); //добавляем классы к html элементам в results
             results.classList.add('indicator--visible'); //добавляем классы к html элементам в results
             btnNext.classList.add('btn-next--hidden'); //добавляем классы к html элементам в results
             btnRestart.classList.add('btn-restart--visible'); //добавляем классы к html элементам в results
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
  
         renderQuestions(0); // возврат к первому вопросу
     }
 });
 
 renderQuestions(0);