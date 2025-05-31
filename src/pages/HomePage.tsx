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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 py-24">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
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
                className="px-8 py-3 bg-white text-indigo-600 dark:bg-indigo-100 dark:text-indigo-900 rounded-full font-semibold hover:bg-indigo-50 dark:hover:bg-white transition-colors"
              >
                Explore Courses
              </Link>
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-500 dark:bg-indigo-700 text-white rounded-full font-semibold hover:bg-indigo-400 dark:hover:bg-indigo-600 transition-colors ring-1 ring-white/20"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Educational Content Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
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
              className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white dark:bg-indigo-500 rounded-full font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
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