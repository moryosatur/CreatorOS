/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LayoutGrid, Bell, TrendingUp, Eye, Users, Heart, MessageCircle, Sparkles, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Views', value: '48.2k', trend: '+4.2%', icon: Eye },
    { label: 'Followers', value: '12.5k', trend: '+1.8%', icon: Users },
    { label: 'Likes', value: '89.1k', trend: '+8.4%', icon: Heart },
    { label: 'Comments', value: '2,410', trend: '-0.5%', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen pt-4 pb-32 px-5 max-w-lg mx-auto overflow-y-auto no-scrollbar">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 pt-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-surface-container rounded-lg">
            <LayoutGrid className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">CreatorOS</h1>
        </div>
        <button className="p-2 bg-white rounded-full shadow-sm relative">
          <Bell className="w-5 h-5 text-on-surface-variant" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
        </button>
      </header>

      {/* Main Card: Earnings */}
      <motion.section 
        id="earnings-overview"
        className="relative overflow-hidden rounded-[32px] bg-primary p-8 text-white shadow-[0_20px_40px_rgba(188,0,10,0.25)] mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="relative z-10">
          <p className="text-sm font-medium opacity-60 mb-1">Estimated Earnings</p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-black tracking-tight">$1,829</h2>
            <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-xs font-bold">+12%</span>
            </div>
          </div>
        </div>
        {/* Abstract Chart Graphic */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
            <path d="M0,80 Q50,70 100,85 T200,40 T300,60 T400,20 L400,100 L0,100 Z" fill="rgba(255,255,255,0.5)" />
            <path d="M0,80 Q50,70 100,85 T200,40 T300,60 T400,20" fill="none" stroke="white" strokeWidth="4" />
          </svg>
        </div>
      </motion.section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            className="bg-white border border-outline-variant p-5 rounded-[24px] shadow-sm flex flex-col justify-between h-36"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-surface-container rounded-xl">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={`text-[11px] font-bold ${stat.trend.startsWith('+') ? 'text-primary' : 'text-on-surface-variant/40'}`}>
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider mb-0.5">{stat.label}</p>
              <h3 className="text-2xl font-black">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Quick Insight */}
      <motion.section 
        className="bg-white border border-outline-variant p-5 rounded-[24px] shadow-sm flex items-center gap-5 cursor-pointer hover:bg-surface-container/30 transition-colors mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] mb-1">Quick Insight</h4>
          <p className="text-[15px] font-bold leading-tight">Your educational content performs 2x better</p>
        </div>
        <ChevronRight className="w-5 h-5 text-on-surface-variant/30" />
      </motion.section>

      {/* Top Performing Content Snippet */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4 px-2">
          <h2 className="text-lg font-black">Top Performing</h2>
          <button className="text-xs font-bold text-primary uppercase tracking-widest">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5">
           {[
             { title: 'Mastering Lighting', views: '12.4k', time: '12:45', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Su56ZY4JrLsRfDZCwl2XBoRNO8Uh1C_rsmIH4JRkUfFtNyWdKWSwx15pNS1h0jwE9gCcf5riBX84I2nFAKvCDkFw2Giy2BBE-ra-eCu3UXcCxTtf7Z65Eze0QiHRFL0qHc-EXAnMfjbbqQ04_IqrPYeilzmrIj3Ne4IJpMObeBKIdgyKOAj4AB_5o_-7p8GwUV3dJQeUJTpJ1JsOeLlmuFc7SdfjL0IDCXadh9sZMzN662icEWkyo88wMc64elSsqNg-W1_gqDz9' },
             { title: 'Creator Workflow', views: '9.8k', time: '08:12', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFjdalHbPCwo3220y0bGfjP-sn1_F_MrpIlNM_VCgpG4ATMBUYyr8cAT1R9uB0zB5iyN1VBA6wpPQzXcQ0Gd4a1g8t3EM6BTtD7p1hjl1mTEorVIgTY016XJZBKmf0ea243EAq6HPvHr05L77zaMBc98N87mIqDek9z81wnHRFhx09Uj7DYLWVs7vBVALbqh7-zuSD7CmTfnko6zq-20rx6XHPAwLjkejgeFuLprg2B_85WGb2W_6KGgYPeQ9Uxp8X1Q-l-ynul7KT' }
           ].map((item, i) => (
             <div key={i} className="shrink-0 w-48 group cursor-pointer">
               <div className="relative aspect-video rounded-[20px] overflow-hidden mb-3 shadow-sm bg-surface-container">
                 <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} />
                 <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-[10px] font-bold text-white px-2 py-0.5 rounded-lg">
                   {item.time}
                 </div>
               </div>
               <h3 className="text-sm font-bold truncate px-1">{item.title}</h3>
               <p className="text-[12px] font-medium text-on-surface-variant/60 px-1">{item.views} views</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
