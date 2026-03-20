import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Causes } from './components/Causes';
import { Effects } from './components/Effects';
import { Testimonials } from './components/Testimonials';
import { Solutions } from './components/Solutions';
import { Challenge } from './components/Challenge';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Causes />
        <Effects />
        <Testimonials />
        <Solutions />
        <Challenge />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
