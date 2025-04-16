import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="my-12 flex flex-col items-center text-center px-4"
    >
      <h2 className="text-4xl font-bold text-blue-600">Experience</h2>
      <ul className="mt-6 space-y-6 text-lg text-gray-700">
        <li>
          <p className="font-semibold text-gray-800">
            Intern – Network Security Assistant / Student
          </p>
          <p className="text-sm">University of the Cordilleras | October 2023 – April 2025</p>
        </li>
        <li>
          <p className="font-semibold text-gray-800">
            Cybersecurity Workshop Participant
          </p>
          <p className="text-sm">DICT Training Program | 2024</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;