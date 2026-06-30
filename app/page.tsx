'use client';
import { useEffect, useState } from 'react';
import { getAIResponse } from '@/lib/mockAI';
import { AIResponseSchema, COMPONENT_MAP } from '@/lib/registry';

export default function Home() {
  const [data, setData] = useState<AIResponseSchema | null>(null);

  useEffect(() => {
    getAIResponse().then(setData);
  }, []);

  if (!data) return <div className="p-12 text-zinc-500">Connecting to Intelligence Layer...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-zinc-950 text-zinc-50 font-sans">
      <div className="max-w-xl w-full flex flex-col gap-6">
        <p className="text-zinc-300">{data.text_response}</p>

        {data.layout.map((block, i) => {
          const Component = COMPONENT_MAP[block.component];
          return <Component key={i} {...block.props} />;
        })}
      </div>
    </main>
  );
}