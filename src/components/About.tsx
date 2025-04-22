import React from 'react';
import { Info, Users, Code, Heart } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Info className="w-8 h-8 text-[rgb(241,176,55)]" />,
      title: 'Real-World Impact',
      description:
        "This isn't a classroom project. Your code becomes someone's livelihood, empowering rural women entrepreneurs.",
    },
    {
      icon: <Users className="w-8 h-8 text-[rgb(241,176,55)]" />,
      title: 'Collaborative Building',
      description:
        'Work alongside industry professionals and like-minded developers to create meaningful technology.',
    },
    {
      icon: <Code className="w-8 h-8 text-[rgb(241,176,55)]" />,
      title: 'Skill Development',
      description:
        'Enhance your technical skills while working on production-grade modules with real users and challenges.',
    },
    {
      icon: <Heart className="w-8 h-8 text-[rgb(241,176,55)]" />,
      title: 'Community Focus',
      description:
        'Your work directly bridges the gap between campus innovation and community transformation.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[rgb(17,24,39)] transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="block mb-2 text-sm font-semibold uppercase tracking-wider text-[rgb(241,176,55)]">
            About HerStack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[rgb(238,233,248)]">
            A Movement Born to Empower
          </h2>
          <p className="text-lg text-[rgb(136,71,173)] leading-relaxed">
            We are Kottravai—a movement born to empower women in rural India
            through technology. Now, we're inviting you—the creators, coders,
            and full-stack dreamers—to help us shape something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[rgb(30,41,59)] rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all transform border border-[rgb(233,120,118)]"
            >
              <div className="mb-4 bg-[rgb(17,24,39)] w-16 h-16 rounded-lg flex items-center justify-center shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(238,233,248)]">
                {value.title}
              </h3>
              <p className="text-[rgb(136,71,173)]">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-[rgb(241,176,55)] to-[rgb(233,120,118)] rounded-xl p-8 md:p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-3/5">
              <h3 className="text-2xl font-bold mb-4">
                A Message from Kottravai
              </h3>
              <p className="mb-4 leading-relaxed">
                "This is your chance to be part of something bigger than code.
                To build a platform for her—with empathy, with skill, and with
                you at the heart of it. We're not just building an app. We're
                building a movement—and it starts with you."
              </p>
              <p className="font-medium">— Team Kottravai</p>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="w-48 h-48 bg-[rgb(17,24,39)] rounded-full flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[rgb(238,233,248)] to-[rgb(244,238,255)] flex items-center justify-center">
                  <span className="text-[rgb(136,71,173)] text-lg font-bold text-center px-4">
                    Build With Us,
                    <br />
                    Build For Her
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
