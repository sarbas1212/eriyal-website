import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Brands from './components/Brands';
import Inspiration from './components/Inspiration';
import About from './components/About';
import Benefits from './components/Benefits';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  /* ── Scroll-reveal observer ────────────────────────── */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Brands />
        <Inspiration />
        <About />
        <Benefits />
        <Branches />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
