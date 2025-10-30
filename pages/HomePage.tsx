import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { themes } from '../themes';
import { loadMarkdownPage, PageData } from '../utils/markdown';

const HomePage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMarkdownPage('home')
      .then(data => {
        setPageData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load page:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-text-light">Loading...</p>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-600">Error loading page content</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-soft-green-light py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0">
            <img 
              src={pageData.heroImage} 
              alt={pageData.heroImageAlt} 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream from-33% via-cream/30 via-66% to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-dark-green tracking-tight animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            {pageData.title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-text-light leading-8 animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
            {pageData.subtitle}
          </p>
          <div className="mt-10">
            <Link
              to={pageData.ctaLink || '/kennismakingsgesprek'}
              className="inline-block bg-ocher hover:bg-ocher-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-102 duration-300 animate-fade-in-down"
              style={{ animationDelay: '0.6s' }}
            >
              {pageData.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="bg-cream pt-8">
        <div className="container mx-auto">
          <svg
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto text-soft-green/80"
          >
            <path
              d="M3 15C23 -5 97 35 117 15"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* "Voor wie?" Section */}
      <section className="pt-10 pb-20 bg-cream">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-dark-green sm:text-4xl">
              {pageData.sectionTitle}
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-3xl mx-auto">
              {pageData.sectionText}
            </p>
        </div>
        
        {/* Themes Section */}
        <div className="mt-16">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl font-serif font-semibold text-dark-green mb-8">
                  {pageData.themesTitle}
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-6 sm:px-8 md:px-12 justify-items-center">
                {themes.map((theme) => (
                    <Link
                        to={`/voor-wie#${theme.id}`}
                        key={theme.name}
                        aria-label={`Lees meer over het thema ${theme.name}`}
                        className="group relative w-full max-w-xs h-72 rounded-2xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-ocher/50 transition-all duration-300 ease-in-out overflow-hidden"
                    >
                        {/* Visible Content */}
                        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:scale-105">
                            <div className="flex-shrink-0 w-20 h-20 bg-soft-green-light text-dark-green rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:ring-4 group-hover:ring-soft-green">
                                {theme.icon}
                            </div>
                            <h3 className="mt-4 font-serif text-lg font-semibold text-dark-green">{theme.name}</h3>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-dark-green/85 backdrop-blur-[2px] p-4 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h3 className="font-serif text-xl font-semibold">{theme.name}</h3>
                            <p className="mt-3 text-sm font-light flex-grow">{theme.question}</p>
                            <span className="mt-3 text-xs font-bold text-ocher self-center">Lees meer &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
