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

const RatesPage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMarkdownPage('rates')
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
    <PageWrapper title={pageData.title}>
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Rates Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-soft-green-light">
              <div>
                <h3 className="text-lg font-semibold font-serif text-dark-green">{pageData.introSessionTitle}</h3>
                <p className="text-text-light mt-1">{pageData.introSessionDescription}</p>
              </div>
              <p className="text-2xl font-bold text-dark-green mt-2 sm:mt-0">{pageData.introSessionPrice}</p>
            </div>
            <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h3 className="text-lg font-semibold font-serif text-dark-green">{pageData.coachingSessionTitle}</h3>
                <p className="text-text-light mt-1">{pageData.coachingSessionDescription}</p>
              </div>
              <p className="text-2xl font-bold text-dark-green mt-2 sm:mt-0">{pageData.coachingSessionPrice}</p>
            </div>
          </div>
        </div>
        
        {/* Practical Info */}
        <div className="bg-soft-green-light p-8 rounded-xl border border-soft-green">
           <h2 className="text-2xl font-serif font-bold text-dark-green mb-4 text-center sm:text-left">{pageData.practicalInfoTitle}</h2>
           <div className="space-y-4 text-text-light">
               <div className="flex items-start">
                   <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   <div>
                       <h4 className="font-semibold text-dark-green">{pageData.compensationTitle}</h4>
                       <p>{pageData.compensationText}</p>
                   </div>
               </div>
               <div className="flex items-start">
                    <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                   <div>
                       <h4 className="font-semibold text-dark-green">{pageData.paymentTitle}</h4>
                       <p>{pageData.paymentText}</p>
                   </div>
               </div>
               <div className="flex items-start">
                   <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                   <div>
                       <h4 className="font-semibold text-dark-green">{pageData.cancellationTitle}</h4>
                       <p>{pageData.cancellationText}</p>
                   </div>
               </div>
           </div>
        </div>
         <div className="text-center pt-4">
              <Link to={pageData.ctaLink} className="inline-block bg-ocher hover:bg-ocher-dark text-white font-semibold font-serif py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                {pageData.ctaText}
              </Link>
            </div>
      </div>
    </PageWrapper>
  );
};

export default RatesPage;
