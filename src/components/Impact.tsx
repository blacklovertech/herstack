import React from 'react';
import { Quote } from 'lucide-react';

export const Impact = () => {
  const impactStats = [
    { number: '70%', label: 'of rural women lack digital access' },
    { number: '3x', label: 'income increase with digital tools' },
    { number: '45M+', label: 'potential women entrepreneurs' },
    { number: '100%', label: 'your impact on their future' },
  ];

  // Added testimonials array for dynamic rendering
  const testimonials = [
    {
      name: 'Lakshmi Devi',
      role: 'Handcraft Entrepreneur',
      location: 'Theni',
      quote:
        "I've been making handcrafted goods for 15 years, but could only sell to my village. With this platform, my products now reach customers in cities. My income has doubled, and I've hired two women from my community. Technology has opened a new world for me.",
    },
    {
      name: 'Anjali',
      role: 'Organic Farming Leader',
      location: 'Thenkasi',
      quote:
        'Before joining Kottravai, I struggled to sell my farm produce. Now, my products reach new markets, and I am able to employ others in my village. The platform has brought us closer to the world.',
    },
    {
      name: 'Nagalakshmi',
      role: 'Weaver and Textile Artisan',
      location: 'Madurai',
      quote:
        "The platform has transformed my business. I've learned how to market my textiles, and sales have increased fivefold. With the income, I was able to improve my family's standard of living.",
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-[rgb(17,24,39)] text-[rgb(238,233,248)] relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="block mb-2 text-sm font-semibold uppercase tracking-wider text-[rgb(241,176,55)]">
            Real World Change
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Impact of Your Code
          </h2>
          <p className="text-lg text-[rgb(136,71,173)] leading-relaxed">
            When you build with Kottravai, your technical skills create tangible
            change in the lives of women entrepreneurs across rural India. This
            isn't just development—it's transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[rgb(30,41,59)] rounded-xl p-6 shadow-sm text-center border border-[rgb(233,120,118)]"
            >
              <span className="block text-3xl md:text-4xl font-bold text-[rgb(241,176,55)] mb-2">
                {stat.number}
              </span>
              <p className="text-[rgb(238,233,248)]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 -left-6">
            <Quote className="w-12 h-12 text-[rgb(241,176,55)] opacity-50" />
          </div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[rgb(30,41,59)] rounded-xl p-8 md:p-10 shadow-xl border border-[rgb(233,120,118)] relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <div className="w-24 h-24 rounded-full bg-[rgb(241,176,55)] flex items-center justify-center mx-auto">
                      <span className="text-[rgb(136,71,173)] font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="font-semibold text-[rgb(238,233,248)]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[rgb(233,120,118)]">
                        {testimonial.role}, {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-lg text-[rgb(238,233,248)] italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-[rgb(238,233,248)] mb-6">
            Your code will create thousands of stories like Lakshmi's. Ready to
            make an impact?
          </p>
          <a
            href="#join-us"
            className="inline-flex items-center bg-gradient-to-r from-[rgb(241,176,55)] to-[rgb(233,120,118)] hover:from-[rgb(241,176,55)] hover:to-[rgb(136,71,173)] text-white px-8 py-3 rounded-md text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span>Apply to Build With Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
