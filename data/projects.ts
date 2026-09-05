export type ProjectCategory = 'Generative AI & LLMs' | 'RAG & Agentic AI' | 'Natural Language Processing' | 'Computer Vision';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  categories: ProjectCategory[];
  githubLink: string;
  liveDemoLink?: string;
  videoEmbedUrl?: string;
  thumbnailUrl?: string;
  metrics?: ProjectMetric[];
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
  "id": "rlhf-pipeline",
  "title": "RLHF Pipeline: SFT, Reward Modeling & PPO",
  "description": "Engineered a complete, end-to-end **Reinforcement Learning from Human Feedback (RLHF)** pipeline to align  a **GPT-2** language model with human preference distributions. This project serves as a rigorous, methodology-focused reproduction of the core alignment frameworks driving modern frontier models.\n\nThe architecture strictly implements a 3-stage process. It initiates with **Supervised Fine-Tuning (SFT)** via both full-parameter tuning and **QLoRA**, followed by training a distinct **Reward Model (RM)** on pairwise human preference datasets. The final phase leverages **Proximal Policy Optimization (PPO)**, employing a KL-divergence penalty to directly optimize the generative policy without inducing catastrophic forgetting.\n\nEmpirical validation demonstrated exceptional convergence across all stages. The Reward Model achieved a **98% accuracy** in preference classification (up from an 18% baseline). Subsequent PPO policy updates yielded a **+54% improvement** in average reward scores over the SFT baseline, while the final aligned model maintained a **+183% ROUGE-2 increase** over the raw base model, successfully balancing preference alignment with linguistic coherence." ,
  "techStack": [
    "PyTorch",
    "PPO",
    "PEFT/QLoRA",
    "TRL",
    "RLHF"
  ],
  "categories": ["Generative AI & LLMs", "Natural Language Processing"],
  "githubLink": "https://github.com/nabeelshan78/reinforcement-learning-human-feedback-scratch",
  "liveDemoLink": "https://huggingface.co/spaces/nabeelshan/Rlhf-Gpt2-Demo",
  "thumbnailUrl": "thumbnails/rlhf-pipeline_average_reward.png",
  "metrics": [
    {
      "label": "RM Acc",
      "value": "98%"
    },
    {
      "label": "Reward Gain",
      "value": "+54%"
    },
    {
      "label": "ROUGE-2 Boost",
      "value": "+183%"
    }
  ],
  "featured": true,
  "year": 2025
},
{
  "id": "safe-llm-adaptation-peft-rlhf",
  "title": "FLAN-T5 Adaptation Benchmarks: SFT, LoRA & PPO",
  "description": "Executed an empirical study on adapting **Google's FLAN-T5** for dialogue summarization to evaluate trade-offs in computational overhead and output quality. The project benchmarks four paradigms: In-Context Learning, Supervised Fine-Tuning (SFT), Parameter-Efficient Fine-Tuning (PEFT), and Reinforcement Learning from Human Feedback (RLHF).\n\nContrasted a full-parameter update (**247.5M parameters**) against an efficient **LoRA** strategy that injects rank-32 matrices, reducing the trainable footprint to just **3.5M parameters**. To enforce behavioral alignment, an **RLHF** pipeline was deployed using **PPO**, leveraging a **RoBERTa**-based hate speech classifier as a dense reward signal with a KL-divergence penalty to actively penalize toxic generations.\n\nThe comparative evaluation yielded compelling quantitative insights. **PEFT (LoRA)** captured **97% of full SFT performance** (**0.408 ROUGE-1** score) while training only **1.4% of the parameters** - a staggering 70x reduction in trainable weights. Furthermore, the final PPO-aligned policy successfully steered the generative behavior toward safer outputs, achieving a **9.2% reduction in mean toxicity** without compromising summarization fidelity.",
  "techStack": [
    "FLAN-T5",
    "LoRA/PEFT",
    "PyTorch",
    "PPO (TRL)"
  ],
  "categories": ["Generative AI & LLMs", "Natural Language Processing"],
  "githubLink": "https://github.com/nabeelshan78/safe-llm-adaptation-peft-rlhf",
  "liveDemoLink": "https://flant5-icl-sft-peft-rlhf-8rx4znwnt8g9yjctbawwve.streamlit.app/",
  // "videoEmbedUrl": "https://www.youtube.com/embed/h-0aYdylfRY?autoplay=1&mute=1&loop=1",
  "videoEmbedUrl": "https://www.youtube.com/embed/h-0aYdylfRY?autoplay=1&mute=1&loop=1&playlist=h-0aYdylfRY&vq=hd1080&rel=0",

  "metrics": [
    { "label": "ROUGE-1", "value": "0.408" },
    { "label": "Param Drop", "value": "98%+" },
    { "label": "Toxicity Δ", "value": "−9.2%" }
  ],
  "featured": true,
  "year": 2025
},
{
  "id": "transformer-scratch-vs-distilbert",
  "title": "Custom Transformer vs. Fine-Tuned DistilBERT",
  "description": "Implemented an end-to-end NLP pipeline to evaluate the trade-offs between first-principles deep learning and modern transfer learning. The project contrasts a custom from-scratch Transformer against a fine-tuned foundation model on the **AG News** benchmark, culminating in a cloud deployment.         \n\nBuilt a custom **PyTorch** Transformer Encoder from the ground up, featuring manual Positional Encodings and an optimized sequence collator to minimize padding overhead. To establish a high-performance baseline, **DistilBERT** was fine-tuned using the **Hugging Face** ecosystem, and deployed the inference engine as a web application.\n\nThe first-principles Transformer achieved a robust **90.32% test accuracy** via a 160-epoch training regimen with dynamic optimizer scheduling. Conversely, the fine-tuned DistilBERT secured a superior **94.79% accuracy** with **50x less training time**, perfectly bridging theoretical architectural design with high-efficiency applied ML deployment.",
  "techStack": [
    "PyTorch",
    "Hugging Face",
    "Transformers",
    "MLOps"
  ],
  "categories": ["Natural Language Processing", "Generative AI & LLMs"],
  "githubLink": "https://github.com/nabeelshan78/NLP-From-Scratch-to-Deployment",
  "liveDemoLink": "https://huggingface.co/spaces/nabeelshan/distilbert-agnews-classifier",
  "thumbnailUrl": "thumbnails/nlp_distilbert.png",
  "metrics": [
    {
      "label": "DistilBERT Acc",
      "value": "94.79%"
    },
    {
      "label": "Custom Acc",
      "value": "90.32%"
    },
    {
      "label": "Training Speedup",
      "value": "50x"
    }
  ],
  "featured": true,
  "year": 2025
},
{
  "id": "researchflow-multiagent",
  "title": "ResearchFlow: Cyclical Multi-Agent Architecture",
  "description": "Architected a production-grade, cyclical 4-agent system (Clarity, Research, Validator, Synthesis) using **LangGraph** for autonomous multi-step research synthesis. Moving beyond simple linear wrappers, this project implements a stateful, fault-tolerant orchestration pipeline where specialized agents collaborate via a strongly typed, shared state object. The system cuts inference costs via a dual-model compute strategy via **Groq**, routing deterministic classification tasks to a fast LLM (**Llama-3.1-8b**) while reserving a reasoning LLM (**Llama-3.3-70b**) for deep research and synthesis.\n\nTo ensure robustness, the pipeline integrates a checkpointed state enabling a **Human-in-the-Loop (HITL)** interrupt/resume mechanism, and reliably routes data with Pydantic-enforced structured outputs. By designing a strict self-correcting validation loop, the system continuously re-runs **Tavily**-powered web research until a confidence threshold is met, establishing a highly reliable agentic workflow.",
  "techStack": [
    "LangGraph",
    "Llama-3",
    "Web Search"
  ],
  "categories": ["RAG & Agentic AI"],
  "githubLink": "https://github.com/nabeelshan78/researchflow-multiagent-research-assistant",
  "liveDemoLink": "",
  "thumbnailUrl": "thumbnails/multi_agent_research_thumbnail.png",
  "metrics": [
    {
      "label": "Architecture",
      "value": "4-Agent"
    },
    {
      "label": "Validation",
      "value": "Self-Correcting"
    },
    {
      "label": "Interrupts",
      "value": "HITL"
    }
  ],
  "featured": true,
  "year": 2026
},
{
  "id": "fasa-secure-rag-pipeline",
  "title": "FASA: Secure Multi-Lingual RAG Engine",
  "description": "Developed FASA (Fast AI SOP Assistant), a 100% secure, local Retrieval-Augmented Generation (RAG) system engineered for the highly-regulated Pharmaceutical industry. The platform allows enterprise users to query complex Standard Operating Procedures (SOPs) with exact page-level citations while guaranteeing zero external data leakage.\n\nArchitected a **Dockerized** microservices pipeline integrating a **FastAPI** backend, **React** frontend, and **Qdrant** vector database. Designed a smart ingestion engine leveraging **OCR** and PyMuPDF to process PDFs across five languages. The retrieval system utilizes **Nomic-Embed** dense representations coupled with sparse BM25 indexing for **hybrid search**, passing retrieved nodes through a cross-encoder **re-ranker** before synthesizing answers with a localized **Llama 3.1 8B** model.\n\nEngineered for regulatory compliance with strict Role-Based Access Control **(RBAC)**, **GMP** e-Signatures, and cryptographic **audit trails**. In rigorous formal evaluations, the custom hybrid-retrieval pipeline achieved a **96.0% QA accuracy** (48/50 validation tasks passed), effectively mitigating LLM hallucinations in mission-critical clinical workflows.",
  "techStack": [
    "FastAPI",
    "LlamaIndex",
    "Qdrant",
    "Docker",
    "React"
  ],
  "categories": ["RAG & Agentic AI"],
  "githubLink": "https://github.com/nabeelshan78/pharma_sop_rag_fasa",
  "liveDemoLink": "",
  'thumbnailUrl': "thumbnails/fasa_architecture.png",
  "metrics": [
    {
      "label": "QA Acc",
      "value": "96.0%"
    },
    {
      "label": "Retrieval",
      "value": "Hybrid"
    },
    {
      "label": "Privacy",
      "value": "100% Local"
    }
  ],
  "featured": true,
  "year": 2026
},
{
  "id": "attention-based-nmt-from-scratch",
  "title": "Attention-Based NMT: Seq2Seq Architecture",
  // "description": "Designed a complete **Neural Machine Translation (NMT)** system from the ground up for English-to-French translation. Bypassing pre-trained models, this project demonstrates a fundamental mastery of sequence modeling by implementing the entire architecture completely from scratch.                    \n\nHighly customized **Sequence-to-Sequence (Seq2Seq)** model implemented in **TensorFlow**. The architecture features a **Bidirectional LSTM Encoder**, a mathematical **Additive Attention Mechanism** for dynamic sequence alignment, and a custom **LSTM Decoder**. The 23.6M parameter model was optimized using custom data pipelines and **Beam Search** decoding for high-fidelity inference.\n\nThe architecture successfully learned complex bilingual mappings, achieving exact-match accuracy on conversational phrases. The trained model was deployed as a web application.",
  "description": "Designed a complete **Neural Machine Translation (NMT)** system from the ground up for English-to-French translation. Bypassing pre-trained models, this project demonstrates a fundamental mastery of sequence modeling by implementing a highly customized **Sequence-to-Sequence (Seq2Seq)** architecture completely from scratch in **TensorFlow**.\n\nThe 23.6M parameter model features a **Bidirectional LSTM Encoder**, a mathematical **Additive Attention Mechanism** for dynamic sequence alignment, and an **LSTM Decoder** utilizing **Beam Search**. Achieving exact-match accuracy on conversational phrases, the trained model was successfully deployed as a real-time web application.",
  "techStack": [
    "TensorFlow",
    "Bi-LSTM",
    "Additive Attention"
  ],
  "categories": ["Natural Language Processing"],
  "githubLink": "https://github.com/nabeelshan78/real-time-neural-machine-translation",
  "liveDemoLink": "https://attention-based-nmt-rwlnsz6dvpdacpyj4gqob2.streamlit.app/",
  "thumbnailUrl": "thumbnails/encoder_decoder_attention_diagram.png",
  "metrics": [
    {
      "label": "Parameters",
      "value": "23.6M"
    },
    {
      "label": "Decoding",
      "value": "Beam Search"
    }
  ],
  "featured": true,
  "year": 2024
},
{
  "id": "mobilenetv2-finetuning-pipeline",
  "title": "MobileNetV2 Progressive Transfer Learning",
  // "description": "Engineered an end-to-end binary image classification pipeline using **MobileNetV2** to systematically evaluate the impact of progressive transfer learning techniques. This project moves beyond simple out-of-the-box model application, focusing on the rigorous mechanics of freezing internal representations, applying data augmentation, and unfreezing specific network depths to optimize convergence on a limited-data task.\n\nThe technical architecture utilized a pre-trained MobileNetV2 base with the classification head removed. A custom fully connected head was implemented featuring **GlobalAveragePooling2D**, spatial **Dropout (0.2)** regularization, and a Sigmoid activation. The training protocol was executed in two distinct phases: an initial feature extraction phase with a frozen base model, followed by a targeted fine-tuning phase where the top internal layers (post-layer 120) were unfrozen and optimized using a low-learning-rate **Adam** optimizer to prevent catastrophic forgetting of the ImageNet weights.\n\nEmpirical validation confirmed the efficacy of this two-stage approach. Following the targeted fine-tuning phase, the model achieved a **92.31% Validation Accuracy** and a **93.75% Recall** score. This demonstrated a deep understanding of CNN feature hierarchies and the ability to adapt large-scale vision architectures to specialized, low-resource domains.",
  "description": "Built an end-to-end binary image classification pipeline to evaluate progressive transfer learning techniques using **MobileNetV2**. The architecture features a pre-trained base with a custom fully connected head utilizing **GlobalAveragePooling2D**, spatial **Dropout (0.2)**, and Sigmoid activation to optimize convergence on a limited-data task.\n\nThe training protocol executed a two-phase approach: initial feature extraction with a frozen base, followed by targeted fine-tuning where top internal layers (post-layer 120) were unfrozen. Optimized with a low-learning-rate **Adam** optimizer to prevent catastrophic forgetting, the model achieved an impressive **92.31% Validation Accuracy** and **93.75% Recall**, successfully adapting a large-scale vision architecture to a specialized, low-resource domain.",
  "techStack": [
    "TensorFlow",    
    "CNNs",
    "Computer Vision"
  ],
  "categories": ["Computer Vision"],
  "githubLink": "https://github.com/nabeelshan78/mobilenetv2-finetune-classification",
  "liveDemoLink": "",
  "thumbnailUrl": "thumbnails/mobilenet_v2.png",
  "metrics": [
    {
      "label": "Val Accuracy",
      "value": "92.31%"
    },
    {
      "label": "Recall",
      "value": "93.75%"
    },
    {
      "label": "Precision",
      "value": "90.91%"
    }
  ],
  "featured": false,
  "year": 2025
},
  {
  "id": "yolo-object-detection-pipeline",
  "title": "YOLO: Custom Tensor Decoding & NMS",
  "description": "Engineered an end-to-end object detection pipeline, reconstructing the core mechanics of the **YOLO (You Only Look Once)** architecture from first principles. Rather than relying on high-level APIs, I built a custom predictive head to manually decode complex grid-based output tensors into spatial bounding box coordinates.\n\nThe pipeline incorporates rigorous mathematical post-processing, explicitly calculating Intersection-over-Union (IoU) to apply custom **Non-Maximum Suppression (NMS)** and dynamic probability thresholding. Systematically scaling inputs to a specialized **608x608** tensor space, the framework successfully executes robust multi-class detection across images, outputting highly precise bounding box overlays.",
  "techStack": [
    "TensorFlow/Keras",
    "YOLOv2",
    "Computer Vision",
  ],
  "categories": ["Computer Vision"],
  "githubLink": "https://github.com/nabeelshan78/yolo-object-detection-pipeline",
  "liveDemoLink": "",
  "thumbnailUrl": "thumbnails/yolo_cars_pred.png",
  "metrics": [
    {
      "label": "Algorithm",
      "value": "Custom NMS"
    }
  ],
  "featured": true,
  "year": 2025
},
{
  "id": "pixelsense-unet-segmentation",
  "title": "PixelSense: U-Net Semantic Segmentation from Scratch",
  "description": "Designed and trained a **U-Net** encoder-decoder entirely from scratch, with no pretrained backbone, for 23-class pixel-level road-scene segmentation. The architecture uses skip-connection feature fusion to combine deep semantic context with high-resolution spatial detail, **He-normal** initialization, and staged **dropout** regularization.\n\nTraining was driven by a custom **Mean IoU** metric with checkpoint-on-IoU selection and early stopping, and the final model is deployed as an interactive real-time inference application.",
  "techStack": [
    "TensorFlow/Keras",
    "U-Net",
    "Streamlit",
    "Computer Vision"
  ],
  "categories": ["Computer Vision"],
  "githubLink": "https://github.com/nabeelshan78/pixelsense-ai-segmentation",
  "liveDemoLink": "https://pixelsense-ai-segmentation-n9srxvnie8tcsusmr2eq3x.streamlit.app/",
  "thumbnailUrl": "carseg_banner.png",
  "metrics": [
    {
      "label": "Val mIoU",
      "value": "0.908"
    },
    {
      "label": "Pixel Accuracy",
      "value": "98.4%"
    },
    {
      "label": "Classes",
      "value": "23"
    }
  ],
  "featured": true,
  "year": 2025
}
];

export const allCategories: ProjectCategory[] = ['Generative AI & LLMs', 'RAG & Agentic AI', 'Natural Language Processing', 'Computer Vision'];
