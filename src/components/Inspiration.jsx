import { inspirations } from '../data/siteConfig';

export default function Inspiration() {
  return (
    <section id="inspiration" className="inspiration section-padding">
      <div className="container">
        {/* Header */}
        <div className="inspiration__header reveal">
          <span className="section-label">Inspiration</span>
          <h2 className="section-title">Designed for Every Space</h2>
          <p className="section-subtitle">
            From cosy living rooms to grand commercial interiors — find the right look for your project.
          </p>
        </div>

        {/* Grid */}
        <div className="inspiration__grid">
          {inspirations.map((panel, i) => (
            <div
              key={panel.title}
              className={`inspiration-panel reveal reveal-delay-${i + 1}`}
            >
              <img
                className="inspiration-panel__image"
                src={panel.image}
                alt={panel.title}
                loading="lazy"
              />
              <div className="inspiration-panel__content">
                <h3 className="inspiration-panel__title">{panel.title}</h3>
                <p className="inspiration-panel__caption">{panel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
