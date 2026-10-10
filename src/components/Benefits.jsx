import { Layers, Home, Bath, Store, Palette } from 'lucide-react';
import { benefits } from '../data/siteConfig';

const iconMap = {
  Layers,
  Home,
  Bath,
  Store,
  Palette,
};

export default function Benefits() {
  return (
    <section id="benefits" className="benefits section-padding">
      <div className="container">
        {/* Header */}
        <div className="benefits__header reveal">
          <span className="section-label" style={{ color: '#ff4081' }}>
            Why Eriyal
          </span>
          <h2 className="section-title section-title--light">
            Why Explore Eriyal?
          </h2>
          <p className="section-subtitle section-subtitle--light" style={{ margin: 'var(--space-md) auto 0' }}>
            Reasons customers visit our showrooms across Kerala.
          </p>
        </div>

        {/* Grid */}
        <div className="benefits__grid">
          {benefits.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className={`benefit-card reveal reveal-delay-${i + 1}`}
              >
                <div className="benefit-card__icon">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="benefit-card__title">{item.title}</h3>
                <p className="benefit-card__description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
