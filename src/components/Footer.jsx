import { Navigation } from 'lucide-react';
import { brand, navLinks, branches } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer__grid">
          {/* Brand column with original logo */}
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <img
                src={brand.logo}
                alt={brand.name}
                className="footer__logo-img"
              />
            </div>
            <p className="footer__brand-tagline">
              Tiles, sanitaryware, and electrical essentials for homes and commercial spaces in Kuttippuram and Valanchery, Kerala.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Showrooms */}
          <div>
            <h4 className="footer__heading">Our Showrooms</h4>
            {branches.map((branch) => (
              <div key={branch.id} className="footer__branch-item">
                <span className="footer__branch-name">{branch.name}</span>
                <span className="footer__branch-tag">{branch.locationTag}</span>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__branch-link"
                >
                  <Navigation size={12} />
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            &copy; {currentYear} {brand.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
