import { Link } from "react-router-dom";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ background: "linear-gradient(to right, #0b1e3d, #1a3a6e)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black mb-1">
              <span className="text-yellow-400">Nexa</span>{" "}
              <span className="text-white">Wealth Partners</span>
            </h2>
            <p className="text-gray-400 text-sm mb-4">Business Associate · Tata AIA</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping families achieve financial security and building the next generation of insurance leaders across India.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/918141112423?text=Hello Harsh I want more details about your services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/nexa-wealth-partners-7a038440b/"   // ← replace with actual
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:nexawealthpartners@gmail.com"
                className="w-9 h-9 bg-red-500 hover:bg-red-400 rounded-full flex items-center justify-center transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home",     to: "/" },
                { label: "About",    to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact",  to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+918141112423" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +91 81411 12423
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:nexawealthpartners@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors break-all">
                  nexawealthpartners@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=349-350+Central+Bazar+Gandevi+Road+Navsari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors leading-relaxed"
                >
                  349-350 Central Bazar,<br />
                  Gandevi Road, Opp. Vidhyakunj School,<br />
                  Navsari, Gujarat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Nexa Wealth Partners. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Harsh Vaidya · Tata AIA Business Associate · Navsari
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;