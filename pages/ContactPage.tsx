import React, { useState, useEffect } from 'react';
import { loadMarkdownPage, PageData } from '../utils/markdown';

const ContactPage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    loadMarkdownPage('contact')
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
    setStatus('');

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
        setStatus('Bericht succesvol verzonden!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Verzenden mislukt. Probeer het opnieuw.');
      }
    } catch (error) {
      setStatus('Er is een fout opgetreden. Probeer het opnieuw.');
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

        <div className="mt-16 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-green">Naam</label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-dark-green">E-mail</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-dark-green">Bericht</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
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
                        {isSubmitting ? 'Verzenden...' : 'Verstuur'}
                    </button>
                </div>
                {status && <p className="text-center text-sm text-text-light">{status}</p>}
            </form>

            {/* Info */}
            <div className="bg-soft-green-light p-8 rounded-xl border border-soft-green flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-semibold text-dark-green mb-4">Praktijkinformatie</h3>
                <div className="space-y-4 text-text-light">
                    <div className="flex items-start">
                        <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <div>
                            <h4 className="font-semibold text-dark-green">{pageData.locationTitle}</h4>
                            <p>{pageData.locationText}</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <div>
                            <h4 className="font-semibold text-dark-green">{pageData.emailTitle}</h4>
                            <a href={`mailto:${pageData.emailAddress}`} className="hover:text-ocher transition-colors">{pageData.emailAddress}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
