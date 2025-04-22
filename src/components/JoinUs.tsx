import React, { useState } from 'react';
import { Check, User } from 'lucide-react';
import heroImage from '../assets/images/logo.png'; // Correct image import (if using src/assets/images)

export const JoinUs = () => {
  const [submitted, setSubmitted] = useState(false);

  console.log('Hero Image Path:', heroImage);

  // Define Google Form URL
  const googleFormUrl = 'https://forms.gle/aB1rM7ccWFngD7xK7';

  // Function to open Google Form
  const openGoogleForm = () => {
    window.open(googleFormUrl, '_blank');
    setSubmitted(true); // Mark as submitted once the form is opened
  };

  // Define colors for the Join Us section (matching Hero section)
  const themeClasses =
    'bg-gradient-to-br from-[rgb(136,71,173)] to-[rgb(233,120,118)] text-white';

  return (
    <section id="join-us" className={`py-20 ${themeClasses}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="block mb-2 text-sm font-semibold uppercase tracking-wider text-[#f59e0b]">
            Join Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We’d Love to Have You on Board
          </h2>
          <p className="text-lg leading-relaxed">
            If you want to join us, click the button below to open the Google
            Form and submit your details.
          </p>
          <img
            src={heroImage} // Or use "/assets/images/logo.png" if it's in the public folder
            alt="Hero"
            className="w-full h-full object-cover object-center " // Adjust opacity if needed
          />
        </div>

        {submitted ? (
          <div className="text-center">
            <Check className="mx-auto mb-4 text-4xl text-[#f59e0b]" />
            <h3 className="text-2xl font-semibold text-[#591c8e]">
              Form Opened Successfully!
            </h3>
            <p className="text-lg text-[#591c8e]">
              You’ve successfully opened the form. Please fill it out and
              submit!
            </p>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={openGoogleForm}
              className="px-8 py-3 bg-gradient-to-r from-[#f59e0b] to-[#f43f5e] text-white rounded-md"
            >
              Open Google Form
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinUs;
