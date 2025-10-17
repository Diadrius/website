import React from 'react';
import { LuBrain, LuGem, LuPowerOff, LuCloudRain } from 'react-icons/lu'; // Using Lucide Icons for thin style

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
        icon: <LuBrain />,
        question: 'Hoe vind ik rust in de chaos?',
        description: 'Voel je je opgejaagd of overweldigd? We zoeken naar manieren om stress te hanteren, je energie beter te verdelen en een gezonde balans te vinden tussen inspanning en ontspanning.'
    },
    {
        id: 'zelfvertrouwen',
        name: 'Zelfvertrouwen',
        title: 'Zelfvertrouwen & Zelfbeeld',
        icon: <LuGem />,
        question: 'Waarom ben ik zo kritisch op mezelf?',
        description: 'Die innerlijke criticus kan luid zijn. We werken aan het versterken van een milder en realistischer zelfbeeld, zodat je met meer vertrouwen in het leven staat.'
    },
    {
        id: 'burn-out',
        name: 'Burn-out',
        title: 'Burn-out & Preventie',
        icon: <LuPowerOff />,
        question: 'Hoe voorkom ik dat ik opbrand?',
        description: 'Leer de signalen van overbelasting herkennen en ontdek wat jij nodig hebt om vitaal en veerkrachtig te blijven, zowel op je werk als privé.'
    },
    {
        id: 'depressie',
        name: 'Depressie',
        title: 'Depressie & Somberheid',
        icon: <LuCloudRain />,
        question: 'Voel je je somber of leeg?',
        description: 'Depressie is meer dan alleen verdrietig zijn. We onderzoeken samen de oorzaken en vinden wegen naar herstel, zodat je weer lichtpuntjes kunt zien.'
    },
];
