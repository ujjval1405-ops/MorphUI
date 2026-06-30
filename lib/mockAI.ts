// lib/mockAI.ts
import { AIResponseSchema } from './registry';

// This simulates the AI "thinking" for 1 second
export const getAIResponse = async (): Promise<AIResponseSchema> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    text_response: "I've analyzed your billing history. I can offer you a partial refund or store credit.",
    layout: [
      { component: "SuccessNotice", props: { title: "Review Complete", message: "Eligible for up to ₹500." } },
      { component: "InteractiveSlider", props: { label: "Refund Amount (₹)", min: 0, max: 500, value: 0 } }
    ]
  };
};