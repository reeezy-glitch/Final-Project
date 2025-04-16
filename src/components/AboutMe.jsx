import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="my-12 flex flex-col items-center text-center px-4"
    >
      <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
      <p className="text-lg mt-6 max-w-3xl leading-relaxed text-gray-700">
        Hello, I'm <span className="font-semibold">Iris Argawan G. Wailan</span>. 
        I am currently taking <span className="font-medium">Bachelor of Science in Information Technology</span> major in 
        <span className="font-medium text-red-500"> Network and Security</span> at the 
        University of the Cordilleras. I am now in my 2nd year.
        <br /><br />
        A few fun facts about me: I love animals! I have a dog named <span className="italic">Gorri</span> and even raise chickens — 
        which sometimes help out when we run out of dish ideas!
      </p>
    </section>
  );
};

export default AboutMe;
