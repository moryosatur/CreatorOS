/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, TrendingUp, Heart, Eye, MessageCircle, MoreVertical, Search, ArrowLeft, Share2, Shield, AlertCircle, TrendingDown, Edit3, Wand2, Link2 } from 'lucide-react';

export default function Content() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  const contentItems = [
    { title: 'The Future of Content Engines', views: '124k', likes: '8.2k', trend: '+12%', platform: 'youtube', time: '12:45', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgPrmPRfSyzs80w9sY11rEqSe170rm4sf56b_cHCg_Z2uyMBTKejDK6ABvEIT7YPfCIqF7v0ZbThioEyiveRoqBhIunCEmX_RKNRxRjdxBjWAbWgU584FWMjtS7HCI3STMq04EYa37JpJL22VMKikdCKjrormROFU7X4w3PZE_AOOCBT6vCAgIF2btIYDc6ovAbkQgcin32jUub-nWUmg9pn4OXQizU06jT6e-LXmwnFlB38gMxyEbtuQ9mdntUV-Ut-EOG-1UHPQW' },
    { title: 'Daily Workflow Routine', views: '892k', likes: '1.4k', trend: '+45%', platform: 'tiktok', time: '00:45', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpEmWqp19vUTfLsVX0gs9UM7-vPAqssWHYPMGL1KmjBJJkN85GOnkfZ1sWrropRCnpMYWnVlHPQxQlCk9ZSJHFFwiZeH3fm5WQctto5fguTzg7E4F6Ra-Te82iKQs9ujHiVDqZceAGy0wxhGMFSpyhUu1DirpkUoOxAZOVhlNpELgoHkU_YAj1OjcciVcncrrB0v7cupW2uDVNN_NuB2spoEynwTUAqtgVod1y6Puc8drNVKN0onxi1bfssbp3WWbaPDTgCvtvgP5Y' },
    { title: 'Why minimalism is filters', views: '15k', likes: '456', trend: '+5%', platform: 'instagram', time: '02:15', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaNvUr75kMck245_HL-1oWvPMDWDfV_Y9MNpMJvpZa3Og6Ibez0HA5PbP926EiPsYnCFdT8ZUu3FxzUOXL6oi1UlZm83YeJw8saqapJsBXFAMkQ1AeCeoKFkGEMrtQPCU2f0Oi3qxcmoHDIv3pyNTKf0jF6EpdtldsGQPFJDHG0WTsxS107n8ykAfTb9y5WkZH-7cKUMstME5tvT67crkId-pqduSj0l1LM-fx36sRrQcMEAoIXOD5GkGLO9oEws4cSEDvZKSz0Tlh' },
  ];

  if (view === 'detail') {
    return (
      <div className="min-h-screen pt-4 pb-32 px-5 max-w-lg mx-auto">
        <header className="flex justify-between items-center mb-8 pt-4">
           <button onClick={() => setView('list')} className="p-2 bg-white rounded-full"><ArrowLeft className="w-5 h-5" /></button>
           <h1 className="text-xl font-black">Analysis</h1>
           <button className="p-2 text-primary"><Share2 className="w-5 h-5" /></button>
        </header>

        <section className="mb-8">
           <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl group mb-6">
              <img src={contentItems[0].img} className="w-full h-full object-cover" alt="Video" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                 <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer active:scale-90 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white" />
                 </div>
              </div>
           </div>
           <div className="px-2">
              <div className="flex items-center gap-2 mb-2">
                 <Play className="w-4 h-4 text-primary" />
                 <span className="text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-widest">YouTube • Oct 24, 2023</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight leading-tight">How I Grew My Audience</h2>
           </div>
        </section>

        <section className="grid grid-cols-2 gap-4 mb-8">
           {[ { label: 'Views', val: '124.5k', trend: '+12%' }, { label: 'Watch Time', val: '8.2k hrs', trend: '+5.4%' } ].map((s, i) => (
             <div key={i} className="bg-white border border-outline-variant p-5 rounded-[24px]">
                <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">{s.label}</p>
                <div className="flex items-end gap-2 text-primary">
                   <span className="text-xl font-black text-on-surface">{s.val}</span>
                   <span className="text-[10px] font-bold mb-1">{s.trend}</span>
                </div>
             </div>
           ))}
        </section>

        {/* Retention Flow Chart */}
        <section className="bg-white border border-outline-variant p-8 rounded-[32px] mb-8">
           <div className="flex justify-between items-center mb-8">
              <h3 className="font-black text-lg">Retention Flow</h3>
              <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">Real-time</span>
           </div>
           <div className="h-40 relative mb-4">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 Q10,75 20,40 T40,45 T60,20 T80,30 T100,10" fill="none" stroke="#bc000a" strokeWidth="3" strokeLinecap="round" />
                <path d="M0,80 Q10,75 20,40 T40,45 T60,20 T80,30 T100,10 L100,100 L0,100 Z" fill="rgba(188,0,10,0.05)" />
                <line x1="60" y1="0" x2="60" y2="100" stroke="#bc000a" strokeDasharray="4" strokeOpacity="0.3" />
              </svg>
           </div>
           <div className="flex justify-between text-[10px] font-bold text-on-surface-variant/30 uppercase tracking-[0.2em]">
              <span>0:00</span><span>2:30</span><span>5:00</span><span>7:30</span><span>10:00</span>
           </div>
        </section>

        {/* AI Analysis Cards */}
        <section className="space-y-4 mb-12">
           <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-black">AI Analysis</h3>
           </div>
           {[
             { label: 'Strong Hook', icon: Shield, color: 'text-green-500', bg: 'border-l-green-500', t: 'The first 15s retained 85% of viewers, significantly higher than your average.' },
             { label: 'Improve Retention', icon: TrendingDown, color: 'text-amber-500', bg: 'border-l-amber-500', t: 'A sharp drop occurred at 4:12 during transition. Add a teaser.' },
             { label: 'CTA Missing', icon: AlertCircle, color: 'text-red-500', bg: 'border-l-red-500', t: 'No clear call-to-action detected in the final minute. Add a link.' }
           ].map((item, i) => (
             <div key={i} className={`bg-white border border-outline-variant ${item.bg} border-l-4 p-5 rounded-[24px] flex gap-4`}>
                <item.icon className={`w-6 h-6 shrink-0 ${item.color}`} />
                <div>
                   <h4 className="font-bold text-base mb-1">{item.label}</h4>
                   <p className="text-xs text-on-surface-variant/70 leading-relaxed">{item.t}</p>
                </div>
             </div>
           ))}
        </section>

        {/* Recommendations List */}
        <section className="mb-12">
           <h3 className="text-lg font-black mb-4 px-2">Recommendations</h3>
           <div className="bg-white border border-outline-variant rounded-[32px] overflow-hidden divide-y divide-surface-container/30 shadow-sm">
              {[
                { icon: Edit3, t: 'Update thumbnail for 4:12 drop' },
                { icon: Wand2, t: 'Generate Shorts from peak moments' },
                { icon: Link2, t: 'Pin top comment with CTA' }
              ].map((rec, i) => (
                <div key={i} className="p-5 flex items-center justify-between group active:bg-surface-container transition-colors cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center"><rec.icon className="w-5 h-5 text-on-surface-variant/60" /></div>
                      <span className="font-bold text-sm">{rec.t}</span>
                   </div>
                   <ChevronRight className="w-5 h-5 text-on-surface-variant/20" />
                </div>
              ))}
           </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-4 pb-32 px-5 max-w-lg mx-auto overflow-y-auto no-scrollbar">
       <header className="flex justify-between items-center mb-8 pt-4">
        <h1 className="text-2xl font-black tracking-tight">Content</h1>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-on-surface-variant/40" />
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant/30">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcx7DoV5zqms-bzwj3LUfYyngDgy0qZK192zWaEcpAOZTXosA1wJCXXMzoM8saft-hy24bzjXLZvBK61UNxqBMfSFpcEJO62txCObPBwqyWaZjWiQuAugnPupwcgCXOkak0EVyivbeNp0oQwq3-MhZLwDez2ItYu7RX_oU7BnZVQ_pu1mZ1Sv7UWZ5dbe1nZ8bS_BzQDcbX8ctyQVFqqXk0rfocjhcyaJVT5_NqUnqMGdSy-v9B2PZj01yP92AzOSt9_tUpOWfuzA7" alt="Profile" />
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 -mx-5 px-5">
        {['All', 'YouTube', 'TikTok', 'Instagram'].map((tab, i) => (
          <button key={tab} className={`px-6 h-10 rounded-full font-bold text-xs whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container text-on-surface-variant/60 hover:bg-surface-container-high'}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4 mb-20">
        {contentItems.map((item, i) => (
          <motion.div 
            key={i} 
            onClick={() => setView('detail')}
            className="bg-white border border-outline-variant p-4 rounded-[28px] shadow-sm flex gap-5 active:scale-[0.98] transition-all cursor-pointer group hover:border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="relative w-24 h-24 shrink-0 rounded-[20px] overflow-hidden bg-surface-container">
               <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Video" />
               {item.time && <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-md text-[9px] font-bold text-white px-1.5 py-0.5 rounded-lg">{item.time}</div>}
            </div>
            <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
               <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="w-6 h-6 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><Play className="w-4 h-4" /></div>
                    <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full text-[10px] font-black">
                       <TrendingUp className="w-3 h-3" />
                       {item.trend}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm truncate px-1">{item.title}</h3>
               </div>
               <div className="flex items-center justify-between px-1">
                  <div className="flex gap-5">
                     <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity"><Eye className="w-3.5 h-3.5" /> <span className="text-[11px] font-black">{item.views}</span></div>
                     <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity"><Heart className="w-3.5 h-3.5" /> <span className="text-[11px] font-black">{item.likes}</span></div>
                  </div>
                  <MoreVertical className="w-4 h-4 text-on-surface-variant/20" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="fixed bottom-32 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="text-2xl font-bold">+</span>
      </button>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>;
}
