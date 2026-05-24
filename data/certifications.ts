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
    title: 'AWS Generative AI Applications Professional Certificate',
    issuer: 'Amazon Web Services (AWS) & Coursera',
    date: 'October 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/B92LWNFAEQNF',
    description: 'Professional curriculum on architectural design, development, and deployment of generative AI solutions using AWS infrastructure. Focus areas include Amazon Bedrock, large language model deployment, and responsible AI governance.',
    imageUrl: '/certs/aws-genai-prof-cert.png',
    courses: [
      { name: 'AI Fundamentals and the Cloud', description: 'Evaluation of foundational models, responsible AI frameworks, and Amazon SageMaker utilization.' },
      { name: 'AWS Services for AI Solutions', description: 'Application architecture for Generative AI and computer vision; prompt engineering methodologies.' },
      { name: 'Bringing Ideas to Life Using AI', description: 'System implementation lifecycle from proof-of-concept to production; API integration and Bedrock Guardrails.' },
    ],
  },
  {
    id: 2,
    title: 'AWS AI Practitioner Specialization',
    issuer: 'LearnKartS & Coursera',
    date: 'November 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/AXP2244GHJ6L',
    description: 'Curriculum focused on the practical application of AI/ML services within the AWS ecosystem. Topics encompass diffusion models, Retrieval-Augmented Generation (RAG), and security governance via IAM.',
    imageUrl: '/certs/aws-ai-practitioner-spec.png',
    courses: [
      { name: 'Introduction to AI and Machine Learning', description: 'Supervised/unsupervised algorithms, deep learning principles, and statistical modeling basics.' },
      { name: 'AWS Tools and Services for AI', description: 'Architectural implementation of RAG and LLM fine-tuning utilizing Amazon Bedrock.' },
      { name: 'Responsible AI with AWS Security', description: 'Risk mitigation, ethical frameworks, and security access controls for AI systems.' },
    ],
  },
  {
    id: 3,
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI & Coursera',
    date: 'July 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/T8EI8I4UGWVX',
    description: 'Comprehensive study of deep learning architectures including CNNs, RNNs, LSTMs, and Transformers. Includes mathematical foundations of backpropagation, hyperparameter optimization, and regularization methodologies.',
    imageUrl: '/certs/deep-learning-spec.png',
    courses: [
      { name: 'Neural Networks and Deep Learning', description: 'Mathematical derivation and vectorized implementation of deep neural networks.' },
      { name: 'Improving Deep Neural Networks', description: 'Optimization algorithms (Adam, RMSprop), Batch Normalization, and regularization.' },
      { name: 'Structuring Machine Learning Projects', description: 'Empirical error analysis, dataset distribution strategies, and transfer learning.' },
      { name: 'Convolutional Neural Networks', description: 'Spatial feature extraction, object detection architectures (YOLO), and residual networks.' },
      { name: 'Sequence Models', description: 'Temporal modeling via RNNs, LSTMs, Word Embeddings, and Transformer attention mechanisms.' },
    ],
  },
  {
    id: 4,
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI & AWS via Coursera',
    date: 'August 2025',
    url: 'https://www.coursera.org/account/accomplishments/certificate/5X3XMVAPVPYL',
    description: 'Advanced study of Transformer architectures, autoregressive language modeling, parameter-efficient fine-tuning (PEFT), and Reinforcement Learning from Human Feedback (RLHF).',
  },
  {
    id: 5,
    title: 'IBM Machine Learning Professional Certificate',
    issuer: 'IBM via Coursera',
    date: 'May 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/9N54WXC27S8I',
    description: 'Curriculum spanning classical machine learning (regression, classification, clustering) to deep learning paradigms utilizing Scikit-learn and Keras frameworks.',
  },
  {
    id: 6,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    date: 'January 2024',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/R4XYVLOGQC4G',
    description: 'Foundational mathematics and algorithms for supervised learning, unsupervised learning, and reinforcement learning.',
  },
  {
    id: 7,
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University via edX',
    date: 'September 2024',
    url: 'https://cs50.harvard.edu/certificates/0ab081d6-255d-479f-86b9-e69549e142dd',
    description: 'Rigorous introduction to computer science theory encompassing algorithms, memory management, and data structures in C and Python.',
  },
];
