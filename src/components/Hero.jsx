import { ArrowRight, MapPin } from 'lucide-react';
import { images, heroContent } from '../data/siteConfig';

export default function Hero() {
  const scrollTo = (href) => (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background showroom image */}
      <div className="hero__bg">
        <img
          src={images.hero}
          alt="Eriyal Tiles, Sanitaryware & Electrical Showroom Display"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero__overlay" />

      {/* Hero Content */}
      <div className="container hero__content">
        <span className="hero__eyebrow">{heroContent.eyebrow}</span>

        <h1 className="hero__title">
          {heroContent.headlineLine1}<br />
          <span>{heroContent.headlineLine2}</span>
        </h1>

        <p className="hero__description">
          {heroContent.supportingText}
        </p>

        <div className="hero__actions">
          <a href="#collections" className="btn btn-primary" onClick={scrollTo('#collections')}>
            {heroContent.primaryCta}
            <ArrowRight size={18} />
          </a>
          <a href="#branches" className="btn btn-secondary" onClick={scrollTo('#branches')}>
            <MapPin size={18} />
            {heroContent.secondaryCta}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
