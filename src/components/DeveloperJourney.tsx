import React from 'react';
import { Star, Code, Users, Camera, BookOpen } from 'lucide-react';

export const DeveloperJourney = () => {
  const benefits = [
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: 'Production Experience',
      description:
        'Work on live, production-grade modules that directly impact users',
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Professional Mentorship',
      description:
        'Learn from industry professionals who guide your technical growth',
    },
    {
      icon: <Camera className="h-6 w-6 text-white" />,
      title: 'Documentary Spotlight',
      description:
        "Be featured in 'Behind the Stack' documentary series across platforms",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: 'Teaching Opportunity',
      description:
        'Train rural youth in basic tech tools, building your leadership skills',
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Apply & Join',
      description:
        'Submit your application and join our team of purpose-driven developers',
    },
    {
      step: '02',
      title: 'Learn & Collaborate',
      description:
        'Work with mentors and peers to understand the unique challenges',
    },
    {
      step: '03',
      title: 'Build & Iterate',
      description:
        'Create solutions with real feedback from rural women entrepreneurs',
    },
    {
      step: '04',
      title: 'Launch & Grow',
      description:
        'See your work transform lives and open new career opportunities',
    },
  ];

  return (
    <section
      id="developer-journey"
      className="py-20 bg-[rgb(17,24,39)] text-[rgb(238,233,248)]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="block mb-2 text-sm font-semibold uppercase tracking-wider text-[rgb(241,176,55)]">
            Your Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Journey, Captured & Celebrated
          </h2>
          <p className="text-lg text-[rgb(136,71,173)] leading-relaxed">
            This is not a silent collaboration. We're turning the spotlight on
            you. From late-night brainstorming to first-feature releases, we'll
            capture your proudest "build" moments and share them as a
            documentary series.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[rgb(238, 233, 248)] to-[rgb(203,120,118)] rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Star className="h-6 w-6 mr-2" /> Why You'll Thrive With Us
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1 bg-white/20 rounded-lg p-2">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-white/90">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[rgb(30,41,59)] rounded-xl p-8 border border-[rgb(233,120,118)]">
            <h3 className="text-2xl font-bold mb-6 text-[rgb(238,233,248)]">
              Your Development Path
            </h3>

            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[rgb(241,176,55)] to-[rgb(233,120,118)] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {step.step}
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="h-full w-px bg-[rgb(136,71,173)] mx-auto my-2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-semibold text-lg mb-1 text-[rgb(238,233,248)]">
                      {step.title}
                    </h4>
                    <p className="text-[rgb(136,71,173)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-[rgb(30,41,59)] rounded-xl p-8 shadow-xl border border-[rgb(241,176,55)]">
          <h3 className="text-xl font-bold mb-4 text-center text-[rgb(238,233,248)]">
            "Behind the Stack: The Builders of Kottravai"
          </h3>
          <p className="text-[rgb(136,71,173)] text-center mb-6">
            Our documentary series will showcase your journey from concept to
            creation, highlighting both the technical challenges and the human
            impact of your work.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Brainstorming',
              'Coding Sessions',
              'Field Research',
              'User Testing',
            ].map((moment, index) => (
              <div
                key={index}
                className="aspect-video bg-[rgb(17,24,39)] border border-[rgb(136,71,173)] rounded-lg flex items-center justify-center"
              >
                <p className="font-medium text-[rgb(241,176,55)] text-sm">
                  {moment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
