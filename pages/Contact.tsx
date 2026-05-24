import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Using Font Awesome icons for consistency

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('submitting');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('❌ EmailJS configuration missing. Please check your environment variables.');
      setStatus('error');
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus('success');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('❌ Email error:', error.text);
        setStatus('error');
      });
  };

  // Reset status back to 'idle' after success message
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Framer Motion Variants for individual items (sections)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonHover = {
    scale: 1.03, // Slightly less aggressive scale for light theme
    y: -2, // Subtle lift
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", // More pronounced shadow
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const buttonTap = {
    scale: 0.97,
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden font-inter">
      {/* Background: Subtle gradient and pattern, consistent with Home/Projects */}
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
        `}
      </style>

      {/* Content container - now directly within the section, acting as the max-width wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-12">
        {/* Header Section - now without a box, but with padding */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center p-4 sm:p-8" /* Adjusted padding for this section */
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-lg leading-8 text-gray-700 max-w-2xl mx-auto">
            Have a question or a project in mind? Let's connect.
          </p>
        </motion.div>

        {/* Contact Information and Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section - now without a box, but with padding */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="p-4 sm:p-8 space-y-8 bg-white rounded-2xl shadow-lg border border-gray-200" /* Added background and shadow to make it a distinct card */
          >
            <h3 className="text-2xl font-bold text-blue-600">Contact Information</h3>
            <p className="text-gray-700 leading-relaxed">
              Feel free to reach out via email or connect with me on social media. I'm always open to
              discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
            </p>
            <div className="space-y-5">
              <motion.a
                href="mailto:nabeelshan468@gmail.com"
                className="flex items-center space-x-4 group text-gray-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <FaEnvelope className="h-7 w-7 text-blue-500 group-hover:text-blue-600 transition-colors" />
                <span className="text-lg font-medium">nabeelshan468@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nabeelshan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group text-gray-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <FaLinkedin className="h-7 w-7 text-blue-500 group-hover:text-blue-600 transition-colors" />
                <span className="text-lg font-medium">LinkedIn Profile</span>
              </motion.a>
              <motion.a
                href="https://github.com/nabeelshan78"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group text-gray-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <FaGithub className="h-7 w-7 text-blue-500 group-hover:text-blue-600 transition-colors" />
                <span className="text-lg font-medium">GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form Section - now without a box, but with padding */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="p-4 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-200" /* Added background and shadow to make it a distinct card */
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-3xl font-bold text-green-600"
                >
                  Message Sent! 🎉
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-gray-700 mt-4 text-lg"
                >
                  Thank you for reaching out! I'll get back to you shortly.
                </motion.p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="user_name" className="block text-sm font-semibold text-gray-800 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="mt-1 block w-full bg-gray-50 border-2 border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="user_email" className="block text-sm font-semibold text-gray-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="mt-1 block w-full bg-gray-50 border-2 border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="mt-1 block w-full bg-gray-50 border-2 border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300"
                    whileHover={status !== 'submitting' ? buttonHover : {}}
                    whileTap={status !== 'submitting' ? buttonTap : {}}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2 text-center font-medium"
                  >
                    Failed to send your message. Please try again later.
                  </motion.p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React, { useRef, useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';

// // --- Inline SVG Icons ---
// const GitHubIcon = () => (
//   <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
//     <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
//   </svg>
// );
// const LinkedInIcon = () => (
//   <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
//     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//   </svg>
// );
// const EnvelopeIcon = () => (
//     <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
//         <path d="M22 4H2.01L2 20h20V4zm-2 14H4V8l8 5 8-5v10zM4 6h16v.03L12 10.7 4 6.03V6z" />
//     </svg>
// );

// const Contact = () => {
//   const form = useRef(null);
//   const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus('submitting');

//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//     if (!serviceId || !templateId || !publicKey) {
//       console.error('❌ EmailJS configuration missing. Please check your environment variables.');
//       setStatus('error');
//       return;
//     }

//     emailjs
//       .sendForm(serviceId, templateId, form.current, publicKey)
//       .then(() => {
//         setStatus('success');
//         form.current?.reset();
//       })
//       .catch((error) => {
//         console.error('❌ Email error:', error.text);
//         setStatus('error');
//       });
//   };

//   // Reset status back to 'idle' after success message
//   useEffect(() => {
//     if (status === 'success') {
//       const timer = setTimeout(() => setStatus('idle'), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [status]);

//   // Framer Motion Variants
//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   };

//   const buttonHover = {
//     scale: 1.05,
//     transition: { type: "spring", stiffness: 400, damping: 10 },
//   };

//   const buttonTap = {
//     scale: 0.95,
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden font-inter">
//       {/* Background */}
//       <div className="absolute inset-0 bg-slate-900">
//         <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent animate-gradient-subtle-pulse"></div>
//       </div>

//       {/* Custom CSS */}
//       <style>
//         {`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap');
//         body {
//             font-family: 'Inter', sans-serif;
//             background-color: #0B1120;
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
//         `}
//       </style>

//       {/* Content container */}
//       <div className="relative z-10 w-full max-w-6xl mx-auto space-y-12">
//         {/* Header Section */}
//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           animate="visible"
//           className="text-center p-4 sm:p-8"
//         >
//           <h2 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">Get In Touch</h2>
//           <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
//             Have a question or a project in mind? Let's connect.
//           </p>
//         </motion.div>

//         {/* Contact Information and Form Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Information Section */}
//           <motion.div
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//             className="p-4 sm:p-8 space-y-8 bg-slate-800 rounded-2xl shadow-lg border border-slate-700"
//           >
//             <h3 className="text-2xl font-bold text-blue-400">Contact Information</h3>
//             <p className="text-slate-300 leading-relaxed">
//               Feel free to reach out via email or connect with me on social media. I'm always open to
//               discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
//             </p>
//             <div className="space-y-5">
//               <motion.a
//                 href="mailto:nabeelshan468@gmail.com"
//                 className="flex items-center space-x-4 group text-slate-300 hover:text-blue-400 transition-colors duration-300"
//                 whileHover={buttonHover}
//                 whileTap={buttonTap}
//               >
//                 <EnvelopeIcon className="h-7 w-7 text-blue-400" />
//                 <span className="text-lg font-medium">nabeelshan468@gmail.com</span>
//               </motion.a>
//               <motion.a
//                 href="https://linkedin.com/in/nabeelshan"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center space-x-4 group text-slate-300 hover:text-blue-400 transition-colors duration-300"
//                 whileHover={buttonHover}
//                 whileTap={buttonTap}
//               >
//                 <LinkedInIcon className="h-7 w-7 text-blue-400" />
//                 <span className="text-lg font-medium">LinkedIn Profile</span>
//               </motion.a>
//               <motion.a
//                 href="https://github.com/nabeelshan78"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center space-x-4 group text-slate-300 hover:text-blue-400 transition-colors duration-300"
//                 whileHover={buttonHover}
//                 whileTap={buttonTap}
//               >
//                 <GitHubIcon className="h-7 w-7 text-blue-400" />
//                 <span className="text-lg font-medium">GitHub Profile</span>
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* Contact Form Section */}
//           <motion.div
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//             className="p-4 sm:p-8 bg-slate-800 rounded-2xl shadow-lg border border-slate-700"
//           >
//             {status === 'success' ? (
//               <div className="flex flex-col items-center justify-center h-full text-center py-10">
//                 <motion.h3
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                   className="text-3xl font-bold text-green-400"
//                 >
//                   Message Sent! 🎉
//                 </motion.h3>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4, duration: 0.5 }}
//                   className="text-slate-300 mt-4 text-lg"
//                 >
//                   Thank you for reaching out! I'll get back to you shortly.
//                 </motion.p>
//               </div>
//             ) : (
//               <form ref={form} onSubmit={sendEmail} className="space-y-6">
//                 <motion.div variants={itemVariants}>
//                   <label htmlFor="user_name" className="block text-sm font-semibold text-slate-200 mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="user_name"
//                     id="user_name"
//                     required
//                     className="mt-1 block w-full bg-slate-700 border-2 border-slate-600 rounded-md shadow-sm py-3 px-4 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-slate-500 transition-all duration-200"
//                     placeholder="Enter your full name"
//                   />
//                 </motion.div>
//                 <motion.div variants={itemVariants}>
//                   <label htmlFor="user_email" className="block text-sm font-semibold text-slate-200 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="user_email"
//                     id="user_email"
//                     required
//                     className="mt-1 block w-full bg-slate-700 border-2 border-slate-600 rounded-md shadow-sm py-3 px-4 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-slate-500 transition-all duration-200"
//                     placeholder="Enter your email address"
//                   />
//                 </motion.div>
//                 <motion.div variants={itemVariants}>
//                   <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     rows={5}
//                     required
//                     className="mt-1 block w-full bg-slate-700 border-2 border-slate-600 rounded-md shadow-sm py-3 px-4 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-slate-500 transition-all duration-200 resize-none"
//                     placeholder="Tell me about your project or just say hello..."
//                   ></textarea>
//                 </motion.div>
//                 <motion.div variants={itemVariants}>
//                   <motion.button
//                     type="submit"
//                     disabled={status === 'submitting'}
//                     className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-500 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-300"
//                     whileHover={status !== 'submitting' ? buttonHover : {}}
//                     whileTap={status !== 'submitting' ? buttonTap : {}}
//                   >
//                     {status === 'submitting' ? 'Sending...' : 'Send Message'}
//                   </motion.button>
//                 </motion.div>
//                 {status === 'error' && (
//                   <motion.p
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-400 text-sm mt-2 text-center font-medium"
//                   >
//                     Failed to send your message. Please try again later.
//                   </motion.p>
//                 )}
//               </form>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;