/**
 * SETUP INSTRUCTIONS FOR EMAILJS:
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Add an Email Service (Gmail recommended) → copy SERVICE_ID
 * 3. Create an Email Template → copy TEMPLATE_ID
 *    Template variables to use: {{from_name}}, {{from_email}}, {{message}}
 * 4. Go to Account → copy PUBLIC_KEY
 * 5. Create a .env file in your project root and add:
 *       VITE_EMAILJS_SERVICE_ID=your_service_id
 *       VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *       VITE_EMAILJS_PUBLIC_KEY=your_public_key
 * 6. Install EmailJS: npm install @emailjs/browser
 */

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const contactLinks = [
  {
    icon: <FaWhatsapp className="text-2xl" />,
    label: "WhatsApp",
    value: "+91 81408 42405",
    href: "https://wa.me/918140842405?text=Hello Harsh I want more details about your services",
    color: "bg-green-500 hover:bg-green-400",
    external: true,
  },
  {
    icon: <FaPhone className="text-2xl" />,
    label: "Phone",
    value: "+91 81408 42405",
    href: "tel:+918140842405",
    color: "bg-blue-500 hover:bg-blue-400",
    external: false,
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    label: "Email",
    value: "nexawealthpartners@gmail.com",
    href: "mailto:nexawealthpartners@gmail.com",
    color: "bg-red-500 hover:bg-red-400",
    external: false,
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    label: "LinkedIn",
    value: "linkedin.com/in/harshvaidya",
    href: "https://www.linkedin.com/in/harshvaidya",   // ← replace with actual LinkedIn URL
    color: "bg-blue-700 hover:bg-blue-600",
    external: true,
  },
];

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID   || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID  || "YOUR_TEMPLATE_ID",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY   || "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-600 text-xs font-bold tracking-widest uppercase mb-2">
            Reach Out
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-16 bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="h-px w-16 bg-yellow-400/60" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left – contact info */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-black text-gray-900 mb-6">Get in Touch</h3>

            {/* Social / contact buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`${c.color} text-white rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-md`}
                >
                  <div className="flex-shrink-0">{c.icon}</div>
                  <div>
                    <p className="font-bold text-sm">{c.label}</p>
                    <p className="text-white/80 text-xs break-all">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=349-350+Central+Bazar+Gandevi+Road+Navsari+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-gray-50 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-300 rounded-2xl p-5 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-2xl text-red-500 group-hover:text-red-600 transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-yellow-700 transition-colors">
                    Our Office (Click to Open Maps)
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    349-350 Central Bazar,<br />
                    Gandevi Road, Opp. Vidhyakunj School,<br />
                    Navsari, Gujarat – India
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right – email form */}
          <div className="flex-1">
            <div
              className="rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100"
              style={{ background: "linear-gradient(135deg, #0b1e3d 0%, #1a3a6e 100%)" }}
            >
              <h3 className="text-xl font-black text-white mb-6">Send an Enquiry</h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="e.g. Ramesh Patel"
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    Your Enquiry
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us what you need..."
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-200 text-gray-900 font-black py-4 rounded-xl transition-all duration-300 hover:scale-105 text-base"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane /> Send Email to Harsh
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm font-semibold text-center mt-2">
                    ✅ Message sent successfully! Harsh will reply shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm font-semibold text-center mt-2">
                    ❌ Failed to send. Please try WhatsApp or call directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;