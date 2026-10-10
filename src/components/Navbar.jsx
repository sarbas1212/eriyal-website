import { useState, useEffect } from 'react';
import { brand, navLinks } from '../data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        {/* Original Brand Logo */}
        <a
          href="#home"
          className="navbar__logo-wrap"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Eriyal Tiles & Sanitary — Home"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="navbar__logo-img"
          />
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#branches"
            className="navbar__cta"
            onClick={(e) => handleNavClick(e, '#branches')}
          >
            Visit Showroom
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`navbar__mobile-overlay ${mobileOpen ? 'navbar__mobile-overlay--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#branches"
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, '#branches')}
          style={{ marginTop: '1rem' }}
        >
          Visit Showroom
        </a>
      </div>
    </nav>
  );
}
