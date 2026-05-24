import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Global font imports for consistency across all pages.
          This ensures 'Inter' and 'Montserrat' are available throughout the app. */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            /* Set a default light background for the body.
               Individual page sections will have their own absolute backgrounds
               that cover their area, ensuring consistency. */
            background-color: #f3f4f6; /* Tailwind gray-100, a soft light background */
        }
        h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
        }
        `}
      </style>

      <Header />
      {/* The main content area should simply grow to fill available space.
          It should NOT apply its own padding or max-width, as each individual
          page component (Home, Projects, About, Contact) already handles its
          own internal container, padding, and background. */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
