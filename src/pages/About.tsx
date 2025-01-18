import React from 'react';
import Header from '@/components/Layout/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <main className="container py-8">
        <div className="max-w-2xl mx-auto prose">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to our Timer application! We're dedicated to helping you manage your time effectively
            with our versatile timer and stopwatch tools.
          </p>
          <p className="text-lg mb-4">
            Our application features multiple timer presets, a precise stopwatch with lap functionality,
            and carefully curated background videos to enhance your focus and productivity.
          </p>
          <p className="text-lg">
            Whether you're studying, exercising, or managing your work sessions, our timer is here to
            help you stay on track and achieve your goals.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;