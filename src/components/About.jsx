import { images } from '../data/siteConfig';

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about__inner">
          {/* Image */}
          <div className="about__image-wrap reveal">
            <img
              src={images.aboutShowroom}
              alt="Eriyal Tiles & Sanitary showroom interior with tile displays"
              loading="lazy"
            />
            <div className="about__image-accent" aria-hidden="true" />
          </div>

          {/* Text */}
          <div className="about__text reveal reveal-delay-2">
            <span className="section-label">About Eriyal</span>
            <h2 className="section-title">
              Your Space Deserves the Right&nbsp;Finish.
            </h2>
            <p className="about__description">
              At Eriyal Tiles &amp; Sanitary, explore tile and sanitaryware options to help
              bring your interior ideas to life. Visit our showrooms to discover styles for
              your home, bathroom, or commercial space.
            </p>
            <div className="about__stats">
              <div>
                <div className="about__stat-number">2</div>
                <div className="about__stat-label">Showroom Locations</div>
              </div>
              <div>
                <div className="about__stat-number">6+</div>
                <div className="about__stat-label">Product Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
