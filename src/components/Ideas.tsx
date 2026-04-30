/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Lightbulb, Search, Sparkles, Bookmark, Compass, PlayCircle, FileText, Lock } from 'lucide-react';

export default function Ideas() {
  return (
    <div className="min-h-screen pt-4 pb-32 px-5 max-w-lg mx-auto overflow-y-auto no-scrollbar">
      <header className="flex justify-between items-center mb-8 pt-4">
        <h1 className="text-2xl font-black tracking-tight flex items-center gap-2">
           <Lightbulb className="w-6 h-6 text-primary" />
           Ideas
        </h1>
        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/30">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcx7DoV5zqms-bzwj3LUfYyngDgy0qZK192zWaEcpAOZTXosA1wJCXXMzoM8saft-hy24bzjXLZvBK61UNxqBMfSFpcEJO62txCObPBwqyWaZjWiQuAugnPupwcgCXOkak0EVyivbeNp0oQwq3-MhZLwDez2ItYu7RX_oU7BnZVQ_pu1mZ1Sv7UWZ5dbe1nZ8bS_BzQDcbX8ctyQVFqqXk0rfocjhcyaJVT5_NqUnqMGdSy-v9B2PZj01yP92AzOSt9_tUpOWfuzA7" alt="Profile" />
        </div>
      </header>

      <section className="mb-10">
        <div className="relative mb-4 group scale-100 hover:scale-[1.02] transition-transform">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-on-surface-variant/40" />
          </div>
          <input 
            type="text" 
            placeholder="What do you want to create?" 
            className="w-full h-16 bg-white border-2 border-transparent rounded-[24px] pl-14 pr-6 shadow-sm focus:border-primary/20 focus:ring-0 transition-all font-medium placeholder:text-on-surface-variant/30 text-sm"
          />
        </div>
        <button className="w-full h-16 bg-primary text-white rounded-[24px] font-black shadow-xl shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
           <Sparkles className="w-5 h-5" />
           Generate Ideas
        </button>
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-center px-2">
          <h2 className="font-black text-lg">Trending Concepts</h2>
          <button className="text-xs font-bold text-primary tracking-widest uppercase">View all</button>
        </div>

        {[
          { hook: 'The secret reason 90% of creators fail...', angle: 'Focus on psychological burnout.', format: '60s vertical video with text.' },
          { hook: 'How I built a $10k/mo business solo...', angle: 'Automation stacks and leverage.', format: 'Long-form newsletter or thread.' }
        ].map((idea, i) => (
          <motion.div 
            key={i}
            className="bg-white border border-outline-variant p-6 rounded-[28px] shadow-sm space-y-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-start">
               <div className="bg-primary/10 px-3 py-1 rounded-full text-primary text-[10px] font-black tracking-widest uppercase">HOOK</div>
               <Bookmark className="w-5 h-5 text-on-surface-variant/20 cursor-pointer hover:text-primary transition-colors" />
            </div>
            <p className="text-xl font-black leading-snug tracking-tight">"{idea.hook}"</p>
            <div className="space-y-4 pt-4 border-t border-surface-container-low">
               <div className="flex items-start gap-4">
                  <Compass className="w-4 h-4 text-on-surface-variant/40 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant/30 tracking-widest uppercase mb-0.5">Content Angle</p>
                    <p className="text-sm font-bold text-on-surface-variant/80">{idea.angle}</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <PlayCircle className="w-4 h-4 text-on-surface-variant/40 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant/30 tracking-widest uppercase mb-0.5">Format</p>
                    <p className="text-sm font-bold text-on-surface-variant/80">{idea.format}</p>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}

        {/* Locked Idea */}
        <div className="bg-white border border-outline-variant p-6 rounded-[28px] shadow-sm space-y-5 relative overflow-hidden group">
           <div className="blur-sm select-none">
              <div className="flex justify-between items-start mb-4">
                 <div className="bg-surface-container px-3 py-1 rounded-full text-on-surface-variant/30 text-[10px] font-black uppercase">HOOK</div>
                 <Lock className="w-5 h-5 text-on-surface-variant/20" />
              </div>
              <p className="text-xl font-black">The hidden AI tools that will replace...</p>
           </div>
           <div className="absolute inset-0 bg-surface-container/60 backdrop-blur-[2px] flex items-center justify-center p-6">
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3 active:scale-95 transition-transform cursor-pointer">
                 <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><Sparkles className="w-4 h-4 text-primary" /></div>
                 <span className="text-[13px] font-black">Upgrade for more ideas</span>
              </div>
           </div>
        </div>
      </section>

      {/* Workshop Banner */}
      <section className="mt-12 mb-20">
         <div className="relative aspect-video rounded-[32px] overflow-hidden group cursor-pointer shadow-lg">
            <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwEP1vz2gzt9gng-hP-8FPrjfG1ltRNWbxVIicw-Jn40fvlaIdRIeOpQ3OVGpxodkL6GlzgGjCmXK3FB0kFJiDvTPmlHr5et14nLMksDcSw0nCmVSkuPab6--ZU8wCcpd_yglK0ssa7WE4-WyqYGfce1_8D_u0jCwYMThnlNDcq2_P_5pruL4KgqwS_ScrR55kIqO0Tivg4aUBW6NJ_mJ7jPNTDHidQd3JCxb3SrrIpJXYvBcfbmEkYhFLfgjZHuobl9hopMQNkeOM" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               alt="Workshop" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
               <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-1">Creator Workshop</p>
               <h3 className="text-white text-2xl font-black tracking-tight leading-tight">Mastering Viral Hooks</h3>
            </div>
         </div>
      </section>
    </div>
  );
}
