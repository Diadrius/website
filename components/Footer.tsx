import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-soft-green-light border-t border-gray-200 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start text-text-light">
        {/* Left Section: Title and Copyright */}
        <div className="flex flex-col items-start text-left mb-6 md:mb-0">
          <h3 className="font-serif text-lg font-semibold text-dark-green mb-2">Lotte Gasenbeek Psychologische Coaching</h3>
          <p className="mt-2 text-xs text-gray-500">&copy; {new Date().getFullYear()} Lotte Gasenbeek. Alle rechten voorbehouden.</p>
        </div>

        {/* Center Section: Contact and Affiliation */}
        <div className="flex flex-col items-start text-left mb-6 md:mb-0">
          <p className="mb-1 text-sm text-gray-700">Praktijklocatie: Het Gebouw, Rotterdam</p>
          <p className="mb-1 text-sm text-gray-700">Email: <a href="mailto:lottegasenbeek@gmail.com" className="text-gray-700 hover:text-ocher transition-colors">lottegasenbeek@gmail.com</a></p>
          <p className="mt-2 text-sm">Aangesloten bij het <a href="https://www.psynip.nl/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ocher transition-colors text-gray-700">Nederlands Instituut van Psychologen (NIP)</a></p>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex flex-col items-start text-left">
          {/* Removed h3 "Volg mij" as requested */}
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/lottegasenbeekcoaching" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-700 hover:text-ocher transition-colors text-xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/lottegasenbeek" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-ocher transition-colors text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
