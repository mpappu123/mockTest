import { useState, useEffect } from 'react'
import useQuestion from "../hooks/useQuestion"
import { useTimer } from 'use-timer';
import QuestionData from './QuestionData';
import Options from './Options';
import Risults from './Risults';

function Quiz() {
  const [qid, setQid] = useState(1);
  const [questions, setQuestions] = useState({});
  const [timerStarted,setTimerStarted]=useState(false);
  const [isTestOver,setIsTestOver]=useState(false);
  const questionData = useQuestion(qid);
  const [answer, setAnswer] = useState({});
  const { time, start, pause, reset, status } = useTimer({
    initialTime:600,
    endTime:0,
    timerType: 'DECREMENTAL',
    onTimeOver:()=>{
      setIsTestOver(true);
    }
  });

  useEffect(() => {
    if (timerStarted) {
      start();
    }
  }, [timerStarted, start]);
  useEffect(() => {
    setQuestions(questionData || {});
  }, [questionData])
  const handleNext = () => {
    if (qid < 20) {
      setQid((prevQid) => prevQid + 1);
    }
  };

  const handlePrevious = () => {
    setQid((prevQid) => Math.max(prevQid - 1, 1));
  };
  const updateAnswer =(key, data) => {
    setAnswer(prevState => ({
      ...prevState,
      [key]: data,
    }));
  };

  const handleOptionSelect = (optionValue) => {
    if (!timerStarted){
      setTimerStarted(true)
    }
    const answerData={userAnswer:optionValue,answer:questions.options[questions.answer]}
    updateAnswer(qid,answerData);
  };
  return (
    <div className='md:w-2/3 w-11/12 h-auto bg-white rounded-md m-auto shadow-xl p-3'>
      {isTestOver?(<Risults Answers={answer}/>):(
      <div className='flex flex-col items-center'>
        <div className='w-full h-auto p-4 flex flex-col justify-between items-center border-b-2 border-b-blue-900'>
          <div className='w-full flex justify-center items-start h-auto p-2'>
            <h3 className='text-blue-200 text-sm bg-blue-800 border-blue-800 rounded-lg p-2 md:p-4 md:text-2xl'>Free Mock Test</h3>
          </div>
          <div className='w-full flex justify-between items-start h-auto p-2'>
            <h3 className='text-gray-600 text-sm md:text-2xl'>Test Duration:15 Min</h3>
            <h3 className='text-red-800 text-sm md:text-2xl'>Time:{time}</h3>
          </div>
        </div>
          {questions.question ? (<div className="md:w-4/5 w-full h-4/5 m-3">
            <QuestionData qid={qid} question={questions.question}/>
            <Options questions={questions} handleOptionSelect={handleOptionSelect}/>
          </div>) : (<p>Loading....</p>)}
          <div className='w-full flex h-16 justify-between items-center pl-6 pr-6'>
            <button className='btn btn-outline btn-secondary' onClick={handlePrevious}>previous</button>
            <button className='btn btn-outline btn-secondary' onClick={handleNext}>next</button>
          </div>
      </div>)}
    </div>
  )
}

export default Quiz
