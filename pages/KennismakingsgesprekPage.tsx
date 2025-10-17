import React, { useState, useEffect } from 'react';
import { loadMarkdownPage, PageData } from '../utils/markdown';

const KennismakingsgesprekPage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discussionTopic, setDiscussionTopic] = useState('');
  const [status, setStatus] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !discussionTopic) {
        setStatus('Vul alstublieft alle verplichte velden in.');
        return;
    }

    const subject = `Verzoek kennismakingsgesprek van ${name}`;
    const body = `Naam: ${name}\nE-mail: ${email}\n\nOnderwerp/Thema voor gesprek:\n${discussionTopic}\n\nL.S., Ik wil graag een gratis en vrijblijvend kennismakingsgesprek inplannen.`;
    window.location.href = `mailto:lottegasenbeek@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Bedankt! Je e-mailprogramma wordt geopend om het bericht te versturen.');
    setName('');
    setEmail('');
    setDiscussionTopic('');
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
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-green">{pageData.formNameLabel}</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={discussionTopic}
                        onChange={(e) => setDiscussionTopic(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ocher focus:border-ocher"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-ocher hover:bg-ocher-dark text-white font-semibold font-serif py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                    >
                        {pageData.formSubmitText}
                    </button>
                </div>
                {status && <p className="text-center text-sm text-text-light">{status}</p>}
            </form>
        </div>
      </div>
    </div>
  );
};

export default KennismakingsgesprekPage;
