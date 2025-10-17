import React, { useState, useEffect } from 'react';
import { loadMarkdownPage, PageData } from '../utils/markdown';

const KennismakingsgesprekPage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discussionTopic: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false); // New state for success message

  useEffect(() => {
    loadMarkdownPage('kennismakingsgesprek')
      .then(data => {
        setPageData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load page:', err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmittedSuccessfully(false); // Reset success status on new submission

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "8834346c-a50c-45a7-a30f-9a72d2b236d0",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmittedSuccessfully(true); // Set success status
        setFormData({ name: '', email: '', discussionTopic: '' }); // Clear form data
      } else {
        // Handle submission error, maybe show a temporary error message
        console.error('Verzenden mislukt:', result);
      }
    } catch (error) {
      console.error('Er is een fout opgetreden bij het verzenden:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <div className="py-16 sm:py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-dark-green sm:text-5xl">
            {pageData.title}
          </h1>
          <p className="mt-6 text-lg text-text-light leading-8">
            {pageData.subtitle}
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-12">
            {/* Form or Success Message */}
            {!isSubmittedSuccessfully ? (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-green">{pageData.formNameLabel}</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ocher focus:border-ocher"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-green">{pageData.formEmailLabel}</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ocher focus:border-ocher"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="discussionTopic" className="block text-sm font-medium text-dark-green">{pageData.formTopicLabel}</label>
                    <textarea
                        name="discussionTopic"
                        id="discussionTopic"
                        rows={5}
                        value={formData.discussionTopic}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ocher focus:border-ocher"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-ocher hover:bg-ocher-dark text-white font-semibold font-serif py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Verzenden...' : pageData.formSubmitText}
                    </button>
                </div>
            </form>
            ) : (
                <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-soft-green-light border border-soft-green">
                    <svg className="w-20 h-20 text-ocher mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-serif font-semibold text-dark-green mb-2">Verzoek succesvol verzonden!</h3>
                    <p className="text-text-light text-center mb-6">
                        Hartelijk dank voor uw verzoek. Ik neem zo spoedig mogelijk contact met u op om een afspraak in te plannen.
                    </p>
                    <button
                        onClick={() => setIsSubmittedSuccessfully(false)} // Allow sending another message
                        className="bg-ocher hover:bg-ocher-dark text-white font-semibold font-serif py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                    >
                        Nieuw verzoek indienen
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default KennismakingsgesprekPage;
