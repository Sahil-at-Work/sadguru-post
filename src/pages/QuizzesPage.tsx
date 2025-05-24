import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, Award } from 'lucide-react';
import { quizzes } from '../data/quiz';

const QuizzesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Available Quizzes
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Test your knowledge with our subject-specific quizzes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {quizzes.map(quiz => (
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {quiz.title}
                    </h2>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full">
                      {quiz.subject}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{quiz.questions.length} questions</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{quiz.timeLimit} minutes</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;