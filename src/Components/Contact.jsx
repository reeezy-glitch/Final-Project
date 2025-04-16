import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="my-12 flex flex-col items-center text-center px-4"
    >
      <h2 className="text-4xl font-bold text-blue-600">Contact</h2>
      <div className="mt-6 text-lg space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">Email:</span> igw7590@students.uc-bcf.edu.ph
        </p>
        <p>
          <span className="font-semibold">Phone:</span> 0935-6666-096
        </p>
        <p>
          <span className="font-semibold">Address:</span> Baguio City, Philippines
        </p>
      </div>
    </section>
  );
};

export default Contact;
