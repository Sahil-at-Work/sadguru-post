import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, Moon, Sun, Search, Menu, X, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePosts } from '../context/PostsContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { updateFilters } = usePosts();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ searchQuery });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Book className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">EduBlog</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              Home
            </Link>
            <Link to="/quizzes" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 flex items-center space-x-1">
              <GraduationCap className="h-5 w-5" />
              <span>Quizzes</span>
            </Link>
            <Link to="/bookmarks" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              Bookmarks
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              About
            </Link>
          </nav>
          
          {/* Search, Theme Toggle, and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-1 px-3 pr-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </button>
            </form>
            
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/quizzes" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Quizzes</span>
            </Link>
            <Link 
              to="/bookmarks" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bookmarks
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;