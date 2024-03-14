import React,{useState,useEffect} from 'react'

function Risults({Answers}) {
  const [correctAnswer,setCorrectAnswer]=useState(0);
  useEffect(()=>{
    setCorrectAnswer(0);
    for (const key in Answers) {
      if (Answers[key].userAnswer == Answers[key].answer) {
        setCorrectAnswer(prevCount => prevCount + 1);
      }
    }
  },[Answers])
  console.log(Answers);
  
  return (
    <div className='w-full h-48 flex justify-center flex-col items-center text-blue-950 text-2xl'>
      <h3>your corrected answer is : {correctAnswer} out of 20.</h3>
      <p>attempted: {Object.keys(Answers).length}.</p>
    </div>
  )
}

export default Risults
