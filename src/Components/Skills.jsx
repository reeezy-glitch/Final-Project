import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="my-12 flex flex-col items-center text-center px-4">
      <h2 className="text-4xl font-bold text-blue-600">Skills</h2>
      <ul className="mt-6 space-y-6 text-lg text-gray-700">
        <li>
          <p className="font-semibold text-gray-800">Network Security</p>
        </li>
        <li>
          <p className="font-semibold text-gray-800">Troubleshooting and Technical Support</p>
        </li>
        <li>
          <p className="font-semibold text-gray-800">Basic Python Scripting</p>
        </li>
        <li>
          <p className="font-semibold text-gray-800">Team Collaboration</p>
        </li>
        <li>
          <p className="font-semibold text-gray-800">Problem Solving</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
