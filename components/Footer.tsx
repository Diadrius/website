import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-soft-green-light border-t border-gray-200 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start text-text-light">
        {/* Left Section: Title and Copyright */}
        <div className="flex flex-col items-start text-left mb-6 md:mb-0">
          <h3 className="font-serif text-lg font-semibold text-dark-green mb-2">Lotte Gasenbeek psychologische begeleiding</h3>
          <p className="mt-2 text-xs text-gray-500">&copy; {new Date().getFullYear()} Lotte Gasenbeek. Alle rechten voorbehouden.</p>
        </div>

        {/* Center Section: Contact and Affiliation */}
        <div className="flex flex-col items-start text-left mb-6 md:mb-0">
          <p className="mb-1 text-sm text-gray-700">Praktijklocatie: <a href="https://www.google.com/maps?q=Het+Gebouw" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-ocher transition-colors underline">Het Gebouw, Rotterdam</a></p>
          <p className="mb-1 text-sm text-gray-700">Email: <a href="mailto:info@lottegasenbeek.nl" className="text-gray-700 hover:text-ocher transition-colors">info@lottegasenbeek.nl</a></p>
          <p className="mt-2 text-sm">Aangesloten bij het <a href="https://nip.nl/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ocher transition-colors text-gray-700">Nederlands Instituut van Psychologen (NIP)</a></p>
          <img src="/website/media/images/nip.png" alt="NIP Logo" className="h-9 mt-2" />
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
