import React from 'react';

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
  return (
    <PageWrapper title="Over Lotte">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 flex justify-center">
          <img
            src="lotte_portret.jpg"
            alt="Professionele foto van Lotte Gasenbeek"
            className="rounded-xl shadow-lg object-cover w-full h-auto max-w-xs md:max-w-full"
          />
        </div>

        <div className="md:col-span-2 space-y-8 text-text-light text-base leading-relaxed">
          <div className="bg-soft-green-light p-8 rounded-xl border border-soft-green">
            <p className="font-serif text-base italic text-dark-green">
              "In mijn ogen is de therapeutische relatie de kern van verandering. Ik geloof dat je pas echt verder komt als je je veilig, gezien en serieus genomen voelt. Daarom werk ik niet met afstand, maar vanuit gelijkwaardigheid en oprechte betrokkenheid. We zoeken samen uit wat voor jóu werkt – in jouw tempo, op jouw manier."
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">Mijn benadering</h2>
            <p>
              Mijn naam is Lotte Gasenbeek. Als psychologisch coach in Rotterdam help ik jongvolwassenen en young professionals om meer inzicht te krijgen in zichzelf en hun patronen. Ik bied een veilige en oordeelvrije ruimte waar je open kunt zijn over wat je bezighoudt. Mijn aanpak is persoonlijk en op maat. We kijken niet alleen naar de klachten, maar vooral naar jou als persoon, met jouw unieke krachten en wensen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">Opleidingen & Registraties</h2>
            <ul className="space-y-2 list-disc list-inside text-dark-green">
              <li>WO Master Klinische Psychologie</li>
              <li>Opleiding tot Cognitief Gedragstherapeut (VCGT) i.o.</li>
              <li>In het bezit van een LOGO-verklaring</li>
              <li>Aangesloten bij het <span className="font-semibold">Nederlands Instituut van Psychologen (NIP)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
