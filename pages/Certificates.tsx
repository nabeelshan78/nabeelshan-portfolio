// import React, { useState } from 'react'; // Import useState

// // --- ICONS (using inline SVGs for self-containment) ---
// const AwardIcon = ({ className }: { className?: string }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <circle cx="12" cy="8" r="6" />
//     <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
//   </svg>
// );

// const ExternalLinkIcon = ({ className }: { className?: string }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//     <polyline points="15 3 21 3 21 9" />
//     <line x1="10" y1="14" x2="21" y2="3" />
//   </svg>
// );

// const BuildingIcon = ({ className }: { className?: string }) => (
//     <svg 
//         xmlns="http://www.w3.org/2000/svg" 
//         width="24" 
//         height="24" 
//         viewBox="0 0 24 24" 
//         fill="none" 
//         stroke="currentColor" 
//         strokeWidth="2" 
//         strokeLinecap="round" 
//         strokeLinejoin="round" 
//         className={className}
//     >
//         <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//         <path d="M9 22v-4h6v4" />
//         <path d="M8 6h.01" />
//         <path d="M16 6h.01" />
//         <path d="M12 6h.01" />
//         <path d="M12 10h.01" />
//         <path d="M12 14h.01" />
//         <path d="M16 10h.01" />
//         <path d="M8 10h.01" />
//         <path d="M8 14h.01" />
//         <path d="M16 14h.01" />
//     </svg>
// );

// const CalendarIcon = ({ className }: { className?: string }) => (
//     <svg 
//         xmlns="http://www.w3.org/2000/svg" 
//         width="24" 
//         height="24" 
//         viewBox="0 0 24 24" 
//         fill="none" 
//         stroke="currentColor" 
//         strokeWidth="2" 
//         strokeLinecap="round" 
//         strokeLinejoin="round" 
//         className={className}
//     >
//         <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//         <line x1="16" x2="16" y1="2" y2="6" />
//         <line x1="8" x2="8" y1="2" y2="6" />
//         <line x1="3" x2="21" y1="10" y2="10" />
//     </svg>
// );


// // Helper function to parse description and bold words enclosed in **
// const parseDescriptionForBold = (description: string) => {
//   const parts = description.split(/(\*\*.*?\*\*)/g); // Split by **text**
//   return parts.map((part, index) => {
//     if (part.startsWith('**') && part.endsWith('**')) {
//       return <strong key={index} className="text-slate-700">{part.slice(2, -2)}</strong>; // Darker bold for light mode
//     }
//     return part;
//   });
// };

// // --- TYPESCRIPT INTERFACE ---
// interface Certificate {
//   id: number;
//   title: string;
//   issuer: string;
//   date: string;
//   url: string;
//   description: string;
// }

// // --- MOCK DATA ---
// const userCertificates: Certificate[] = [
//   {
//   "id": 1,
//   "title": "AWS Generative AI Applications: Scale Your Vision",
//   "issuer": "Amazon Web Services (AWS) via Coursera",
//   "date": "October 2025",
//   "url": "https://www.coursera.org/verify/professional-cert/S9ZLWNEAEGNE",
//   "description": "Mastered the **end-to-end lifecycle** of Generative AI applications through a 3-course AWS Professional Certificate. Gained hands-on expertise in **solution architecture** and practical application development using **Amazon Bedrock** and other AWS Services. The curriculum covered **prompt engineering**, model selection, data governance, and MLOps strategies for scaling AI solutions."
// },
//   {
//     id: 2,
//     title: 'Deep Learning Specialization',
//     issuer: 'DeepLearning.AI',
//     date: 'July 2025',
//     url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/T8EI8I4UGWVX',
//     description: 'Completed a 5-course specialization by Andrew Ng covering foundational to advanced concepts including CNNs, RNNs, LSTMs, Transformers, and optimization techniques. Built and trained real-world AI systems using TensorFlow, focusing on NLP, computer vision, and sequence modeling.',
//   },
// {
//   "id": 3,
//   "title": "Generative AI with Large Language Models",
//   "issuer": "DeepLearning.AI & AWS via Coursera",
//   "date": "August 2025",
//   "url": "https://www.coursera.org/account/accomplishments/certificate/5X3XMVAPVPYL",
//   "description": "Learned core concepts of generative AI and LLMs, including the transformer architecture, attention mechanisms, autoregressive language modeling, fine-tuning methods, and RLHF. Gained practical skills through AWS labs in building, evaluating, and deploying LLM-powered applications across real-world use cases."
// },
//   {
//   "id": 4,
//   "title": "IBM Machine Learning Professional Certificate",
//   "issuer": "IBM via Coursera",
//   "date": "May 2025",
//   "url": "https://www.coursera.org/account/accomplishments/specialization/certificate/9N54WXC27S8I",
//   "description": "Completed a 6-course certificate covering key machine learning topics: supervised and unsupervised learning, regression, classification, clustering, deep learning, and reinforcement learning. Gained hands-on experience building ML applications using Python, Scikit-learn, Keras, and TensorFlow through projects like recommender systems and predictive models."
// },
//   {
//   id: 5,
//   title: 'Machine Learning Specialization',
//   issuer: 'Stanford University & DeepLearning.AI',
//   date: 'Jan 2024',
//   url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/R4XYVLOGQC4G',
//   description: "Completed a 3-course specialization by Andrew Ng. Gained hands-on experience in supervised/unsupervised learning, neural networks, and reinforcement learning. Built ML models using Python, scikit-learn, TensorFlow, and applied best practices for real-world AI development."
// },
// {
//   "id": 6,
//   "title": "CS50x: Introduction to Computer Science",
//   "issuer": "Harvard University via edX",
//   "date": "September 2024",
//   "url": "https://cs50.harvard.edu/certificates/0ab081d6-255d-479f-86b9-e69549e142dd",
//   "description": "Completed Harvard’s CS50x, a rigorous introduction to computer science covering algorithms, data structures, memory, web development, and programming in C, Python, and JavaScript. Built problem sets and final projects applying core CS concepts and best practices."
// },
// {
//   "id": 7,
//   "title": "Python Programming Foundation",
//   "issuer": "GeeksforGeeks",
//   "date": "September 2023",
//   "url": "https://media.geeksforgeeks.org/courses/certificates/97659756e235284365a0d29630d23f5a.pdf",
//   "description": "Completed an in-depth course covering Python syntax, control structures, OOP, file handling, and data structures. Strengthened problem-solving skills through 50+ coding exercises and algorithmic challenges, building a solid foundation in Python and DSA."
// }
// ];

// // --- CERTIFICATE CARD COMPONENT ---
// const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
//   // --- STATE FOR "SHOW MORE" ---
//   const [isExpanded, setIsExpanded] = useState(false);
//   const TRUNCATE_LENGTH = 320; // Character threshold

//   const isLongDescription = certificate.description.length > TRUNCATE_LENGTH;

//   // Determine the text to display
//   const displayedDescription = isLongDescription && !isExpanded
//     ? `${certificate.description.substring(0, TRUNCATE_LENGTH)}...`
//     : certificate.description;

//   return (
//     // h-full makes the card fill the height of its grid cell, ensuring equal heights per row
//     <div className="relative flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:border-cyan-400/50 hover:shadow-lg">
      
//         {/* Card Header */}
//         <div className="flex items-start justify-between mb-4">
//           <div className="flex items-center gap-4">
//             <div className="bg-gray-100 p-3 rounded-lg border border-gray-200">
//                 <AwardIcon className="w-6 h-6 text-cyan-600" />
//             </div>
//             <h3 className="text-lg font-bold text-slate-800">{certificate.title}</h3>
//           </div>
//         </div>

//         {/* Card Body */}
//         {/* flex-grow makes this description area expand to fill available space */}
//         <p className="text-slate-500 mb-4 flex-grow">
//           {parseDescriptionForBold(displayedDescription)}
//         </p>
        
//         {/* --- SHOW MORE/LESS BUTTON --- */}
//         {isLongDescription && (
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-cyan-600 font-medium text-sm hover:text-cyan-800 self-start mb-4 focus:outline-none"
//           >
//             {isExpanded ? "Show Less" : "Show More"}
//           </button>
//         )}
        
//         {/* Card Footer */}
//         {/* mt-auto pushes this footer to the bottom of the card */}
//         <div className="mt-auto pt-4 border-t border-gray-200/50 space-y-3 text-sm">
//             <div className="flex items-center gap-3 text-slate-500">
//                 <BuildingIcon className="w-4 h-4 text-slate-400" />
//                 <span>Issued by: <span className="font-medium text-slate-700">{certificate.issuer}</span></span>
//             </div>
//             <div className="flex items-center gap-3 text-slate-500">
//                 <CalendarIcon className="w-4 h-4 text-slate-400" />
//                 <span>Date: <span className="font-medium text-slate-700">{certificate.date}</span></span>
//             </div>
//         </div>

//         {/* View Certificate Link */}
//         <a
//           href={certificate.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-cyan-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-cyan-500"
//         >
//           View Credential
//           <ExternalLinkIcon className="w-4 h-4" />
//         </a>
//     </div>
//   );
// };


// // --- MAIN APP COMPONENT ---
// export default function App() {
//   return (
//     <div className="bg-gray-50 min-h-screen font-sans text-slate-800 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <header className="text-center mb-12 md:mb-16">
//           <h1 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
//             My Certifications & Credentials
//           </h1>
//           <p className="max-w-3xl mx-auto text-lg text-slate-600">
//             A curated collection of certifications demonstrating my commitment to lifelong learning and specialization in Software Engineering, Artificial Intelligence, Machine Learning, and Deep Learning.
//           </p>
//         </header>

//         {/* Certificates Grid */}
//         <main>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {userCertificates.map((cert) => (
//               <CertificateCard key={cert.id} certificate={cert} />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';

// --- ICONS (Originals + New Ones) ---
const AwardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const BuildingIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
    </svg>
);
const CalendarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
    </svg>
);

// --- ✨ NEW ICONS ---
const EyeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const CloseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


// Helper function to parse description
const parseDescriptionForBold = (description: string) => {
  const parts = description.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-slate-700">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// --- ✨ UPDATED TYPESCRIPT INTERFACE ---
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url: string;
  description: string;
  imageUrl?: string; // Optional: path to your cert image (e.g., '/certs/deep-learning.png')
  courses?: {
  name: string;
  description: string;
  }[];

}

// --- ✨ UPDATED MOCK DATA ---
const userCertificates: Certificate[] = [
  {
  "id": 1,
  "title": "AWS Generative AI Applications Professional Certificate",
  "issuer": "Amazon Web Services (AWS) & Coursera",
  "date": "October 31, 2025",
  "url": "https://www.coursera.org/account/accomplishments/specialization/certificate/B92LWNFAEQNF",
  "description": "A comprehensive 3-course professional certificate focused on designing, developing, and deploying generative AI applications using AWS. This program covers **AI fundamentals**, **responsible AI practices**, **solution architecture**, and **advanced prompt engineering**. Gained hands-on experience with key AWS services including **Amazon Bedrock**, **Amazon Q**, and **PartyRock** to build and scale real-world AI solutions from proof-of-concept to production.",
  "imageUrl": "/certs/aws-genai-prof-cert.png",
  "courses": [
    {
      "name": "AI Fundamentals and the Cloud",
      "description": "Covered core AI concepts, responsible AI practices, and the fundamentals of Large Language Models (LLMs). Gained hands-on experience with PartyRock and an introduction to Amazon Bedrock and SageMaker."
    },
    {
      "name": "AWS Services for AI Solutions",
      "description": "A deep dive into AWS AI services for generative AI and computer vision. Focused on practical prompt engineering, automating tasks with AI agents, and designing effective AI solution architectures on AWS."
    },
    {
      "name": "Bringing Ideas to Life Using AI",
      "description": "Focused on the practical implementation of AI projects, from proof-of-concept to minimum viable product (MVP). Covered cost management, API integration, and governance using Amazon Bedrock Guardrails."
    }
  ]
},

{
  "id": 2,
  "title": "AWS AI Practitioner Specialization",
  "issuer": "LearnKartS & Coursera",
  "date": "November 7, 2025",
  "url": "https://www.coursera.org/account/accomplishments/specialization/certificate/AXP2244GHJ6L",
  "description": "A 3-course Specialization designed to build a solid, practical foundation in AI and Machine Learning on AWS. This program provides a broad understanding of **Generative AI** (LLMs, diffusion models), fundamental ML concepts, and hands-on experience with key services like **Amazon Bedrock**, **Amazon SageMaker**, Rekognition, and Textract. It places a strong emphasis on **Responsible AI**, security, and governance best practices.",
  "imageUrl": "/certs/aws-ai-practitioner-spec.png",
  "courses": [
    {
      "name": "Introduction to AI and Machine Learning",
      "description": "Covered core AI and ML fundamentals, including supervised/unsupervised learning, deep learning, NLP, and computer vision. Gained initial hands-on experience with Amazon SageMaker for model building."
    },
    {
      "name": "AWS Tools and Services for AI",
      "description": "Focused on Generative AI and LLMs, including Retrieval-Augmented Generation (RAG) techniques. Developed practical skills in using Amazon Bedrock to build, deploy, and fine-tune applications with Prompt Engineering."
    },
    {
      "name": "Responsible AI with AWS Security and Governance",
      "description": "A deep dive into the principles of Responsible AI, covering ethical risk management, bias, and explainability. Applied AWS security and governance tools, including IAM and Amazon Guardrails, to build secure and compliant AI systems."
    }
  ]
},

{
  "id": 3,
  "title": "Deep Learning Specialization",
  "issuer": "DeepLearning.AI & Coursera",
  "date": "July 24, 2025",
  "url": "https://www.coursera.org/account/accomplishments/specialization/certificate/T8EI8I4UGWVX",
  "description": "The foundational 5-course specialization by **Andrew Ng**. This program provides a comprehensive, hands-on understanding of deep learning, from foundational neural networks to advanced architectures like **Convolutional Neural Networks (CNNs)** for computer vision and **Sequence Models (RNNs, LSTMs, Transformers)** for NLP. It covers the full project lifecycle, including **hyperparameter tuning**, **regularization**, and **optimization** (Adam, RMSprop). Gained extensive experience building and training models in **TensorFlow** and **Python** for tasks like machine translation, face recognition, and art generation.",
  "imageUrl": "/certs/deep-learning-spec.png",
  "courses": [
    {
      "name": "Neural Networks and Deep Learning",
      "description": "Mastered the foundational concepts of deep learning. Built and trained a deep neural network from scratch, implementing forward and backward propagation, vectorized computations, and non-linear activation functions."
    },
    {
      "name": "Improving Deep Neural Networks",
      "description": "Learned to optimize models using hyperparameter tuning, regularization (L2, Dropout), and normalization (Batch Norm). Implemented advanced optimization algorithms like Momentum, RMSprop, and Adam."
    },
    {
      "name": "Structuring Machine Learning Projects",
      "description": "Learned the strategic side of ML projects. Focused on diagnosing errors (bias/variance analysis), setting up dev/test sets, and understanding when to apply transfer learning and end-to-end approaches."
    },
    {
      "name": "Convolutional Neural Networks",
      "description": "A deep dive into computer vision using Convolutional Neural Networks (CNNs). Built models for image classification, object detection (YOLO), and face recognition, implementing advanced architectures like ResNets and U-Net."
    },
    {
      "name": "Sequence Models",
      "description": "Mastered models for sequence data (NLP, speech). Built and trained RNNs, LSTMs, and GRUs. Explored word embeddings (Word2Vec, GloVe) and implemented advanced Attention Models and Transformers."
    }

  ]
}

];

const CertificateModal: React.FC<{ certificate: Certificate; onClose: () => void }> = ({ certificate, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()} 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 bg-white/50 rounded-full hover:bg-gray-200 hover:text-gray-800 transition-all"
          aria-label="Close modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Certificate Image */}
          {certificate.imageUrl && (
            <div className="bg-gray-100 border-b border-gray-200">
              <img
                src={certificate.imageUrl}
                alt={`Certificate for ${certificate.title}`}
                className="w-full h-auto object-contain max-h-[50vh]" // Show image
              />
            </div>
          )}

          {/* Text Content */}
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{certificate.title}</h3>
            <p className="text-lg text-slate-600 mb-6">{certificate.issuer}</p>
            
            {/* Courses List (if it's a specialization) */}
            {certificate.courses && certificate.courses.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Courses Included
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {certificate.courses.map((course, index) => (
                    <li key={index}>
                      <span className="font-semibold">{course.name}</span>: {course.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Description */}
            <div className="mb-6">
                 <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  About this Credential
                </h4>
                <p className="text-slate-600">
                    {parseDescriptionForBold(certificate.description)}
                </p>
            </div>

            {/* Footer with Verification Link */}
             <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-cyan-600 border border-transparent rounded-lg hover:bg-cyan-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Verify Credential on Coursera
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- ✨ UPDATED CERTIFICATE CARD COMPONENT ---
const CertificateCard: React.FC<{
  certificate: Certificate;
  onViewDetails: () => void; // New prop to handle opening the modal
}> = ({ certificate, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const TRUNCATE_LENGTH = 320;
  const isLongDescription = certificate.description.length > TRUNCATE_LENGTH;
  const displayedDescription = isLongDescription && !isExpanded
    ? `${certificate.description.substring(0, TRUNCATE_LENGTH)}...`
    : certificate.description;

  return (
    <div className="relative flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:border-cyan-400/50 hover:shadow-lg">
      
      {/* Card Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-lg border border-gray-200">
            <AwardIcon className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">{certificate.title}</h3>
        </div>
      </div>

      {/* Card Body */}
      <p className="text-slate-500 mb-4 flex-grow">
        {parseDescriptionForBold(displayedDescription)}
      </p>
      
      {isLongDescription && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-cyan-600 font-medium text-sm hover:text-cyan-800 self-start mb-4 focus:outline-none"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
      
      {/* Card Footer */}
      <div className="mt-auto pt-4 border-t border-gray-200/50 space-y-3 text-sm">
          <div className="flex items-center gap-3 text-slate-500">
            <BuildingIcon className="w-4 h-4 text-slate-400" />
            <span>Issued by: <span className="font-medium text-slate-700">{certificate.issuer}</span></span>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <CalendarIcon className="w-4 h-4 text-slate-400" />
            <span>Date: <span className="font-medium text-slate-700">{certificate.date}</span></span>
          </div>
      </div>

      {/* --- ✨ NEW BUTTON GROUP --- */}
      <div className="relative mt-6 grid grid-cols-2 gap-3">
        {/* Button to open Modal */}
        <button
          type="button"
          onClick={onViewDetails} // Triggers the modal
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-cyan-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-cyan-500"
        >
          <EyeIcon className="w-4 h-4" />
          View Details
        </button>

        {/* Link to verify externally */}
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-cyan-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-cyan-500"
        >
          Verify Credential
          <ExternalLinkIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};


// --- ✨ UPDATED MAIN APP COMPONENT ---
export default function App() {
  // State to manage which certificate is open in the modal
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section (Unchanged) */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            My Certifications & Credentials
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            A curated collection of certifications demonstrating my commitment to lifelong learning and specialization in Software Engineering, Artificial Intelligence, Machine Learning, and Deep Learning.
          </p>
        </header>

        {/* Certificates Grid */}
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                // Pass the function to set this cert as the selected one
                onViewDetails={() => setSelectedCert(cert)}
              />
            ))}
          </div>
        </main>
      </div>

      {/* --- ✨ RENDER THE MODAL --- */}
      {/* This will only render when selectedCert is not null */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}