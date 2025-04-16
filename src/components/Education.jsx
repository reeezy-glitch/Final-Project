import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="my-12 flex flex-col items-center text-center px-4"
    >
      <h2 className="text-4xl font-bold text-blue-600">Education</h2>
      <ul className="mt-6 space-y-3 text-lg text-gray-700 list-disc list-inside">
        <li>
          <span className="font-semibold">Pinto Elementary School</span> – Elementary School
        </li>
        <li>
          <span className="font-semibold">Sta. Maria National High School</span> – Junior High School
        </li>
        <li>
          <span className="font-semibold">Sta. Maria National High School - SHS</span> – Senior High School
        </li>
        <li>
          <span className="font-semibold">University of the Cordilleras</span> – College (BSIT - Network & Security)
        </li>
      </ul>
    </section>
  );
};

export default Education;
