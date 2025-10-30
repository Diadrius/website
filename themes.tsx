import React from 'react';
import { HeartPulse, Sparkles, Shield, Sunrise, CloudRain, PowerOff, Timer, Target, Heart } from 'lucide-react'; // Using Lucide Icons from suggestion

export interface Theme {
  id: string; // Add id for URL hash and key
  name: string;
  title: string;
  icon: React.ReactNode;
  question: string;
  description: string;
}

export const themes: Theme[] = [
    {
        id: 'stress',
        name: 'Stress',
        title: 'Stress & Draagkracht',
        icon: <Timer strokeWidth={1} className="w-12 h-12" />,
        question: 'Hoe vind ik rust in de chaos?',
        description: 'Voel je je opgejaagd of overweldigd door de constante druk van het dagelijks leven? We zoeken samen naar effectieve copingmechanismen om stress te hanteren. Dit omvat het identificeren van stressfactoren, het aanleren van ontspanningstechnieken, en het ontwikkelen van een persoonlijk plan om je energie beter te verdelen. Ons doel is om je te helpen een gezonde balans te vinden tussen inspanning en ontspanning, waardoor je veerkrachtiger wordt en beter kunt omgaan met de uitdagingen die op je pad komen.'
    },
    {
        id: 'zelfvertrouwen',
        name: 'Zelfvertrouwen',
        title: 'Zelfvertrouwen & Zelfbeeld',
        icon: <Sparkles strokeWidth={1} className="w-12 h-12" />,
        question: 'Waarom ben ik zo kritisch op mezelf?',
        description: 'Heb je last van een strenge innerlijke criticus die je voortdurend bekritiseert? We werken aan het versterken van een milder en realistischer zelfbeeld. Door inzicht te krijgen in de oorsprong van je zelfkritiek en negatieve gedachtenpatronen te doorbreken, leer je jezelf met meer compassie te behandelen. Dit proces stelt je in staat om met meer zelfvertrouwen in het leven te staan, je eigenwaarde te erkennen en je potentieel volledig te benutten.'
    },
    {
        id: 'burn-out',
        name: 'Burn-out',
        title: 'Burn-out & Preventie',
        icon: <PowerOff strokeWidth={1} className="w-12 h-12" />,
        question: 'Hoe voorkom ik dat ik opbrand?',
        description: 'Ben je bang om op te branden of ervaar je al symptomen van oververmoeidheid? Leer de signalen van overbelasting herkennen en ontdek wat jij nodig hebt om vitaal en veerkrachtig te blijven, zowel op je werk als privé. We stellen een persoonlijk herstelplan op dat gericht is op grenzen stellen, energiebeheer en het herontdekken van je passies, zodat je duurzaam kunt presteren zonder jezelf uit te putten.'
    },
    {
        id: 'depressie',
        name: 'Depressie',
        title: 'Depressie & Somberheid',
        icon: <CloudRain strokeWidth={1} className="w-12 h-12" />,
        question: 'Voel je je somber of leeg?',
        description: 'Depressie is meer dan alleen verdrietig zijn; het kan je hele leven beïnvloeden. We onderzoeken samen de dieperliggende oorzaken van je somberheid en vinden wegen naar herstel. Dit omvat het ontwikkelen van copingstrategieën, het aanpakken van negatieve denkpatronen en het vinden van activiteiten die je plezier en zingeving geven. Ons doel is om je te helpen weer lichtpuntjes te zien en een leven op te bouwen dat de moeite waard is om te leven.'
    },
    {
        id: 'perfectionisme',
        name: 'Perfectionisme',
        title: 'Perfectionisme & Faalangst',
        icon: <Target strokeWidth={1} className="w-12 h-12" />,
        question: 'Wanneer ben ik goed genoeg?',
        description: 'Stel je onrealistisch hoge eisen aan jezelf en ben je bang om fouten te maken? Perfectionisme kan verlammend werken en leiden tot stress, uitputting en een chronisch gevoel van tekortschieten. We onderzoeken samen waar deze hoge eisen vandaan komen en hoe ze je belemmeren. Je leert realistische doelen te stellen, fouten te zien als leermomenten en te accepteren dat "goed genoeg" vaak meer dan voldoende is. Dit helpt je om vrijer en met meer plezier te leven en werken.'
    },
    {
        id: 'relaties',
        name: 'Relaties',
        title: 'Relaties',
        icon: <Heart strokeWidth={1} className="w-12 h-12" />,
        question: 'Waarom voel ik me zo onzeker in relaties?',
        description: 'Merk je dat je steeds terugvalt in dezelfde patronen in je relaties, of worstelt je met intimiteit, grenzen of verlatingsangst? Je hechtingsstijl, gevormd in je vroege jeugd, speelt een belangrijke rol in hoe je met anderen omgaat. Door inzicht te krijgen in je hechtingspatronen leer je waarom je bepaalde relaties aantrekt of mijdt. We werken aan het ontwikkelen van gezondere relatiepatronen, zodat je meer verbinding kunt maken en volwaardige, wederzijdse relaties kunt aangaan.'
    },
];
