import { useState } from "react";
import { FaBuilding, FaHome, FaShieldAlt, FaChartLine, FaUserPlus, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceModal from "./ServiceModal";

const services = [
  {
    icon: <FaUserPlus className="text-4xl text-red-500" />,
    title: "Agent Recruitment",
    desc: "Join our high-performing team and earn ₹50,000/month. We recruit housewives, retired professionals, CAs, businessmen, HNIs and working professionals across India.",
    details: [
 "Earn up to ₹50,000+ monthly",
 "Work from home opportunity",
 "Professional sales training",
 "Flexible working hours",
 "No prior insurance experience required",
 "Career growth opportunities"
],
    color: "from-red-50 to-orange-50",
    border: "border-red-200",
  },
  {
    icon: <FaChartLine className="text-4xl text-purple-500" />,
    title: "Leader Recruitment",
    desc: "Become a learder with Tata AIA and earn ₹1,00,000/month. We recruit leaders from housewives, retired professionals, CAs, businessmen, HNIs and working professionals across India.",
    details: [
 "Leadership role with Tata AIA",
 "Income potential ₹1 Lakh+ monthly",
 "Build and manage your own team",
 "Advanced leadership training",
 "Performance incentives",
 "Long-term career growth"
],
    color: "from-purple-50 to-pink-50",
    border: "border-purple-200",
  },
  {
    icon: <FaBuilding className="text-4xl text-yellow-400" />,
    title: "Business Insurance",
    desc: "Comprehensive coverage tailored for businesses of all sizes. Protect your enterprise from risks with expert-curated Tata AIA solutions crafted for 20+ years of industry knowledge.",
    details: [
 "Protect your business assets",
 "Employee coverage solutions",
 "Risk management support",
 "Customized business plans",
 "Financial security for enterprises",
 "Expert consultation"
],
    color: "from-yellow-50 to-orange-50",
    border: "border-yellow-200",
  },
  {
    icon: <FaHome className="text-4xl text-blue-500" />,
    title: "E-Property",
    desc: "Digital-first property insurance that offers seamless, paperless coverage for your real estate investments - protecting your assets with speed and simplicity.",
    details: [
 "Digital property protection",
 "Paperless process",
 "Quick policy issuance",
 "Secure asset coverage",
 "Convenient management",
 "Affordable plans"
],
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-green-500" />,
    title: "Param Raksha",
    desc: "A robust protection plan ensuring your family's future is shielded from life's uncertainties - giving you the peace of mind you deserve with complete life coverage.",
    details: [
 "Comprehensive life protection",
 "Family financial security",
 "Long-term coverage",
 "Peace of mind",
 "Flexible premium options",
 "Tax benefits"
],
    color: "from-green-50 to-teal-50",
    border: "border-green-200",
  },
  {
    icon: <FaGraduationCap className="text-4xl text-teal-500" />,
    title: "Training & Solutions",
    desc: "End-to-end training programs covering lead generation, ethical selling strategies, online marketing, and leadership development - empowering agents to build a rewarding career.",
    details: [
 "Lead generation training",
 "Digital marketing guidance",
 "Leadership development",
 "Sales mastery programs",
 "Business growth strategies",
 "Ongoing mentorship"
],
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
  },
];


function Services() {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <section
    id="services"
    className="py-16 md:py-24 px-4 sm:px-8 lg:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-600 text-xs font-bold tracking-widest uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-16 bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="h-px w-16 bg-yellow-400/60" />
          </div>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            From life protection to wealth-building plans and career opportunities — we cover everything you need.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group bg-gradient-to-br ${s.color} border ${s.border} rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
              <div className="mb-5">{s.icon}</div>
              <h3 className="text-gray-900 font-black text-xl mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
              <button
  onClick={() => setSelectedService(s)}
  className="
  inline-flex
  items-center
    gap-2
    text-sm
    font-bold
    text-gray-900
    border-b-2
    border-yellow-400
    pb-1
    hover:text-yellow-600
    transition
    "
>
  Get Details →
</button>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="mt-16 rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, #0b1e3d 0%, #1a3a6e 100%)" }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Ready to Secure Your Future?
          </h3>
          <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
            Get a free, no-obligation consultation with Harsh Vaidya today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918141112423?text=Hello Harsh I want more details about your services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <ServiceModal
  service={selectedService}
  onClose={() => setSelectedService(null)}
  />
    </section>
  );
}

export default Services;