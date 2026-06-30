// lib/registry.ts

export type AllowedComponent =
  | "InteractiveSlider"
  | "SuccessNotice";

export interface UIBlock {
  component: AllowedComponent;
  props: Record<string, any>;
}

export interface AIResponseSchema {
  text_response: string;
  layout: UIBlock[];
}