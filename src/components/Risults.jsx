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
  
  return (
    <div className='w-full h-48 flex justify-center items-center text-green-800 text-2xl'>
      <p>your corrected answer is :{correctAnswer}</p>
    </div>
  )
}

export default Risults
