/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen } from './types';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Insights from './components/Insights';
import Content from './components/Content';
import Ideas from './components/Ideas';
import Profile from './components/Profile';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [isInitialized, setIsInitialized] = useState(false);

  // Auto-transition from splash if already initialized (mock)
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('onboarding_complete');
    if (isInitialized && screen === 'splash') {
       setScreen(hasSeenOnboarding ? 'dashboard' : 'onboarding');
    }
  }, [isInitialized]);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboarding_complete', 'true');
    setScreen('dashboard');
  };

  const renderActiveScreen = () => {
    switch (screen) {
      case 'dashboard': return <Dashboard />;
      case 'insights': return <Insights />;
      case 'content': return <Content />;
      case 'ideas': return <Ideas />;
      case 'profile': return <Profile />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-on-surface overflow-hidden">
      <AnimatePresence mode="wait">
        {screen === 'splash' && (
          <SplashScreen key="splash" onComplete={() => setIsInitialized(true)} />
        )}

        {screen === 'onboarding' && (
          <Onboarding key="onboarding" onComplete={handleOnboardingComplete} />
        )}

        {['dashboard', 'insights', 'content', 'ideas', 'profile'].includes(screen) && (
          <motion.div 
            key="main-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full"
          >
            {/* Transitioning Content */}
            <AnimatePresence mode="wait">
               <motion.div
                 key={screen}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3, ease: 'easeOut' }}
               >
                 {renderActiveScreen()}
               </motion.div>
            </AnimatePresence>

            <Navigation activeScreen={screen} setScreen={setScreen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Background Accents */}
      <div className="fixed inset-0 pointer-events-none -z-50">
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[15%] w-[60%] h-[50%] bg-primary/5 rounded-full blur-[140px]" />
      </div>
    </div>
  );
}
