'use client';
import { useState } from 'react';
import InteractiveSlider from '@/components/InteractiveSlider';
import SuccessNotice from '@/components/SuccessNotice';

export default function Home() {
  const [sliderValue, setSliderValue] = useState(500);

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-zinc-950 text-zinc-50 font-sans">
      <div className="max-w-xl w-full flex flex-col gap-6">
        <h1 className="text-xl font-bold text-zinc-400 border-b border-zinc-800 pb-3">MorphUI Engine</h1>
        
        <SuccessNotice 
          title="System Ready" 
          message="Drag the slider to adjust your refund preference." 
        />
        
        <InteractiveSlider 
          label="Adjust Refund Amount"
          min={0}
          max={1000}
          value={sliderValue}
          onChange={setSliderValue}
        />
      </div>
    </main>
  );
}