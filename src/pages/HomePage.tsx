import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import PostCard from '../components/PostCard';
import TagCloud from '../components/TagCloud';
import { usePosts } from '../context/PostsContext';
import { Menu, GraduationCap, Users, Award, Target, BookOpen, Phone, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { posts } = usePosts();
  
  // Get top 3 posts by likes
  const topPosts = [...posts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const topPerformers = [
    {
      name: "Aarav Sharma",
      school: "St. Xavier's High School",
      year: "2023",
      achievement: "AIR 34 in JEE Advanced",
      score: "98.8%",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg"
    },
    {
      name: "Priya Patel",
      school: "Delhi Public School",
      year: "2023",
      achievement: "AIR 56 in NEET",
      score: "97.6%",
      image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg"
    },
    {
      name: "Rahul Singh",
      school: "Ryan International School",
      year: "2022",
      achievement: "International Physics Olympiad Silver Medalist",
      score: "96.4%",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SADGURU SCIENCE CLASSES
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Our Guidance, Student's Hardwork, Parents' Satisfaction
            </p>
            <p className="text-lg mb-12 text-indigo-100">
              Empowering students with knowledge, skills, and confidence to excel in science and beyond. Join our community of achievers today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/learn"
                className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
              >
                Explore Courses
              </Link>
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              SADGURU SCIENCE CLASSES has been a beacon of excellence in science education since 2002. We specialize in preparing students for competitive exams and building a strong foundation in scientific concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl text-center">
              <GraduationCap className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Expert Guidance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our experienced faculty members provide specialized coaching in Physics, Chemistry, Biology, and Mathematics with proven teaching methodologies.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl text-center">
              <Users className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Personalized Attention
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain small batch sizes to ensure individual attention, regular assessments, and personalized feedback to improve student performance.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl text-center">
              <Award className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Track Record of Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our students consistently achieve top ranks in competitive exams including JEE, NEET, and Olympiads year after year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our guiding principles that shape our approach to education and student development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <Target className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To be a beacon of excellence in science education, consistently nurturing and empowering secondary and higher secondary students to achieve their academic and personal goals.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Establishing ourselves as a recognized and respected institution throughout Virar
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Creating lasting positive impact on students' lives
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Maintaining enduring quality in education delivery
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <BookOpen className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To provide high-quality, structured classroom coaching that fosters a deep understanding of scientific concepts while creating a supportive learning environment.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Creating a supportive and encouraging learning environment
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Empowering students with knowledge, skills, and confidence
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Maintaining continuous improvement and adaptation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Establishing strong teacher-student-parent bonds
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Results
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our students' achievements are a testament to our teaching methodology and their dedication. Here are some of our recent top performers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topPerformers.map((performer, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden">
                <img
                  src={performer.image}
                  alt={performer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {performer.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {performer.school}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Year: {performer.year}
                    </span>
                    <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                      {performer.score}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {performer.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join us and be a part of our legacy of academic excellence and achievement. Let us help you reach your full potential.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Enroll Today
          </a>
        </div>
      </div>

      {/* Featured Educational Content Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Educational Content
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our most popular educational resources and learning materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {topPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/learn"
              className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
            >
              <span>Explore All Content</span>
              <ArrowUpRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;