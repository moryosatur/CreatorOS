/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div 
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.div 
        className="relative w-32 h-32 flex items-center justify-center mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 border-[18px] border-primary rounded-full border-r-transparent -rotate-45" />
        <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(188,0,10,0.3)] z-10" />
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold tracking-tighter mb-2">CreatorOS</h1>
        <p className="text-xs uppercase tracking-[0.3em] font-medium opacity-40">Performance Precision</p>
      </motion.div>
      
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
    </motion.div>
  );
}
