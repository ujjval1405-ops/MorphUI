// components/InteractiveSlider.tsx
interface SliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (val: number) => void;
}

export default function InteractiveSlider({ label, min, max, value, onChange }: SliderProps) {
  return (
    <div className="p-5 bg-zinc-900/60 rounded-xl border border-zinc-800 flex flex-col gap-3">
      <label className="text-sm font-medium text-zinc-400">{label}</label>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-teal-500" 
      />
      <div className="flex justify-between text-xs text-zinc-500">
        <span>₹{min}</span>
        <span className="font-bold text-teal-400">₹{value}</span>
        <span>₹{max}</span>
      </div>
    </div>
  );
}