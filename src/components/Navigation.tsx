/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Home, FileText, BarChart2, Lightbulb, User } from 'lucide-react';
import { Screen } from '../types';

interface NavProps {
  activeScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export default function Navigation({ activeScreen, setScreen }: NavProps) {
  const tabs = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'content', icon: FileText, label: 'Content' },
    { id: 'insights', icon: BarChart2, label: 'Insights' },
    { id: 'ideas', icon: Lightbulb, label: 'Ideas' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-8 left-6 right-6 z-50 h-20 rounded-full ios-blur shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] flex justify-around items-center px-4 overflow-hidden border border-white/40">
      {tabs.map((tab) => {
        const isActive = activeScreen === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setScreen(tab.id as Screen)}
            className={`flex flex-col items-center justify-center transition-all duration-300 relative group py-2 px-4 ${
              isActive ? 'text-primary' : 'text-on-surface-variant/50'
            }`}
          >
            <tab.icon 
              className={`w-6 h-6 mb-1 transition-transform group-active:scale-90 ${isActive ? 'scale-110' : ''}`}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span className={`text-[10px] font-bold tracking-tight ${isActive ? 'opacity-100' : 'opacity-60'}`}>
              {tab.label}
            </span>
            {isActive && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
