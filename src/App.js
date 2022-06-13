import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
// test
export default function App() {
  const questions = [
    {
      questionText: 'How many protons does a hydrogen atom have?',
      answerOptions: [
        { answerText: '1', isCorrect: false},
        { answerText: '2', isCorrect: false},
        { answerText: '3', isCorrect: true},
        { answerText: '4', isCorrect: false},
      ],
    },
    {
      questionText: 'Which group in the periodic table are known as the most reactive metals?',
      answerOptions: [
        { answerText: 'Group 1', isCorrect: false},
        { answerText: 'Group 2', isCorrect: false},
        { answerText: 'Group 3', isCorrect: true},
        { answerText: 'Group 4', isCorrect: false},
      ],
    },
    {
      questionText: '',
      answerOptions: [
        { answerText: '', isCorrect: false},
        { answerText: '', isCorrect: false},
        { answerText: '', isCorrect: true},
        { answerText: '', isCorrect: false},
      ],
    },
    {
      questionText: '',
      answerOptions: [
        { answerText: '', isCorrect: false},
        { answerText: '', isCorrect: false},
        { answerText: '', isCorrect: true},
        { answerText: '', isCorrect: false},
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswerOnClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (nextQuestion > questions.length - 1) {
      alert("You've reached the end.");
    } else {
      setCurrentQuestion(nextQuestion);
    }
  }

  return (
    <div className='app'>
      { showScore ? (
        <div className='score-section'>You scored {correctAnswers} out of {questions.length}</div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>{currentQuestion + 1}</span>/{questions.length}
              {/* span used to easily style things, like div except inline */}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, num) => {
              return(<button key={num} onClick={() => handleAnswerOnClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)
            })}
          </div>
        </>
      )}
    </div>
  );
}