import React from 'react';
import { 
  Timer, Sparkles, PowerOff, CloudRain, Target, Heart,
  Brain, Lightbulb, Shield, Smile, Sun, Moon, Star,
  Zap, TrendingUp, Users, User, Compass, Eye,
  Flame, Leaf, Mountain, Waves, Wind, Coffee,
  Book, Briefcase, Award, Flag, MessageCircle, Phone,
  Music, Headphones, Palmtree, Flower, TreePine, Feather,
  Anchor, Battery, Gem, Key, Lock, Unlock,
  Activity, Crosshair, Focus, Gauge, Sparkle, Sunrise,
  LucideIcon 
} from 'lucide-react';
import themesData from './themes.json';

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Timer,
  Sparkles,
  PowerOff,
  CloudRain,
  Target,
  Heart,
  Brain,
  Lightbulb,
  Shield,
  Smile,
  Sun,
  Moon,
  Star,
  Zap,
  TrendingUp,
  Users,
  User,
  Compass,
  Eye,
  Flame,
  Leaf,
  Mountain,
  Waves,
  Wind,
  Coffee,
  Book,
  Briefcase,
  Award,
  Flag,
  MessageCircle,
  Phone,
  Music,
  Headphones,
  Palmtree,
  Flower,
  TreePine,
  Feather,
  Anchor,
  Battery,
  Gem,
  Key,
  Lock,
  Unlock,
  Activity,
  Crosshair,
  Focus,
  Gauge,
  Sparkle,
  Sunrise,
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
