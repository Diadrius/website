import React from 'react';
import { Timer, Sparkles, PowerOff, CloudRain, Target, Heart, LucideIcon } from 'lucide-react';
import themesData from './themes.json';

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Timer,
  Sparkles,
  PowerOff,
  CloudRain,
  Target,
  Heart,
};

export interface Theme {
  id: string;
  name: string;
  title: string;
  icon: React.ReactNode;
  question: string;
  description: string;
}

// Transform the data to include actual icon components
export const themes: Theme[] = themesData.themes.map(theme => ({
  ...theme,
  icon: React.createElement(iconMap[theme.icon], {
    strokeWidth: 1,
    className: "w-12 h-12"
  })
}));
