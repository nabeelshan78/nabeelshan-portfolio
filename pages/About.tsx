import { motion } from 'framer-motion';

// --- ICONS (using inline SVGs for self-containment) ---
// (Icons remain unchanged, only their className props will be different when used)
const BrainCircuitIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.993.296M12 5a3 3 0 1 1-5.993.296M12 5a3 3 0 1 1 5.993.296M12 5a3 3 0 1 0 5.993.296M18 11a3 3 0 1 0-5.993.296M18 11a3 3 0 1 1-5.993.296M18 11a3 3 0 1 1 5.993.296M6 11a3 3 0 1 0-5.993.296M6 11a3 3 0 1 1-5.993.296M12 17a3 3 0 1 0-5.993.296M12 17a3 3 0 1 1-5.993.296M12 17a3 3 0 1 1 5.993.296M12 17a3 3 0 1 0 5.993.296M12 11a3 3 0 1 1-5.993.296M12 11a3 3 0 1 0-5.993.296" /><path d="M12 5a3 3 0 1 0-5.993.296M12 5a3 3 0 1 1-5.993.296M12 5a3 3 0 1 1 5.993.296M12 5a3 3 0 1 0 5.993.296M18 11a3 3 0 1 0-5.993.296M18 11a3 3 0 1 1-5.993.296M18 11a3 3 0 1 1 5.993.296M6 11a3 3 0 1 0-5.993.296M6 11a3 3 0 1 1-5.993.296M12 17a3 3 0 1 0-5.993.296M12 17a3 3 0 1 1-5.993.296M12 17a3 3 0 1 1 5.993.296M12 17a3 3 0 1 0 5.993.296M12 11a3 3 0 1 1-5.993.296M12 11a3 3 0 1 0-5.993.296" /><path d="M12 5v6m0 0-6 6m6-6 6 6m-6-6-6-6m6 6 6-6m-6 6v6" />
  </svg>
);
const LayersIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const CloudCogIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9" />
    <circle cx="12" cy="17" r="3" />
    <path d="M12 13.5V14" /><path d="M12 20v.5" />
    <path d="m14.5 15.2-.4.9" /><path d="m9.9 18.3-.4.9" />
    <path d="m14.5 18.8-.4-.9" /><path d="m9.9 15.7-.4-.9" />
  </svg>
);
const CodeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const UsersIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Helper component for skill badges
const SkillBadge = ({ children }) => (
  <motion.span
    className="inline-block px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 shadow-sm"
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
  >
    {children}
  </motion.span>
);

// Helper component for the new expertise cards
const ExpertiseCard = ({ icon, title, skills }) => (
    <motion.div 
        className="bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-lg"
        variants={fadeIn}
    >
        <div className="flex items-center gap-4 mb-4">
            {icon}
            <h4 className="text-xl font-bold text-slate-900">{title}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <SkillBadge key={index}>{skill}</SkillBadge>
            ))}
        </div>
    </motion.div>
);


// Animation variants for general fade-up effect
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Animation variants for staggered children
const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {},
};

const About = () => {
  // --- SKILLS DATA ---
  const expertiseData = [
    {
      icon: <BrainCircuitIcon className="w-8 h-8 text-blue-600" />,
      title: "Core AI & Data Science",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "SQL", "Keras", "Data Preprocessing", "Feature Engineering"]
    },
    {
      icon: <LayersIcon className="w-8 h-8 text-purple-600" />,
      title: "Deep Learning Specializations",
      skills: ["Natural Language Processing", "Computer Vision", "Generative AI", "Large Language Models", "Transformers", "CNNs", "RNNs", "Reinforcement Learning", "YOLO"]
    },
    {
      icon: <CloudCogIcon className="w-8 h-8 text-indigo-600" />,
      title: "MLOps & Deployment",
      skills: ["Docker", "Kubernetes", "AWS", "Git & GitHub", "Model Deployment", "Model Optimization", "CI/CD"]
    },
    {
      icon: <CodeIcon className="w-8 h-8 text-sky-600" />,
      title: "Full-Stack Development",
      skills: ["React", "Node.js", "TypeScript", "Express.js", "Tailwind CSS", "REST APIs", "Firebase"]
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-rose-600" />,
      title: "Research & Professional Skills",
      skills: ["Problem Solving", "Research-Oriented", "Team Collaboration", "Communication", "Project Management", "Continuous Learning", "Adaptability"]
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden font-inter">
      {/* Background */}
      <div className="absolute inset-0 bg-white">
        {/* Faint grid pattern, now black/transparent */}
        <div className="absolute inset-0 bg-grid-black/[0.03] bg-[size:50px_50px]"></div>
        {/* Lighter gradient pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent animate-gradient-subtle-pulse"></div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap');
        body { 
            font-family: 'Inter', sans-serif; 
            /* Light gray background for the whole page */
            background-color: #f9fafb; 
        }
        h1, h2, h3, h4 { font-family: 'Montserrat', sans-serif; }
        
        /* Animations can stay the same */
        @keyframes gradient-subtle-pulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-subtle-pulse {
          background-size: 200% 200%;
          animation: gradient-subtle-pulse 20s ease infinite;
        }
        .profile-image-glow::before {
          content: ''; position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px;
          background: linear-gradient(45deg, #2563eb, #3b82f6, #60a5fa, #38bdf8, #0ea5e9);
          background-size: 400% 400%; filter: blur(25px); opacity: 0; z-index: -1; border-radius: 9999px;
          animation: border-glow-animation 10s linear infinite;
          transition: opacity 0.5s ease-out, filter 0.5s ease-out;
        }
        .group:hover .profile-image-glow::before { opacity: 0.5; filter: blur(30px); }
        @keyframes border-glow-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the journey that's shaped my mindset, technical path, and future ambitions in artificial intelligence.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="flex justify-center md:col-span-1">
            <div className="relative w-64 h-64 rounded-full shadow-2xl border-4 border-blue-600 overflow-hidden group profile-image-glow">
              <img
                src="nabeel.jpg" // Placeholder for your photo
                alt="Nabeel Shan - AI/ML Engineer"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="md:col-span-2 space-y-6 text-slate-600 leading-relaxed">
            <h3 className="text-2xl font-bold text-blue-600">AI/ML Engineer & Problem Solver</h3>
            <p>
              I'm an aspiring <strong className="text-slate-900">AI/ML Engineer</strong> driven by a passion for building intelligent systems that solve <strong className="text-slate-900">real-world problems</strong>. What began as a curiosity for how things work turned into a deep focus on <strong className="text-slate-900">machine learning</strong>, <strong className="text-slate-900">deep learning</strong>, and <strong className="text-slate-900">research</strong>.
            </p>
            <p>
              Today, I’m focused on mastering <strong className="text-slate-900">cutting-edge technologies</strong>, contributing to <strong className="text-slate-900">open-source projects</strong>, building <strong className="text-slate-900">scalable ML pipelines</strong>, and publishing <strong className="text-slate-900">impactful research</strong>. I'm always open to research, collaboration, and opportunities to push the boundaries of what’s possible with AI.
            </p>
          </motion.div>
        </motion.div>

        {/* Education & Resume Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-blue-600 text-4xl">🎓</span> Education
            </h3>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-1">B.E. in Software Engineering</h4>
              <p className="text-slate-600 text-base">National University of Sciences and Technology (NUST)</p>
              <p className="text-slate-500 text-sm mt-1">📅 2023 – Present</p>
            </div>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="p-8 bg-white rounded-2xl shadow-lg text-center flex flex-col items-center justify-center border border-gray-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-3 flex items-center gap-3">
              <span className="text-blue-600 text-4xl">📄</span> My Resume
            </h3>
            <p className="text-slate-600 text-base mb-6 max-w-sm">
              Explore my projects, achievements, and research journey in detail.
            </p>
            <motion.a
              href="/NABEEL SHAN AI Engineer.pdf" // Ensure this path is correct
              download
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume (PDF)
            </motion.a>
          </motion.div>
        </div>

        {/* --- NEW EXPERTISE SECTION --- */}
        <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-8"
        >
            <motion.div variants={fadeIn} className="text-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Technical Expertise</h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">A curated overview of the tools and technologies I specialize in.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {expertiseData.slice(0, 2).map((item, index) => (
                    <ExpertiseCard key={index} icon={item.icon} title={item.title} skills={item.skills} />
                ))}
            </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertiseData.slice(2).map((item, index) => (
                  <ExpertiseCard key={index + 2} icon={item.icon} title={item.title} skills={item.skills} />
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;