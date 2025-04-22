import React from 'react';
import {
  ShoppingBag,
  LineChart,
  MessageSquare,
  Lock,
  Lightbulb,
  Cpu,
  Rocket,
  Signal,
} from 'lucide-react';

export const BuildingTogether = () => {
  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6 text-[rgb(241,176,55)]" />,
      title: 'Seller Dashboards',
      description:
        'Create intuitive interfaces for rural women to manage their products and sales',
    },
    {
      icon: <LineChart className="h-6 w-6 text-[rgb(241,176,55)]" />,
      title: 'Buyer Interface',
      description:
        'Design seamless shopping experiences optimized for diverse user capabilities',
    },
    {
      icon: <Lock className="h-6 w-6 text-[rgb(241,176,55)]" />,
      title: 'Secure Payments',
      description:
        'Implement secure, user-friendly payment solutions for the rural context',
    },
    {
      icon: <Cpu className="h-6 w-6 text-[rgb(241,176,55)]" />,
      title: 'AI Recommendations',
      description:
        'Build recommendation engines tailored to rural market dynamics',
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[rgb(241,176,55)]" />,
      title: 'Chatbots',
      description:
        'Develop multilingual support systems to assist first-time digital users',
    },
    {
      icon: <Signal className="h-6 w-6 text-[rgb(241,176,55)]" />,
      title: 'Low Bandwidth',
      description:
        'Optimize for rural connectivity challenges and intermittent internet access',
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-[rgb(241,176,55)]" />,
      title: 'Innovative UX',
      description:
        'Create interfaces that work for users with varying levels of tech literacy',
    },
    {
      icon: <Rocket className="h-6 w-6 text-[rgb(241,176,55)]" />,
      title: 'Production-Ready',
      description:
        'Build real-world solutions that scale and adapt to growing needs',
    },
  ];

  return (
    <section
      id="building-together"
      className="py-20 bg-[rgb(17,24,39)] transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="block mb-2 text-sm font-semibold uppercase tracking-wider text-[rgb(241,176,55)]">
            The Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[rgb(238,233,248)]">
            What We're Building Together
          </h2>
          <p className="text-lg text-[rgb(136,71,173)] leading-relaxed">
            With your skills, we'll co-create the foundation of Kottravai's very
            first e-commerce platform—tailored for rural women entrepreneurs.
            All optimized for the unique challenges of Bharat—low bandwidth, low
            tech familiarity, high impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[rgb(30,41,59)] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-[rgb(233,120,118)] group"
            >
              <div className="mb-4 bg-[rgb(17,24,39)] w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[rgb(30,41,59)] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(238,233,248)]">
                {feature.title}
              </h3>
              <p className="text-[rgb(136,71,173)]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#join-us"
            className="inline-flex items-center bg-gradient-to-r from-[rgb(241,176,55)] to-[rgb(233,120,118)] hover:from-yellow-500 hover:to-pink-500 text-white px-8 py-3 rounded-md text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span>Join the Development Team</span>
          </a>
        </div>
      </div>
    </section>
  );
};
