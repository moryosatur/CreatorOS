/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TrendingUp, BarChart2, Clock, PlayCircle, Share2, MessageSquare } from 'lucide-react';

export default function Insights() {
  return (
    <div className="min-h-screen pt-4 pb-32 px-5 max-w-lg mx-auto overflow-y-auto no-scrollbar">
      <header className="mb-8 pt-4 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tight">Insights</h1>
        <span className="text-xs font-bold text-primary uppercase tracking-widest">Last 30 Days</span>
      </header>

      {/* Segmented Control */}
      <div className="flex p-1 bg-surface-container rounded-full mb-8">
        {['Views', 'Followers', 'Likes'].map((tab, i) => (
          <button 
            key={tab} 
            className={`flex-1 py-2 font-bold text-xs rounded-full transition-all ${i === 0 ? 'bg-white shadow-sm text-on-surface' : 'text-on-surface-variant/50'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hero Chart Card */}
      <motion.section 
        className="bg-white border border-outline-variant p-6 rounded-[32px] shadow-sm mb-8 relative overflow-hidden h-[360px] flex flex-col"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-xs font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Total Views</p>
            <h3 className="text-3xl font-black tracking-tight">1.2M</h3>
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="text-xs font-black">12.4%</span>
          </div>
        </div>

        {/* Apple style chart */}
        <div className="flex-1 relative mt-4">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 200">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#bc000a" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#bc000a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 180 Q 40 170, 80 140 T 160 100 T 240 120 T 320 60 T 400 20" fill="none" stroke="#bc000a" strokeWidth="4" strokeLinecap="round" />
            <path d="M0 180 Q 40 170, 80 140 T 160 100 T 240 120 T 320 60 T 400 20 L 400 200 L 0 200 Z" fill="url(#chartGradient)" />
            <circle cx="160" cy="100" r="5" fill="#bc000a" stroke="white" strokeWidth="2" />
            <circle cx="320" cy="60" r="5" fill="#bc000a" stroke="white" strokeWidth="2" />
            <circle cx="400" cy="20" r="6" fill="#bc000a" stroke="white" strokeWidth="3" />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest px-1">
            <span>Oct 01</span>
            <span>Oct 15</span>
            <span>Today</span>
          </div>
        </div>
      </motion.section>

      {/* AI Nuggets */}
      <section className="space-y-4 mb-12">
        <h2 className="text-lg font-black px-2">AI Insights</h2>
        {[
          { label: 'Views are up 18%', icon: BarChart2, text: 'Your latest series of educational shorts is outperforming reach by 12k.' },
          { label: '7–9 PM is peak time', icon: Clock, text: 'Audience activity peaks during weekday evenings. Next upload on Tuesday.' },
          { label: 'Short videos win', icon: PlayCircle, text: 'Content under 45s has 40% higher completion rate this month.' },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            className="ios-blur p-6 rounded-[24px] border border-white/40 shadow-sm flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
               <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-[15px] mb-1">{item.label}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="grid grid-cols-2 gap-4">
        {[
          { icon: Share2, label: 'Avg Shares', value: '4.2k' },
          { icon: MessageSquare, label: 'Comments', value: '892' },
        ].map((m, i) => (
          <div key={i} className="bg-surface-container rounded-[24px] p-5">
             <m.icon className="w-6 h-6 text-primary mb-2" />
             <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-0.5">{m.label}</p>
             <h4 className="text-xl font-black">{m.value}</h4>
          </div>
        ))}
      </section>
    </div>
  );
}
