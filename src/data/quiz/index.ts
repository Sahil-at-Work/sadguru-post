import mathQuiz from './math-quiz';
import physicsQuiz from './physics-quiz';
import chemistryQuiz from './chemistry-quiz';
import biologyQuiz from './biology-quiz';
import { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  mathQuiz,
  physicsQuiz,
  chemistryQuiz,
  biologyQuiz
];

export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};