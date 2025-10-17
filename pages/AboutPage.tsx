import React, { useEffect, useState } from 'react';
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

const AboutPage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMarkdownPage('about')
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
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 flex justify-center">
          <img
            src={pageData.image}
            alt={pageData.imageAlt}
            className="rounded-xl shadow-lg object-cover w-full h-auto max-w-xs md:max-w-full"
          />
        </div>

        <div className="md:col-span-2 space-y-8 text-text-light text-base leading-relaxed">
          <div className="bg-soft-green-light p-8 rounded-xl border border-soft-green">
            <p className="font-serif text-base italic text-dark-green">
              "{pageData.quote}"
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">{pageData.approachTitle}</h2>
            <p>
              {pageData.approachText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">{pageData.educationTitle}</h2>
            <ul className="space-y-2 list-disc list-inside text-dark-green">
              {pageData.educationItems?.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
