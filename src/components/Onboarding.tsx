/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Monitor, Smile, Wallet, Gamepad2, Heart, BookOpen } from 'lucide-react';

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else onComplete();
  };

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-hidden flex flex-col">
      {/* Top Progress */}
      <header className="h-16 px-6 flex items-center justify-between border-b border-surface-container/50 bg-white/50 backdrop-blur-md">
        <span className="text-xl font-black text-primary tracking-tighter">CreatorOS</span>
        <div className="flex items-center gap-4">
          <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: '20%' }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
            />
          </div>
          <span className="text-xs font-bold text-on-surface-variant/60 uppercase">Step {step}/{totalSteps}</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-12 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              className="w-full max-w-sm flex flex-col items-center"
              initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
            >
              <div className="relative w-full aspect-square max-w-[280px] mb-12">
                <div className="absolute inset-0 bg-primary/10 rounded-[40px] rotate-6 blur-2xl opacity-40 animate-pulse" />
                <div className="relative w-full h-full bg-white rounded-[40px] shadow-2xl border border-white/50 overflow-hidden flex items-center justify-center p-8">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFooD90aWQCEpyQVKfjI3Gesqw3y4AKBIPhPhGW_gQPek7Tbh_dzpeZvz3yVRQjiVSfRVG_CdDXIsuKKtck5LZkwhZZk__Md6bXZiYM84F-Z6YTH0VeUHic7MaeUmZU58I6-_neNn12I2DGRHQsmMEuYVcdtRxIOMk-28v8fA0T1Az06GM4IB2jJINtMh57CDSYDNCBpPTUKBVatBtgz6Ruu8vZAeACGBe9ryVdmYXm5DzegjBlI3bnaCnf7GQe7FzV-7pS-QLKVYN" className="w-full h-full object-cover rounded-3xl" alt="3D Visual" />
                  <div className="absolute bottom-6 right-6 p-4 ios-blur bg-white/80 rounded-2xl shadow-xl flex flex-col">
                    <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-1">Growth</span>
                    <span className="text-lg font-black text-primary">+124%</span>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-black text-center mb-4 leading-tight">Welcome to CreatorOS</h2>
              <p className="text-[15px] text-center text-on-surface-variant/70 leading-relaxed font-medium">
                Your AI-powered growth assistant designed for professional content creators.
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              className="w-full max-w-sm"
              initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
            >
              <h2 className="text-3xl font-black text-center mb-3">Connect Your World</h2>
              <p className="text-[15px] text-center text-on-surface-variant/70 mb-10">Integrate channels to unlock real-time insights.</p>
              
              <div className="space-y-4 mb-8">
                {['YouTube', 'TikTok', 'Instagram'].map((plat) => (
                  <div key={plat} className="bg-white border border-outline-variant p-5 rounded-[24px] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold">{plat}</span>
                    </div>
                    <div className="w-12 h-6 bg-surface-container rounded-full relative p-0.5 cursor-pointer">
                      <div className="w-5 h-5 bg-white rounded-full shadow-md" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
               key="step3"
               className="w-full max-w-sm"
               initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
             >
               <h2 className="text-3xl font-black text-center mb-3">What's your niche?</h2>
               <p className="text-[15px] text-center text-on-surface-variant/70 mb-10">Tailor your experience to your focus.</p>
               
               <div className="grid grid-cols-2 gap-4">
                 {[
                   { id: 'tech', label: 'Tech', icon: Monitor },
                   { id: 'beauty', label: 'Beauty', icon: Smile },
                   { id: 'finance', label: 'Finance', icon: Wallet },
                   { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
                   { id: 'lifestyle', label: 'Lifestyle', icon: Heart },
                   { id: 'edu', label: 'Education', icon: BookOpen },
                 ].map((niche) => (
                   <div key={niche.id} className={`p-6 rounded-[24px] border-2 flex flex-col items-center gap-3 transition-all cursor-pointer ${niche.id === 'tech' ? 'border-primary bg-white shadow-xl' : 'border-transparent bg-white shadow-sm'}`}>
                     <div className={`p-3 rounded-full ${niche.id === 'tech' ? 'bg-primary/10 text-primary' : 'bg-surface-container text-on-surface-variant/40'}`}>
                        <niche.icon className="w-6 h-6" />
                     </div>
                     <span className="font-bold text-sm tracking-tight">{niche.label}</span>
                     {niche.id === 'tech' && <CheckCircle2 className="absolute top-3 right-3 w-4 h-4 text-primary" fill="currentColor" stroke="white" />}
                   </div>
                 ))}
               </div>
             </motion.div>
          )}
          
          {step === 4 && (
            <motion.div 
               key="step4"
               className="w-full max-w-sm"
               initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
             >
               <h2 className="text-3xl font-black text-center mb-3">Unlock Deep Insights</h2>
               <p className="text-[15px] text-center text-on-surface-variant/70 mb-10">AI predicts your next viral moment.</p>
               
               <div className="space-y-4">
                 <div className="bg-white border border-outline-variant p-6 rounded-[24px] shadow-sm relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full">PREDICTION</div>
                    <p className="text-[11px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Viral Potential</p>
                    <h3 className="text-xl font-bold mb-4">850k - 1.2M</h3>
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden flex">
                      <div className="h-full bg-primary w-2/3" />
                      <div className="h-full bg-primary/20 w-1/3" />
                    </div>
                 </div>
                 
                 <div className="bg-white border border-outline-variant p-6 rounded-[24px] shadow-sm flex items-center gap-6">
                    <div className="w-16 h-16 bg-surface-container rounded-full shrink-0 flex items-center justify-center border-4 border-primary border-r-transparent -rotate-45 relative">
                      <span className="text-sm font-black rotate-45">75%</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Retention Spike</h4>
                      <p className="text-xs text-on-surface-variant/60 leading-tight">Viewers love behind-the-scenes segments.</p>
                    </div>
                 </div>
               </div>
             </motion.div>
          )}

          {step === 5 && (
            <motion.div 
               key="step5"
               className="w-full max-w-sm flex flex-col items-center"
               initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
             >
               <div className="w-full aspect-square max-w-[280px] relative mb-12">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-[60px] opacity-20" />
                  <div className="relative z-10 flex flex-col gap-4 h-full justify-center">
                    <motion.div className="ios-blur p-4 rounded-2xl shadow-xl -rotate-2 border border-white/40" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                      <p className="text-xs font-bold leading-tight">Video outperforming 90% of content!</p>
                    </motion.div>
                    <motion.div className="ios-blur p-4 rounded-2xl shadow-xl rotate-1 translate-x-4 border border-white/40" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                      <p className="text-xs font-bold text-primary leading-tight">Retention peaks at 0:45</p>
                    </motion.div>
                  </div>
               </div>
               <h2 className="text-3xl font-black text-center mb-4">Stay Ahead</h2>
               <p className="text-[15px] text-center text-on-surface-variant/70 leading-relaxed font-medium mb-12">
                Real-time performance alerts and AI growth tips delivered straight to your device.
               </p>
             </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="p-8 flex flex-col gap-4">
        <button 
          onClick={handleNext}
          className="w-full h-16 bg-primary text-white rounded-[24px] font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 active:scale-[0.98] transition-all"
        >
          {step === 5 ? 'Get Started' : 'Next'}
          <ArrowRight className="w-6 h-6" />
        </button>
        <button className="w-full py-2 text-on-surface-variant/40 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
          Skip for now
        </button>
      </footer>
    </div>
  );
}
