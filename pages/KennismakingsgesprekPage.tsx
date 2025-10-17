import React, { useState } from 'react';

const KennismakingsgesprekPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
        setStatus('Vul alstublieft alle velden in.');
        return;
    }
    const subject = `Verzoek kennismakingsgesprek van ${name}`;
    const body = `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}\n\nL.S., Ik wil graag een gratis en vrijblijvend kennismakingsgesprek inplannen.`;
    window.location.href = `mailto:lottegasenbeek@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Bedankt! Je e-mailprogramma wordt geopend om het bericht te versturen.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="py-16 sm:py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-dark-green sm:text-5xl">
            Vraag je gratis kennismakingsgesprek aan
          </h1>
          <p className="mt-6 text-lg text-text-light leading-8">
            Zet de eerste stap door te kiezen voor een gratis en vrijblijvend kennismakingsgesprek. Vul het onderstaande formulier in om direct contact op te nemen. Ik neem zo snel mogelijk contact met je op.
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ocher focus:border-ocher"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-ocher hover:bg-ocher-dark text-white font-bold font-serif py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                    >
                        Verstuur
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
                            <h4 className="font-semibold text-dark-green">Locatie</h4>
                            <p>Het Gebouw, Rotterdam</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 3 0 002 2z" /></svg>
                        <div>
                            <h4 className="font-semibold text-dark-green">E-mail</h4>
                            <a href="mailto:lottegasenbeek@gmail.com" className="hover:text-ocher transition-colors">lottegasenbeek@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default KennismakingsgesprekPage;
