import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants for general fade-up effect
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Animation variants for staggered text elements
const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    // No specific hidden state for children, just the parent
  },
};

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden font-inter">
      {/* Background: Subtle gradient and pattern */}
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
        .profile-image-glow::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            background: linear-gradient(45deg, #60a5fa, #818cf8, #a78bfa, #c084fc, #e879f9); /* Lighter, vibrant gradient */
            background-size: 400% 400%;
            filter: blur(25px); /* Softer blur for a halo effect */
            opacity: 0;
            z-index: -1;
            border-radius: 9999px; /* Fully rounded */
            animation: border-glow-animation-light 10s linear infinite;
            transition: opacity 0.5s ease-out, filter 0.5s ease-out;
        }
        .group:hover .profile-image-glow::before {
            opacity: 0.6; /* More visible glow on hover */
            filter: blur(30px);
        }
        @keyframes border-glow-animation-light {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        `}
      </style>

      {/* Main Content Grid - now directly on the background, without an outer box */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left Section - Text Content */}
        <motion.div
          className="text-center md:text-left space-y-6 p-8 lg:p-0" /* Added padding for smaller screens */
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-4xl font-extrabold leading-tight text-gray-900"
            variants={fadeIn}
          >
            Designing <strong className="text-blue-700">Intelligent Systems</strong>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-gradient-animation-light">
              to Impact the World
            </span>
          </motion.h1>

          <motion.div variants={fadeIn}>
            <TypeAnimation
              sequence={[
                'AI/ML Engineer', 2000,
                'AI/ML Researcher', 2000,
                'NLP Practitioner', 2000,
                'Generative AI Explorer', 2000,
                'Open Source Contributor', 2000,
                'Aspiring AI Scholar', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-blue-600 text-lg sm:text-xl font-semibold"
            />
          </motion.div>

          <motion.p className="text-sm text-gray-500 italic" variants={fadeIn}>
            Passionately blending AI research and engineering to build practical impact.
          </motion.p>

          <motion.p className="text-base text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed" variants={fadeIn}>
            I’m <strong className="text-blue-700">Nabeel Shan</strong>, a Software Engineering student at NUST on a mission to build <strong className="text-black-700">intelligent systems</strong> that learn, adapt, and make a difference. I specialize in <strong className="text-black-700">deep learning</strong>, <strong className="text-black-700">computer vision</strong>, <strong className="text-black-700">NLP</strong>, and <strong className="text-black-700">generative AI</strong> - combining curiosity with code to turn ideas into <strong className="text-black-700">impactful AI solutions</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4" variants={fadeIn}>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              See My Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Let’s Connect
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div className="mt-6 flex gap-6 justify-center md:justify-start text-gray-600 text-3xl" variants={fadeIn}>
            <a
              href="https://github.com/nabeelshan78" // Replace with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nabeelshan" // Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <div className="relative flex justify-center items-center p-8 lg:p-0"> {/* Added padding for smaller screens */}
          {/* Image container with initial fade/scale and subtle glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-full w-72 h-72 sm:w-80 sm:h-80 shadow-2xl border-4 border-blue-300 overflow-hidden group profile-image-glow"
          >
            {/* Image itself */}
            <motion.img
              src="nabeel.jpg" // Placeholder for your photo
              alt="Nabeel Shan - AI/ML Engineer"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            />

            {/* Optional subtle light bloom effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.6 }}
            />

            {/* Optional subtle gradient overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-black/5 to-black/10 opacity-80" />
          </motion.div>

          {/* Badge label */}
          <motion.span
            className="absolute bottom-4 right-4 bg-green-600 text-white text-xs px-4 py-1.5 rounded-full shadow-md font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Open to Research
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Home;






// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import { TypeAnimation } from 'react-type-animation'; // Removed this import
// // import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Removed this import
// import { motion } from 'framer-motion';

// // --- Custom Hooks & Components to replace libraries ---

// // 1. Custom Typing Animation Hook
// const useTypingAnimation = (words, delay = 2000, speed = 50) => {
//   const [index, setIndex] = useState(0);
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const type = () => {
//       const currentWord = words[index];
//       const newText = isDeleting
//         ? currentWord.substring(0, text.length - 1)
//         : currentWord.substring(0, text.length + 1);

//       setText(newText);

//       if (!isDeleting && newText === currentWord) {
//         // Pause at end of word
//         setTimeout(() => setIsDeleting(true), delay);
//       } else if (isDeleting && newText === '') {
//         // Move to next word
//         setIsDeleting(false);
//         setIndex((prev) => (prev + 1) % words.length);
//       }
//     };

//     const timer = setTimeout(type, isDeleting ? speed / 2 : speed);

//     return () => clearTimeout(timer);
//   }, [text, isDeleting, index, words, delay, speed]);

//   return text;
// };

// // 2. Inline SVG Icons
// const GitHubIcon = () => (
//   <svg
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     width="1em"
//     height="1em"
//     aria-hidden="true"
//   >
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.03

// 3-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"
//     />
//   </svg>
// );

// const LinkedInIcon = () => (
//   <svg
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     width="1em"
//     height="1em"
//     aria-hidden="true"
//   >
//     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//   </svg>
// );

// // --- Animation Variants ---
// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const staggerChildren = {
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   hidden: {},
// };

// // --- Words for Typing Animation ---
// const ROLES_LIST = [
//   'AI/ML Engineer',
//   'AI/ML Researcher',
//   'NLP Practitioner',
//   'Generative AI Explorer',
//   'Open Source Contributor',
//   'Aspiring AI Scholar',
// ];

// const Home = () => {
//   // Use the custom typing hook
//   const typedText = useTypingAnimation(ROLES_LIST);

//   return (
//     <section className="relative min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden font-inter">
//       {/* Background: Switched to a professional dark theme */}
//       <div className="absolute inset-0 bg-slate-900">
//         {/* Grid pattern is now fainter and lighter on the dark background */}
//         <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>
//         {/* Radial gradient is now a subtle blue/indigo glow from the center */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent animate-gradient-subtle-pulse"></div>
//       </div>

//       {/* Custom CSS for animations and refined styling */}
//       <style>
//         {`
//         /* Note: Font imports are best placed in your main index.html or App.css */
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap');

//         body {
//             font-family: 'Inter', sans-serif;
//             background-color: #0B1120; /* Matching the dark theme for scroll-bouncing */
//         }
//         h1, h2, h3 {
//             font-family: 'Montserrat', sans-serif;
//         }

//         @keyframes gradient-subtle-pulse {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient-subtle-pulse {
//           background-size: 200% 200%;
//           animation: gradient-subtle-pulse 20s ease infinite;
//         }
//         .text-gradient-animation {
//             background-size: 200% auto;
//             animation: text-gradient-shift 10s linear infinite;
//         }
//         @keyframes text-gradient-shift {
//             0% { background-position: 0% 50%; }
//             100% { background-position: 200% 50%; }
//         }
//         .profile-image-glow::before {
//             content: '';
//             position: absolute;
//             top: -10px;
//             left: -10px;
//             right: -10px;
//             bottom: -10px;
//             /* Updated gradient for dark mode - brighter, more 'electric' */
//             background: linear-gradient(45deg, #2563eb, #3b82f6, #60a5fa, #38bdf8, #0ea5e9);
//             background-size: 400% 400%;
//             filter: blur(25px);
//             opacity: 0;
//             z-index: -1;
//             border-radius: 9999px; /* Fully rounded */
//             animation: border-glow-animation 10s linear infinite;
//             transition: opacity 0.5s ease-out, filter 0.5s ease-out;
//         }
//         .group:hover .profile-image-glow::before {
//             opacity: 0.5; /* More visible glow on hover */
//             filter: blur(30px);
//         }
//         @keyframes border-glow-animation {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//         }
        
//         /* Blinking cursor effect for custom typing animation */
//         .typing-cursor {
//           display: inline-block;
//           width: 2px;
//           height: 1.25em; /* Match text size */
//           background-color: #3b82f6; /* Blue cursor */
//           animation: blink 0.7s infinite;
//           margin-left: 4px;
//           vertical-align: text-bottom;
//         }
        
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         `}
//       </style>

//       {/* Main Content Grid - now directly on the background, without an outer box */}
//       <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
//         {/* Left Section - Text Content */}
//         <motion.div
//           className="text-center md:text-left space-y-6 p-8 lg:p-0" /* Added padding for smaller screens */
//           variants={staggerChildren}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h1
//             // TEXT: Changed text-gray-900 to text-slate-100
//             className="text-4xl sm:text-5xl lg:text-4xl font-extrabold leading-tight text-slate-100"
//             variants={fadeIn}
//           >
//             {/* TEXT: Changed text-blue-700 to text-cyan-400 for a bright accent */}
//             Designing <strong className="text-cyan-400">Intelligent Systems</strong>
//             <br />
//             {/* TEXT: Updated gradient to be bright on dark BG */}
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-gradient-animation">
//               to Impact the World
//             </span>
//           </motion.h1>

//           <motion.div variants={fadeIn}>
//             {/* --- REPLACEMENT for TypeAnimation --- */}
//             <span className="block text-blue-400 text-lg sm:text-xl font-semibold h-7"> {/* Added h-7 for layout stability */}
//               {typedText}
//               <span className="typing-cursor"></span>
//             </span>
//             {/* --- End Replacement --- */}
//           </motion.div>

//           <motion.p
//             // TEXT: Changed text-gray-500 to text-slate-400
//             className="text-sm text-slate-400 italic"
//             variants={fadeIn}
//           >
//             Passionately blending AI research and engineering to build practical impact.
//           </motion.p>

//           <motion.p
//             // TEXT: Changed text-gray-700 to text-slate-300 and accents to brighter colors
//             className="text-base text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
//             variants={fadeIn}
//           >
//             I’m <strong className="text-blue-400">Nabeel Shan</strong>, a Software Engineering student at NUST on a mission to build <strong className="text-slate-100">intelligent systems</strong> that learn, adapt, and make a difference. I specialize in <strong className="text-slate-100">deep learning</strong>, <strong className="text-slate-100">computer vision</strong>, <strong className="text-slate-100">NLP</strong>, and <strong className="text-slate-100">generative AI</strong> - combining curiosity with code to turn ideas into <strong className="text-slate-100">impactful AI solutions</strong>.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4" variants={fadeIn}>
//             <Link
//               to="/projects"
//               // BUTTON 1: Gradient updated slightly for better pop
//               className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
//             >
//               See My Projects
//             </Link>
//             <Link
//               to="/contact"
//               // BUTTON 2: Inverted for dark mode
//               className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105 shadow-md"
//             >
//               Let’s Connect
//             </Link>
//           </motion.div>

//           {/* Socials */}
//           <motion.div
//             // TEXT: Changed text-gray-600 to text-gray-400 and hover to blue-400
//             className="mt-6 flex gap-6 justify-center md:justify-start text-gray-400 text-3xl"
//             variants={fadeIn}
//           >
//             <a
//               href="https://github.com/nabeelshan78" // Replace with your GitHub
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
//               aria-label="GitHub"
//             >
//               {/* --- REPLACEMENT for FaGithub --- */}
//               <GitHubIcon />
//               {/* --- End Replacement --- */}
//             </a>
//             <a
//               href="https://www.linkedin.com/in/nabeelshan" // Replace with your LinkedIn
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
//               aria-label="LinkedIn"
//             >
//               {/* --- REPLACEMENT for FaLinkedin --- */}
//               <LinkedInIcon />
//               {/* --- End Replacement --- */}
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Right Section - Profile Image */}
//         <div className="relative flex justify-center items-center p-8 lg:p-0"> {/* Added padding for smaller screens */}
//           {/* Image container with initial fade/scale and subtle glow */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//             // IMAGE: Changed border color to be a subtle dark accent
//             className="relative rounded-full w-72 h-72 sm:w-80 sm:h-80 shadow-2xl border-4 border-blue-800/50 overflow-hidden group profile-image-glow"
//           >
//             {/* Image itself */}
//             <motion.img
//               src="nabeel.jpg" // Placeholder for your photo
//               alt="Nabeel Shan - AI/ML Engineer"
//               className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
//             />

//             {/* Optional subtle light bloom effect */}
//             <motion.div
//               className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.4, delay: 0.6 }}
//             />

//             {/* Optional subtle gradient overlay */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-black/5 to-black/10 opacity-80" />
//           </motion.div>

//           {/* Badge label - Green works well on dark too! */}
//           <motion.span
//             className="absolute bottom-4 right-4 bg-green-600 text-white text-xs px-4 py-1.5 rounded-full shadow-md font-semibold"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             Open to Research
//           </motion.span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;