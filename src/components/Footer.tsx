import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://in.linkedin.com/in/karunyagunavathy',
    },
  ];

  return (
    <footer className="bg-[rgb(17,24,39)] text-[rgb(136,71,173)] pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="font-bold text-2xl bg-gradient-to-r from-[rgb(136,71,173)] to-[rgb(233,120,118)] bg-clip-text text-transparent">
                HerStack
              </span>
              <span className="text-xs bg-[rgb(241,176,55)] text-white px-2 py-1 rounded-md ml-2">
                by Kottravai
              </span>
            </div>
            <p className="text-[rgb(238,233,248)] mb-6 max-w-md">
              Building technology that empowers rural women entrepreneurs across
              India. Join our mission to create e-commerce solutions that
              transform lives.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-[rgb(238,233,248)] hover:bg-[rgb(241,176,55)] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={link.label}
                >
                  {React.cloneElement(link.icon, {
                    className: 'text-[rgb(136,71,173)]',
                  })}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[rgb(241,176,55)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                'About',
                'Building Together',
                'Developer Journey',
                'Impact',
                'Join Us',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[rgb(238,233,248)] hover:text-[rgb(233,120,118)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[rgb(241,176,55)]">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[rgb(241,176,55)]" />
                <a
                  href="mailto:contact@kottravai.org"
                  className="text-[rgb(238,233,248)] hover:text-[rgb(233,120,118)] transition-colors"
                >
                  contact@kottravai.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[rgb(241,176,55)]" />{' '}
                <a
                  href="tel:+919994714078"
                  className="text-[rgb(238,233,248)] hover:text-[rgb(233,120,118)] transition-colors"
                >
                  +919994714078
                </a>
              </li>
              <li className="text-[rgb(238,233,248)] mt-4">
                HerStack Team
                <br />
                Thenkasi, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgb(136,71,173)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[rgb(238,233,248)] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HerStack. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-[rgb(238,233,248)] hover:text-[rgb(233,120,118)] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[rgb(238,233,248)] hover:text-[rgb(233,120,118)] text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
