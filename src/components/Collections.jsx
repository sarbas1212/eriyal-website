import { ArrowUpRight } from 'lucide-react';
import { collections } from '../data/siteConfig';

export default function Collections() {
  return (
    <section id="collections" className="collections section-padding">
      <div className="container">
        {/* Header */}
        <div className="collections__header reveal">
          <span className="section-label">Our Range</span>
          <h2 className="section-title">Tiles, Sanitaryware &amp; Electricals</h2>
          <p className="section-subtitle">
            Explore curated collections across our three core product categories — floor &amp; wall tiles,
            bath sanitaryware, and electrical essentials.
          </p>
        </div>

        {/* Grid */}
        <div className="collections__grid">
          {collections.map((item, i) => (
            <div
              key={item.id}
              className={`collection-card collection-card--${item.span} reveal reveal-delay-${(i % 4) + 1}`}
            >
              <img
                className="collection-card__image"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="collection-card__overlay">
                <span className="collection-card__tag">{item.categoryTag}</span>
                <h3 className="collection-card__title">{item.title}</h3>
                <p className="collection-card__subtitle">{item.subtitle}</p>
              </div>
              <div className="collection-card__arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
