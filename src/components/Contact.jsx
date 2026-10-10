import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { branches, contact } from '../data/siteConfig';

export default function Contact() {
  // Format WhatsApp URL: https://wa.me/NUMBER?text=ENCODED_MSG
  const cleanWhatsapp = contact.whatsapp ? contact.whatsapp.replace(/[^0-9]/g, '') : '';
  const encodedMsg = encodeURIComponent(contact.whatsappMessage || 'Hello Eriyal Tiles & Sanitary, I would like to enquire about your products.');
  const whatsappUrl = cleanWhatsapp ? `https://wa.me/${cleanWhatsapp}?text=${encodedMsg}` : null;

  const phoneUrl = contact.phone ? `tel:${contact.phone.replace(/[^0-9+]/g, '')}` : null;

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact__inner reveal">
          <span className="section-label" style={{ color: '#ff4081', justifyContent: 'center' }}>
            Get in Touch
          </span>
          <h2 className="contact__title">
            Let&rsquo;s Find the Right Fit for Your&nbsp;Space.
          </h2>
          <p className="contact__description">
            Visit our Kuttippuram or Pookkattiri, Valanchery showrooms to explore tile,
            sanitaryware, and electrical collections. Our team will gladly assist you.
          </p>

          {/* Branch locations */}
          <div className="contact__branches">
            {branches.map((branch) => (
              <div key={branch.id} className="contact__branch">
                <MapPin size={20} className="contact__branch-icon" />
                <div>
                  <div className="contact__branch-name">{branch.name} — {branch.locationTag}</div>
                  <div className="contact__branch-address">{branch.address}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Call & WhatsApp Actions */}
          <div className="contact__actions">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                aria-label="Send WhatsApp Enquiry"
              >
                <MessageCircle size={18} />
                WhatsApp Enquiry
              </a>
            ) : (
              <button
                className="btn btn-whatsapp"
                style={{ opacity: 0.8, cursor: 'pointer' }}
                onClick={() => alert('WhatsApp Enquiry Ready: Please enter your WhatsApp number in src/data/siteConfig.js under contact.whatsapp')}
                title="Click to see setup instructions"
              >
                <MessageCircle size={18} />
                WhatsApp Enquiry
              </button>
            )}

            {phoneUrl ? (
              <a
                href={phoneUrl}
                className="btn btn-outline"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
                aria-label="Call Eriyal Tiles & Sanitary"
              >
                <Phone size={18} />
                Call Now
              </a>
            ) : (
              <button
                className="btn btn-outline"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', opacity: 0.8, cursor: 'pointer' }}
                onClick={() => alert('Call Now Ready: Please enter your phone number in src/data/siteConfig.js under contact.phone')}
                title="Click to see setup instructions"
              >
                <Phone size={18} />
                Call Now
              </button>
            )}
          </div>

          {/* Centralized config note */}
          {(!contact.phone || !contact.whatsapp) && (
            <p className="contact__phone-note">
              💡 To enable live direct calling and WhatsApp, open <code>src/data/siteConfig.js</code> and enter your business numbers.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
