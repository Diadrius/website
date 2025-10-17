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

const steps = [
    {
        number: 1,
        title: 'Vrijblijvende Kennismaking',
        description: 'We starten met een gratis gesprek van 20 minuten (online of telefonisch). Dit is bedoeld om te zien of er een klik is en of mijn aanpak bij jouw vraag past. Je kunt je verhaal doen en al je vragen stellen.'
    },
    {
        number: 2,
        title: 'Het Traject',
        description: 'Als we besluiten samen verder te gaan, plannen we de sessies. We stellen samen doelen op die voor jou belangrijk zijn. Een traject is meestal kortdurend en gericht op concrete verandering.'
    },
    {
        number: 3,
        title: 'Tussentijdse Evaluatie',
        description: 'Halverwege het traject staan we stil bij de voortgang. We bespreken wat goed gaat, waar je nog aan wilt werken en of we de doelen eventueel moeten bijstellen. Jouw feedback is hierin leidend.'
    },
    {
        number: 4,
        title: 'Jouw Manier',
        description: 'Elke sessie is afgestemd op jou. We gebruiken gesprekken, praktische oefeningen en bewezen effectieve methoden uit o.a. de cognitieve gedragstherapie (CGT) en Acceptance and Commitment Therapy (ACT).'
    }
];


const MethodPage: React.FC = () => {
  return (
    <PageWrapper title="Werkwijze & Aanbod">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Werkwijze Section */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-dark-green text-center mb-12">Hoe gaan we te werk?</h2>
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
           <h2 className="text-3xl font-serif font-bold text-dark-green text-center mb-8">Mijn Aanbod</h2>
           <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-soft-green-light p-6 rounded-lg">
                <div>
                    <h3 className="font-serif text-xl font-semibold text-dark-green">Individuele Coachingsessie</h3>
                    <p className="text-text-light mt-1">Een-op-een gesprek gericht op jouw persoonlijke doelen.</p>
                </div>
                <div className="mt-4 md:mt-0 text-lg font-bold text-dark-green">
                    60 minuten
                </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="inline-block bg-ocher hover:bg-ocher-dark text-white font-semibold font-serif py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                Plan een kennismaking
              </Link>
            </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default MethodPage;
