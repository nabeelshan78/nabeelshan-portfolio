export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url: string;
  description: string;
  imageUrl?: string;
  courses?: { name: string; description: string }[];
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    date: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/R4XYVLOGQC4G',
    description: 'Comprehensive training in fundamental machine learning architectures and algorithms. Encompasses supervised modeling, unsupervised clustering, recommender systems, and deep reinforcement learning implemented via NumPy, scikit-learn, and TensorFlow.',
    imageUrl: '/certificates/ml_specialization.png',
    courses: [
      { name: 'Supervised Machine Learning: Regression and Classification', description: 'Mathematical foundation and implementation of linear and logistic regression models for predictive analysis and binary classification.' },
      { name: 'Advanced Learning Algorithms', description: 'Development of multi-class classification neural networks, decision trees, and tree ensemble methods (random forests, boosted trees).' },
      { name: 'Unsupervised Learning, Recommenders, Reinforcement Learning', description: 'Application of clustering, anomaly detection, collaborative filtering, and deep reinforcement learning architectures.' }
    ]
  },
  {
    id: 2,
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/T8EI8I4UGWVX',
    description: 'Advanced mastery of deep neural network architectures, optimization strategies, and deployment configurations. Cover mathematical derivations, vectorized implementations, and foundational frameworks for computer vision, generative AI, and natural language processing.',
    imageUrl: '/certificates/dl_specialization.png',
    courses: [
      { name: 'Neural Networks and Deep Learning', description: 'Mathematical derivation, vectorization, and implementation of deep forward-propagating neural networks from foundational principles.' },
      { name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization', description: 'Deep-dive into performance tuning using mathematical optimization algorithms (Adam, RMSprop), strategic weight initialization, and regularization methods.' },
      { name: 'Structuring Machine Learning Projects', description: 'Technical leadership strategies for ML systems, diagnostic error analysis, training/test set distribution handling, and transfer learning workflows.' },
      { name: 'Convolutional Neural Networks', description: 'Spatial engineering for computer vision tasks, including residual networks, visual object detection pipelines (YOLO), and neural style transfer.' },
      { name: 'Sequence Models', description: 'Temporal modeling leveraging RNNs, LSTMs, word embeddings, Hugging Face transformers, and tokenization for specialized NLP architectures.' }
    ]
  },
  {
    id: 3,
    title: 'Natural Language Processing Specialization',
    issuer: 'DeepLearning.AI',
    date: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/WHJAL2SZ9W8L',
    description: 'Advanced engineering of natural language processing systems. Encompasses statistical language modeling, sequence architectures (RNNs, LSTMs, GRUs), and transformer-based attention mechanisms for machine translation, text summarization, and large language modeling.',
    imageUrl: '/certificates/nlp_specialization.png',
    courses: [
      { name: 'Natural Language Processing with Classification and Vector Spaces', description: 'Implementation of sentiment analysis and word translation models using logistic regression, naïve Bayes, and locality-sensitive hashing.' },
      { name: 'Natural Language Processing with Probabilistic Models', description: 'Development of autocomplete, autocorrect, and part-of-speech tagging engines using hidden Markov models and dynamic programming.' },
      { name: 'Natural Language Processing with Sequence Models', description: 'Designing deep sequence architectures including recurrent neural networks, LSTMs, GRUs, and Siamese networks in TensorFlow for text generation and NER.' },
      { name: 'Natural Language Processing with Attention Models', description: 'Engineering encoder-decoder topologies, self-attention mechanisms, and causal models (BERT, T5) utilizing Hugging Face Transformers.' }
    ]
  },
  {
    id: 4,
    title: 'IBM AI Engineering Professional Certificate',
    issuer: 'IBM',
    date: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/7BR7V0CNUOO6',
    description: 'Comprehensive engineering curriculum spanning deep learning frameworks (PyTorch, TensorFlow, Keras) and state-of-the-art Generative AI. Focuses on LLM architectures, advanced fine-tuning methodologies (PEFT, RLHF, DPO), and deploying agentic workflows utilizing RAG, LangChain, and vector databases.',
    imageUrl: '/certificates/ibm_ai_eng_professional_cert.jpeg',
    courses: [
      { name: 'Machine Learning with Python', description: 'Core supervised and unsupervised learning algorithms utilizing scikit-learn.' },
      { name: 'Introduction to Deep Learning & Neural Networks with Keras', description: 'Foundational principles of artificial neural networks and deep learning architectures.' },
      { name: 'Deep Learning with Keras and Tensorflow', description: 'Development of advanced CNNs, autoencoders, and deep learning models in TensorFlow 2.x.' },
      { name: 'Introduction to Neural Networks and PyTorch', description: 'PyTorch ecosystem fundamentals, including tensor operations, autograd, and regression modeling.' },
      { name: 'Deep Learning with PyTorch', description: 'Engineering and deploying deep neural networks and CNNs for multi-class classification.' },
      { name: 'AI Capstone Project with Deep Learning', description: 'End-to-end design and evaluation of an image classification pipeline.' },
      { name: 'Generative AI and LLMs: Architecture and Data Preparation', description: 'Architectural analysis of foundational models (GPT, BERT) and text tokenization pipelines.' },
      { name: 'Gen AI Foundational Models for NLP & Language Understanding', description: 'Contextual word embeddings and sequence-to-sequence encoder-decoder structures.' },
      { name: 'Generative AI Language Modeling with Transformers', description: 'Implementation of self-attention mechanisms and transformer topologies using PyTorch.' },
      { name: 'Generative AI Engineering and Fine-Tuning Transformers', description: 'Parameter-efficient fine-tuning (PEFT, LoRA, QLoRA) leveraging the Hugging Face ecosystem.' },
      { name: 'Generative AI Advanced Fine-Tuning for LLMs', description: 'Advanced model alignment via RLHF, Direct Preference Optimization (DPO), and PPO.' },
      { name: 'Fundamentals of AI Agents Using RAG and LangChain', description: 'Architecting AI agents, tool calling, and retrieval-augmented generation (RAG) pipelines.' },
      { name: 'Project: Generative AI Applications with RAG and LangChain', description: 'Deployment of an end-to-end LLM application integrating vector databases and a Gradio UI.' }
    ]
  },
  {
    id: 5,
    title: 'Generative AI Engineering with LLMs Specialization',
    issuer: 'IBM',
    date: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/PQP8G2WWZ7QX',
    description: 'Specialized track focused on the industrial production and engineering of large language models. Covers self-attention mechanics, parameter-efficient alignment (LoRA, QLoRA), human preference optimization (RLHF, DPO), and the implementation of multi-agent RAG architectures using LangChain.',
    imageUrl: '/certificates/ibm_genai_eng_with_llms_specialization.jpeg',
    courses: [
      { name: 'Generative AI and LLMs: Architecture and Data Preparation', description: 'Deep-dive into foundational model architectures (GPT, BERT, T5) and custom PyTorch data loader development with specialized tokenization pipelines.' },
      { name: 'Gen AI Foundational Models for NLP & Language Understanding', description: 'Mathematical framing and implementation of context-aware word embeddings and sequence-to-sequence networks.' },
      { name: 'Generative AI Language Modeling with Transformers', description: 'From-scratch engineering of transformer components, focusing on positional encodings, attention matrices, and causal masking mechanics.' },
      { name: 'Generative AI Engineering and Fine-Tuning Transformers', description: 'Applying PEFT methodologies including LoRA and QLoRA to optimize foundational weights for domain-specific tasks.' },
      { name: 'Generative AI Advanced Fine-Tuning for LLMs', description: 'Advanced policy alignment using reward modeling, Proximal Policy Optimization (PPO), and Direct Preference Optimization (DPO).' },
      { name: 'Fundamentals of AI Agents Using RAG and LangChain', description: 'Architecting structured chain workflows, context window management, tool calling systems, and autonomous agent state loops.' },
      { name: 'Project: Generative AI Applications with RAG and LangChain', description: 'Production-ready capstone constructing an end-to-end conversational agent integrated with vector databases and a Gradio interface.' }
    ]
  },
  {
    id: 6,
    title: 'DeepLearning.AI TensorFlow Developer Professional Certificate',
    issuer: 'DeepLearning.AI',
    date: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/AGK36XPHAGK2',
    description: 'Advanced implementation of deep learning architectures utilizing TensorFlow and Keras. Encompasses the end-to-end design, training, and optimization of scalable neural networks applied to computer vision, natural language processing, and time series forecasting. Emphasizes robust, production-ready strategies including transfer learning, feature extraction, and dropout regularization.',
    imageUrl: '/certificates/tensorflow_dev_professional_cert.png',
    courses: [
      { name: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning', description: 'Foundational implementation of deep neural networks, loss optimization, and callback mechanics for programmatic training control.' },
      { name: 'Convolutional Neural Networks in TensorFlow', description: 'Architecting robust computer vision pipelines utilizing convolutional filters, spatial pooling, dynamic data augmentation, and transfer learning.' },
      { name: 'Natural Language Processing in TensorFlow', description: 'Engineering NLP systems leveraging vector embeddings, text tokenization, and deep sequence models (RNNs, GRUs, LSTMs) for classification and generation tasks.' },
      { name: 'Sequences, Time Series and Prediction', description: 'Designing specialized neural topologies (ConvNets and LSTMs) to process temporal data, mitigate statistical noise, and accurately forecast univariate time series.' }
    ]
  },
  {
    id: 7,
    title: 'IBM Deep Learning with PyTorch, Keras and Tensorflow Professional Certificate',
    issuer: 'IBM',
    date: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/UDJ3LDMH5D3W',
    description: 'Cross-framework mastery in engineering deep neural networks utilizing the industry\'s leading libraries: PyTorch, Keras, and TensorFlow. Encompasses the end-to-end architecture, optimization, and deployment of CNNs, Transformers, Autoencoders, and GANs for complex computer vision and sequential data pipelines.',
    imageUrl: '/certificates/dl_with_pytorch_keras_tensorflow_professional_cert.png',
    courses: [
      { name: 'Introduction to Deep Learning & Neural Networks with Keras', description: 'Foundational neural network design, applying the Keras API to build, train, and evaluate robust regression and classification models.' },
      { name: 'Deep Learning with Keras and Tensorflow', description: 'Advanced TensorFlow 2.x integration, engineering custom layers, generative architectures (GANs, Autoencoders), and Transformer models for time-series forecasting.' },
      { name: 'Introduction to Neural Networks and PyTorch', description: 'PyTorch ecosystem fundamentals, mastering low-level tensor calculus, autograd mechanics, and DataLoader preprocessing pipelines.' },
      { name: 'Deep Learning with PyTorch', description: 'Optimization of deep network topologies in PyTorch, implementing spatial convolutions, dropout regularization, batch normalization, and Softmax classification.' },
      { name: 'AI Capstone Project with Deep Learning', description: 'End-to-end computer vision capstone architecting a complete deep learning pipeline, from advanced data augmentation strategies to model validation.' }
    ]
  },
  // {
  //   id: 8,
  //   title: 'AWS AI Practitioner Certification Prep Specialization',
  //   issuer: 'LearnKartS',
  //   date: '2025',
  //   url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/AXP2244GHJ6L',
  //   description: 'Comprehensive preparation for enterprise AI deployment on Amazon Web Services. Focuses on foundational machine learning workflows, cloud infrastructure optimization via Amazon SageMaker, generative AI engineering using Amazon Bedrock, and building secure, compliant MLOps pipelines.',
  //   imageUrl: '/certificates/aws_ai_practitioner_cert.png',
  //   courses: [
  //     { name: 'Introduction to AI and Machine Learning', description: 'Core principles of supervised, unsupervised, and reinforcement learning integrated with basic cloud infrastructure and data preprocessing on AWS.' },
  //     { name: 'AWS Tools and Services for AI', description: 'Developing cloud-native intelligent solutions using Amazon Bedrock, Amazon Q, custom prompt optimization architectures, and Retrieval-Augmented Generation (RAG).' },
  //     { name: 'Responsible AI with AWS Security and Governance', description: 'Engineering secure MLOps ecosystems using AWS IAM, data encryption mechanisms, risk mitigation strategies, and fairness/bias monitoring protocols.' }
  //   ]
  // },
  {
    id: 8,
    title: 'AWS Generative AI Applications Professional Certificate',
    issuer: 'Amazon Web Services (AWS) & Coursera',
    date: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/B92LWNFAEQNF',
    description: 'Professional curriculum on architectural design, development, and deployment of generative AI solutions using AWS infrastructure. Focus areas include Amazon Bedrock, large language model deployment, and responsible AI governance.',
    imageUrl: '/certificates/aws_genai_applications_professional_cert.png',
    courses: [
      { name: 'AI Fundamentals and the Cloud', description: 'Evaluation of foundational models, responsible AI frameworks, and Amazon SageMaker utilization.' },
      { name: 'AWS Services for AI Solutions', description: 'Application architecture for Generative AI and computer vision; prompt engineering methodologies.' },
      { name: 'Bringing Ideas to Life Using AI', description: 'System implementation lifecycle from proof-of-concept to production; API integration and Bedrock Guardrails.' },
    ],
  },
  {
    id: 9,
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University',
    date: '2024',
    url: 'https://cs50.harvard.edu/certificates/0ab081d6-255d-479f-86b9-e69549e142dd',
    description: 'Comprehensive foundation in computer science systems and programming. Mastered low-level memory management, complex data structures, and algorithmic efficiency in C. Engineered full-stack web applications utilizing Python, Flask, SQL, and JavaScript. Key deliverables include a custom hash-table spell checker (Speller), a stock portfolio trading platform (Finance), forensic memory recovery algorithms (Recover), and an independent capstone software architecture.',
    imageUrl: '/certificates/CS50x.png'
  }

];
