import { MapPin, Navigation } from 'lucide-react';
import { branches } from '../data/siteConfig';

export default function Branches() {
  return (
    <section id="branches" className="branches section-padding">
      <div className="container">
        {/* Header */}
        <div className="branches__header reveal">
          <span className="section-label">Our Showrooms</span>
          <h2 className="section-title">Visit Our Two Branches in Kerala</h2>
          <p className="section-subtitle">
            Experience our tiles, sanitaryware, and electrical collections in person at Kuttippuram and Pookkattiri, Valanchery.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="branches__grid">
          {branches.map((branch, i) => (
            <div
              key={branch.id}
              className={`branch-card reveal reveal-delay-${i + 1}`}
            >
              <div className="branch-card__header">
                <div className="branch-card__icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="branch-card__tag">{branch.locationTag}</span>
                  <h3 className="branch-card__name">{branch.name}</h3>
                </div>
              </div>

              <p className="branch-card__address">{branch.address}</p>

              {/* Embedded map preview */}
              <div className="branch-card__map">
                <iframe
                  title={`Map location for ${branch.name} - ${branch.locationTag}`}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${branch.coordinates.bbox}&layer=mapnik&marker=${branch.coordinates.marker}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  aria-label={`Embedded map for ${branch.name}`}
                />
              </div>

              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-directions"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
