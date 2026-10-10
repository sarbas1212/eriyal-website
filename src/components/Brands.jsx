import { brandShowcase } from '../data/siteConfig';

export default function Brands() {
  // Duplicate list to create smooth infinite loop
  const marqueeItems = [...brandShowcase.brands, ...brandShowcase.brands];

  return (
    <section id="brands" className="brands section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="brands__header reveal">
          <span className="section-label">Trusted Brands</span>
          <h2 className="section-title">{brandShowcase.title}</h2>
          <p className="section-subtitle">{brandShowcase.subtitle}</p>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="brands__marquee-wrapper reveal reveal-delay-2">
        <div className="brands__marquee-track" role="region" aria-label="Brand showcase marquee">
          {marqueeItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="brand-card">
              {/* Category pill badge */}
              <span
                className="brand-card__category"
                style={{ backgroundColor: item.badgeColor || '#25236F' }}
              >
                {item.category}
              </span>

              {/* Brand Logo & Name Unit */}
              <div className="brand-card__unit">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} Official Logo`}
                    className="brand-card__logo"
                    onError={(e) => {
                      // Graceful fallback if custom logo image path isn't found
                      e.target.style.display = 'none';
                    }}
                  />
                ) : null}
                <span className="brand-card__name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
