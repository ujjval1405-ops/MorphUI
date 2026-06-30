// app/page.tsx
'use client'; // Tells the computer this page is interactive
import React, { useState } from 'react';
import { AIResponseSchema } from '@/lib/registry';

export default function Home() {
  // We are pretending the AI just sent this exact layout layout structure over the air
  const [data, setData] = useState<AIResponseSchema>({
    text_response: "I see your promo code failed on your order. Let's balance it manually below.",
    layout: [
      {
        component: "InteractiveSlider",
        props: { label: "Shift Balance to Store Credit (₹)", min: 0, max: 2000 }
      },
      {
        component: "SuccessNotice",
        props: { title: "System Guard Active", message: "Adjustments will apply safely on confirmation." }
      }
    ]
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-zinc-950 text-zinc-50 font-sans">
      <div className="max-w-xl w-full flex flex-col gap-6">
        <h1 className="text-xl font-bold tracking-tight text-zinc-400 border-b border-zinc-800 pb-3">
          MorphUI Engine • Sandbox Mode
        </h1>
        
        {/* The Text Layer (The chatbot talking) */}
        <p className="text-zinc-300 bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-sm leading-relaxed">
          {data.text_response}
        </p>

        {/* The Generative UI Layer (The interface built out of the blueprint) */}
        <div className="w-full flex flex-col gap-4">
          {data.layout.map((block, idx) => {
            
            // If the blueprint says 'InteractiveSlider', render a physical slider tool
            if (block.component === 'InteractiveSlider') {
              return (
                <div key={idx} className="p-5 bg-zinc-900/60 rounded-xl border border-zinc-800 flex flex-col gap-3">
                  <label className="text-sm font-medium text-zinc-400">{block.props.label}</label>
                  <input 
                    type="range" 
                    min={block.props.min} 
                    max={block.props.max} 
                    className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-teal-500" 
                  />
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>₹{block.props.min}</span>
                    <span>₹{block.props.max}</span>
                  </div>
                </div>
              );
            }

            // If the blueprint says 'SuccessNotice', render a beautiful security banner
            if (block.component === 'SuccessNotice') {
              return (
                <div key={idx} className="p-4 bg-teal-950/20 border border-teal-800/30 text-teal-400 rounded-xl flex flex-col gap-1">
                  <strong className="text-sm font-semibold">{block.props.title}</strong>
                  <span className="text-xs text-teal-500/80">{block.props.message}</span>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </main>
  );
}