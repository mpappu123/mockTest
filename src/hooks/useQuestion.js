import React, { useState, useEffect } from 'react';
import QuestionData from '../components/questions.json';

function useQuestion(questionId) {
  const [questionData, setQuestionData] = useState({});
  useEffect(() => {
    if (QuestionData && QuestionData.questions) {
      const foundQuestion = QuestionData.questions.find((question) => question.id === questionId);
      setQuestionData(foundQuestion || {});
    }
  }, [questionId]);
  return questionData;
}

export default useQuestion;
