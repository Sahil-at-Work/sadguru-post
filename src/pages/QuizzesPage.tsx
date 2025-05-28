import React from 'react';
import { GraduationCap, Clock, Award, ExternalLink } from 'lucide-react';
import { quizzes } from '../data/quiz';

const QuizzesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive Quizzes
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Challenge yourself with our curated collection of subject-specific quizzes. 
              Each quiz is designed to test and enhance your understanding of key concepts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {quizzes.map(quiz => (
              <a
                key={quiz.id}
                href={quiz.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img 
                    src={quiz.imageUrl} 
                    alt={quiz.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white text-sm font-medium rounded-full">
                        {quiz.subject}
                      </span>
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {quiz.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {quiz.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        <span>{quiz.questionCount} questions</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{quiz.duration} minutes</span>
                      </div>
                    </div>
                    
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Take Quiz
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;