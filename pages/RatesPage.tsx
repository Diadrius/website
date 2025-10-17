
import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <PageWrapper title="Tarieven">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Rates Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-soft-green-light">
              <div>
                <h3 className="text-lg font-semibold font-serif text-dark-green">Vrijblijvend kennismakingsgesprek</h3>
                <p className="text-text-light mt-1">Online of telefonisch, 20 minuten</p>
              </div>
              <p className="text-2xl font-bold text-dark-green mt-2 sm:mt-0">Gratis</p>
            </div>
            <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h3 className="text-lg font-semibold font-serif text-dark-green">Individuele coachingsessie</h3>
                <p className="text-text-light mt-1">60 minuten</p>
              </div>
              <p className="text-2xl font-bold text-dark-green mt-2 sm:mt-0">€ 80,-</p>
            </div>
          </div>
        </div>
        
        {/* Practical Info */}
        <div className="bg-soft-green-light p-8 rounded-xl border border-soft-green">
           <h2 className="text-2xl font-serif font-bold text-dark-green mb-4 text-center sm:text-left">Praktische Informatie</h2>
           <div className="space-y-4 text-text-light">
               <div className="flex items-start">
                   <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   <div>
                       <h4 className="font-semibold text-dark-green">Vergoeding</h4>
                       <p>De coaching is voor zelfbetalende cliënten en wordt niet vergoed door de zorgverzekeraar. Dit betekent dat je geen verwijzing van de huisarts nodig hebt en we snel kunnen starten.</p>
                   </div>
               </div>
               <div className="flex items-start">
                    <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                   <div>
                       <h4 className="font-semibold text-dark-green">Betaling</h4>
                       <p>Na afloop van elke sessie ontvang je een factuur die je per bankoverschrijving kunt voldoen.</p>
                   </div>
               </div>
               <div className="flex items-start">
                   <svg className="w-6 h-6 text-ocher flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                   <div>
                       <h4 className="font-semibold text-dark-green">Annulering</h4>
                       <p>Een afspraak kan tot 24 uur van tevoren kosteloos worden geannuleerd of verzet. Bij latere annulering wordt de sessie in rekening gebracht.</p>
                   </div>
               </div>
           </div>
        </div>
         <div className="text-center pt-4">
              <Link to="/contact" className="inline-block bg-ocher hover:bg-ocher-dark text-white font-bold font-serif py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                Plan je gratis kennismaking
              </Link>
            </div>
      </div>
    </PageWrapper>
  );
};

export default RatesPage;
