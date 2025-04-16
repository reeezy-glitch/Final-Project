import React from 'react';
import './App.css';

import AboutMe from './components/AboutMe.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-white to-gray-100 py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-black">
            <span className="text-red-600">My</span>Profile
          </h1>
          <nav className="hidden md:flex space-x-6 text-lg font-medium">
            <a href="#about" className="hover:text-red-500">ABOUT ME</a>
            <a href="#education" className="hover:text-red-500">EDUCATION</a>
            <a href="#experience" className="hover:text-red-500">EXPERIENCE</a>
            <a href="#skills" className="hover:text-red-500">SKILLS</a>
            <a href="#contact" className="bg-white border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-500 hover:text-white transition">
              Contact Me
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 space-y-20">
        <section id="about"><AboutMe /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Iris Argawan G. Wailan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
