import { lazy, ComponentType } from 'react';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
  component: React.LazyExoticComponent<ComponentType>;
}

export const posts: PostMeta[] = [
  {
    slug: 'dpo-vs-rlhf',
    title: 'Direct Preference Optimization: Why I Stopped Training Reward Models',
    date: '2025-05-15',
    description: 'A first-principles comparison of DPO and RLHF — the math behind eliminating reward models from the alignment pipeline, with implementation details.',
    tags: ['LLM Alignment', 'DPO', 'RLHF', 'Optimization'],
    readTime: '12 min read',
    component: lazy(() => import('./dpo-vs-rlhf.mdx')),
  },
  {
    slug: 'transformer-from-scratch',
    title: 'Building Multi-Head Attention from First Principles in PyTorch',
    date: '2025-04-28',
    description: "A from-scratch PyTorch implementation of multi-head attention — the mathematical foundations, the engineering details that papers leave out, and why I think every ML researcher should build this once.",
    tags: ['Transformers', 'Attention', 'PyTorch', 'From Scratch'],
    readTime: '15 min read',
    component: lazy(() => import('./transformer-from-scratch.mdx')),
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
