import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { themes } from '../themes';

const ForWhomPage: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(themes[0]?.id || '');

  useEffect(() => {
    if (location.hash) {
      const themeIdFromHash = location.hash.substring(1); // Remove the '#'
      const foundTheme = themes.find(theme => theme.id === themeIdFromHash);
      if (foundTheme) {
        setActiveTab(foundTheme.id);
      }
    }
  }, [location.hash]);

  const handleTabClick = (themeId: string) => {
    setActiveTab(themeId);
    // Update URL hash without re-rendering the whole page
    window.history.pushState(null, '', `#${themeId}`);
  };

  return (
    <div className="py-16 sm:py-24 bg-soft-green-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-dark-green sm:text-5xl">
            Herken jij je hierin?
          </h1>
          <p className="mt-6 text-lg text-text-light leading-8">
            Coaching is voor iedereen die wil groeien. Misschien loop je vast in specifieke patronen of sta je op een kruispunt in je leven. Hieronder vind je een aantal thema's waar we samen aan kunnen werken.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleTabClick(theme.id)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
                ${activeTab === theme.id
                  ? 'bg-ocher text-white shadow-md'
                  : 'bg-white text-dark-green hover:bg-soft-green/50 hover:shadow-sm'
                }`}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 max-w-4xl mx-auto">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`bg-white rounded-xl shadow-md p-8 border border-gray-200 ${activeTab === theme.id ? 'block' : 'hidden'}`}
            >
              <h2 className="text-2xl font-serif font-semibold text-dark-green">{theme.title}</h2>
              <p className="mt-2 text-lg font-serif italic text-ocher">"{theme.question}"</p>
              <p className="mt-4 text-text-light">{theme.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-10 rounded-xl max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl font-serif font-semibold text-dark-green">Staat jouw vraag er niet tussen?</h3>
          <p className="mt-4 text-text-light">Geen zorgen. Ieder verhaal is uniek. Als je voelt dat je hulp kunt gebruiken, ben je van harte welkom. We kunnen tijdens een kennismaking altijd bespreken wat ik voor je kan betekenen.</p>
          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-ocher hover:bg-ocher-dark text-white font-bold font-serif py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
              Neem vrijblijvend contact op
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWhomPage;
