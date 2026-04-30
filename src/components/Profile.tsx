/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Camera, ChevronRight, Video, Instagram, Bell, CreditCard, HelpCircle, FileText, LogOut, Verified, Edit2 } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen pt-4 pb-48 px-5 max-w-lg mx-auto overflow-y-auto no-scrollbar">
      {/* Header */}
      <section id="profile-heading" className="flex flex-col items-center text-center pt-8 mb-10">
        <div id="profile-picture-container" className="relative mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-surface-container">
            <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcx7DoV5zqms-bzwj3LUfYyngDgy0qZK192zWaEcpAOZTXosA1wJCXXMzoM8saft-hy24bzjXLZvBK61UNxqBMfSFpcEJO62txCObPBwqyWaZjWiQuAugnPupwcgCXOkak0EVyivbeNp0oQwq3-MhZLwDez2ItYu7RX_oU7BnZVQ_pu1mZ1Sv7UWZ5dbe1nZ8bS_BzQDcbX8ctyQVFqqXk0rfocjhcyaJVT5_NqUnqMGdSy-v9B2PZj01yP92AzOSt9_tUpOWfuzA7" 
               className="w-full h-full object-cover" 
               alt="Alex Creator" 
            />
          </div>
          <motion.button 
            className="absolute bottom-1 right-1 bg-primary w-9 h-9 rounded-full flex items-center justify-center border-4 border-white text-white shadow-lg active:scale-90 transition-transform"
            whileTap={{ scale: 0.9 }}
          >
            <Edit2 className="w-4 h-4" />
          </motion.button>
        </div>
        <h2 className="text-2xl font-black tracking-tight mb-1">Alex Creator</h2>
        <p className="text-on-surface-variant/50 text-sm font-bold tracking-tight">Digital Architect • @alexcreate_os</p>
        <button className="mt-6 px-8 h-12 bg-surface-container rounded-full text-sm font-black active:scale-95 transition-all">
          Edit Public Profile
        </button>
      </section>

      {/* Stats Quick Grid */}
      <section id="creator-stats" className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-white border border-outline-variant p-6 rounded-[28px] shadow-sm">
           <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Subscribers</p>
           <div className="flex items-baseline gap-2">
              <span className="text-xl font-black">1.2M</span>
              <span className="text-xs font-black text-primary">+12%</span>
           </div>
        </div>
        <div className="bg-white border border-outline-variant p-6 rounded-[28px] shadow-sm">
           <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Lifetime Views</p>
           <span className="text-xl font-black">45.8M</span>
        </div>
        <div className="col-span-2 bg-white border border-primary/20 p-6 rounded-[28px] shadow-sm flex items-center justify-between">
           <div>
              <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Creator Level</p>
              <h4 className="text-xl font-black text-primary">Platinum Partner</h4>
           </div>
           <Verified className="w-12 h-12 text-primary" strokeWidth={1.5} />
        </div>
      </section>

      {/* iOS Settings Style Groups */}
      <div className="space-y-8">
        <Group title="Connected Platforms">
          <ListItem icon={Video} color="text-red-500" bg="bg-red-50" label="YouTube Studio" value="Connected" />
          <ListItem icon={Instagram} color="text-pink-500" bg="bg-pink-50" label="Instagram Insights" value="Link account" />
        </Group>

        <Group title="Preferences">
          <ListItem icon={Bell} color="text-primary" bg="bg-primary/5" label="Notifications" />
          <ListItem icon={CreditCard} color="text-primary" bg="bg-primary/5" label="Subscription" status="Pro Plan" />
        </Group>

        <Group title="Support">
          <ListItem icon={HelpCircle} color="text-on-surface-variant/60" bg="bg-surface-container" label="Help & Support" />
          <ListItem icon={FileText} color="text-on-surface-variant/60" bg="bg-surface-container" label="Terms of Service" />
        </Group>

        <button id="logout-button" className="w-full bg-white border border-outline-variant py-5 rounded-[28px] text-primary font-black active:bg-red-50 transition-colors shadow-sm flex items-center justify-center gap-3">
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-black text-on-surface-variant/30 uppercase tracking-[0.2em] ml-6 mb-3">{title}</p>
      <div className="bg-white border border-outline-variant rounded-[32px] overflow-hidden shadow-sm divide-y divide-surface-container-low/50">
        {children}
      </div>
    </div>
  );
}

function ListItem({ icon: Icon, color, bg, label, value, status }: { icon: any; color: string; bg: string; label: string; value?: string; status?: string }) {
  return (
    <div className="p-5 flex items-center justify-between active:bg-surface-container/30 transition-colors cursor-pointer group">
      <div className="flex items-center gap-5">
        <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-bold text-base">{label}</span>
      </div>
      <div className="flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
        {status && <span className="text-[11px] font-black text-primary uppercase tracking-widest">{status}</span>}
        {value && <span className="text-xs font-bold">{value}</span>}
        <ChevronRight className="w-5 h-5 text-on-surface-variant/20" />
      </div>
    </div>
  );
}
