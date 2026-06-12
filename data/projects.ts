export type ProjectCategory = 'LLM Alignment & RLHF' | 'First-Principles' | 'NLP & Sequence Models' | 'Computer Vision' | 'Applied ML' | 'Client Work';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
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
  "description": "Engineered a complete, end-to-end **Reinforcement Learning from Human Feedback (RLHF)** pipeline to align  a **GPT-2** language model with human preference distributions. This project serves as a rigorous, methodology-focused reproduction of the core alignment frameworks driving modern frontier models.\n\nThe architecture strictly implements a three-stage process utilizing **PyTorch**, **TRL**, and **PEFT**. It initiates with **Supervised Fine-Tuning (SFT)** via both full-parameter tuning and **QLoRA**, followed by the training of a distinct **Reward Model (RM)** on pairwise human preference datasets. The final phase leverages **Proximal Policy Optimization (PPO)**, employing a KL-divergence penalty to directly optimize the generative policy against the learned scalar reward signal without inducing catastrophic forgetting.\n\nEmpirical validation demonstrated exceptional convergence across all stages. The localized Reward Model achieved a **98% accuracy** in human preference classification (up from an 18% baseline). Subsequent PPO policy updates yielded a **+54% improvement** in average reward scores over the SFT baseline, while the final aligned model maintained a **+183% ROUGE-2 increase** over the raw base model, successfully balancing preference alignment with linguistic coherence." ,
  "techStack": [
    "PyTorch",
    "PPO",
    "PEFT/QLoRA",
    "TRL",
    "RLHF"
  ],
  "category": "LLM Alignment & RLHF",
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
    id: 'rag-pipeline',
    title: 'Multi-Stage Routing RAG Architecture',
    description: 'Developed a Retrieval-Augmented Generation system featuring an intelligent multi-stage routing mechanism for intent classification. The architecture routes queries between technical and FAQ pathways, reducing inference token consumption by 40%. Achieved <2s latency and >95% routing accuracy. Observability integrated via Arize Phoenix and OpenTelemetry over a Weaviate vector database (44,000+ embeddings).',
    techStack: ['RAG', 'LLMs', 'MLOps', 'Arize Phoenix', 'OpenTelemetry', 'Weaviate', 'Python', 'Llama 3.1'],
    category: 'LLM Alignment & RLHF',
    githubLink: 'https://github.com/nabeelshan78/fashion-advanced-rag-pipeline-phoenix',
    metrics: [
      { label: 'Token Reduction', value: '40%' },
      { label: 'Latency', value: '<2s' },
      { label: 'Routing Acc', value: '>95%' },
    ],
    featured: true,
    year: 2025,
  },
  {
    id: 'llm-finetuning',
    title: 'LLM Adaptation Techniques: ICL, SFT, PEFT, RLHF',
    description: 'Comparative study of adaptation methods utilizing FLAN-T5 for abstractive summarization. Benchmarked In-Context Learning, full Supervised Fine-Tuning (247.5M params), and PEFT (LoRA). LoRA achieved 97% of full SFT performance utilizing only 1.4% of trainable parameters. RLHF via PPO and a RoBERTa reward model decreased toxicity metrics by 9.2%.',
    techStack: ['LLMs', 'RLHF', 'SFT', 'LoRA', 'PPO', 'Python', 'PyTorch', 'Hugging Face', 'FLAN-T5'],
    category: 'LLM Alignment & RLHF',
    githubLink: 'https://github.com/nabeelshan78/flanT5-ICL-SFT-PEFT-RLHF',
    liveDemoLink: 'https://flant5-icl-sft-peft-rlhf-8rx4znwnt8g9yjctbawwve.streamlit.app/',
    videoEmbedUrl: 'https://www.youtube.com/embed/xroNqa6lkn8?autoplay=1&mute=1&loop=1&playlist=xroNqa6lkn8',
    metrics: [
      { label: 'ROUGE Δ', value: '+18.86%' },
      { label: 'Params Tuned', value: '1.4%' },
      { label: 'Toxicity Δ', value: '-9.2%' },
    ],
    featured: true,
    year: 2025,
  },
  {
    id: 'transformer-classifier',
    title: 'Transformer Encoder vs. DistilBERT Fine-Tuning',
    description: 'Empirical comparison of text classification efficacy using a first-principles PyTorch Transformer Encoder (90.32% accuracy) against a fine-tuned DistilBERT model (94.79% accuracy). Evaluated on standard benchmark datasets.',
    techStack: ['Python', 'PyTorch', 'Transformer', 'DistilBERT', 'Transfer Learning'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/Transformer-AGNews-Classifier',
    thumbnailUrl: 'distilbert.gif',
    liveDemoLink: 'https://huggingface.co/spaces/nabeelshan/distilbert-agnews-classifier',
    metrics: [
      { label: 'Custom Acc', value: '90.32%' },
      { label: 'DistilBERT Acc', value: '94.79%' },
    ],
    year: 2024,
  },
  {
    id: 'gpt-forge',
    title: 'Autoregressive Transformer Architecture',
    description: 'Implementation of a GPT decoder-only architecture utilizing PyTorch. Features multi-head causal self-attention, positional embeddings, custom tokenization, and a bespoke training loop. Models (22M and 52M parameters) were trained and evaluated on NVIDIA A10G infrastructure.',
    techStack: ['PyTorch', 'Python', 'Transformer', 'Causal Attention', 'Autoregressive Inference'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/gpt-forge-from-scratch-transformer',
    metrics: [
      { label: 'Parameters', value: '52M' },
    ],
    featured: true,
    year: 2025,
  },
  {
    id: 'peft-playbook',
    title: 'Parameter-Efficient Fine-Tuning Mechanisms',
    description: 'Implementation and comparative analysis of Adapters and LoRA from scratch in PyTorch. Results demonstrated that PEFT approaches match full fine-tuning accuracy (~86%) while reducing tunable parameters by >96% across BERT, GPT-2, and OPT architectures.',
    techStack: ['Python', 'PyTorch', 'PEFT', 'Adapters', 'LoRA'],
    category: 'LLM Alignment & RLHF',
    githubLink: 'https://github.com/nabeelshan78/Transformer-Adaptation-Playbook',
    metrics: [
      { label: 'PEFT Acc', value: '~86%' },
      { label: 'Param Reduction', value: '>96%' },
    ],
    featured: true,
    year: 2025,
  },
  {
    id: 'nmt-attention',
    title: 'Attention-Based Neural Machine Translation',
    description: 'Seq2Seq architecture for NMT (English to French) implemented in TensorFlow. Utilizes a Bi-directional LSTM encoder, an LSTM decoder with Additive Attention, and Beam Search decoding yielding a 23.6M parameter model.',
    techStack: ['Python', 'TensorFlow', 'Seq2Seq', 'Additive Attention', 'Bi-LSTM', 'Beam Search'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/attention-based-nmt',
    thumbnailUrl: 'Neural MT.jpg',
    liveDemoLink: 'https://attention-based-nmt-rwlnsz6dvpdacpyj4gqob2.streamlit.app/',
    videoEmbedUrl: 'https://www.youtube.com/embed/O6M507Ku6qU?autoplay=1&mute=1&loop=1&playlist=O6M507Ku6qU',
    metrics: [
      { label: 'Parameters', value: '23.6M' },
    ],
    year: 2024,
  },
  {
    id: 'yolov2-detection',
    title: 'YOLOv2 Object Detection Pipeline',
    description: 'Object detection pipeline based on YOLOv2 architecture in TensorFlow. Incorporates custom tensor decoding, bounding box regression, and Non-Maximum Suppression (NMS) algorithms.',
    techStack: ['Python', 'TensorFlow', 'Computer Vision', 'YOLO', 'NMS'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/yolo-object-detection-pipeline',
    thumbnailUrl: 'cars_pred.png',
    year: 2024,
  },
  {
    id: 'wake-word',
    title: 'Real-Time Wake Word Detection',
    description: 'Audio signal processing and classification system utilizing Conv1D and Stacked GRU architectures. Trained on synthesized datasets with robust data augmentation for noisy environments.',
    techStack: ['Python', 'TensorFlow', 'Audio Processing', 'GRU', 'Conv1D'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/keyword-spotting-engine',
    thumbnailUrl: 'wake.png',
    liveDemoLink: 'https://keyword-spotting-engine-dlydrlpjcyssh7yyjzemqd.streamlit.app/',
    videoEmbedUrl: 'https://www.youtube.com/embed/l8yH4MuLMvM?autoplay=1&mute=1&loop=1&playlist=l8yH4MuLMvM',
    year: 2024,
  },
  {
    id: 'facenet',
    title: 'FaceNet Biometric Verification',
    description: 'Facial recognition system utilizing FaceNet. Implements L2 distance calculations on 128D embedding vectors for verification and threshold-based identification against a reference database.',
    techStack: ['Python', 'TensorFlow', 'Computer Vision', 'FaceNet', 'Biometrics'],
    category: 'Computer Vision',
    githubLink: 'https://github.com/nabeelshan78/facenet-face-recognition',
    thumbnailUrl: 'face.png',
    videoEmbedUrl: 'https://www.youtube.com/embed/thC_cF0a7mQ?autoplay=1&mute=1&loop=1&playlist=thC_cF0a7mQ',
    year: 2024,
  },
  {
    id: 'unet-segmentation',
    title: 'U-Net Semantic Segmentation',
    description: 'Semantic segmentation architecture implemented from scratch in TensorFlow. Evaluated on CARLA simulator data for pixel-level road classification, achieving 0.908 Mean IoU.',
    techStack: ['Python', 'TensorFlow', 'Computer Vision', 'U-Net', 'Semantic Segmentation'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/pixelsense-ai-segmentation',
    thumbnailUrl: 'carla_road_seg.png',
    liveDemoLink: 'https://pixelsense-ai-segmentation-n9srxvnie8tcsusmr2eq3x.streamlit.app/',
    videoEmbedUrl: 'https://www.youtube.com/embed/4Flr944fW50?autoplay=1&mute=1&loop=1&playlist=4Flr944fW50',
    metrics: [
      { label: 'Val mIoU', value: '0.908' },
      { label: 'Val Acc', value: '98.37%' },
    ],
    year: 2024,
  },
  {
    id: 'debiasing-embeddings',
    title: 'GloVe Embedding Debiasing Algorithms',
    description: 'Implementation of neutralization and equalization algorithms to mitigate gender bias in GloVe vector spaces. Includes quantitative bias detection and fairness evaluation metrics.',
    techStack: ['Python', 'NumPy', 'NLP', 'Word Embeddings', 'GloVe', 'Fairness'],
    category: 'LLM Alignment & RLHF',
    githubLink: 'https://github.com/nabeelshan78/debiasing-word-embeddings',
    thumbnailUrl: 'debias.png',
    year: 2024,
  },
  {
    id: 'resnet50',
    title: 'ResNet-50 Implementation',
    description: 'Reconstruction of the ResNet-50 architecture in TensorFlow without utilizing pre-trained weights. Implements convolutional and identity blocks to evaluate residual learning on CIFAR-10.',
    techStack: ['Python', 'TensorFlow', 'Computer Vision', 'CNN', 'ResNet'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/resnet50-from-scratch-cifar10',
    thumbnailUrl: 'resnet.png',
    year: 2024,
  },
  {
    id: 'emojify',
    title: 'Text-to-Emoji Classification',
    description: 'Comparative analysis of emoji prediction using a baseline GloVe + Softmax model (NumPy) versus an LSTM architecture utilizing pre-trained GloVe embeddings (TensorFlow).',
    techStack: ['Python', 'TensorFlow', 'NumPy', 'NLP', 'GloVe', 'LSTM'],
    category: 'NLP & Sequence Models',
    githubLink: 'https://github.com/nabeelshan78/emojify-nlp',
    thumbnailUrl: 'emoji.png',
    year: 2024,
  },
  {
    id: 'date-translator',
    title: 'Date Format Translation via Attention',
    description: 'Seq2Seq model translating varied natural language dates into normalized YYYY-MM-DD formats. Architecture pairs a Bi-directional LSTM encoder with an attention-augmented LSTM decoder.',
    techStack: ['Python', 'TensorFlow', 'NLP', 'Seq2Seq', 'Attention Mechanism'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/attention-date-translator',
    thumbnailUrl: 'atten_date.png',
    year: 2024,
  },
  {
    id: 'cnn-scratch',
    title: 'CNN Architecture in NumPy',
    description: 'Implementation of Convolutional Neural Networks utilizing only NumPy primitives. Includes mathematical derivations for 2D Convolutions, Max Pooling, and full backpropagation algorithms.',
    techStack: ['Python', 'NumPy', 'CNNs', 'Computer Vision', 'Backpropagation'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/cnn-from-scratch-sign-digits',
    thumbnailUrl: 'Convolution_schematic.gif',
    year: 2024,
  },
  {
    id: 'neural-style-transfer',
    title: 'Neural Style Transfer Optimization',
    description: 'NST pipeline utilizing VGG19 feature extraction. Implements custom content and style loss formulations using tf.GradientTape for gradient descent optimization directly on image pixels.',
    techStack: ['Python', 'TensorFlow', 'Computer Vision', 'NST', 'VGG19'],
    category: 'Computer Vision',
    githubLink: 'https://github.com/nabeelshan78/neural-style-transfer-tf',
    thumbnailUrl: 'style.png',
    year: 2024,
  },
  {
    id: 'mobilenetv2',
    title: 'MobileNetV2 Transfer Learning',
    description: 'Evaluation of transfer learning efficacy for binary image classification. Includes feature extraction, fine-tuning methodologies, and data augmentation pipelines.',
    techStack: ['Python', 'TensorFlow', 'Computer Vision', 'Transfer Learning', 'MobileNetV2'],
    category: 'Computer Vision',
    githubLink: 'https://github.com/nabeelshan78/mobilenetv2-finetune-classification',
    thumbnailUrl: 'alpaca.png',
    year: 2024,
  },
  {
    id: 'dnn-scratch',
    title: 'Deep Neural Network in NumPy',
    description: 'Modular implementation of fully-connected deep neural networks. Includes forward/backward propagation routines, diverse optimizers (Adam, RMSProp), initialization schemas, and regularization.',
    techStack: ['Python', 'NumPy', 'Neural Networks', 'Optimization'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/deep-nn-from-scratch',
    thumbnailUrl: 'deep_nn.jpg',
    year: 2024,
  },
  {
    id: 'dino-rnn',
    title: 'Character-Level RNN Generation',
    description: 'Recurrent Neural Network constructed in NumPy. Implements Backpropagation Through Time (BPTT), gradient clipping, and temperature scaling for generative inference.',
    techStack: ['Python', 'NumPy', 'RNN', 'Generative Models', 'BPTT'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/char-rnn-dino-name-generator',
    thumbnailUrl: 'dino_2.png',
    year: 2024,
  },
  {
    id: 'vanilla-rnn',
    title: 'Vanilla RNN Architecture',
    description: 'Fundamental Recurrent Neural Network implementation using NumPy matrices. Demonstrates sequential data processing, cross-entropy loss calculation, and BPTT.',
    techStack: ['Python', 'NumPy', 'RNN', 'NLP', 'BPTT'],
    category: 'First-Principles',
    githubLink: 'https://github.com/nabeelshan78/vanilla-rnn-from-scratch',
    thumbnailUrl: 'rnn_image.png',
    year: 2024,
  },
];

export const allCategories: ProjectCategory[] = ['LLM Alignment & RLHF', 'First-Principles', 'NLP & Sequence Models', 'Computer Vision', 'Applied ML', 'Client Work'];
