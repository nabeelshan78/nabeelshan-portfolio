import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { video } from 'framer-motion/client';

// Helper function to parse description and bold words enclosed in **
const parseDescriptionForBold = (description) => {
  const parts = description.split(/(\*\*.*?\*\*)/g); // Split by **text**
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const projects = [
  {
    "title": "End-to-End RLHF Pipeline from Scratch (SFT, RM, PPO)",
    "description": "Engineered the complete 3-stage **Reinforcement Learning from Human Feedback (RLHF)** pipeline from the ground up to align a `gpt2` model with human preferences.\n\n1.  **SFT:** First, adapted the base model via **Supervised Fine-Tuning (SFT)** on an instruction dataset, achieving a **+202%** boost in ROUGE-2 score over the `gpt2` baseline.\n2.  **RM:** Next, trained a **Reward Model (RM)** on 33k+ preference pairs, which successfully learned to 'judge' response quality with **97.9% accuracy** (a massive leap from the base model's 17.9%).\n3.  **PPO:** Finally, implemented the **Proximal Policy Optimization (PPO)** algorithm, using the trained RM to steer the SFT policy. This alignment phase boosted the model's average preference score by **+54%** over the SFT-only model, demonstrably improving helpfulness while preserving linguistic coherence.\n\nThe project features a full comparative analysis of **full-parameter vs. PEFT (QLoRA)** tuning and is deployed in an interactive **Gradio** demo.",
    "techStack": [
      "RLHF",
      "PPO",
      "Reward Modeling",
      "SFT",
      "Generative AI",
      "LLMs",
      "NLP",
      "Python",
      "PyTorch",
      "Hugging Face",
      "TRL",
      "PEFT (QLoRA)",
      "Gradio"
    ],
    "githubLink": "https://github.com/nabeelshan78/reinforcement-learning-human-feedback-scratch",
    "liveDemoLink": "https://huggingface.co/spaces/nabeelshan/Rlhf-Gpt2-Demo",
    "videoEmbedUrl": ""
  },
  
  {
    "title": "Production-Grade RAG: 40% Cost Reduction via Hybrid Routing & Phoenix Observability",
    "description": "Engineered a production-grade, end-to-end AI shopping assistant, moving beyond simple RAG to solve critical high-cost and high-latency challenges. Implemented an intelligent, multi-stage routing system that first classifies user intent (**FAQ** vs. **Product**) and then query nature (**Creative** vs. **Technical**). This dynamically selects between two pipelines: a \"Standard\" RAG path with LLM-generated metadata filters and a \"Simplified\" path using direct vector search. This hybrid architecture achieved a **40% reduction** in token consumption and cut average response latency to **< 2 seconds**, all while maintaining over **95%** routing accuracy. Integrated **Arize Phoenix** and **OpenTelemetry** for comprehensive end-to-end observability, enabling granular tracing of every span in the pipeline—from the initial query router to the final **Llama 3.1** generation. Built on a robust **Weaviate** vector database indexing **44,000+** products and served via a **Flask** API with an interactive **Gradio** UI.",
    "techStack": [
      "Generative AI",
      "RAG",
      "NLP",
      "LLMs",
      "MLOps",
      "Observability",
      "Arize Phoenix",
      "OpenTelemetry",
      "Weaviate",
      "Vector DB",
      "Flask",
      "Gradio",
      "Python",
      "Together.ai",
      "Llama 3.1"
    ],
    "githubLink": "https://github.com/nabeelshan78/fashion-advanced-rag-pipeline-phoenix",
    "liveDemoLink": "",
    "videoEmbedUrl": ""
  },

  {
    "title": "Advanced LLM Fine-Tuning: ICL, SFT, PEFT & RLHF",
    "description": `A comprehensive, end-to-end exploration of modern LLM adaptation techniques using Google's **FLAN-T5** for dialogue summarization.
   In-Context Learning (**ICL**) baseline using zero-, one-, and few-shot prompting to assess out-of-the-box model capability. 
   Supervised Fine-Tuning (**SFT**) of all **247.5M** parameters to maximize ROUGE performance. Parameter-Efficient Fine-Tuning (**PEFT**) with LoRA, 
   achieving **97%** of SFT performance by training only **1.4%** of parameters. Achieved a **+18.86% ROUGE score improvement** with 
   FULL Fine-Tuning and **+17.47%** with PEFT. **RLHF with PPO** to reduce generation of toxic content by **9.2%**, using 
   a **RoBERTa-based reward model**, ensuring safer outputs without compromising performance. Developed a fully interactive **Streamlit app** for real-time comparison of model outputs across 
   all stages. Delivered extensive evaluations using ROUGE scores, toxicity classifiers, visualizations, and qualitative examples 
   to demonstrate effectiveness.`,

    //  Advanced fine-tuning of Google's FLAN-T5 (247.5M params) for dialogue summarization using ICL, Supervised Fine-Tuning (SFT) of all 
    // **247.5M** parameters, Parameter-Efficient Fine-Tuning (**PEFT**) with LoRA, achieving **97%** of SFT performance by training only **1.4%** of parameters
    //  and RLHF. Achieved up to 81% ROUGE-1 and 114% ROUGE-2 improvement with full fine-tuning, and 75% ROUGE-1 and 136% ROUGE-2 with PEFT. 
    // **RLHF with PPO** to reduce generation of toxic content by **9.2%**, using 
    //  a **RoBERTa-based reward model**, ensuring safer outputs without compromising performance. Built an 
    // interactive Streamlit app for real-time model comparisons. Conducted comprehensive evaluation using ROUGE and toxicity metrics.

    "techStack": [
      "Generative AI",
      "LLMs",
      "NLP",
      "Model Alignment",
      "Reinforcement Learning (RLHF)",
      "Supervised Fine-Tuning (SFT)",
      "PEFT (LoRA)",
      "Proximal Policy Optimization (PPO)",
      "Python",
      "PyTorch",
      "Hugging Face (Transformers, PEFT, TRL)",
      "Streamlit",
      "FLAN-T5"
    ],
    "githubLink": "https://github.com/nabeelshan78/flanT5-ICL-SFT-PEFT-RLHF",
    "liveDemoLink": "https://flant5-icl-sft-peft-rlhf-8rx4znwnt8g9yjctbawwve.streamlit.app/",
    "videoEmbedUrl": "https://www.youtube.com/embed/xroNqa6lkn8?autoplay=1&mute=1&loop=1&playlist=xroNqa6lkn8"
  },

  {
    "title": "Advanced NLP: Custom Transformer vs. DistilBERT Fine-Tuning",
    "techStack": [
      "Python",
      "PyTorch",
      "Hugging Face",
      "NLP",
      "Transformer",
      "DistilBERT",
      "Transfer Learning",
      "Fine-Tuning",
      "Gradio",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Experiment Tracking"
    ],
    "description": "Executed a comparative study on text classification by engineering two distinct models for the AG News dataset. First, a **Transformer Encoder was built from scratch in PyTorch**, demonstrating a deep, foundational understanding of attention mechanisms and positional encodings. This custom model underwent **160+ epochs of systematic experimentation** with various optimizers (SGD, Adam) and learning rate schedulers (StepLR, Cosine Annealing), achieving a final test accuracy of **90.32%**. Second, a **pre-trained DistilBERT model was fine-tuned** using the Hugging Face ecosystem, showcasing proficiency in transfer learning and achieving a superior test accuracy of **94.79%**. The final, fine-tuned model was published to the Hugging Face Hub and deployed as an interactive web application with Gradio, highlighting end-to-end MLOps capabilities.",
    "githubLink": "https://github.com/nabeelshan78/Transformer-AGNews-Classifier",
    "thumbnailUrl": "distilbert.gif",
    "liveDemoLink": "https://huggingface.co/spaces/nabeelshan/distilbert-agnews-classifier",
  },

  {
    "title": "GPT-Forge: Architecting a GPT-Style Transformer from Scratch",
    "description": "This project goes beyond just **using** Transformers—it's a complete, **first-principles build of a GPT (decoder-only) model** in PyTorch. I engineered every core component, including **multi-head self-attention with causal masking** and **positional embeddings**, to prove fundamental mastery of the architecture. \n\n **Engineered** a full end-to-end pipeline: custom DataLoader, tokenization, and a robust training/inference engine with checkpointing.\n **Systematically trained and validated** two models (~22M and ~52M params) on NVIDIA A10G GPU to prove the architecture's scalability and effectiveness.\n **Developed** an autoregressive inference module to generate coherent text from prompts, demonstrating a practical, end-to-end understanding of modern LLMs.",
    "techStack": [
      "PyTorch",
      "Python",
      "Transformer Architecture",
      "Multi-Head Self-Attention",
      "Autoregressive Inference",
      "End-to-End ML Engineering"
    ],
    "githubLink": "https://github.com/nabeelshan78/gpt-forge-from-scratch-transformer",
    "liveDemoLink": "",
    "videoEmbedUrl": ""
  },

  {
    "title": "Transformer Adaptation Playbook: Mastering Fine-Tuning & PEFT from Scratch",
    "description": "A research-grade exploration into **how Transformers adapt and specialize**. I engineered and benchmarked multiple fine-tuning strategies — from **classic full fine-tuning** to **Parameter-Efficient Fine-Tuning (PEFT)** methods like **Adapters** and **LoRA** — entirely from scratch in **PyTorch**. Through systematic experimentation on **BERT**, **GPT-2**, and **OPT**, I proved that **PEFT can match full fine-tuning accuracy (~86%) while reducing trainable parameters by over 96%**. \n\nThis project not only reimplemented LoRA and Adapters from first principles but also built a **comparative performance suite** across models, visualizing trade-offs between **accuracy, compute cost, and efficiency**. It’s a full **Transformer adaptation lab**, bridging theory, engineering, and empirical validation — demonstrating deep mastery of **transfer learning**, **language modeling**, and **efficient model scaling**.",
    "techStack": [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "PEFT (Adapters, LoRA)",
      "Matplotlib & Seaborn"
    ],
    "githubLink": "https://github.com/nabeelshan78/Transformer-Adaptation-Playbook",
    "liveDemoLink": "",
    "videoEmbedUrl": ""
  },

  {
    "title": "Real-Time Neural Machine Translation (NMT): English-French with Custom Attention",
    "techStack": [
      "Python",
      "TensorFlow 2.x",
      "Keras",
      "NLP",
      "Deep Learning",
      "Sequence-to-Sequence (Seq2Seq)",
      "Attention Mechanism",
      "Bidirectional LSTMs",
      "Machine Translation",
      "Data Engineering",
      "Beam Search Decoding",
      "Streamlit"
    ],
    "description": "Engineered a robust, end-to-end **Neural Machine Translation (NMT) system** from scratch, delivering high-quality English-to-French translations in real time. This project implements a custom **Attention-based Bidirectional LSTM Sequence-to-Sequence (Seq2Seq) model** built entirely in **TensorFlow 2.x/Keras**, showcasing deep proficiency in core NLP and Deep Learning principles. Key features include a **Bi-directional LSTM encoder** for comprehensive context capture, an **LSTM decoder dynamically guided by an Additive Attention mechanism** for precise token focus, and a sophisticated data pipeline. Achieved strong translation performance by incorporating advanced training strategies (Early Stopping, LR scheduling) and optimizing inference with **Beam Search decoding**. Deployed as an interactive **Streamlit web application**, demonstrating expertise in building and deploying scalable AI solutions. The model boasts **23.6 million parameters**, reflecting its complexity and the depth of its custom implementation. Explore the live demo and detailed technical documentation on GitHub.",
    "githubLink": "https://github.com/nabeelshan78/attention-based-nmt",
    "thumbnailUrl": "Neural MT.jpg",
    "liveDemoLink": "https://attention-based-nmt-rwlnsz6dvpdacpyj4gqob2.streamlit.app/",
    "videoEmbedUrl": "https://www.youtube.com/embed/O6M507Ku6qU?autoplay=1&mute=1&loop=1&playlist=O6M507Ku6qU"
  },

  {
    "title": "YOLOv2-Style Object Detection: End-to-End Pipeline",
    "techStack": [
      "Python",
      "TensorFlow 2.x",
      "Keras",
      "Computer Vision",
      "Object Detection",
      "YOLO (You Only Look Once)",
      "Non-Maximum Suppression (NMS)",
      "Custom Layers",
      "Data Preprocessing",
      "Real-time Inference",
      "Visualization"
    ],
    "description": "⚡ **Engineered a comprehensive, production-ready YOLOv2-style object detection pipeline** built entirely from the ground up in **TensorFlow 2.x/Keras**. This end-to-end system covers every critical phase: from efficient raw image ingestion and preprocessing to a custom-implemented `yolo_head` for decoding predictions, precise bounding box rescaling, and **advanced post-processing with optimized Non-Maximum Suppression (NMS)**. The pipeline delivers high-fidelity, object detections, featuring seamless **integrated visualizations**, auto-saved predictions, and the generation of compelling side-by-side comparison images. This project showcases deep expertise in Computer Vision, custom model development, and building robust AI solutions for applications like surveillance and autonomous systems. Explore the full technical breakdown and dynamic visual outputs on GitHub.",
    githubLink: 'https://github.com/nabeelshan78/yolo-object-detection-pipeline',
    thumbnailUrl: 'cars_pred.png',
  },

  {
    "title": "Real-time Voice AI: Custom Wake Word Detection Engine",
    "techStack": [
      "Python",
      "TensorFlow 2.x",
      "Keras",
      "Deep Learning",
      "Speech Recognition",
      "Audio Signal Processing",
      "Recurrent Neural Networks (RNN)",
      "GRU",
      "Conv1D",
      "Data Augmentation",
      "MLOps",
      "Custom Metrics (F1-score)",
      "Streamlit"
    ],
    "description": "Engineered a robust, end-to-end **Real-time Wake Word Detection system** from scratch, capable of reliably identifying the 'activate' trigger word in continuous audio streams. This project features a custom **Conv1D and Stacked GRU-based deep learning model**, meticulously trained on a **programmatically synthesized and augmented noisy dataset** to ensure high real-world applicability and generalization. Key innovations include an advanced **audio preprocessing pipeline (spectrogram conversion)**, sophisticated **data synthesis for robust training data generation** (a critical MLOps practice), and real-time inference with an auditory response. Demonstrated profound proficiency in **audio signal processing, sequence modeling, and practical MLOps principles** for developing and deploying scalable voice-activated AI solutions. The system is deployed as an interactive **Streamlit web application**, showcasing full project lifecycle expertise. Explore the detailed architecture, custom dataset generation, and live demo on GitHub.",
    "githubLink": "https://github.com/nabeelshan78/keyword-spotting-engine",
    "thumbnailUrl": "wake.png",
    "liveDemoLink": "https://keyword-spotting-engine-dlydrlpjcyssh7yyjzemqd.streamlit.app/",
    "videoEmbedUrl": "https://www.youtube.com/embed/l8yH4MuLMvM?autoplay=1&mute=1&loop=1&playlist=l8yH4MuLMvM" // Example video (replace with actual)
  },

  {
    "title": "Secure AI: Production-Grade Face Recognition & Verification (FaceNet)",
    "techStack": [
      "Python",
      "TensorFlow 2.x",
      "Keras",
      "Computer Vision",
      "FaceNet",
      "Face Recognition",
      "Face Verification",
      "Deep Learning",
      "Biometrics",
      "Streamlit",
      "Identity Management"
    ],
    "description": "🔐 **Developed and deployed a robust, production-grade Face Recognition and Verification system** leveraging a **pretrained FaceNet model** for secure identity management. This comprehensive solution masterfully performs high-accuracy **Face Verification** by computing L2 distances between 128D facial embeddings and robust **Face Recognition** by identifying unknown individuals against a dynamic database, complete with intelligent 'unknown' detection via confidence thresholding. The system is engineered for **scalability, precision, and real-world robustness in facial biometrics**, demonstrating practical application of advanced deep learning. Deployed as an intuitive **Streamlit web application**, it showcases end-to-end expertise from model integration to interactive user interface development. Explore its powerful features, dynamic database management, and detailed technical insights on GitHub.",
    githubLink: 'https://github.com/nabeelshan78/facenet-face-recognition',
    thumbnailUrl: 'face.png',
    videoEmbedUrl: 'https://www.youtube.com/embed/thC_cF0a7mQ?autoplay=1&mute=1&loop=1&playlist=thC_cF0a7mQ'
  },

  {
    title: 'PixelSense AI: Architected U-Net from Scratch, High-Fidelity Road Segmentation for Autonomous Driving',
    techStack: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Semantic Segmentation', 'U-Net', 'Autonomous Driving', 'Deep Learning', 'Image Processing'],
    description: "🛣️ **Engineered a U-Net model and its entire semantic segmentation pipeline from the ground up** using TensorFlow/Keras. Achieved precise pixel-level classification of roads and drivable regions in high-fidelity CARLA simulator scenes, crucial for **autonomous navigation systems**. This project highlights deep mastery of **U-Net architecture (skip connections, transposed convolutions)** and **spatial preservation**, demonstrating complete architectural control and profound domain understanding without relying on pre-built layers. \n\n📊 **Key Performance Metrics (Best Model):**\n* **Train Loss:** 0.0468 | **Train Accuracy:** 0.9842 | **Train Mean IoU:** 0.8967\n* **Val Loss:** 0.0509 | **Val Accuracy:** 0.9837 | **Val Mean IoU:** 0.9080\n\n🚀",
    githubLink: 'https://github.com/nabeelshan78/pixelsense-ai-segmentation',
    thumbnailUrl: 'carla_road_seg.png',
    liveDemoLink: 'https://pixelsense-ai-segmentation-n9srxvnie8tcsusmr2eq3x.streamlit.app/',
    videoEmbedUrl: "https://www.youtube.com/embed/4Flr944fW50?autoplay=1&mute=1&loop=1&playlist=4Flr944fW50"
  },

  {
    title: 'Debiasing Word Embeddings: Neutralization & Equalization',
    techStack: ['Python', 'NumPy', 'NLP', 'Word Embeddings', 'GloVe', 'Bias Detection', 'Fairness in AI', 'Cosine Similarity', 'Linear Algebra'],
    description: "A high-impact deep learning project focused on **identifying and mitigating gender bias in GloVe word embeddings** - a crucial step toward building **fair and ethical NLP systems**. This implementation leverages rigorous **bias quantification**, followed by **neutralization** (debiasing gender-neutral terms) and **equalization** (balancing gender-specific pairs) to reduce discriminatory associations. Showcasing the intersection of **linear algebra, ethics, and NLP**, this project demonstrates advanced techniques for building **responsible AI models** that align with real-world fairness objectives.",
    // description: 'A critical deep learning project addressing **gender bias in word embeddings** (GloVe). This implementation detects, measures, and significantly reduces bias through advanced techniques like **neutralization** (making gender-neutral words unbiased) and **equalization** (symmetrically aligning gender-specific pairs). It showcases practical application of linear algebra for ethical AI, demonstrating the importance of fairness and robust methodology in NLP models.',
    githubLink: 'https://github.com/nabeelshan78/debiasing-word-embeddings', // **IMPORTANT: Update with your actual repo link!**
    thumbnailUrl: 'debias.png', // A generic but relevant image for bias in embeddings
  },

  {
    title: 'ResNet-50 from Scratch: CIFAR-10 Image Classifier',
    techStack: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'Computer Vision', 'CNN', 'ResNet', 'From Scratch', 'Image Classification', 'Residual Networks'],
    description: "🧠 A **ground-up implementation of the full ResNet-50 architecture** in TensorFlow/Keras—painstakingly rebuilt without using any pre-trained models or high-level shortcuts. This project reconstructs every component, including all **convolutional and identity blocks**, to classify images from a selected subset of CIFAR-10 (airplanes, automobiles, birds). It demonstrates **deep residual learning**,  **vanishing gradient mitigation via skip connections**, and applies **rigorous training strategies** to achieve high-accuracy deep image classification from scratch.",
    // description: 'A comprehensive, **from-scratch implementation of the ResNet-50 architecture** in TensorFlow/Keras, specifically designed to classify images from a subset of the CIFAR-10 dataset (airplane, automobile, bird). This project meticulously reconstructs all **convolutional and identity blocks** and the full 50-layer network manually, without relying on pre-built models. It demonstrates a profound understanding of residual connections, CNN architecture, and robust training practices for deep image classification.',
    githubLink: 'https://github.com/nabeelshan78/resnet50-from-scratch-cifar10',
    thumbnailUrl: 'resnet.png'
  },

  {
    title: 'Emojify NLP: Text-to-Emoji Classifier',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'NLP', 'Word Embeddings', 'GloVe', 'LSTM', 'Sequence Modeling', 'Transfer Learning'],
    description: "An innovative NLP project focused on **emoji prediction from natural language text**, built entirely from scratch. It implements two deep learning pipelines: a foundational **GloVe + Softmax baseline using NumPy** to illustrate core transfer learning, and a more advanced **LSTM-based architecture with pretrained GloVe embeddings in TensorFlow/Keras**. This project highlights the progression from simple word averaging to sophisticated **sequence modeling**, demonstrating emotional understanding in text and the power of contextual representation in modern NLP.",
    // description: 'An innovative NLP project that predicts emojis from text, built entirely from scratch. It features two deep learning models: a **GloVe + Softmax baseline (NumPy)** demonstrating core transfer learning, and an **advanced LSTM-based model with pretrained GloVe embeddings (TensorFlow/Keras)**. This project showcases the evolution from basic word averaging to robust sequence modeling, bringing emotional intelligence to text with impressive accuracy.',
    githubLink: 'https://github.com/nabeelshan78/emojify-nlp',
    thumbnailUrl: 'emoji.png',
  },

  {
    title: 'Attention-Based Date Format Translator',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NLP', 'Sequence-to-Sequence', 'Attention Mechanism', 'Bi-LSTM', 'Date Translation'],
    description: "A fully custom **Sequence-to-Sequence (Seq2Seq) model with an integrated Attention Mechanism**, designed to intelligently translate natural language date formats (e.g., '21st of August 2016') into standardized 'YYYY-MM-DD' output. Developed from scratch in TensorFlow/Keras, the architecture features a **Bi-directional LSTM encoder** and an **LSTM decoder with attention**, enabling the model to dynamically **attend to contextually relevant input tokens** during decoding. This project offers a deep dive into core principles of **Neural Machine Translation (NMT)** and highlights the transformative impact of attention in improving sequence modeling accuracy and interpretability.",
    githubLink: 'https://github.com/nabeelshan78/attention-date-translator',
    thumbnailUrl: 'atten_date.png',
  },

  {
    title: "Convolutional Neural Network from Scratch (NumPy)",
    techStack: ["Python", "NumPy", "Deep Learning", "CNNs", "Computer Vision", "Backpropagation", "Gradient Descent"],
    description: "An in-depth deep learning project that implements a complete **Convolutional Neural Network (CNN) from scratch in pure NumPy** for classifying Sign Language Digits (0–5). This project meticulously reconstructs all core components - **2D Convolution**, **ReLU**, **Max Pooling**, **Fully Connected Layers**, and **Softmax Activation** — along with their corresponding **backpropagation algorithms**. It demonstrates a deep mastery of **feature extraction**, **gradient flow**, and **optimization techniques** in CNNs, reflecting the ability to architect and debug high-performance neural networks entirely from first principles, without relying on any deep learning libraries.",
    githubLink: "https://github.com/nabeelshan78/cnn-from-scratch-sign-digits",
    thumbnailUrl: "Convolution_schematic.gif"
  },

  {
    title: 'Neural Style Transfer: Art Generation from Scratch (TF)',
    techStack: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'Generative Models', 'Neural Style Transfer', 'VGG19', 'Image Processing', 'Optimization'],
    description: "🎨 A complete, **from-scratch Neural Style Transfer (NST) pipeline** implemented in TensorFlow—merging the **content of one image with the artistic style of another** using deep feature representations extracted from a **pretrained VGG19 network**. This project demonstrates **mastery in defining custom content and style loss functions**, leverages low-level control via `tf.GradientTape`, and applies **advanced optimization techniques** to synthesize visually stunning, AI-generated artwork. A compelling blend of deep learning and computational creativity.",
    githubLink: 'https://github.com/nabeelshan78/neural-style-transfer-tf',
    thumbnailUrl: 'style.png'
  },

  {
    title: 'MobileNetV2 Fine-Tuning: Efficient Image Classification',
    techStack: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'Computer Vision', 'Transfer Learning', 'Fine-Tuning', 'MobileNetV2', 'Data Augmentation', 'Binary Classification'],
    description: "A high-impact **transfer learning pipeline built on MobileNetV2**, engineered for **binary image classification** (Alpaca vs. Not-Alpaca) with exceptional efficiency and precision. This project demonstrates **advanced techniques in feature extraction** (freezing convolutional base layers), **targeted fine-tuning** (unfreezing select layers for domain-specific learning), and **real-time data augmentation** for enhanced generalization. It reflects deep expertise in optimizing lightweight, pre-trained CNN architectures for custom vision tasks, with **thorough evaluation across accuracy, precision, recall, and loss curves**—all seamlessly tracked and visualized.",
    githubLink: 'https://github.com/nabeelshan78/mobilenetv2-finetune-classification',
    thumbnailUrl: 'alpaca.png'
  },

  {
    title: 'Deep Neural Network from Scratch (NumPy)',
    techStack: ['Python', 'NumPy', 'Deep Learning', 'Neural Networks', 'Machine Learning'],
    description: "Built a fully custom **Deep Neural Network (DNN) from scratch** in pure NumPy, featuring modular implementations of **forward/backward propagation**, diverse **optimization algorithms** (Gradient Descent, Adam, RMSProp, Momentum), robust **weight initialization schemes** (He, Xavier, Glorot), and advanced **regularization techniques** (L2, Dropout). Integrated comprehensive **training visualizations** for real-time debugging and performance analysis. This project reflects a deep command of **core deep learning principles**, **gradient-based optimization**, and the inner workings of neural architectures—mastered without any high-level libraries.",
    githubLink: 'https://github.com/nabeelshan78/deep-nn-from-scratch',
    thumbnailUrl: 'deep_nn.jpg',
  },

  {
    title: 'DinoNameGen: Char-RNN from Scratch (NumPy)',
    techStack: ['Python', 'NumPy', 'Deep Learning', 'RNN', 'Generative Models', 'Sequence Modeling', 'NLP', 'Backpropagation Through Time'],
    description: "Engineered a fully custom **character-level Recurrent Neural Network (RNN) from scratch using NumPy** to generate AI-curated dinosaur names. This project delves deep into **sequence modeling**, featuring manual implementation of **forward propagation**, **Backpropagation Through Time (BPTT)**, **gradient clipping**, and **temperature-based sampling** for creative control over text generation. It demonstrates low-level mastery of **RNN internals**, **vanishing gradient mitigation**, and **autoregressive language modeling**, offering end-to-end insight into temporal data learning without any deep learning libraries.",
    githubLink: 'https://github.com/nabeelshan78/char-rnn-dino-name-generator',
    thumbnailUrl: 'dino_2.png',
  },

  {
    title: 'Vanilla RNN from Scratch (NumPy)',
    techStack: ['Python', 'NumPy', 'Deep Learning', 'Recurrent Neural Networks', 'NLP', 'Character-level Modeling', 'Backpropagation Through Time'],
    description: "Crafted a complete **character-level Recurrent Neural Network (RNN) using pure NumPy**, built entirely from first principles without any high-level deep learning libraries. This project implements **manual forward propagation**, **Backpropagation Through Time (BPTT)**, **softmax-based prediction**, and **cross-entropy loss**, offering a crystal-clear view of how RNNs learn from sequential data. It showcases a strong foundation in **sequence modeling**, **gradient dynamics**, and the inner workings of RNNs, empowering low-level control over text generation pipelines and neural network behavior.",
    githubLink: 'https://github.com/nabeelshan78/vanilla-rnn-from-scratch',
    thumbnailUrl: 'rnn_image.png',
  }
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Projects = () => {
  // State to manage the "show more/less" for each project
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const DESCRIPTION_TRUNCATE_LENGTH = 10000; // Max characters before truncating

  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 overflow-hidden font-inter">
      {/* Background with subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-grid-gray-200/[0.3] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent animate-gradient-subtle-pulse"></div>
      </div>

      {/* Custom CSS for animations and refined styling */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap');

        body {
            font-family: 'Inter', sans-serif;
        }
        h1, h2, h3 {
            font-family: 'Montserrat', sans-serif;
        }

        @keyframes gradient-subtle-pulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-subtle-pulse {
          background-size: 200% 200%;
          animation: gradient-subtle-pulse 20s ease infinite;
        }
        .text-gradient-animation-light {
            background-size: 200% auto;
            animation: text-gradient-shift-light 10s linear infinite;
        }
        @keyframes text-gradient-shift-light {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        .project-card-glow-light::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            background: linear-gradient(45deg, #bac4d1ff, #d4d6e4ff, #d4d3caff, #9e979dff, #dadbceff); /* Lighter, vibrant gradient */
            background-size: 400% 400%;
            filter: blur(15px); /* Less blur for lighter theme */
            opacity: 0;
            z-index: -1;
            transition: opacity 0.5s ease-out, filter 0.5s ease-out;
            border-radius: 24px; /* Match card border-radius */
            animation: border-glow-animation-light 10s linear infinite;
        }
        .group:hover .project-card-glow-light::before {
            opacity: 0.4; /* Softer glow */
            filter: blur(20px);
        }
        @keyframes border-glow-animation-light {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .project-image-overlay-light {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%); /* Subtle overlay */
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .group:hover .project-image-overlay-light {
            opacity: 1;
        }
        `}
      </style>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }} // Animate on mount
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Featured Work
          </div>
          <h1 className="text-3xl sm:text-3xl sm:text-5xl font-black bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-6 tracking-tight text-gradient-animation-light">
            My Projects
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive portfolio showcasing my expertise across the AI/ML spectrum,
            from cutting-edge deep learning models to practical, real-world applications.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16"> {/* Increased space between projects */}
          {projects.map((project, index) => {
            const isExpanded = expandedDescriptions[index];
            const showToggle = project.description.length > DESCRIPTION_TRUNCATE_LENGTH;
            const displayedDescription = showToggle && !isExpanded
              ? project.description.substring(0, DESCRIPTION_TRUNCATE_LENGTH) + '...'
              : project.description;

            return (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible" // Animate all projects on mount
                custom={index}
                variants={projectVariants}
                className="group relative" // Added relative for absolute glow
              >
                <div className="relative bg-white backdrop-blur-md border border-gray-200 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200 project-card-glow-light">

                  <div className="relative p-8 lg:p-12">
                    <div className={`grid lg:grid-cols-3 gap-8 lg:gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Project Image/Video */}
                      <div className={`lg:col-span-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 group-hover:scale-[1.02] transition-transform duration-500 shadow-lg border border-gray-200">
                          {project.videoEmbedUrl ? (
                            <iframe
                              src={project.videoEmbedUrl}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full object-cover"
                              title={project.title}
                            ></iframe>
                          ) : (
                            <img
                              src={project.thumbnailUrl || 'https://placehold.co/800x450/E0E0E0/616161?text=Project+Image'}
                              alt={project.title}
                              onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x450/E0E0E0/616161?text=Project+Image')}
                              className="w-full h-full object-cover"
                              loading="eager" // Load eagerly as per request
                            />
                          )}
                          <div className="project-image-overlay-light"></div> {/* Animated overlay */}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className={`lg:col-span-2 space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        {/* Project Number & Title */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <span className="text-blue-500 font-mono text-sm">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="h-px bg-gradient-to-r from-blue-300 to-transparent flex-1"></div>
                          </div>
                          <h2 className="text-3xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                            {project.title}
                          </h2>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 50).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:border-blue-400 hover:text-blue-800 transition-all duration-200 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 50 && (
                            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full border border-blue-300 backdrop-blur-sm">
                              +{project.techStack.length - 50} more
                            </span>
                          )}
                        </div>

                        {/* Description with Show More/Less */}
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {parseDescriptionForBold(displayedDescription)}
                          {showToggle && (
                            <button
                              onClick={() => toggleDescription(index)}
                              className="ml-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                            >
                              {isExpanded ? 'Show Less' : 'Show More'}
                            </button>
                          )}
                        </p>

                        {/* Action Buttons */}
                        <div className="text-xs flex flex-wrap gap-4 pt-4">
                          {project.githubLink && (
                            <motion.a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                              whileHover={{ scale: 1.02, backgroundColor: '#e5e7eb' }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                              View Code
                            </motion.a>
                          )}
                          {project.liveDemoLink && (
                            <motion.a
                              href={project.liveDemoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30"
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View Live
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20 pt-16 border-t border-gray-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Interested in collaborating?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just connecting with fellow developers and researchers.
          </p>
          <motion.a
            href="#contact" // Assuming #contact link exists elsewhere in your full app
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;