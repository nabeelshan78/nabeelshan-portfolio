export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'published' | 'under-review' | 'in-preparation';
  abstract?: string;
  arxivUrl?: string;
  pdfUrl?: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    id: 'dpo-low-resource',
    title: 'Direct Preference Optimization for Low-Resource Language Alignment',
    authors: ['Nabeel Shan'],
    venue: 'IEEE FIT',
    year: 2025,
    status: 'in-preparation',
    abstract: 'Evaluating Direct Preference Optimization techniques for aligning large language models trained on low-resource linguistic datasets. This work explores adaptation strategies for preference-based alignment when training data is scarce.',
    tags: ['DPO', 'LLM Alignment', 'Low-Resource NLP'],
  },
];

export interface ResearchInterest {
  area: string;
  description: string;
  keywords: string[];
}

export const researchInterests: ResearchInterest[] = [
  {
    area: 'LLM Alignment & Preference Learning',
    description: 'Investigating preference optimization methods (DPO, RLHF, GRPO, ORPO) for steering language model behavior. Focus on alignment techniques that scale to resource-constrained settings.',
    keywords: ['RLHF', 'DPO', 'PPO', 'GRPO', 'ORPO', 'Reward Modeling'],
  },
  {
    area: 'LLM Reasoning & Efficiency',
    description: 'Studying reasoning capabilities of large language models and methods to improve inference efficiency. Includes chain-of-thought prompting, model compression, and parameter-efficient adaptation.',
    keywords: ['Chain-of-Thought', 'LoRA', 'QLoRA', 'PEFT', 'Model Distillation'],
  },
  {
    area: 'Agentic AI Systems',
    description: 'Designing and evaluating multi-agent orchestration frameworks. Research on tool-use, planning, and autonomous decision-making in LLM-based agent systems.',
    keywords: ['Multi-Agent Systems', 'Tool Use', 'Planning', 'Orchestration'],
  },
];
