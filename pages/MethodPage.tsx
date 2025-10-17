import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadMarkdownPage, PageData } from '../utils/markdown';

const PageWrapper: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => (
    <div className="py-16 sm:py-24 bg-cream">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl font-serif font-bold text-dark-green sm:text-5xl text-center mb-12">
                {title}
            </h1>
            {children}
        </div>
    </div>
);

interface Step {
    number: number;
    title: string;
    description: string;
}

const MethodPage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMarkdownPage('method')
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

  const steps = pageData.steps as Step[] || [];

  return (
    <PageWrapper title={pageData.title}>
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Werkwijze Section */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-dark-green text-center mb-12">{pageData.methodTitle}</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
                {/* Vertical Connector Line */}
                <div className="absolute left-8 top-0 w-0.5 h-full bg-soft-green" aria-hidden="true"></div>

                <div className="space-y-12">
                    {steps.map((step) => (
                        <div key={step.number} className="relative flex items-start space-x-8">
                            {/* Number Circle */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-ocher text-white flex items-center justify-center text-2xl font-bold font-serif z-10 shadow-md">
                                {step.number}
                            </div>
                            {/* Text Content */}
                            <div className="flex-grow pt-1">
                                <h3 className="text-xl font-serif font-semibold text-dark-green">{step.title}</h3>
                                <p className="mt-2 text-text-light">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* Aanbod Section */}
        <section className="bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-gray-200">
           <h2 className="text-3xl font-serif font-bold text-dark-green text-center mb-8">{pageData.offerTitle}</h2>
           <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-soft-green-light p-6 rounded-lg">
                <div>
                    <h3 className="font-serif text-xl font-semibold text-dark-green">{pageData.offerName}</h3>
                    <p className="text-text-light mt-1">{pageData.offerDescription}</p>
                </div>
                <div className="mt-4 md:mt-0 text-lg font-bold text-dark-green">
                    {pageData.offerDuration}
                </div>
            </div>
            <div className="text-center mt-8">
              <Link to={pageData.ctaLink} className="inline-block bg-ocher hover:bg-ocher-dark text-white font-semibold font-serif py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                {pageData.ctaText}
              </Link>
            </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default MethodPage;
