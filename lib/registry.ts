// lib/registry.ts
import InteractiveSlider from '@/components/InteractiveSlider';
import SuccessNotice from '@/components/SuccessNotice';

// This map tells our app which code files belong to which "names"
export const COMPONENT_MAP = {
  InteractiveSlider,
  SuccessNotice,
};

export type AllowedComponent = keyof typeof COMPONENT_MAP;

export interface UIBlock {
  component: AllowedComponent;
  props: Record<string, any>;
}

export interface AIResponseSchema {
  text_response: string;
  layout: UIBlock[];
}